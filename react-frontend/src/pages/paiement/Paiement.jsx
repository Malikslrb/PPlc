import React, { useState } from 'react';
import './Paiement.css';
import { useNavigate, useLocation } from 'react-router-dom';
import stadiumBg from '../../images/360_F_1016880316_LWFicWYhqXzAiGZOHqoKx7esuF5Jy737.jpg';

const paymentIcons = {
  card: <span className="icon-card">💳</span>,
  paypal: <span className="icon-paypal"><svg width="24" height="24" viewBox="0 0 24 24"><g><rect fill="#fff" x="0" y="0" width="24" height="24" rx="6"/><path d="M7.5 17.5l1.2-8.5h3.8c2.2 0 3.5 1.1 3.1 3.1-.3 1.6-1.6 2.4-3.2 2.4h-1.2l-.3 2.1c-.1.5-.5.9-1 .9H7.5z" fill="#009cde"/><path d="M15.5 8.5c.7.5 1.1 1.3.9 2.2-.3 1.6-1.6 2.4-3.2 2.4h-1.2l-.3 2.1c-.1.5-.5.9-1 .9H7.5l1.2-8.5h3.8c1.1 0 2 .3 2.5.9z" fill="#003087"/></g></svg></span>,
  edahabia: <span className="icon-edahabia"><svg width="24" height="24" viewBox="0 0 24 24"><g><rect fill="#fff" x="0" y="0" width="24" height="24" rx="6"/><path d="M6 8h12v8H6z" fill="#ffb300"/><rect x="8" y="10" width="8" height="4" rx="1" fill="#fff"/></g></svg></span>
};

function isValidEmail(email) {
  // Simple regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatEdahabiaNumber(value) {
  // Permet 0 en premier, puis 5/6/7, puis 8 chiffres, groupes de 2
  let v = value.replace(/\D/g, '');
  if (v.length === 0) return '';
  if (v[0] !== '0') return '';
  if (v.length === 1) return '0';
  if (!['5','6','7'].includes(v[1])) return '0';
  v = v.slice(0, 10);
  return v.replace(/(\d{2})/g, '$1 ').trim();
}

