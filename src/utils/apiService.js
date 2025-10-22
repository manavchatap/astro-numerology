import SunCalc from 'suncalc';

export const calculateRashiFromBirthDetails = async (day, month, year, hour, minute, latitude, longitude) => {
  try {
    const birthDate = new Date(year, month - 1, day, hour, minute, 0);
    const moonLongitude = calculateEclipticLongitude(birthDate, latitude, longitude);
    const rashi = getRashiFromMoonLongitude(moonLongitude);
    
    return {
      success: true,
      rashi: rashi,
      accurate: true,
      method: 'Jean Meeus Algorithm (Astronomical Calculation)'
    };
    
  } catch (error) {
    console.error('Error calculating Rashi:', error);
    return {
      success: false,
      error: 'Unable to calculate Rashi'
    };
  }
};

const calculateEclipticLongitude = (date, latitude, longitude) => {
  const jd = getJulianDay(date);
  const T = (jd - 2451545.0) / 36525;
  
  let L_prime = 218.3164477 + (481267.88123421 * T) 
                - (0.0015786 * T * T) 
                + (Math.pow(T, 3) / 538841) 
                - (Math.pow(T, 4) / 65194000);
  
  const D = 297.8501921 + (445267.1114034 * T) 
            - (0.0018819 * T * T) 
            + (Math.pow(T, 3) / 545868) 
            - (Math.pow(T, 4) / 113065000);
  
  const M = 357.5291092 + (35999.0502909 * T) 
            - (0.0001536 * T * T) 
            + (Math.pow(T, 3) / 24490000);
  
  const M_prime = 134.9633964 + (477198.8675055 * T) 
                  + (0.0087414 * T * T) 
                  + (Math.pow(T, 3) / 69699) 
                  - (Math.pow(T, 4) / 14712000);
  
  const F = 93.2720950 + (483202.0175233 * T) 
            - (0.0036539 * T * T) 
            - (Math.pow(T, 3) / 3526000) 
            + (Math.pow(T, 4) / 863310000);
  
  const toRad = Math.PI / 180;
  const D_rad = D * toRad;
  const M_rad = M * toRad;
  const M_prime_rad = M_prime * toRad;
  const F_rad = F * toRad;
  
  let sigmaMoonLongitude = 0;
  sigmaMoonLongitude += 6288774 * Math.sin(M_prime_rad);
  sigmaMoonLongitude += 1274027 * Math.sin(2 * D_rad - M_prime_rad);
  sigmaMoonLongitude += 658314 * Math.sin(2 * D_rad);
  sigmaMoonLongitude += 213618 * Math.sin(2 * M_prime_rad);
  sigmaMoonLongitude += -185116 * Math.sin(M_rad);
  sigmaMoonLongitude += -114332 * Math.sin(2 * F_rad);
  sigmaMoonLongitude += 58793 * Math.sin(2 * D_rad - 2 * M_prime_rad);
  sigmaMoonLongitude += 57066 * Math.sin(2 * D_rad - M_rad - M_prime_rad);
  sigmaMoonLongitude += 53322 * Math.sin(2 * D_rad + M_prime_rad);
  sigmaMoonLongitude += 45758 * Math.sin(2 * D_rad - M_rad);
  sigmaMoonLongitude += -40923 * Math.sin(M_rad - M_prime_rad);
  sigmaMoonLongitude += -34720 * Math.sin(D_rad);
  sigmaMoonLongitude += -30383 * Math.sin(M_rad + M_prime_rad);
  sigmaMoonLongitude += 15327 * Math.sin(2 * D_rad - 2 * F_rad);
  sigmaMoonLongitude += -12528 * Math.sin(M_prime_rad + 2 * F_rad);
  sigmaMoonLongitude += 10980 * Math.sin(M_prime_rad - 2 * F_rad);
  sigmaMoonLongitude += 10675 * Math.sin(4 * D_rad - M_prime_rad);
  sigmaMoonLongitude += 10034 * Math.sin(3 * M_prime_rad);
  sigmaMoonLongitude += 8548 * Math.sin(4 * D_rad - 2 * M_prime_rad);
  sigmaMoonLongitude += -7888 * Math.sin(2 * D_rad + M_rad - M_prime_rad);
  
  let moonLongitude = L_prime + (sigmaMoonLongitude / 1000000);
  const ayanamsa = calculateLahiriAyanamsa(jd);
  moonLongitude -= ayanamsa;
  moonLongitude = moonLongitude % 360;
  if (moonLongitude < 0) moonLongitude += 360;
  
  return moonLongitude;
};

