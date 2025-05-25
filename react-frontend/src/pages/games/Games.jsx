import React from 'react';
import './Games.css';
import Navbar from '../../components/navbar/Navbar';
import barcareal from '../../images/barcareal.jpg';
import spain from '../../images/spain.jpg';
import milan from '../../images/milan.jpg';
import stade from '../../images/stade.jpg';
import realvsbarca from '../../images/realvsbarca.jpg';

const sections = [
  {
    title: 'Champions League',
    games: [
      {
        image: barcareal,
        title: 'FC Barcelona vs Real Madrid',
        stadium: 'Metropolitano Stadium, Barcelona',
      },
      {
        image: milan,
        title: 'Inter Milan vs AC Milan',
        stadium: 'San Siro, Milan',
      },
      {
        image: stade,
        title: 'Manchester City vs PSG',
        stadium: 'Etihad Stadium, Manchester',
      },
    ],
  },
  {
    title: 'International',
    games: [
      {
        image: spain,
        title: 'Spain vs Allemagne',
        stadium: 'Stade de France, Saint Denis',
      },
      {
        image: realvsbarca,
        title: 'France vs Italy',
        stadium: 'Allianz Riviera, Nice',
      },
    ],
  },
  {
    title: 'Premier League',
    games: [
      {
        image: stade,
        title: 'Liverpool vs Chelsea',
        stadium: 'Anfield, Liverpool',
      },
      {
        image: milan,
        title: 'Manchester United vs Arsenal',
        stadium: 'Old Trafford, Manchester',
      },
    ],
  },
  {
    title: 'Bundesliga',
    games: [
      {
        image: realvsbarca,
        title: 'Bayern Munich vs Borussia Dortmund',
        stadium: 'Allianz Arena, Munich',
      },
      {
        image: stade,
        title: 'RB Leipzig vs Bayer Leverkusen',
        stadium: 'Red Bull Arena, Leipzig',
      },
    ],
  },
];

export default function Games() {
  return (
    <div className="games-bg">
      <Navbar />
      <div className="games-content">
        {sections.map(section => (
          <div key={section.title} className="games-section">
            <h2 className="games-section-title">{section.title}</h2>
            <div className="games-grid">
              {section.games.map(game => (
                <div key={game.title} className="game-card">
                  <img src={game.image} alt={game.title} className="game-card-img" />
                  <div className="game-card-info">
                    <div className="game-card-title">{game.title}</div>
                    <div className="game-card-stadium">{game.stadium}</div>
                    <button className="game-card-btn">Réserver</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 