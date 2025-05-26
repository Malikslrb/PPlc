import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">GOATICKET</div>
        <ul className="navbar-links">
          <li><a href="/reserve">Réservations</a></li>
          <li><a href="/signin">Connexion</a></li>
        </ul>
        <a href="/login" className="navbar-logout" onClick={handleLogout}>Déconnexion</a>
      </div>
    </nav>
  );
} 