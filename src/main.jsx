import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Landing from './pages/LandingPage.jsx'
import Games from './pages/GamesPage.jsx'
import GameViewer from './pages/GameViewerPage.jsx'
import Community from './pages/CommunityPage.jsx'
import Footer from './components/Footer.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" component={GameViewer} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
) 
