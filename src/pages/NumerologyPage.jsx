import React from 'react';
import { Link } from 'react-router-dom';
import MulankCalculator from '../components/Numerology/MulankCalculator';

const NumerologyPage = () => {
  return (
    <div>
      <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px', color: '#ffd700', textDecoration: 'none', fontSize: '1.1rem', zIndex: 10 }}>
        ← Back to Home
      </Link>
      <MulankCalculator />
    </div>
  );
};

export default NumerologyPage;
