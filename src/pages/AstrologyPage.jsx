import React from 'react';
import { Link } from 'react-router-dom';
import RashiCalculator from '../components/Astrology/RashiCalculator';

const AstrologyPage = () => {
  return (
    <div>
      <Link to="/" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: '#9d50bb',
        textDecoration: 'none',
        fontSize: '1.1rem',
        zIndex: 10
      }}>
        ← Back to Home
      </Link>
      <RashiCalculator />
    </div>
  );
};

export default AstrologyPage;
