import React from 'react';
import QRCode from 'qrcode.react';

const Ticket = () => {
  return (
    <div style={styles.body}>
      <div style={styles.logo}>🎟️ GOATICKET</div>
      <div style={styles.ticket}>
        <h2 style={styles.title}>🎫 Reçu de Paiement</h2>
        <div style={styles.ticketInfo}>
          <div style={styles.infoBox}><strong>Nom du Match:</strong><br /> Paris SG vs Real Madrid</div>
          <div style={styles.infoBox}><strong>Date:</strong><br /> 12 Juin 2025</div>
          <div style={styles.infoBox}><strong>Heure:</strong><br /> 20:45</div>
          <div style={styles.infoBox}><strong>Lieu:</strong><br /> Parc des Princes</div>
          <div style={styles.infoBox}><strong>Nom Acheteur:</strong><br /> Malik Silarbi</div>
          <div style={styles.infoBox}><strong>Email:</strong><br /> malik2005@email.com</div>
          <div style={styles.infoBox}><strong>Place:</strong><br /> Tribune Est - Rang B - Siège 24</div>
          <div style={styles.infoBox}><strong>Montant Payé:</strong><br /> 75 €</div>
        </div>
        <div style={styles.qrContainer}>
          <QRCode
            value="GOATICKET - Billet #GOA12345678 - Jean Dupont - Paris SG vs Real Madrid - 12 Juin 2025"
            size={100}
          />
          <small style={styles.qrText}>Code billet #GOA12345678</small>
        </div>
      </div>
      <button style={styles.printButton} onClick={() => window.print()}>Imprimer le Reçu</button>
    </div>
  );
};

const styles = {
  body: {
    background: "linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 1)), url('/UCL18-21_PressKit_KeyVisual_Stadium.jpg') no-repeat center center fixed",
    backgroundSize: 'cover',
    color: '#f8fafc',
    fontFamily: 'Inter, sans-serif',
    padding: '2rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '2rem',
  },
  ticket: {
    background: 'rgba(15, 23, 42, 0.85)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    padding: '2rem',
    maxWidth: '700px',
    width: '100%',
  },
  title: {
    fontSize: '1.75rem',
    color: '#7c3aed',
    marginBottom: '1rem',
  },
  ticketInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  infoBox: {
    flex: '1 1 45%',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1rem',
    borderRadius: '12px',
  },
  qrContainer: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  qrText: {
    display: 'block',
    marginTop: '0.5rem',
  },
  printButton: {
    marginTop: '2rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#7c3aed',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default Ticket; 