export default function Paiement() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  // PayPal
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paypalEmailTouched, setPaypalEmailTouched] = useState(false);
  // Edahabia
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);
  // Submitting state
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { section, seat, price } = location.state || {};

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  // Format card number: 1234 5678 9012 3456
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    value = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(value);
  };

  // Format expiry: MM/YY, only allow valid months
  const handleCardExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 3) {
      let month = value.slice(0, 2);
      if (parseInt(month, 10) > 12) month = '12';
      value = month + '/' + value.slice(2);
    }
    setCardExpiry(value);
  };

  // CVC: 3 digits only
  const handleCardCvcChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCardCvc(value);
  };

  // PayPal email handler
  const handlePaypalEmailChange = (e) => {
    setPaypalEmail(e.target.value);
    setPaypalEmailTouched(true);
  };

  // Edahabia handler
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(formatEdahabiaNumber(e.target.value));
    setPhoneTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert('Paiement en cours de traitement...');
    }, 1200);
  };

  return (
    <div className="payment-bg" style={{ backgroundImage: `url(${stadiumBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button
        onClick={()=>navigate('/reserve')}
        style={{
          position:'absolute',
          left:30,
          top:30,
          zIndex:10,
          display:'flex',
          alignItems:'center',
          gap:'0.7rem',
          background:'linear-gradient(90deg,#fff 60%,#f6f6fa 100%)',
          color:'#5b3ec8',
          border:'1.5px solid #ece9f7',
          borderRadius:12,
          padding:'0.55rem 1.4rem',
          fontWeight:'bold',
          fontSize:'1.08rem',
          boxShadow:'0 2px 12px #a259fa22',
          cursor:'pointer',
          transition:'background 0.18s, color 0.18s, box-shadow 0.18s',
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
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:6}}>
          <path d="M13.5 17L8 11L13.5 5" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Retour
      </button>
      <div className="payment-logo" style={{display:'flex',alignItems:'center',gap:'0.7rem',fontWeight:'bold',fontSize:'2.2rem',letterSpacing:'2px'}}>
        {/* SVG ticket jaune/orangé inspiré de l'image */}
        <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
          <rect x="1.5" y="3.5" width="35" height="17" rx="4" fill="#fff" stroke="#fff" strokeWidth="2"/>
          <rect x="7" y="8" width="24" height="7" rx="2" fill="#fff" stroke="#fff" strokeWidth="1.2"/>
          <rect x="11.5" y="10" width="5" height="3" rx="1" fill="#fff"/>
          <rect x="21.5" y="10" width="5" height="3" rx="1" fill="#fff"/>
        </svg>
        <span style={{color:'#fff',textShadow:'0 2px 8px #0008',fontWeight:'bold',letterSpacing:'1.5px'}}>GOATICKET</span>
      </div>
      <div className="payment-card modern wider">
        <div className="payment-title-row">
          <div className="payment-title">Confirmation de réservation</div>
          <div className="pay-card-icons pay-card-icons-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="pay-card-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="pay-card-icon" />
            <img src="https://ebourse.dz/wp-content/uploads/2017/10/ap.jpg" alt="Stripe" className="pay-card-icon stripe" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-methods-label">Choisissez votre mode de paiement</div>
          <div className="payment-methods-btns">
            <button type="button" className={`pay-btn${selectedPayment === 'card' ? ' selected' : ''}`} onClick={() => handlePaymentSelect('card')}>
              {paymentIcons.card}
              Carte Bancaire
            </button>
            <button type="button" className={`pay-btn${selectedPayment === 'paypal' ? ' selected' : ''}`} onClick={() => handlePaymentSelect('paypal')}>
              {paymentIcons.paypal}
              PayPal
            </button>
            <button type="button" className={`pay-btn${selectedPayment === 'edahabia' ? ' selected' : ''}`} onClick={() => handlePaymentSelect('edahabia')}>
              {paymentIcons.edahabia}
              Edahabia
            </button>
          </div>

          {/* Card Form */}
          {selectedPayment === 'card' && (
            <div className="pay-form-section">
              <label>Card number</label>
              <input
                type="text"
                className="pay-input"
                placeholder="1264 1234 1234 1234"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
                required
              />
              <div className="pay-row">
                <div className="pay-col">
                  <label>Expiry</label>
                  <input
                    type="text"
                    className="pay-input"
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={handleCardExpiryChange}
                    maxLength={5}
                    required
                  />
                </div>
                <div className="pay-col">
                  <label>CVC</label>
                  <input
                    type="text"
                    className="pay-input"
                    placeholder="CVC"
                    value={cardCvc}
                    onChange={handleCardCvcChange}
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* PayPal Form */}
          {selectedPayment === 'paypal' && (
            <div className="pay-form-section">
              <label>Email PayPal</label>
              <input
                type="email"
                className="pay-input"
                placeholder="votre@email.com"
                value={paypalEmail}
                onChange={handlePaypalEmailChange}
                required
                style={{borderColor: paypalEmailTouched && !isValidEmail(paypalEmail) ? '#ff4d4f' : undefined, background: paypalEmailTouched && !isValidEmail(paypalEmail) ? '#fff0f0' : undefined}}
              />
              {paypalEmailTouched && !isValidEmail(paypalEmail) && (
                <div style={{color:'#ff4d4f',fontSize:'0.98em',marginTop:4}}>Adresse email invalide</div>
              )}
            </div>
          )}

          {/* Edahabia Form */}
          {selectedPayment === 'edahabia' && (
            <div className="pay-form-section">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                className="pay-input"
                placeholder="05 XX XX XX XX"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                pattern="^0[567](?: \d{2}){4}$"
                style={{borderColor: phoneTouched && phoneNumber.length !== 14 ? '#ff4d4f' : undefined, background: phoneTouched && phoneNumber.length !== 14 ? '#fff0f0' : undefined}}
              />
              {phoneTouched && phoneNumber.length !== 14 && (
                <div style={{color:'#ff4d4f',fontSize:'0.98em',marginTop:4}}>Numéro invalide (doit commencer par 05, 06 ou 07 et contenir 10 chiffres)</div>
              )}
            </div>
          )}

          {/* Infos ticket juste avant le bouton de confirmation */}
          <div className="payment-total-box" style={{flexDirection:'row',justifyContent:'space-between',gap:24,marginTop:18,marginBottom:10}}>
            <span role="img" aria-label="ticket" style={{fontSize:'1.6rem'}}>🎫</span>
            <span>{price ? `Montant total à payer : ${price} €` : 'Aucune place sélectionnée'}</span>
            {(section || seat) && (
              <span className="payment-recap-inline" style={{background:'#f6f6fa',borderRadius:8,padding:'0.5rem 1.1rem',color:'#5b3ec8',fontWeight:500,marginLeft:10,display:'flex',gap:10,alignItems:'center',boxShadow:'0 2px 8px #5b3ec822'}}>
                <span>Section : <b>{section || '-'}</b></span>
                <span>Place : <b>{seat || '-'}</b></span>
              </span>
            )}
          </div>
          <button
            type="submit"
            className="confirm-pay-btn"
            disabled={submitting ||
              (selectedPayment === 'card' && (!cardNumber || !cardExpiry || !cardCvc)) ||
              (selectedPayment === 'paypal' && !paypalEmail) ||
              (selectedPayment === 'edahabia' && !phoneNumber)
            }
          >
            {submitting ? 'Paiement...' : 'Confirmer et Payer'}
          </button>
        </form>
      </div>
    </div>
  );
} 