import axios from 'axios';

const TAVILY_API_KEY = process.env.REACT_APP_TAVILY_API_KEY;
const TAVILY_BASE_URL = 'https://api.tavily.com';

class TavilyService {
  async search(query, options = {}) {
    try {
      const response = await axios.post(`${TAVILY_BASE_URL}/search`, {
        api_key: TAVILY_API_KEY,
        query: query,
        search_depth: options.search_depth || 'basic',
        include_answer: true,
        include_domains: options.include_domains || [],
        exclude_domains: options.exclude_domains || [],
        max_results: options.max_results || 5,
        include_images: options.include_images || false,
        include_raw_content: false
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Tavily API Error:', error.response?.data || error.message);
      throw new Error('Failed to get agricultural insights from Tavily AI');
    }
  }

  async getAgriculturalAdvice(description, cropType, growthStage) {
    const query = this.buildAgriculturalQuery(description, cropType, growthStage);
    
    try {
      const results = await this.search(query, {
        search_depth: 'advanced',
        max_results: 7,
        include_domains: [
          'extension.org',
          'agric.wa.gov.au',
          'agriculture.com',
          'cropscience.org.au',
          'plantdisease.org',
          'ipm.ucanr.edu',
          'agritech.org'
        ]
      });

      return this.parseAgriculturalResults(results);
    } catch (error) {
      console.error('Agricultural advice error:', error);
      throw error;
    }
  }

  buildAgriculturalQuery(description, cropType, growthStage) {
    let query = '';
    
    if (cropType && cropType !== 'Select crop') {
      query += `${cropType} crop `;
    }
    
    if (growthStage && growthStage !== 'Select stage') {
      query += `${growthStage} stage `;
    }
    
    if (description && description.trim()) {
      // Enhance the description with agricultural context
      const symptoms = description.toLowerCase();
      
      if (symptoms.includes('yellow') || symptoms.includes('yellowing')) {
        query += 'leaf yellowing chlorosis nutrient deficiency ';
      }
      if (symptoms.includes('spot') || symptoms.includes('spots')) {
        query += 'leaf spots fungal disease treatment ';
      }
      if (symptoms.includes('wilt') || symptoms.includes('wilting')) {
        query += 'plant wilting water stress disease ';
      }
      if (symptoms.includes('brown') || symptoms.includes('browning')) {
        query += 'browning leaves disease blight ';
      }
      if (symptoms.includes('pest') || symptoms.includes('insect')) {
        query += 'pest control insect management ';
      }
      
      query += `"${description}" `;
    }
    
    query += 'agricultural diagnosis treatment management farming solutions';
    
    return query.trim();
  }

  parseAgriculturalResults(results) {
    if (!results || !results.results || results.results.length === 0) {
      return {
        diagnosis: 'No specific agricultural information found.',
        recommendations: ['Consult with a local agricultural extension service.'],
        sources: []
      };
    }

    const diagnosis = results.answer || 'Agricultural analysis based on search results.';
    
    const recommendations = [];
    const sources = [];

    results.results.forEach((result, index) => {
      if (result.content) {
        // Extract actionable recommendations from content
        const content = result.content.toLowerCase();
        
        if (content.includes('treatment') || content.includes('control') || content.includes('management')) {
          const sentences = result.content.split('.').filter(s => s.length > 20);
          sentences.slice(0, 2).forEach(sentence => {
            if (sentence.toLowerCase().includes('spray') || 
                sentence.toLowerCase().includes('apply') || 
                sentence.toLowerCase().includes('use') ||
                sentence.toLowerCase().includes('treatment') ||
                sentence.toLowerCase().includes('prevent')) {
              recommendations.push(sentence.trim() + '.');
            }
          });
        }
      }
      
      sources.push({
        title: result.title,
        url: result.url,
        snippet: result.content ? result.content.substring(0, 200) + '...' : ''
      });
    });

    // Add general recommendations if none found
    if (recommendations.length === 0) {
      recommendations.push(
        'Monitor crop conditions regularly and document any changes.',
        'Ensure proper irrigation and drainage management.',
        'Consider soil testing to check nutrient levels.',
        'Consult with local agricultural experts for specific treatment options.'
      );
    }

    return {
      diagnosis,
      recommendations: recommendations.slice(0, 5), // Limit to 5 recommendations
      sources: sources.slice(0, 3) // Limit to 3 sources
    };
  }
}

const tavilyServiceInstance = new TavilyService();
export default tavilyServiceInstance;