const getJulianDay = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  
  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;
  
  let jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + 
            Math.floor(y / 4) - Math.floor(y / 100) + 
            Math.floor(y / 400) - 32045;
  
  let jd = jdn + (hour - 12) / 24 + minute / 1440 + second / 86400;
  return jd;
};

const calculateLahiriAyanamsa = (jd) => {
  const T = (jd - 2451545.0) / 36525;
  const ayanamsa = 23.85 + (0.0139 * (jd - 2451545.0) / 365.25);
  return ayanamsa;
};

const getRashiFromMoonLongitude = (longitude) => {
  const rashiIndex = Math.floor(longitude / 30);
  const rashis = [
    'Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya',
    'Tula', 'Vrishchika', 'Dhanu', 'Makara', 'Kumbha', 'Meena'
  ];
  return rashis[rashiIndex % 12];
};

export const getCityCoordinates = (cityName) => {
  const cities = {
    'Mumbai': { lat: 19.0760, lon: 72.8777 },
    'Delhi': { lat: 28.7041, lon: 77.1025 },
    'Bangalore': { lat: 12.9716, lon: 77.5946 },
    'Hyderabad': { lat: 17.3850, lon: 78.4867 },
    'Chennai': { lat: 13.0827, lon: 80.2707 },
    'Kolkata': { lat: 22.5726, lon: 88.3639 },
    'Pune': { lat: 18.5204, lon: 73.8567 },
    'Ahmedabad': { lat: 23.0225, lon: 72.5714 },
    'Jaipur': { lat: 26.9124, lon: 75.7873 },
    'Lucknow': { lat: 26.8467, lon: 80.9462 },
    'Kanpur': { lat: 26.4499, lon: 80.3319 },
    'Nagpur': { lat: 21.1458, lon: 79.0882 },
    'Indore': { lat: 22.7196, lon: 75.8577 },
    'Thane': { lat: 19.2183, lon: 72.9781 },
    'Bhopal': { lat: 23.2599, lon: 77.4126 },
    'Visakhapatnam': { lat: 17.6869, lon: 83.2185 },
    'Patna': { lat: 25.5941, lon: 85.1376 },
    'Vadodara': { lat: 22.3072, lon: 73.1812 },
    'Ghaziabad': { lat: 28.6692, lon: 77.4538 },
    'Ludhiana': { lat: 30.9010, lon: 75.8573 },
    'Agra': { lat: 27.1767, lon: 78.0081 },
    'Nashik': { lat: 19.9975, lon: 73.7898 },
    'Faridabad': { lat: 28.4089, lon: 77.3178 },
    'Meerut': { lat: 28.9845, lon: 77.7064 },
    'Rajkot': { lat: 22.3039, lon: 70.8022 },
    'Varanasi': { lat: 25.3176, lon: 82.9739 },
    'Srinagar': { lat: 34.0837, lon: 74.7973 },
    'Amritsar': { lat: 31.6340, lon: 74.8723 },
    'Allahabad': { lat: 25.4358, lon: 81.8463 },
    'Ranchi': { lat: 23.3441, lon: 85.3096 },
    'Howrah': { lat: 22.5958, lon: 88.2636 },
    'Coimbatore': { lat: 11.0168, lon: 76.9558 },
    'Jabalpur': { lat: 23.1815, lon: 79.9864 },
    'Gwalior': { lat: 26.2183, lon: 78.1828 },
    'Vijayawada': { lat: 16.5062, lon: 80.6480 },
    'Jodhpur': { lat: 26.2389, lon: 73.0243 },
    'Madurai': { lat: 9.9252, lon: 78.1198 },
    'Raipur': { lat: 21.2514, lon: 81.6296 },
    'Kota': { lat: 25.2138, lon: 75.8648 },
    'Chandigarh': { lat: 30.7333, lon: 76.7794 },
    'Guwahati': { lat: 26.1445, lon: 91.7362 },
    'Hubli': { lat: 15.3647, lon: 75.1240 },
    'Mysore': { lat: 12.2958, lon: 76.6394 },
    'Shimla': { lat: 31.1048, lon: 77.1734 },
    'Darjeeling': { lat: 27.0410, lon: 88.2663 },
    'Pondicherry': { lat: 11.9139, lon: 79.8145 },
    'Dehradun': { lat: 30.3165, lon: 78.0322 },
    'Gangtok': { lat: 27.3389, lon: 88.6065 },
    'Port Blair': { lat: 11.6234, lon: 92.7265 }
  };
  
  return cities[cityName] || cities['Delhi'];
};
