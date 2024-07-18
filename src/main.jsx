import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Landing from './pages/LandingPage.jsx'
import SignUp from './pages/SignUpPage.jsx'
import LogIn from './pages/LoginPage.jsx'
import Profile from './pages/ProfilePage.jsx'
import Games from './pages/GamesPage.jsx'
import GameViewer from './pages/GameViewerPage.jsx'
import Community from './pages/CommunityPage.jsx'
import Footer from './components/Footer.jsx';
import './index.css'

const gamesEN = [
  {
    title: "Neon Noir",
    description: "Delve into a neo-noir detective story in a rain-drenched cyberpunk metropolis. Make tough choices, and fight for justice in this point-and-click adventure.",
    genre: "Action, Adventure",
    image: "../src/assets/Games/NeonNoir.jpg",
    platform: "Windows",
    developer: "CyberCode Studios",
    releaseDate: "2023-10-15",
    score: 85,
    reviewsCount: 1280
  },
  {
    title: "Oddwing",
    description: "Embrace your imperfections! Help a lovable creature with mismatched wings overcome the odds and soar through a world that celebrates individuality.",
    genre: "Platformer, Adventure",
    image: "../src/assets/Games/Oddwing.jpg",
    platform: "Web",
    developer: "Quirky Quest",
    releaseDate: "2024-02-20",
    score: 92,
    reviewsCount: 850
  },
  {
    title: "Whispering Pines",
    description: "Find solace in the tranquility of nature. Build a cozy life in a charming cottage nestled within a whispering pine forest. Tend your garden, and uncover the secrets of the woods at your own pace.",
    genre: "Adventure, Simulation",
    image: "../src/assets/Games/WhisperingPines.jpg",
    platform: "Playstation",
    developer: "Forest Dreams",
    releaseDate: "2023-12-05",
    score: 88,
    reviewsCount: 1075
  },
  {
    title: "Shelled City",
    description: "Explore a charming city that thrives on the back of a colossal, wandering turtle! Uncover its secrets and befriend its quirky inhabitants.",
    genre: "Simulation, Adventure",
    image: "../src/assets/Games/ShelledCity.jpg",
    platform: "MacOS",
    developer: "Turtle Ventures",
    releaseDate: "2024-01-18",
    score: 80,
    reviewsCount: 640
  },
  {
    title: "Kitchen Chaos",
    description: "It's culinary carnage! Prepare for kitchen mayhem in this frantic side-scrolling action game. Slice, dice, and cook your way through hordes of hungry ingredients to conquer the culinary chaos.",
    genre: "Action, Arcade",
    image: "../src/assets/Games/KitchenChaos.jpg",
    platform: "Web",
    developer: "Chaos Kitchen Co.",
    releaseDate: "2023-11-10",
    score: 75,
    reviewsCount: 720
  },
  {
    title: "Constellation",
    description: "Teamwork is key in this cooperative puzzle game! Communicate effectively and solve mind-bending puzzles as a crew of astronauts on a thrilling mission through the cosmos.",
    genre: "Puzzle, CO-OP",
    image: "../src/assets/Games/Constellation.jpg",
    platform: "Xbox",
    developer: "Cosmic Games",
    releaseDate: "2024-03-25",
    score: 90,
    reviewsCount: 930
  },
  {
    title: "Song Weaver",
    description: "Craft melodies with moonlight! Explore a world bathed in ethereal light, befriend fantastical creatures, solve melodic puzzles, and restore balance to a world out of tune.",
    genre: "Puzzle, Adventure",
    image: "../src/assets/Games/SongWeaver.jpg",
    platform: "Switch",
    developer: "Melody Makers",
    releaseDate: "2023-09-22",
    score: 87,
    reviewsCount: 1050
  },
  {
    title: "Chroma Shift",
    description: "Paint the universe in this zero-gravity action-puzzler! Solve colorful challenges and navigate treacherous landscapes in a race against time.",
    genre: "Action, Puzzle",
    image: "../src/assets/Games/ChromaShift.jpg",
    platform: "Playstation",
    developer: "Colorful Studios",
    releaseDate: "2024-05-30",
    score: 83,
    reviewsCount: 790
  },
  {
    title: "Purrfect Flight",
    description: "Take to the skies as a jetpack-wearing feline adventurer! Explore a jungle, discover hidden treasures, and outsmart adorable creatures in this purrfectly delightful platformer.",
    genre: "Casual, Platformer",
    image: "../src/assets/Games/PurrfectFlight.jpg",
    platform: "Windows",
    developer: "CatVentures",
    releaseDate: "2024-06-12",
    score: 89,
    reviewsCount: 870
  }
];

