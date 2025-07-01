import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold" to="/">Ganteng.dev</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Beranda</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Profil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portfolio">Proyek</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Hubungi</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Catatan</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      <footer className="bg-light text-center py-4 mt-5">
        <hr />
        <p className="mb-0 text-muted">© 2025 Ganteng.dev — Dibuat dengan React.js, penuh cinta, dan kopi hitam ☕</p>
      </footer>
    </Router>
  );
}

export default App;
