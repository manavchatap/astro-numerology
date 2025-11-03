import React, { useState } from 'react';
import './NameNumerologyPage.css';

const NameNumerologyPage = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateNameNumber = (fullName) => {
    const letterValues = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;
    let calculation = [];

    for (let char of cleanName) {
      const value = letterValues[char];
      sum += value;
      calculation.push(`${char}(${value})`);
    }

    // Reduce to single digit
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      const digits = sum.toString().split('');
      sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return { number: sum, calculation: calculation.join(' + '), total: sum };
  };

  const getNameNumberTraits = (number) => {
    const traits = {
      1: {
        title: 'The Leader',
        personality: 'You have a strong, independent personality with natural leadership abilities. Your name radiates confidence, innovation, and pioneering spirit. People see you as authoritative and capable.',
        strengths: 'Leadership, Independence, Confidence, Innovation, Courage, Determination',
        challenges: 'Can be domineering, stubborn, or overly aggressive. May struggle with teamwork.',
        career: 'Executive positions, Entrepreneurship, Politics, Innovation, Management',
        relationships: 'You need a partner who respects your independence while providing emotional support.',
        colors: 'Red, Orange, Gold',
        compatibility: 'Best with 2, 3, 9'
      },
      2: {
        title: 'The Diplomat',
        personality: 'Your name suggests a gentle, cooperative, and intuitive nature. You are a natural peacemaker with strong emotional intelligence and diplomatic skills.',
        strengths: 'Diplomacy, Cooperation, Intuition, Empathy, Patience, Harmony',
        challenges: 'Oversensitivity, indecisiveness, dependency on others. May avoid confrontation.',
        career: 'Counseling, Mediation, Healthcare, Arts, HR, Social Work',
        relationships: 'You seek harmony and deep emotional connection. Need supportive partners.',
        colors: 'White, Cream, Light Blue',
        compatibility: 'Best with 1, 4, 7'
      },
      3: {
        title: 'The Creative Communicator',
        personality: 'Your name vibrates with creativity, expression, and joy. You are naturally optimistic, social, and have excellent communication skills.',
        strengths: 'Creativity, Communication, Optimism, Social Skills, Artistic Talent, Enthusiasm',
        challenges: 'Scattered energy, superficiality, over-indulgence. May lack focus.',
        career: 'Arts, Writing, Teaching, Entertainment, Marketing, Public Speaking',
        relationships: 'You need intellectual stimulation and variety. Fun-loving partner required.',
        colors: 'Yellow, Orange, Pink',
        compatibility: 'Best with 1, 5, 6'
      },
      4: {
        title: 'The Builder',
        personality: 'Your name represents stability, discipline, and hard work. You are practical, reliable, and build strong foundations in everything you do.',
        strengths: 'Discipline, Reliability, Hard Work, Organization, Practicality, Loyalty',
        challenges: 'Rigidity, stubbornness, resistance to change. May be overly serious.',
        career: 'Engineering, Architecture, Management, Accounting, Construction, Administration',
        relationships: 'You seek stability and commitment. Need patient, understanding partners.',
        colors: 'Green, Brown, Earthy tones',
        compatibility: 'Best with 2, 6, 8'
      },
      5: {
        title: 'The Freedom Seeker',
        personality: 'Your name energy is all about freedom, adventure, and versatility. You are dynamic, curious, and love change and new experiences.',
        strengths: 'Adaptability, Communication, Curiosity, Freedom-loving, Versatility, Charm',
        challenges: 'Restlessness, inconsistency, impulsiveness. May avoid commitment.',
        career: 'Travel, Sales, Marketing, Media, Entrepreneurship, Communication',
        relationships: 'You need freedom and variety. Partner must be adventurous and flexible.',
        colors: 'Turquoise, Light Green, Silver',
        compatibility: 'Best with 1, 3, 7'
      },
      6: {
        title: 'The Nurturer',
        personality: 'Your name carries loving, nurturing, and harmonious vibrations. You are responsible, caring, and create beauty wherever you go.',
        strengths: 'Nurturing, Responsibility, Harmony, Creativity, Compassion, Family-oriented',
        challenges: 'Perfectionism, interference, self-sacrifice. May be controlling.',
        career: 'Healthcare, Teaching, Counseling, Design, Hospitality, Family Business',
        relationships: 'You seek harmony and commitment. Need appreciation and emotional security.',
        colors: 'Pink, Blue, Rose',
        compatibility: 'Best with 2, 3, 9'
      },
      7: {
        title: 'The Seeker',
        personality: 'Your name resonates with wisdom, spirituality, and analytical thinking. You are introspective, intuitive, and seek deeper truths.',
        strengths: 'Wisdom, Spirituality, Analysis, Intuition, Independence, Research ability',
        challenges: 'Isolation, skepticism, emotional distance. May be overly critical.',
        career: 'Research, Spirituality, Science, Psychology, Writing, Investigation',
        relationships: 'You need intellectual and spiritual connection. Partner must respect solitude.',
        colors: 'Purple, Violet, White',
        compatibility: 'Best with 2, 4, 9'
      },
      8: {
        title: 'The Powerhouse',
        personality: 'Your name carries powerful energy of ambition, success, and material achievement. You are authoritative, efficient, and goal-oriented.',
        strengths: 'Ambition, Leadership, Financial acumen, Efficiency, Confidence, Authority',
        challenges: 'Materialism, workaholism, domineering nature. May neglect emotions.',
        career: 'Business, Finance, Law, Real Estate, Executive Management, Politics',
        relationships: 'You seek successful, ambitious partners. Need balance between work and love.',
        colors: 'Black, Purple, Dark Blue',
        compatibility: 'Best with 2, 4, 6'
      },
      9: {
        title: 'The Humanitarian',
        personality: 'Your name vibrates with compassion, idealism, and universal love. You are generous, artistic, and dedicated to serving humanity.',
        strengths: 'Compassion, Generosity, Idealism, Artistic talent, Wisdom, Universal love',
        challenges: 'Over-idealistic, emotional, scattered. May have martyr complex.',
        career: 'Social Work, Arts, Healing, Teaching, Charity, Counseling',
        relationships: 'You need spiritual connection and shared values. Seek compassionate partners.',
        colors: 'Gold, Red, Maroon',
        compatibility: 'Best with 1, 6, 9'
      },
      11: {
        title: 'The Master Illuminator',
        personality: 'Master Number! Your name carries highly spiritual and intuitive energy. You are a natural teacher, healer, and inspirational figure.',
        strengths: 'Intuition, Inspiration, Spiritual awareness, Vision, Sensitivity, Teaching',
        challenges: 'High sensitivity, nervous energy, impracticality. May feel misunderstood.',
        career: 'Spiritual Teaching, Counseling, Arts, Healing, Motivational Speaking',
        relationships: 'You need spiritually aware partners who understand your sensitivity.',
        colors: 'Silver, White, Gold',
        compatibility: 'Best with 2, 6, 9'
      },
      22: {
        title: 'The Master Builder',
        personality: 'Master Number! Your name combines practical skills with visionary thinking. You can turn dreams into reality on a grand scale.',
        strengths: 'Visionary, Practical wisdom, Large-scale thinking, Leadership, Building',
        challenges: 'Pressure, high expectations, perfectionism. May feel overwhelmed.',
        career: 'Architecture, Large Organizations, International Business, Engineering',
        relationships: 'You need grounded, supportive partners who share your vision.',
        colors: 'Royal Blue, Gold',
        compatibility: 'Best with 4, 6, 8'
      },
      33: {
        title: 'The Master Teacher',
        personality: 'Master Number! Your name carries the highest vibration of love, compassion, and service. You are here to uplift and heal humanity.',
        strengths: 'Unconditional love, Healing, Teaching, Compassion, Spiritual mastery',
        challenges: 'Self-sacrifice, emotional burden, high responsibility. May neglect self.',
        career: 'Healing Professions, Teaching, Spiritual Leadership, Humanitarian Work',
        relationships: 'You need partners who understand your mission and support your service.',
        colors: 'Emerald Green, Gold',
        compatibility: 'Best with 6, 9, 11'
      }
    };

    return traits[number] || traits[1];
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your full name');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const calculated = calculateNameNumber(name);
      const traits = getNameNumberTraits(calculated.number);

      setResult({
        name: name,
        number: calculated.number,
        calculation: calculated.calculation,
        traits: traits
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="name-numerology-container">
      <div className="name-numerology-card">
        <h2> Name Numerology Calculator </h2>
        <p>Discover what your name reveals about your personality and destiny</p>

        <form onSubmit={handleCalculate}>
          <div className="input-group">
            <label htmlFor="name">Enter Your Full Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., John Michael Smith"
              required
            />
            <small>Use your most commonly used name for accurate results</small>
          </div>

          <button type="submit" className="calculate-btn" disabled={loading}>
            {loading ? '⏳ Calculating...' : '✨ Calculate Name Number'}
          </button>
        </form>

        {loading && (
          <div className="loading-animation">
            <div className="spinner"></div>
            <p>Analyzing your name vibrations...</p>
          </div>
        )}

        {result && !loading && (
          <div className="name-result">
            <div className="result-header">
              <h3> Your Name Analysis</h3>
              <p className="analyzed-name">{result.name}</p>
            </div>

            <div className="calculation-box">
              <h4> Calculation:</h4>
              <p className="calculation-steps">{result.calculation}</p>
              <p className="calculation-result">Name Number = <strong>{result.number}</strong></p>
            </div>

            <div className="traits-section">
              <div className="number-badge">{result.number}</div>
              <h3>{result.traits.title}</h3>

              <div className="trait-card">
                <h4> Personality</h4>
                <p>{result.traits.personality}</p>
              </div>

              <div className="trait-card">
                <h4> Strengths</h4>
                <p>{result.traits.strengths}</p>
              </div>

              <div className="trait-card">
                <h4> Challenges</h4>
                <p>{result.traits.challenges}</p>
              </div>

              <div className="trait-card">
                <h4> Career Paths</h4>
                <p>{result.traits.career}</p>
              </div>

              <div className="trait-card">
                <h4> Relationships</h4>
                <p>{result.traits.relationships}</p>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Lucky Colors:</span>
                  <span className="info-value">{result.traits.colors}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Compatible With:</span>
                  <span className="info-value">{result.traits.compatibility}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameNumerologyPage;
