import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-text p-10 font-display">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl">Indie Game Hub</Link>
        <div>
          <Link to="/games" className="text-2xl px-5 py-2 rounded hover:bg-secondary">Games</Link>
          <Link to="/community" className="text-2xl px-5 py-2 rounded hover:bg-secondary">Community</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;