import React from 'react';
import './Admin.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  return (
    <div className="admin-bg">
      <Navbar />
      <div className="admin-content">
        <div className="admin-card">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-welcome">Bienvenue sur le tableau de bord administrateur.</p>
          <button className="admin-create-btn" onClick={() => navigate('/create-game')}>
            Créer un match
          </button>
          <div className="admin-section">
            <h2>Actions administrateur</h2>
            <ul>
              <li>Gérer les matchs</li>
              <li>Gérer les réservations</li>
              <li>Gérer les utilisateurs</li>
              <li>Voir les statistiques</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 