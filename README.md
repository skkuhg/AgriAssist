# AgriAssist - AI-Powered Field Scouting Application

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Tavily AI](https://img.shields.io/badge/Tavily%20AI-Integration-green.svg)](https://tavily.com/)

AgriAssist is a modern React.js application designed to help farmers with AI-powered field scouting and crop disease detection. The application integrates with Tavily AI to provide intelligent agricultural recommendations based on crop observations.

## 🌟 Features

- **Intelligent Crop Analysis**: Describe crop symptoms and get AI-powered diagnosis
- **Crop-Specific Guidance**: Support for various crops (Corn, Soybeans, Wheat, Cotton, Rice, etc.)
- **Growth Stage Awareness**: Tailored advice based on crop development stage
- **Image Upload Support**: Upload up to 3 crop photos for enhanced analysis
- **Real-time AI Insights**: Powered by Tavily AI for accurate agricultural recommendations
- **Responsive Design**: Beautiful, mobile-friendly interface with Tailwind CSS
- **Source Citations**: Direct links to credible agricultural sources

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Tavily AI API key ([Get one here](https://tavily.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/skkuhg/AgriAssist.git
   cd AgriAssist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Tavily AI API key:
   ```env
   REACT_APP_TAVILY_API_KEY=your_tavily_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open the application**
   
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Technology Stack

- **Frontend**: React.js 18.2.0 with functional components and hooks
- **Styling**: Tailwind CSS for responsive design
- **AI Integration**: Tavily AI API for agricultural search and recommendations
- **HTTP Client**: Axios for API communication
- **Build Tool**: Create React App

## 📱 Usage

1. **Describe Your Observations**: Enter details about what you're seeing in your crops
2. **Select Crop Type**: Choose from the dropdown of supported crops
3. **Specify Growth Stage**: Select the current development stage of your crop
4. **Upload Photos** (Optional): Add up to 3 images of the affected crops
5. **Get AI Diagnosis**: Click the analysis button to receive intelligent recommendations

## 🔧 API Integration

AgriAssist leverages the Tavily AI API to provide:

- **Smart Query Construction**: Automatically builds agricultural search queries
- **Domain-Specific Search**: Targets trusted agricultural sources
- **Intelligent Parsing**: Extracts actionable recommendations from search results
- **Source Attribution**: Provides links to original research and guidance

### Supported Agricultural Domains

- extension.org
- agriculture.com
- cropscience.org.au
- plantdisease.org
- ipm.ucanr.edu
- agritech.org

## 🏗️ Project Structure

```
AgriAssist/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
├── src/
│   ├── App.js              # Main application component
│   ├── tavilyService.js    # Tavily AI API integration
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
└── README.md              # Project documentation
```

## 🌱 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

- Use React functional components with hooks
- Follow agricultural terminology and best practices
- Maintain responsive design principles
- Ensure accessibility and user-friendly interfaces
- Keep API calls efficient and handle errors gracefully

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/skkuhg/AgriAssist/issues) on GitHub.

## 🙏 Acknowledgments

- [Tavily AI](https://tavily.com/) for providing intelligent search capabilities
- [React](https://reactjs.org/) for the awesome frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for beautiful, responsive styling
- Agricultural extension services and research institutions for their valuable resources

---

**Made with ❤️ for farmers and agricultural professionals**