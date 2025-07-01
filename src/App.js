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
          <h1 className="brand">Mas Ganteng</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">Tentang</Link>
            <Link to="/portfolio">Karya</Link>
            <Link to="/contact">Kontak</Link>
            <Link to="/blog">Tulisan</Link>
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
        <p>© 2025 Portofolio Mas Ganteng. Dibangun dengan React & ❤️</p>
      </footer>
    </Router>
  );
}

export default App;
