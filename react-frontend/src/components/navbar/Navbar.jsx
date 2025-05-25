import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GOATICKET</div>
      <ul className="navbar-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/reserve">Réservations</a></li>
        <li><a href="/signin">Connexion</a></li>
      </ul>
    </nav>
  );
} 