import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('token', data.token);
        if (onLogin) onLogin();
        window.location.href = '/';
      } else {
        setError("Nom d'utilisateur ou mot de passe incorrect.");
      }
    } catch {
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        {error && <div className="error">{error}</div>}
      </form>
      <style>{`
        .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; }
        .login-form { background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); width: 300px; }
        .login-form h2 { text-align: center; margin-bottom: 1rem; }
        .login-form input { width: 100%; margin-bottom: 1rem; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; }
        .login-form button { width: 100%; padding: 0.5rem; border-radius: 4px; background: #007bff; color: #fff; border: none; }
        .error { color: #c00; text-align: center; margin-top: 1rem; }
      `}</style>
    </div>
  );
} 