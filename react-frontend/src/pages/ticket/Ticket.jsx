import React from 'react';

import './Ticket.css';
import { useNavigate, useLocation } from 'react-router-dom';
import stadiumBg from '../../images/360_F_1016880316_LWFicWYhqXzAiGZOHqoKx7esuF5Jy737.jpg';
import qr from '../../images/qr.png';

const Ticket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ticket = location.state || {};
  return (
    <div className="games-bg">
      <button
        className="ticket-back-btn-custom"
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
      <div className="ticket-logo" style={{textAlign:'left',marginLeft:'2.5rem',marginTop:'0'}}>🎟️ GOATICKET</div>
      <div className="ticket-main">
        <h2 className="ticket-title">🎫 Reçu de Paiement</h2>
        <div className="ticket-info">
          <div className="ticket-info-box"><strong>Nom du Match:</strong><br /> {ticket.teams ? `${ticket.teams.home} vs ${ticket.teams.away}` : '-'}</div>
          <div className="ticket-info-box"><strong>Date:</strong><br /> {ticket.date || '-'}</div>
          <div className="ticket-info-box"><strong>Heure:</strong><br /> {ticket.time || '-'}</div>
          <div className="ticket-info-box"><strong>Lieu:</strong><br /> {ticket.stadium || '-'}</div>
          <div className="ticket-info-box"><strong>Section:</strong><br /> {ticket.section || '-'}</div>
          <div className="ticket-info-box"><strong>Place:</strong><br /> {ticket.seat || '-'}</div>
          <div className="ticket-info-box"><strong>Montant Payé:</strong><br /> {ticket.price ? `${ticket.price} €` : '-'} </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.7rem',marginTop:'1.2rem'}}>
          <img src={qr} alt="QR Code" style={{height:'64px',width:'64px',objectFit:'contain',borderRadius:'8px',boxShadow:'0 2px 8px #7c3aed22'}} />
          <small className="ticket-qr-text">Code billet #GOA12345678</small>
        </div>
      </div>
      <button className="ticket-print-btn" onClick={() => window.print()}>Imprimer le Reçu</button>
      <button
        className="games-top-btn"
        style={{
          position: 'absolute',
          top: 28,
          right: 38,
          zIndex: 20,
          background: 'linear-gradient(90deg,#7c3aed 0%,#a259fa 100%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.08rem',
          border: 'none',
          borderRadius: '12px',
          padding: '0.7rem 2.1rem',
          boxShadow: '0 4px 16px #7c3aed44',
          cursor: 'pointer',
          letterSpacing: '1px',
          transition: 'background 0.18s, color 0.18s, box-shadow 0.18s',
        }}
        onClick={() => navigate('/games')}
      >Games</button>
    </div>
  );
};

export default Ticket; 