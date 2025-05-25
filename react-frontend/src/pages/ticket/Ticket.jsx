import React from 'react';

import './Ticket.css';
import { useNavigate } from 'react-router-dom';
import stadiumBg from '../../images/360_F_1016880316_LWFicWYhqXzAiGZOHqoKx7esuF5Jy737.jpg';

const Ticket = () => {
  const navigate = useNavigate();
  return (
    <div className="ticket-bg" style={{ backgroundImage: `url(${stadiumBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button
        onClick={() => navigate('/paiement')}
        style={{
          position: 'absolute',
          left: 30,
          top: 30,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          background: 'linear-gradient(90deg,#fff 60%,#f6f6fa 100%)',
          color: '#5b3ec8',
          border: '1.5px solid #ece9f7',
          borderRadius: 12,
          padding: '0.55rem 1.4rem',
          fontWeight: 'bold',
          fontSize: '1.08rem',
          boxShadow: '0 2px 12px #a259fa22',
          cursor: 'pointer',
          transition: 'background 0.18s, color 0.18s, box-shadow 0.18s',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg,#a259fa22 0%,#fff 100%)';
          e.currentTarget.style.color = '#7c3aed';
          e.currentTarget.style.boxShadow = '0 4px 16px #a259fa44';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg,#fff 60%,#f6f6fa 100%)';
          e.currentTarget.style.color = '#5b3ec8';
          e.currentTarget.style.boxShadow = '0 2px 12px #a259fa22';
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
          <path d="M13.5 17L8 11L13.5 5" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Retour
      </button>
      <div className="ticket-logo">🎟️ GOATICKET</div>
      <div className="ticket-main">
        <h2 className="ticket-title">🎫 Reçu de Paiement</h2>
        <div className="ticket-info">
          <div className="ticket-info-box"><strong>Nom du Match:</strong><br /> Paris SG vs Real Madrid</div>
          <div className="ticket-info-box"><strong>Date:</strong><br /> 12 Juin 2025</div>
          <div className="ticket-info-box"><strong>Heure:</strong><br /> 20:45</div>
          <div className="ticket-info-box"><strong>Lieu:</strong><br /> Parc des Princes</div>
          <div className="ticket-info-box"><strong>Nom Acheteur:</strong><br /> Malik Silarbi</div>
          <div className="ticket-info-box"><strong>Email:</strong><br /> malik2005@email.com</div>
          <div className="ticket-info-box"><strong>Place:</strong><br /> Tribune Est - Rang B - Siège 24</div>
          <div className="ticket-info-box"><strong>Montant Payé:</strong><br /> 75 €</div>
        
          
          <small className="ticket-qr-text">Code billet #GOA12345678</small>
        </div>
      </div>
      <button className="ticket-print-btn" onClick={() => window.print()}>Imprimer le Reçu</button>
    </div>
  );
};

export default Ticket; 