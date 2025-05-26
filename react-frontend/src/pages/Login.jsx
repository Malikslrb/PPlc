import React, { useState } from 'react';
import './Login.css';
import stadiumBg from '../images/360_F_1016880316_LWFicWYhqXzAiGZOHqoKx7esuF5Jy737.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email , password }),
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('token', data.token);
        if (onLogin) onLogin();
        if (data.role === 'client') {
          navigate('/games');
        } else if (data.role === 'administrateur') {
          navigate('/admin');
        } else {
          setError("Rôle inconnu. Contactez l'administrateur.");
        }
      } else {
        setError("Email ou mot de passe incorrect.");
      }
    } catch {
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${stadiumBg})` }}>
      <div className="login-container">
        <h2 className="login-title">Welcome to GOATICKET</h2>
        <div className="login-desc" style={{marginBottom: '1.2rem', color: '#b3b3b3', fontSize: '1.08rem', textAlign: 'center'}}>
          Gérez facilement vos réservations et achats de billets pour tous les grands matchs de football. GOATICKET vous permet de consulter les rencontres à venir, réserver vos places, payer en ligne et recevoir vos tickets instantanément. Simple, rapide et sécurisé pour tous les passionnés de sport !
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Email</label>
          <input
            type="email"
            placeholder="malik.silarbi@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="login-input"
            autoComplete="email"
          />
          <label className="login-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="login-input"
            autoComplete="current-password"
          />
          <div className="login-row">
            <a href="#" className="login-link">Forgot password?</a>
            <label className="login-remember">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
              <span className="login-remember-text">Remember sign in details</span>
            </label>
          </div>
          <button type="submit" className="login-btn">Log in</button>
          {error && <div className="login-error">{error}</div>}
          <div className="login-or">OR</div>
          <button type="button" className="login-google">
            <span className="login-google-icon">G</span> Continue with Google
          </button>
          <div className="login-signup">Don't have an account? <Link to="/signin" className="login-link">Sign up</Link></div>
        </form>
      </div>
    </div>
  );
} 