const gamesFR = [
  {
    title: "Neon Noir",
    description: "Plongez dans une histoire de détective néo-noir dans une métropole cyberpunk trempée de pluie. Faites des choix difficiles et luttez pour la justice dans cette aventure point-and-click.",
    genre: "Action, Aventure",
    image: "../src/assets/Games/NeonNoir.jpg",
    platform: "Windows",
    developer: "CyberCode Studios",
    releaseDate: "2023-10-15",
    score: 85,
    reviewsCount: 1280
  },
  {
    title: "Oddwing",
    description: "Acceptez vos imperfections! Aidez une créature adorable aux ailes dépareillées à surmonter les obstacles et à voler dans un monde qui célèbre l'individualité.",
    genre: "Plateforme, Aventure",
    image: "../src/assets/Games/Oddwing.jpg",
    platform: "Web",
    developer: "Quirky Quest",
    releaseDate: "2024-02-20",
    score: 92,
    reviewsCount: 850
  },
  {
    title: "Whispering Pines",
    description: "Trouvez du réconfort dans la tranquillité de la nature. Construisez une vie douillette dans un charmant cottage niché dans une forêt de pins chuchotants. Entretenez votre jardin et découvrez les secrets des bois à votre propre rythme.",
    genre: "Aventure, Simulation",
    image: "../src/assets/Games/WhisperingPines.jpg",
    platform: "Playstation",
    developer: "Forest Dreams",
    releaseDate: "2023-12-05",
    score: 88,
    reviewsCount: 1075
  },
  {
    title: "Shelled City",
    description: "Explorez une charmante ville qui prospère sur le dos d'une tortue colossale et errante! Découvrez ses secrets et liez-vous d'amitié avec ses habitants excentriques.",
    genre: "Simulation, Aventure",
    image: "../src/assets/Games/ShelledCity.jpg",
    platform: "MacOS",
    developer: "Turtle Ventures",
    releaseDate: "2024-01-18",
    score: 80,
    reviewsCount: 640
  },
  {
    title: "Kitchen Chaos",
    description: "C'est le carnage culinaire! Préparez-vous pour le chaos dans la cuisine dans ce jeu d'action frénétique à défilement latéral. Tranchez, coupez en dés et cuisinez pour conquérir le chaos culinaire.",
    genre: "Action, Arcade",
    image: "../src/assets/Games/KitchenChaos.jpg",
    platform: "Web",
    developer: "Chaos Kitchen Co.",
    releaseDate: "2023-11-10",
    score: 75,
    reviewsCount: 720
  },
  {
    title: "Constellation",
    description: "Le travail d'équipe est essentiel dans ce jeu de puzzle coopératif! Communiquez efficacement et résolvez des puzzles complexes en tant qu'équipage d'astronautes en mission à travers le cosmos.",
    genre: "Puzzle, CO-OP",
    image: "../src/assets/Games/Constellation.jpg",
    platform: "Xbox",
    developer: "Cosmic Games",
    releaseDate: "2024-03-25",
    score: 90,
    reviewsCount: 930
  },
  {
    title: "Song Weaver",
    description: "Créez des mélodies avec la lumière de la lune! Explorez un monde baigné de lumière éthérée, liez-vous d'amitié avec des créatures fantastiques, résolvez des puzzles mélodiques et rétablissez l'équilibre dans un monde désaccordé.",
    genre: "Puzzle, Aventure",
    image: "../src/assets/Games/SongWeaver.jpg",
    platform: "Switch",
    developer: "Melody Makers",
    releaseDate: "2023-09-22",
    score: 87,
    reviewsCount: 1050
  },
  {
    title: "Chroma Shift",
    description: "Peignez l'univers dans ce jeu d'action-puzzle en apesanteur! Résolvez des défis colorés et naviguez dans des paysages traîtres dans une course contre la montre.",
    genre: "Action, Puzzle",
    image: "../src/assets/Games/ChromaShift.jpg",
    platform: "Playstation",
    developer: "Colorful Studios",
    releaseDate: "2024-05-30",
    score: 83,
    reviewsCount: 790
  },
  {
    title: "Purrfect Flight",
    description: "Prenez votre envol en tant qu'aventurier félin équipé d'un jetpack! Explorez une jungle, découvrez des trésors cachés et déjouez des créatures adorables dans ce jeu de plateforme parfaitement délicieux.",
    genre: "Casual, Plateforme",
    image: "../src/assets/Games/PurrfectFlight.jpg",
    platform: "Windows",
    developer: "CatVentures",
    releaseDate: "2024-06-12",
    score: 89,
    reviewsCount: 870
  }
];


function App() {
  const [language, setLanguage] = useState('en');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userEvents, setUserEvents] = useState([{ id: 1, title: "Game Launch Party", startDate: "2024-03-25" },
  { id: 2, title: "Online Tournament", startDate: "2023-09-22" }]);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <Navbar language={language} setLanguage={setLanguage} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} username={username} setUsername={setUsername} />
        <Routes>
          <Route path="/" element={<Landing language={language} />} />
          <Route path='/signup' element={<SignUp language={language} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          <Route path='/login' element={<LogIn language={language} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          <Route path='/profile' element={<Profile language={language} isAuthenticated={isAuthenticated} username={username} userEvents={userEvents} />} />
          <Route path="/games" element={<Games language={language} />} />
          <Route path="/games/:title" element={<GameViewer language={language} games={language === 'en' ? gamesEN : gamesFR} />} />
          <Route path="/community" element={<Community language={language} username={username} setUserEvents={setUserEvents} />} />

        </Routes>
        <Footer language={language} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
