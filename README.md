# 🎬 AnimeDeck

> **A blazing-fast, modern anime discovery platform built with React + Vite**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)](https://vitejs.dev)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap)](https://getbootstrap.com)
[![License](https://img.shields.io/badge/License-MIT-green)]()

---

## ✨ Features

- 🔍 **Advanced Search** - Search anime titles with real-time filtering
- 📺 **Current Season** - Discover anime currently airing this season
- 🎯 **Upcoming Anime** - Stay updated with upcoming anime releases
- 📖 **Detailed Pages** - Rich anime information including synopsis, ratings, episodes, and more
- ⚡ **Lightning Fast** - Built with Vite for instant load times and HMR
- 🎨 **Modern Design** - Clean, intuitive interface with Bootstrap 5
- 🔗 **Client-side Routing** - Smooth navigation with React Router

---

## 📸 Quick Overview

AnimeDeck provides anime fans with an elegant way to browse, search, and discover their favorite anime series. The app fetches real-time data from the **Jikan API** (unofficial MyAnimeList API) to deliver up-to-date information about trending and upcoming anime.

### Key Sections:
- **Home** - Browse upcoming anime with pagination
- **Airing** - View currently airing anime in the current season
- **Search** - Find any anime by title
- **Details** - Comprehensive anime information pages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library for building interactive components |
| **Vite 7** | Lightning-fast frontend build tool with HMR |
| **React Router v7** | Client-side routing and navigation |
| **Bootstrap 5** | Responsive CSS framework |
| **Jikan API** | Real-time anime data from MyAnimeList |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Fakhrul-Hakimy/AnimeDeck.git
cd AnimeDeck

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
AnimeDeck/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── navbar.jsx        # Navigation bar with search
│   │   ├── hero.jsx          # Hero section
│   │   ├── sidebar.jsx       # Sidebar navigation
│   │   ├── content.jsx       # Main content area with pagination
│   │   ├── anime.jsx         # Detailed anime page
│   │   ├── airing.jsx        # Currently airing anime
│   │   ├── search.jsx        # Search results page
│   │   ├── card.jsx          # Anime card component
│   │   ├── upcomingAnime.jsx # Upcoming anime display
│   │   └── footer.jsx        # Footer section
│   ├── assets/               # Images and logos
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App styling
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

---

## 🎯 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production (creates dist folder)
npm run build

# Lint the codebase
npm run lint

# Preview production build locally
npm run preview
```

---

## 🔌 API Integration

AnimeDeck uses the **Jikan API** (https://jikan.moe) for anime data:

### Endpoints Used:
- `GET /v4/seasons/upcoming` - Upcoming anime
- `GET /v4/seasons/now` - Currently airing anime
- `GET /v4/anime/{id}/full` - Detailed anime information
- `GET /v4/anime?query={searchTerm}` - Anime search

> **Note:** Jikan is an unofficial API. No API key is required, but please respect rate limits.

---

## 🎨 Component Architecture

### Page Routes
- `/` - Home (upcoming anime)
- `/airing` - Currently airing anime
- `/anime/:id` - Detailed anime page
- `/search/:searchString` - Search results

### Key Components
- **Navbar** - Search bar and navigation
- **Sidebar** - Additional navigation options
- **Content** - Main content display with pagination
- **Card** - Reusable anime card component
- **Anime** - Full anime details page

---

## 📝 Dependencies

### Production
```json
{
  "bootstrap": "^5.3.8",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.10.1"
}
```

### Development
```json
{
  "vite": "^7.2.2",
  "@vitejs/plugin-react": "^5.1.0",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24"
}
```



## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙋 Support

If you encounter any issues or have suggestions:
- Open an issue on GitHub
- Check existing issues for similar problems
- Provide detailed information about the problem

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [Jikan API Documentation](https://docs.api.jikan.moe)

---

**Made by Fakhrul-Hakimy**
