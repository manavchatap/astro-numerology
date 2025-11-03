import React, { useState } from 'react';
import { getRashiInfo } from '../../utils/rashiData';
import { calculateRashiFromBirthDetails, getCityCoordinates } from '../../utils/apiService';
import './RashiCalculator.css';

const RashiCalculator = () => {
  const [mode, setMode] = useState('auto');
  const [locationMode, setLocationMode] = useState('city'); // 'city' or 'coordinates'
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: 'Mumbai',
    customCity: '',
    latitude: '',
    longitude: '',
    manualRashi: 'Simha'
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const allRashis = [
    { value: 'Mesha', label: 'Mesha (Aries) ♈' },
    { value: 'Vrishabha', label: 'Vrishabha (Taurus) ♉' },
    { value: 'Mithuna', label: 'Mithuna (Gemini) ♊' },
    { value: 'Karka', label: 'Karka (Cancer) ♋' },
    { value: 'Simha', label: 'Simha (Leo) ♌' },
    { value: 'Kanya', label: 'Kanya (Virgo) ♍' },
    { value: 'Tula', label: 'Tula (Libra) ♎' },
    { value: 'Vrishchika', label: 'Vrishchika (Scorpio) ♏' },
    { value: 'Dhanu', label: 'Dhanu (Sagittarius) ♐' },
    { value: 'Makara', label: 'Makara (Capricorn) ♑' },
    { value: 'Kumbha', label: 'Kumbha (Aquarius) ♒' },
    { value: 'Meena', label: 'Meena (Pisces) ♓' }
  ];

  const handleCalculate = async (e) => {
    e.preventDefault();
    
    if (mode === 'manual') {
      const rashiInfo = getRashiInfo(formData.manualRashi);
      setResult({
        rashi: formData.manualRashi,
        info: rashiInfo,
        birthDetails: {
          date: formData.date ? new Date(formData.date).toLocaleDateString('en-IN') : 'Not provided',
          mode: 'Manual Selection'
        }
      });
      setExpandedSections({});
      return;
    }

    if (!formData.date || !formData.time) {
      alert('Please enter date and time of birth');
      return;
    }

    setLoading(true);

    try {
      const [year, month, day] = formData.date.split('-').map(Number);
      const [hour, minute] = formData.time.split(':').map(Number);
      
      let coordinates;
      let locationName;
      
      if (locationMode === 'coordinates') {
        if (!formData.latitude || !formData.longitude) {
          alert('Please enter both latitude and longitude');
          setLoading(false);
          return;
        }
        coordinates = {
          lat: parseFloat(formData.latitude),
          lon: parseFloat(formData.longitude)
        };
        locationName = `${formData.latitude}°N, ${formData.longitude}°E`;
      } else {
        const cityToUse = formData.city === 'Other' ? formData.customCity : formData.city;
        coordinates = getCityCoordinates(cityToUse);
        locationName = cityToUse;
      }
      
      const response = await calculateRashiFromBirthDetails(
        day, month, year, hour, minute,
        coordinates.lat, coordinates.lon
      );

      if (response.success) {
        const rashiInfo = getRashiInfo(response.rashi);
        
        setResult({
          rashi: response.rashi,
          info: rashiInfo,
          birthDetails: {
            date: new Date(formData.date).toLocaleDateString('en-IN'),
            time: formData.time,
            city: locationName,
            method: response.method || 'Astronomical Calculation'
          }
        });
        setExpandedSections({});
      } else {
        alert('Error calculating Rashi. Please try Manual Selection mode.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error calculating Rashi. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
    'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara',
    'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut',
    'Rajkot', 'Varanasi', 'Srinagar', 'Amritsar', 'Allahabad', 'Ranchi',
    'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur',
    'Madurai', 'Raipur', 'Kota', 'Chandigarh', 'Guwahati', 'Hubli', 'Mysore',
    'Tiruppur', 'Moradabad', 'Gurgaon', 'Aligarh', 'Jalandhar', 'Tiruchirappalli',
    'Bhubaneswar', 'Salem', 'Warangal', 'Guntur', 'Bhiwandi', 'Saharanpur',
    'Gorakhpur', 'Bikaner', 'Amravati', 'Noida', 'Jamshedpur', 'Bhilai',
    'Cuttack', 'Firozabad', 'Kochi', 'Nellore', 'Bhavnagar', 'Dehradun',
    'Durgapur', 'Asansol', 'Rourkela', 'Nanded', 'Kolhapur', 'Ajmer',
    'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni', 'Siliguri',
    'Jhansi', 'Ulhasnagar', 'Jammu', 'Mangalore', 'Erode', 'Belgaum',
    'Ambattur', 'Tirunelveli', 'Malegaon', 'Gaya', 'Jalgaon', 'Udaipur',
    'Maheshtala', 'Other'
  ];

  return (
    <div className="rashi-container">
      <div className="rashi-card">
        <h2>⭐ Rashi Calculator ⭐</h2>
        <p>Discover your Vedic Moon Sign</p>
        
        <div className="mode-selector">
          <button 
            className={mode === 'auto' ? 'mode-btn active' : 'mode-btn'}
            onClick={() => setMode('auto')}
          >
            Auto Calculate
          </button>
          <button 
            className={mode === 'manual' ? 'mode-btn active' : 'mode-btn'}
            onClick={() => setMode('manual')}
          >
            Manual Selection
          </button>
        </div>

        <form onSubmit={handleCalculate}>
          {mode === 'manual' ? (
            <>
              <div className="input-group">
                <label htmlFor="manualRashi"> Select Your Rashi:</label>
                <select
                  id="manualRashi"
                  name="manualRashi"
                  value={formData.manualRashi}
                  onChange={handleInputChange}
                  required
                >
                  {allRashis.map(rashi => (
                    <option key={rashi.value} value={rashi.value}>
                      {rashi.label}
                    </option>
                  ))}
                </select>
                <small style={{color: '#9d50bb', marginTop: '0.3rem', display: 'block'}}>
                  Select if you already know your Rashi from an astrologer
                </small>
              </div>
              
              <div className="input-group">
                <label htmlFor="date"> Date of Birth (Optional):</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
            </>
          ) : (
            <>
              <div className="input-group">
                <label htmlFor="date"> Date of Birth:</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="time"> Time of Birth:</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="location-mode-selector">
                <button 
                  type="button"
                  className={locationMode === 'city' ? 'location-btn active' : 'location-btn'}
                  onClick={() => setLocationMode('city')}
                >
                   Select City
                </button>
                <button 
                  type="button"
                  className={locationMode === 'coordinates' ? 'location-btn active' : 'location-btn'}
                  onClick={() => setLocationMode('coordinates')}
                >
                   Enter Coordinates
                </button>
              </div>

              {locationMode === 'city' ? (
                <>
                  <div className="input-group">
                    <label htmlFor="city"> Birth Place:</label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    >
                      {indianCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  {formData.city === 'Other' && (
                    <div className="input-group">
                      <label htmlFor="customCity"> Enter Your City Name:</label>
                      <input
                        id="customCity"
                        name="customCity"
                        type="text"
                        value={formData.customCity}
                        onChange={handleInputChange}
                        placeholder="e.g., Shimla, Darjeeling, etc."
                        required
                      />
                      <small style={{color: '#9d50bb', marginTop: '0.3rem', display: 'block'}}>
                        Note: You may need to enter coordinates if city is not recognized
                      </small>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="input-group">
                    <label htmlFor="latitude"> Latitude:</label>
                    <input
                      id="latitude"
                      name="latitude"
                      type="number"
                      step="0.0001"
                      value={formData.latitude}
                      onChange={handleInputChange}
                      placeholder="e.g., 28.7041"
                      required
                    />
                    <small style={{color: '#9d50bb', marginTop: '0.3rem', display: 'block'}}>
                      Find on Google Maps: Right-click location → Copy coordinates
                    </small>
                  </div>

                  <div className="input-group">
                    <label htmlFor="longitude"> Longitude:</label>
                    <input
                      id="longitude"
                      name="longitude"
                      type="number"
                      step="0.0001"
                      value={formData.longitude}
                      onChange={handleInputChange}
                      placeholder="e.g., 77.1025"
                      required
                    />
                  </div>
                </>
              )}
            </>
          )}

          <button type="submit" className="calculate-btn" disabled={loading}>
            {loading ? '⏳ Calculating...' : ' Get My Rashi Report'}
          </button>
        </form>

        {result && (
          <div className="results">
            <div className="result-header">
              <h3> Your Rashi Report</h3>
              <div className="birth-details">
                <p> Birth Date: {result.birthDetails.date}</p>
                {result.birthDetails.time && <p> Birth Time: {result.birthDetails.time}</p>}
                {result.birthDetails.city && <p> Birth Place: {result.birthDetails.city}</p>}
                {result.birthDetails.mode && <p> Mode: {result.birthDetails.mode}</p>}
                {result.birthDetails.method && <p> Method: {result.birthDetails.method}</p>}
              </div>
            </div>

            <div className="rashi-main-card">
              <div className="rashi-symbol">{result.info.symbol}</div>
              <h3>{result.info.name}</h3>
              <h4>{result.info.englishName}</h4>
              
              <div className="basic-info">
                <p><strong>Element:</strong> {result.info.element}</p>
                <p><strong>Quality:</strong> {result.info.quality}</p>
                <p><strong>Ruling Planet:</strong> {result.info.lord}</p>
                <p><strong>Lucky Colors:</strong> {result.info.luckyColor}</p>
                <p><strong>Lucky Day:</strong> {result.info.luckyDay}</p>
                <p><strong>Lucky Numbers:</strong> {result.info.luckyNumber}</p>
                <p><strong>Lucky Stone:</strong> {result.info.luckyStone}</p>
              </div>

              <div className="expandable-sections">
                <DetailSection 
                  title=" Personality Overview" 
                  content={result.info.personality}
                  sectionKey="personality"
                />
                <ListSection 
                  title=" Strengths" 
                  items={result.info.strengths}
                  sectionKey="strengths"
                />
                <ListSection 
                  title=" Weaknesses" 
                  items={result.info.weaknesses}
                  sectionKey="weaknesses"
                />
                <DetailSection 
                  title=" Career Guidance" 
                  content={result.info.career}
                  sectionKey="career"
                />
                <DetailSection 
                  title=" Love & Relationships" 
                  content={result.info.love}
                  sectionKey="love"
                />
                <DetailSection 
                  title=" Health Concerns" 
                  content={result.info.health}
                  sectionKey="health"
                />
                <DetailSection 
                  title=" Life Guidance" 
                  content={result.info.guidance}
                  sectionKey="guidance"
                />
              </div>
            </div>

            <div className="info-note">
              <p> <strong>Tip:</strong> If your city is not in the list, use "Other" option or enter coordinates directly from Google Maps. Right-click any location on Google Maps and select "Copy coordinates" to get exact latitude/longitude.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RashiCalculator;
