import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="container">
          <Link to="/" className="brand">Ganteng.dev</Link>
          <nav className="nav-links">
            <Link to="/">Beranda</Link>
            <Link to="/about">Profil</Link>
            <Link to="/portfolio">Proyek</Link>
            <Link to="/contact">Hubungi</Link>
            <Link to="/blog">Catatan</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2025 Ganteng.dev — Dibuat dengan React.js, penuh cinta, dan kopi hitam ☕</p>
      </footer>
    </Router>
  );
}

export default App;
