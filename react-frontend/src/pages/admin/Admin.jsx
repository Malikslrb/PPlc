import React from 'react';
import './Admin.css';
import AdminNavbar from '../../components/navbar/AdminNavbar';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <AdminNavbar />
      <div className="admin-content">
        <h1>Administration</h1>
        <div className="admin-actions">
          <div className="admin-card" onClick={() => navigate('/create-game')}>
            <div className="admin-card-icon">⚽</div>
            <div className="admin-card-content">
              <h3>Créer un match</h3>
              <p>Ajouter un nouveau match à l'événement</p>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-icon">🎫</div>
            <div className="admin-card-content">
              <h3>Gérer les réservations</h3>
              <p>Voir et gérer toutes les réservations</p>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-icon">👥</div>
            <div className="admin-card-content">
              <h3>Gérer les utilisateurs</h3>
              <p>Gérer les comptes utilisateurs</p>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-icon">⚙️</div>
            <div className="admin-card-content">
              <h3>Paramètres</h3>
              <p>Configurer les paramètres du site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 