import React, { useState } from 'react';
import { calculateMulank, calculateBhagyank, getNumberTraits } from '../../utils/numerologyCalculations';
import './NumerologyCalculator.css';

const MulankCalculator = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!dob) {
      alert('Please enter your date of birth');
      return;
    }
    const mulank = calculateMulank(dob);
    const bhagyank = calculateBhagyank(dob);
    setResult({
      mulank,
      bhagyank,
      mulankTraits: getNumberTraits(mulank),
      bhagyankTraits: getNumberTraits(bhagyank),
      dob: new Date(dob).toLocaleDateString('en-IN')
    });
    setExpandedSections({});
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const DetailSection = ({ title, content, sectionKey }) => (
    <div className="detail-section">
      <button 
        className="section-header" 
        onClick={() => toggleSection(sectionKey)}
      >
        <span>{title}</span>
        <span className="arrow">{expandedSections[sectionKey] ? '▼' : '▶'}</span>
      </button>
      {expandedSections[sectionKey] && (
        <div className="section-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );

  const ListSection = ({ title, items, sectionKey }) => (
    <div className="detail-section">
      <button 
        className="section-header" 
        onClick={() => toggleSection(sectionKey)}
      >
        <span>{title}</span>
        <span className="arrow">{expandedSections[sectionKey] ? '▼' : '▶'}</span>
      </button>
      {expandedSections[sectionKey] && (
        <div className="section-content">
          <ul>
            {items.split(', ').map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderNumberCard = (title, number, traits, prefix) => (
    <div className="result-card">
      <h3>{title}: {number}</h3>
      <div className="basic-info">
        <p><strong>Ruling Planet:</strong> {traits.planet}</p>
        <p><strong>Element:</strong> {traits.element}</p>
        <p><strong>Core Traits:</strong> {traits.traits}</p>
        <p><strong>Lucky Colors:</strong> {traits.luckyColor}</p>
        <p><strong>Lucky Days:</strong> {traits.luckyDay}</p>
        <p><strong>Lucky Numbers:</strong> {traits.luckyNumbers}</p>
      </div>

      <div className="expandable-sections">
        <DetailSection 
          title="� Personality Overview" 
          content={traits.personality}
          sectionKey={`${prefix}-personality`}
        />
        
        <ListSection 
          title="� Strengths" 
          items={traits.strengths}
          sectionKey={`${prefix}-strengths`}
        />
        
        <ListSection 
          title="⚠️ Weaknesses" 
          items={traits.weaknesses}
          sectionKey={`${prefix}-weaknesses`}
        />
        
        <DetailSection 
          title="� Career Guidance" 
          content={traits.career}
          sectionKey={`${prefix}-career`}
        />
        
        <DetailSection 
          title="❤️ Relationships & Love" 
          content={traits.relationships}
          sectionKey={`${prefix}-relationships`}
        />
        
        <DetailSection 
          title="� Health Concerns" 
          content={traits.healthConcerns}
          sectionKey={`${prefix}-health`}
        />
        
        <DetailSection 
          title="� Life Guidance" 
          content={traits.guidance}
          sectionKey={`${prefix}-guidance`}
        />
        
        <DetailSection 
          title="�️ Spiritual Practices" 
          content={traits.spiritualPractice}
          sectionKey={`${prefix}-spiritual`}
        />
        
        <DetailSection 
          title="� Remedies & Solutions" 
          content={traits.remedies}
          sectionKey={`${prefix}-remedies`}
        />
      </div>
    </div>
  );

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2>✨ Numerology Calculator ✨</h2>
        <p>Discover your Mulank (Birth Number) and Bhagyank (Destiny Number)</p>
        
        <form onSubmit={handleCalculate}>
          <div className="input-group">
            <label htmlFor="dob">� Enter Your Date of Birth:</label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <button type="submit" className="calculate-btn">� Calculate My Numbers</button>
        </form>

        {result && (
          <div className="results">
            <div className="result-header">
              <h3>� Your Complete Numerology Report</h3>
              <p>Date of Birth: {result.dob}</p>
            </div>

            <div className="result-cards">
              {renderNumberCard(
                '� Mulank (Birth Number)',
                result.mulank,
                result.mulankTraits,
                'mulank'
              )}
              
              {renderNumberCard(
                '✨ Bhagyank (Destiny Number)',
                result.bhagyank,
                result.bhagyankTraits,
                'bhagyank'
              )}
            </div>

            <div className="info-note">
              <p>� <strong>Note:</strong> Mulank represents your personality and natural tendencies, while Bhagyank represents your life path and destiny. Click on each section to explore detailed insights!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MulankCalculator;
