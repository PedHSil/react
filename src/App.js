import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Carrosel from './components/carrosel';
import Historia from './components/historia';
import Trabalhos from './components/trabalhos';
import Contato from './components/contato';
import Footer from './components/footer';
import minhaImagem from './img/branco-removebg-preview.png';
import './components/header.css'

function App() {
  return (
    <Router>
      
      
      {/* Menu de Navegação */}

      <header>
            <div className="header">
                <img className="logo" src={minhaImagem} alt="logo" />
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/historia">História</Link></li>
          <li><Link to="/trabalhos">Trabalhos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
        <div class="socialmidia">
          <a href="https://www.instagram.com/gustavozebratattoo/"><img
            width="40"
            height="40"
            src="https://img.icons8.com/material-outlined/24/c8ae6a/instagram-new--v1.png"
            alt="instagram-new--v1"
          /></a>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/c8ae6a/tiktok--v1.png"
            alt="tiktok--v1"
          />
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios/50/c8ae6a/pinterest--v1.png"
            alt="pinterest--v1"
          />
        </div>
      </div>
        </header>
      

      <Routes>
        {/* Definindo as Rotas */}
        <Route path="/" element={<><Carrosel /></>} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/trabalhos" element={<Trabalhos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
