import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
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
    <div className="login-split-bg">
      <div className="login-split-container">
        <div className="login-split-left">
          <div className="login-split-logo">Nucleus</div>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="login visual" className="login-split-img" />
          <div className="login-split-quote">
            <div className="login-split-quote-text">“Simply all the tools that my team and I need.”</div>
            <div className="login-split-quote-author">Karen Yue<br /><span>Director of Digital Marketing Technology</span></div>
          </div>
        </div>
        <div className="login-split-right">
          <form onSubmit={handleSubmit} className="login-split-form">
            <h2>Welcome back to Nucleus</h2>
            <div className="login-split-desc">Build your design system effortlessly with our powerful component library.</div>
            <label className="login-split-label">Email</label>
            <input
              type="email"
              placeholder="alex.jordan@gmail.com"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="login-split-input"
              autoComplete="username"
            />
            <label className="login-split-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="login-split-input"
              autoComplete="current-password"
            />
            <div className="login-split-row">
              <a href="#" className="login-split-link">Forgot password?</a>
              <label className="login-split-remember">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
                <span className="login-split-switch"></span>
                <span className="login-split-remember-text">Remember sign in details</span>
              </label>
            </div>
            <button type="submit" className="login-split-btn">Log in</button>
            {error && <div className="login-split-error">{error}</div>}
            <div className="login-split-or">OR</div>
            <button type="button" className="login-split-google">
              <span className="login-split-google-icon">G</span> Continue with Google
            </button>
            <div className="login-split-signup">Don't have an account? <a href="#" className="login-split-link">Sign up</a></div>
          </form>
        </div>
      </div>
      <style>{`
        .login-split-bg {
          min-height: 100vh;
          background: #f3f4f8;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-split-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          display: flex;
          width: 900px;
          max-width: 98vw;
          min-height: 600px;
          overflow: hidden;
        }
        .login-split-left {
          background: #fff;
          width: 40%;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 2.5rem 1.5rem 1.5rem 1.5rem;
          position: relative;
        }
        .login-split-logo {
          font-weight: bold;
          font-size: 1.3rem;
          color: #222;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }
        .login-split-img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          margin-bottom: 2rem;
        }
        .login-split-quote {
          margin-top: auto;
          text-align: left;
        }
        .login-split-quote-text {
          font-size: 1.1rem;
          font-weight: 500;
          color: #222;
          margin-bottom: 0.5rem;
        }
        .login-split-quote-author {
          font-size: 0.95rem;
          color: #666;
        }
        .login-split-quote-author span {
          font-size: 0.85rem;
          color: #aaa;
        }
        .login-split-right {
          width: 60%;
          min-width: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 2.5rem 2.5rem 2rem;
        }
        .login-split-form {
          width: 100%;
          max-width: 350px;
          display: flex;
          flex-direction: column;
        }
        .login-split-form h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #222;
        }
        .login-split-desc {
          color: #888;
          font-size: 1rem;
          margin-bottom: 2rem;
        }
        .login-split-label {
          font-size: 1rem;
          color: #444;
          margin-bottom: 0.2rem;
          margin-top: 1rem;
        }
        .login-split-input {
          width: 100%;
          padding: 0.9rem 1rem;
          border-radius: 8px;
          border: 2px solid #e0e0e0;
          font-size: 1.1rem;
          background: #f8f9fa;
          color: #222;
          margin-bottom: 0.5rem;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .login-split-input:focus {
          outline: none;
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px #7c3aed33;
          background: #fff;
        }
        .login-split-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }
        .login-split-link {
          color: #7c3aed;
          text-decoration: none;
          font-size: 0.98rem;
          font-weight: 500;
        }
        .login-split-link:hover {
          text-decoration: underline;
        }
        .login-split-remember {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }
        .login-split-switch {
          width: 36px;
          height: 20px;
          background: #e0e0e0;
          border-radius: 10px;
          margin: 0 8px 0 0;
          position: relative;
          transition: background 0.2s;
        }
        .login-split-remember input[type="checkbox"] {
          display: none;
        }
        .login-split-remember input[type="checkbox"]:checked + .login-split-switch {
          background: #7c3aed;
        }
        .login-split-switch:after {
          content: '';
          position: absolute;
          left: 2px;
          top: 2px;
          width: 16px;
          height: 16px;
          background: #fff;
          border-radius: 50%;
          transition: left 0.2s;
        }
        .login-split-remember input[type="checkbox"]:checked + .login-split-switch:after {
          left: 18px;
        }
        .login-split-remember-text {
          font-size: 0.98rem;
          color: #555;
        }
        .login-split-btn {
          width: 100%;
          padding: 0.95rem;
          border-radius: 8px;
          background: #7c3aed;
          color: #fff;
          border: none;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 1.2rem;
          margin-top: 0.2rem;
          transition: background 0.2s;
        }
        .login-split-btn:hover {
          background: #5b21b6;
        }
        .login-split-error {
          color: #fff;
          background: #dc3545;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          margin-bottom: 1rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .login-split-or {
          text-align: center;
          color: #aaa;
          margin: 0.5rem 0 1rem 0;
          font-size: 0.95rem;
          font-weight: 500;
        }
        .login-split-google {
          width: 100%;
          padding: 0.85rem;
          border-radius: 8px;
          background: #fff;
          color: #222;
          border: 1.5px solid #e0e0e0;
          font-size: 1.05rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          transition: background 0.2s, border-color 0.2s;
        }
        .login-split-google:hover {
          background: #f3f4f8;
          border-color: #7c3aed;
        }
        .login-split-google-icon {
          font-size: 1.3rem;
          margin-right: 0.7rem;
          color: #ea4335;
          font-weight: bold;
          font-family: Arial, sans-serif;
        }
        .login-split-signup {
          text-align: center;
          color: #888;
          font-size: 0.98rem;
        }
        .login-split-signup a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 500;
        }
        .login-split-signup a:hover {
          text-decoration: underline;
        }
        @media (max-width: 900px) {
          .login-split-container {
            flex-direction: column;
            min-height: 0;
            width: 98vw;
          }
          .login-split-left, .login-split-right {
            width: 100%;
            min-width: 0;
            padding: 2rem 1rem;
          }
          .login-split-img {
            max-height: 200px;
            object-fit: cover;
          }
        }
        @media (max-width: 600px) {
          .login-split-form {
            max-width: 98vw;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
} 