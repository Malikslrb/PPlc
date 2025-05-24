import React, { useState } from 'react';
import './Signin.css';
import stadiumBg from '../../images/360_F_1016880316_LWFicWYhqXzAiGZOHqoKx7esuF5Jy737.jpg';

export default function Signin() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
    // Simulate API call
    setSuccess('Compte créé avec succès !');
  };

  return (
    <div className="signin-bg" style={{ backgroundImage: `url(${stadiumBg})` }}>
      <div className="signin-container">
        <div className="signin-header">Créer un compte</div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label>Nom complet</label>
          <input
            type="text"
            placeholder="Nom et prénom"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="signin-hint">8 caractères minimum avec des chiffres et lettres</div>
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">S'INSCRIRE</button>
          {error && <div className="signin-error">{error}</div>}
          {success && <div className="signin-success">{success}</div>}
        </form>
        <div className="signin-footer">
          <span>Déjà un compte ? </span>
          <a href="/login">SE CONNECTER</a>
        </div>
      </div>
    </div>
  );
} 