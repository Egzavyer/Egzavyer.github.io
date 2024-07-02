import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Landing from './pages/LandingPage.jsx'

/*import Games from './pages/GamesPage.jsx'
import GameViewer from './pages/GameViewerPage.jsx'
import Community from './pages/CommunityPage.jsx'*/
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Landing />
    </React.StrictMode>,
  </BrowserRouter>
) 
