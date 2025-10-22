import React, { useState } from 'react';
import { calculateMulank, getNumberTraits } from '../utils/numerologyCalculations';
import './CompatibilityPage.css';

const CompatibilityPage = () => {
  const [person1, setPerson1] = useState({ name: '', dob: '' });
  const [person2, setPerson2] = useState({ name: '', dob: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const mulank1 = calculateMulank(person1.dob);
      const mulank2 = calculateMulank(person2.dob);

      const compatibility = calculateCompatibility(mulank1, mulank2);
      const traits1 = getNumberTraits(mulank1);
      const traits2 = getNumberTraits(mulank2);

      setResult({
        person1: { name: person1.name, mulank: mulank1, traits: traits1 },
        person2: { name: person2.name, mulank: mulank2, traits: traits2 },
        compatibility
      });
      setLoading(false);
    }, 1000);
  };

  const calculateCompatibility = (num1, num2) => {
    const compatibilityMatrix = {
      '1-1': { score: 60, message: 'Both are natural leaders. Power struggles may occur, but mutual respect can create a strong partnership.', advice: 'Learn to share the spotlight and make decisions together.' },
      '1-2': { score: 85, message: 'Excellent match! The leader (1) and supporter (2) complement each other perfectly.', advice: 'Number 1 should appreciate 2\'s emotional support, while 2 should embrace 1\'s confidence.' },
      '1-3': { score: 90, message: 'Great compatibility! Both are creative, ambitious, and inspiring to each other.', advice: 'Channel your combined energy into shared creative projects.' },
      '1-4': { score: 55, message: 'Challenging match. Number 1 seeks freedom while 4 prefers stability and routine.', advice: 'Find balance between spontaneity and planning. Respect each other\'s approach.' },
      '1-5': { score: 80, message: 'Good match! Both love freedom, adventure, and new experiences.', advice: 'Give each other space while maintaining emotional connection.' },
      '1-6': { score: 70, message: 'Balanced relationship. 1 brings leadership while 6 brings harmony and love.', advice: 'Number 1 should be more nurturing, 6 should be more independent.' },
      '1-7': { score: 45, message: 'Difficult match. Very different life priorities - action vs. contemplation.', advice: 'Appreciate your differences. 1 can learn depth from 7, and 7 can learn action from 1.' },
      '1-8': { score: 50, message: 'Power struggle likely. Both want control and authority.', advice: 'Define separate domains of authority and respect boundaries.' },
      '1-9': { score: 95, message: 'Excellent! Both are passionate, driven leaders with humanitarian goals.', advice: 'Use your combined strength to make positive impact together.' },
      
      '2-2': { score: 75, message: 'Emotional and understanding relationship. May lack direction at times.', advice: 'One partner should take more initiative in decision-making.' },
      '2-3': { score: 80, message: 'Beautiful match! Emotional depth (2) meets creativity and joy (3).', advice: 'Number 3 should be more sensitive, 2 should embrace 3\'s optimism.' },
      '2-4': { score: 85, message: 'Very good! Emotional support (2) meets stability and security (4).', advice: 'Build a secure, loving home together with clear communication.' },
      '2-5': { score: 60, message: 'Moderate compatibility. 2 seeks security while 5 loves freedom and change.', advice: 'Find compromise between stability and adventure.' },
      '2-6': { score: 90, message: 'Perfect match! Both are nurturing, loving, and family-oriented.', advice: 'Create a beautiful, harmonious home together.' },
      '2-7': { score: 88, message: 'Excellent! Emotional (2) and spiritual (7) create deep connection.', advice: 'Share your inner worlds and grow spiritually together.' },
      '2-8': { score: 40, message: 'Challenging. Very different emotional needs - sensitivity vs. ambition.', advice: 'Number 8 needs to be more emotionally available, 2 needs to be stronger.' },
      '2-9': { score: 70, message: 'Good match with understanding and patience from both sides.', advice: 'Support each other\'s compassionate nature and humanitarian goals.' },
      
      '3-3': { score: 85, message: 'Fun and creative! Great social life and mutual inspiration.', advice: 'Balance fun with practical responsibilities.' },
      '3-4': { score: 50, message: 'Challenging. Creativity and joy (3) vs. discipline and routine (4).', advice: 'Respect differences. 3 adds fun to 4\'s life, 4 adds stability to 3\'s life.' },
      '3-5': { score: 92, message: 'Excellent! Both love adventure, variety, and social connections.', advice: 'Build a life full of experiences and adventures together.' },
      '3-6': { score: 88, message: 'Beautiful! Creative (3) and loving (6) make harmonious partnership.', advice: 'Create art, beauty, and joy together.' },
      '3-7': { score: 55, message: 'Different wavelengths. Social butterfly (3) and hermit (7).', advice: 'Give each other space. 3 needs socializing, 7 needs solitude.' },
      '3-8': { score: 45, message: 'Difficult. Joy and optimism (3) vs. seriousness and ambition (8).', advice: 'Number 8 should lighten up, 3 should be more practical.' },
      '3-9': { score: 90, message: 'Great match! Both are optimistic, generous, and inspiring.', advice: 'Use your combined creativity for humanitarian causes.' },
      
      '4-4': { score: 70, message: 'Stable but may lack excitement. Very reliable and secure.', advice: 'Introduce spontaneity and fun into your routine.' },
      '4-5': { score: 35, message: 'Very challenging. Routine and stability (4) vs. freedom and change (5).', advice: 'Major compromise needed. Define areas of freedom and stability.' },
      '4-6': { score: 80, message: 'Good match! Stability (4) and love (6) create secure home.', advice: 'Build a beautiful, stable family life together.' },
      '4-7': { score: 82, message: 'Excellent! Both value depth, commitment, and long-term planning.', advice: 'Combine practical skills with spiritual wisdom.' },
      '4-8': { score: 75, message: 'Good match! Both hardworking, disciplined, and ambitious.', advice: 'Remember to relax and enjoy life beyond work.' },
      '4-9': { score: 55, message: 'Moderate. Different approaches - practical vs. idealistic.', advice: 'Ground 9\'s idealism with 4\'s practicality.' },
      
      '5-5': { score: 78, message: 'Exciting but potentially unstable. Lots of adventure and fun!', advice: 'Build some stability and routine together.' },
      '5-6': { score: 75, message: 'Good with balance. Freedom-loving (5) meets homebody (6).', advice: 'Respect each other\'s needs for adventure and stability.' },
      '5-7': { score: 50, message: 'Challenging. Very different priorities - action vs. contemplation.', advice: 'Learn from each other\'s perspectives without forcing change.' },
      '5-8': { score: 40, message: 'Difficult. Freedom (5) vs. discipline and control (8).', advice: 'Number 8 should allow freedom, 5 should respect commitments.' },
      '5-9': { score: 85, message: 'Great! Both love freedom, adventure, and helping others.', advice: 'Travel and explore the world together.' },
      
      '6-6': { score: 88, message: 'Perfect! Loving, harmonious, and family-focused relationship.', advice: 'Create a beautiful sanctuary together but maintain individual interests.' },
      '6-7': { score: 60, message: 'Moderate. Love and nurturing (6) vs. detachment and solitude (7).', advice: 'Number 6 should give space, 7 should show more affection.' },
      '6-8': { score: 55, message: 'Challenging. Love and family (6) vs. work and ambition (8).', advice: 'Number 8 needs work-life balance, 6 needs to be less demanding.' },
      '6-9': { score: 92, message: 'Excellent! Both are loving, compassionate, and giving.', advice: 'Create a loving home while serving the community together.' },
      
      '7-7': { score: 80, message: 'Deep spiritual connection. May lack practicality and social life.', advice: 'Balance spiritual pursuits with worldly responsibilities.' },
      '7-8': { score: 48, message: 'Difficult. Spirituality and detachment (7) vs. materialism (8).', advice: 'Find middle ground between spiritual and material goals.' },
      '7-9': { score: 75, message: 'Good! Spiritual (7) and humanitarian (9) understanding.', advice: 'Combine spiritual wisdom with compassionate action.' },
      
      '8-8': { score: 65, message: 'Strong but challenging. Both want control and authority.', advice: 'Define separate areas of responsibility and respect each other.' },
      '8-9': { score: 58, message: 'Moderate. Ambition and control (8) vs. compassion and letting go (9).', advice: 'Balance material success with humanitarian values.' },
      
      '9-9': { score: 85, message: 'Excellent! Passionate, humanitarian, and inspiring together.', advice: 'Channel your combined compassion into meaningful causes.' }
    };

    const key = num1 <= num2 ? `${num1}-${num2}` : `${num2}-${num1}`;
    return compatibilityMatrix[key] || { score: 50, message: 'Average compatibility. Understanding needed.', advice: 'Work on communication and mutual respect.' };
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#ff9800';
    return '#f44336';
  };

  const getScoreLabel = (score) => {
    if (score >= 85) return 'Excellent Match';
    if (score >= 70) return 'Good Match';
    if (score >= 50) return 'Moderate Match';
    return 'Challenging Match';
  };

  return (
    <div className="compatibility-container">
      <div className="compatibility-card">
        <h2>Ì≤ï Compatibility Calculator Ì≤ï</h2>
        <p>Discover how compatible you are based on numerology</p>

        <form onSubmit={handleCalculate}>
          <div className="person-inputs">
            <div className="person-section">
              <h3>Ì±§ Person 1</h3>
              <input
                type="text"
                placeholder="Enter name"
                value={person1.name}
                onChange={(e) => setPerson1({...person1, name: e.target.value})}
                required
              />
              <input
                type="date"
                value={person1.dob}
                onChange={(e) => setPerson1({...person1, dob: e.target.value})}
                max={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="heart-divider">‚ù§Ô∏è</div>

            <div className="person-section">
              <h3>Ì±§ Person 2</h3>
              <input
                type="text"
                placeholder="Enter name"
                value={person2.name}
                onChange={(e) => setPerson2({...person2, name: e.target.value})}
                required
              />
              <input
                type="date"
                value={person2.dob}
                onChange={(e) => setPerson2({...person2, dob: e.target.value})}
                max={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          <button type="submit" className="check-btn" disabled={loading}>
            {loading ? '‚è≥ Calculating...' : 'Ì¥Æ Check Compatibility'}
          </button>
        </form>

        {loading && (
          <div className="loading-animation">
            <div className="spinner"></div>
            <p>Analyzing cosmic connection...</p>
          </div>
        )}

        {result && !loading && (
          <div className="compatibility-result">
            <div className="score-section">
              <div className="score-circle" style={{borderColor: getScoreColor(result.compatibility.score)}}>
                <span className="score-number" style={{color: getScoreColor(result.compatibility.score)}}>{result.compatibility.score}%</span>
                <span className="score-label" style={{color: getScoreColor(result.compatibility.score)}}>{getScoreLabel(result.compatibility.score)}</span>
              </div>
              <p className="compatibility-message">{result.compatibility.message}</p>
              <div className="advice-box">
                <h4>Ì≤° Advice for Your Relationship:</h4>
                <p>{result.compatibility.advice}</p>
              </div>
            </div>

            <div className="persons-comparison">
              <div className="person-result">
                <h4>{result.person1.name}</h4>
                <p className="mulank-display">Mulank: {result.person1.mulank}</p>
                <p><strong>Planet:</strong> {result.person1.traits.planet}</p>
                <p><strong>Traits:</strong> {result.person1.traits.traits}</p>
                <p><strong>Lucky Color:</strong> {result.person1.traits.luckyColor}</p>
              </div>

              <div className="person-result">
                <h4>{result.person2.name}</h4>
                <p className="mulank-display">Mulank: {result.person2.mulank}</p>
                <p><strong>Planet:</strong> {result.person2.traits.planet}</p>
                <p><strong>Traits:</strong> {result.person2.traits.traits}</p>
                <p><strong>Lucky Color:</strong> {result.person2.traits.luckyColor}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompatibilityPage;
