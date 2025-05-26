import React from 'react';
import './AdminNavbar.css';
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-left">
        <div className="admin-navbar-logo">
          <span className="admin-badge">ADMIN</span>
          GOATICKET
        </div>
        <ul className="admin-navbar-links">
          <li>
            <a href="/admin">
              <i className="icon-dashboard">📊</i>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/matches">
              <i className="icon-matches">⚽</i>
              Matches
            </a>
          </li>
          <li>
            <a href="/admin/users">
              <i className="icon-users">👥</i>
              Utilisateurs
            </a>
          </li>
          <li>
            <a href="/admin/reservations">
              <i className="icon-reservations">🎫</i>
              Réservations
            </a>
          </li>
        </ul>
      </div>
      <div className="admin-navbar-right">
        <div className="admin-profile">
          <span className="admin-name">Admin</span>
          <div className="admin-avatar">👤</div>
        </div>
        <a href="/login" className="admin-logout" onClick={handleLogout}>
          <i className="icon-logout">🚪</i>
          Déconnexion
        </a>
      </div>
    </nav>
  );
} 