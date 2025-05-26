import React from 'react';
import './Games.css';
import Navbar from '../../components/navbar/Navbar';
import barcareal from '../../images/real.jpg';
import spain from '../../images/ger.jpg';
import milan from '../../images/inter.png';
import stade from '../../images/psg.jpg';
import realvsbarca from '../../images/bvb.png';
import b04 from '../../images/b04.jpg';
import manUvsArs from '../../images/manU vs ARS.jpg';
import livVsChe from '../../images/liv vs che.jpg';
import france from '../../images/france.jpg';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: 'Champions League',
    logo: 'https://media.api-sports.io/football/leagues/2.png',
    isUCL: true,
    games: [
      {
        image: barcareal,
        title: 'FC Barcelona vs Real Madrid',
        stadium: 'Metropolitano Stadium, Barcelona',
        date: '2024-04-10',
        time: '20:00',
        price: '120€',
        category: 'Quarter Finals',
        teams: {
          home: 'Barcelona',
          away: 'Real Madrid'
        }
      },
      {
        image: milan,
        title: 'Inter Milan vs AC Milan',
        stadium: 'San Siro, Milan',
        date: '2024-04-11',
        time: '20:00',
        price: '100€',
        category: 'Quarter Finals',
        teams: {
          home: 'Inter',
          away: 'Milan'
        }
      },
      {
        image: stade,
        title: 'Manchester City vs PSG',
        stadium: 'Etihad Stadium, Manchester',
        date: '2024-04-12',
        time: '20:00',
        price: '110€',
        category: 'Quarter Finals',
        teams: {
          home: 'Man City',
          away: 'PSG'
        }
      },
    ],
  },
  {
    title: 'International',
    logo: 'https://media.api-sports.io/football/leagues/1.png',
    isUCL: false,
    games: [
      {
        image: spain,
        title: 'Spain vs Allemagne',
        stadium: 'Stade de France, Saint Denis',
        date: '2024-03-25',
        time: '20:45',
        price: '80€',
        category: 'Friendly',
        teams: {
          home: 'Spain',
          away: 'Germany'
        }
      },
      {
        image: france,
        title: 'France vs Italy',
        stadium: 'Allianz Riviera, Nice',
        date: '2024-03-26',
        time: '20:45',
        price: '75€',
        category: 'Friendly',
        teams: {
          home: 'France',
          away: 'Italy'
        }
      },
    ],
  },
  {
    title: 'Premier League',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    isUCL: false,
    games: [
      {
        image: livVsChe,
        title: 'Liverpool vs Chelsea',
        stadium: 'Anfield, Liverpool',
        date: '2024-03-30',
        time: '17:30',
        price: '65€',
        category: 'Matchday 30',
        teams: {
          home: 'Liverpool',
          away: 'Chelsea'
        }
      },
      {
        image: manUvsArs,
        title: 'Manchester United vs Arsenal',
        stadium: 'Old Trafford, Manchester',
        date: '2024-03-31',
        time: '16:00',
        price: '70€',
        category: 'Matchday 30',
        teams: {
          home: 'Man United',
          away: 'Arsenal'
        }
      },
    ],
  },
  {
    title: 'Bundesliga',
    logo: 'https://media.api-sports.io/football/leagues/78.png',
    isUCL: false,
    games: [
      {
        image: realvsbarca,
        title: 'Bayern Munich vs Borussia Dortmund',
        stadium: 'Allianz Arena, Munich',
        date: '2024-03-30',
        time: '18:30',
        price: '85€',
        category: 'Der Klassiker',
        teams: {
          home: 'Bayern',
          away: 'Dortmund'
        }
      },
      {
        image: b04,
        title: 'RB Leipzig vs Bayer Leverkusen',
        stadium: 'Red Bull Arena, Leipzig',
        date: '2024-03-31',
        time: '15:30',
        price: '60€',
        category: 'Matchday 27',
        teams: {
          home: 'Leipzig',
          away: 'Leverkusen'
        }
      },
    ],
  },
];

export default function Games() {
  const navigate = useNavigate();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

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
                    <div className={`game-card-header ${section.isUCL ? 'ucl-header' : ''}`}>
                      <img src={section.logo} alt={section.title} className="game-card-league-logo" />
                      <span className={`game-card-league-name ${section.isUCL ? 'ucl-name' : ''}`}>{section.title}</span>
                    </div>
                    
                    <div className="game-card-match-info">
                      <div className="game-card-teams">
                        <span className="team home">{game.teams.home}</span>
                        <span className="vs">vs</span>
                        <span className="team away">{game.teams.away}</span>
                      </div>
                      <div className="game-card-category">{game.category}</div>
                    </div>

                    <div className="game-card-details">
                      <div className="game-card-stadium">
                        <i className="icon-stadium">🏟️</i>
                        {game.stadium}
                      </div>
                      <div className="game-card-datetime">
                        <i className="icon-calendar">📅</i>
                        {formatDate(game.date)} • {game.time}
                      </div>
                      <div className="game-card-price">
                        <i className="icon-ticket">🎫</i>
                        À partir de {game.price}
                      </div>
                    </div>

                    <button className="game-card-btn" onClick={() => navigate('/reserve', { state: { ...game, league: section.title } })}>
                      Réserver
                    </button>
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