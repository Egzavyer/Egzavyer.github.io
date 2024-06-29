function Navbar() {
    return (
      <nav className="bg-primary text-text p-10 font-display">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl">Indie Game Hub</a>
          <div>
            <a href="/services" className="text-2xl px-5 py-2 rounded hover:bg-secondary">Games</a>
            <a href="/contact" className="text-2xl px-5 py-2 rounded hover:bg-secondary">Community</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;