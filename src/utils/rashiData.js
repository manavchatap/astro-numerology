export const getRashiInfo = (rashiName) => {
  const rashiDetails = {
    'Mesha': {
      name: 'Mesha (Aries)',
      englishName: 'Aries',
      symbol: '♈',
      element: 'Fire',
      quality: 'Cardinal',
      lord: 'Mars (Mangal)',
      luckyColor: 'Red, Scarlet',
      luckyDay: 'Tuesday',
      luckyNumber: '9, 18, 27',
      luckyStone: 'Red Coral, Ruby',
      
      personality: 'You are courageous, energetic, and pioneering by nature. Natural leaders with strong initiative and competitive spirit. Bold and fearless, you love taking on challenges and blazing new trails. Your dynamic personality inspires others. Independent and self-reliant, you prefer leading rather than following. Quick decision-makers with strong willpower.',
      
      strengths: 'Natural leadership abilities, Courageous and fearless nature, High energy and enthusiasm, Pioneering and innovative spirit, Strong determination and willpower, Quick decision-making skills, Honest and straightforward, Passionate about goals',
      
      weaknesses: 'Impulsive and hasty decisions, Quick temper and impatience, Can be aggressive and dominating, Difficulty listening to others, Tendency to be self-centered, Lack of persistence in long projects, Can be reckless and accident-prone, Struggle with diplomacy',
      
      career: 'Military and Defense, Sports and Athletics, Entrepreneurship, Surgery and Emergency Medicine, Law Enforcement, Sales and Marketing, Engineering, Adventure Sports, Leadership positions',
      
      love: 'Passionate and direct in expressing feelings. You need excitement and spontaneity in relationships. Loyal but can be possessive. Compatible with Leo, Sagittarius, Gemini, and Aquarius.',
      
      health: 'Prone to head injuries, headaches, fevers, and blood pressure issues. Need to control anger for better health. Regular physical exercise is essential.',
      
      guidance: 'Develop patience and think before acting. Listen to others advice and collaborate. Control your temper through meditation. Channel your energy into productive pursuits. Learn to complete what you start before jumping to new projects.'
    },
    
    'Vrishabha': {
      name: 'Vrishabha (Taurus)',
      englishName: 'Taurus',
      symbol: '♉',
      element: 'Earth',
      quality: 'Fixed',
      lord: 'Venus (Shukra)',
      luckyColor: 'Pink, White, Green',
      luckyDay: 'Friday',
      luckyNumber: '6, 15, 24',
      luckyStone: 'Diamond, White Sapphire, Emerald',
      
      personality: 'You are practical, reliable, and value stability above all. Patient and persistent, you work steadily toward goals. Love comfort, luxury, and beautiful things. Grounded and sensible with strong financial sense. Loyal and dependable in relationships. Stubborn but trustworthy. Appreciate arts, music, and nature.',
      
      strengths: 'Extremely reliable and dependable, Patient and persistent nature, Strong financial management skills, Practical and grounded approach, Loyal and devoted in relationships, Appreciation for beauty and arts, Calm and composed demeanor, Great at building long-term wealth',
      
      weaknesses: 'Extremely stubborn and resistant to change, Can be materialistic and possessive, Slow to make decisions, Tendency toward laziness and comfort-seeking, Difficulty adapting to new situations, Can be overly cautious, Jealous in relationships, Avoid confrontation',
      
      career: 'Banking and Finance, Real Estate, Agriculture and Farming, Arts and Design, Music and Entertainment, Hotel and Hospitality, Jewelry Business, Architecture, Food Industry',
      
      love: 'Romantic and sensual in love. You need security and stability in relationships. Deeply loyal but can be possessive. Compatible with Virgo, Capricorn, Cancer, and Pisces.',
      
      health: 'Prone to throat problems, thyroid issues, weight gain, and diabetes. Need regular exercise to avoid becoming too sedentary. Watch sugar intake.',
      
      guidance: 'Embrace change and be flexible. Avoid being too stubborn. Balance material desires with spiritual growth. Share your resources generously. Step out of comfort zone occasionally for growth.'
    },
    
    'Mithuna': {
      name: 'Mithuna (Gemini)',
      englishName: 'Gemini',
      symbol: '♊',
      element: 'Air',
      quality: 'Mutable',
      lord: 'Mercury (Budh)',
      luckyColor: 'Green, Yellow',
      luckyDay: 'Wednesday',
      luckyNumber: '5, 14, 23',
      luckyStone: 'Emerald, Green Aventurine',
      
      personality: 'You are intellectual, communicative, and adaptable. Quick-witted with excellent verbal skills. Curious and love learning new things. Social butterfly who makes friends easily. Versatile and can handle multiple tasks. Youthful energy and playful nature. Need mental stimulation and variety.',
      
      strengths: 'Excellent communication skills, Quick learner and adaptable, Versatile and multi-talented, Social and friendly nature, Intellectual and curious mind, Good at networking, Creative problem-solving abilities, Youthful and energetic',
      
      weaknesses: 'Inconsistent and unreliable at times, Difficulty focusing on one thing, Superficial in relationships, Nervous and anxious nature, Can be manipulative with words, Indecisive and scattered, Gossip tendency, Avoid deep emotional connections',
      
      career: 'Journalism and Media, Writing and Publishing, Teaching and Education, Sales and Marketing, Public Relations, Translation and Languages, Social Media Management, Communication Consulting, Travel Industry',
      
      love: 'Need intellectual connection and variety in relationships. Flirtatious and enjoy social interactions. May struggle with commitment. Compatible with Libra, Aquarius, Aries, and Leo.',
      
      health: 'Prone to respiratory issues, nervous disorders, anxiety, and insomnia. Need to calm restless mind through meditation. Watch for hand and shoulder problems.',
      
      guidance: 'Develop focus and complete tasks before starting new ones. Build deeper connections rather than superficial ones. Practice mindfulness to calm your mind. Be more reliable and consistent. Use communication skills positively.'
    },
    
    'Karka': {
      name: 'Karka (Cancer)',
      englishName: 'Cancer',
      symbol: '♋',
      element: 'Water',
      quality: 'Cardinal',
      lord: 'Moon (Chandra)',
      luckyColor: 'White, Silver, Cream',
      luckyDay: 'Monday',
      luckyNumber: '2, 7, 11',
      luckyStone: 'Pearl, Moonstone',
      
      personality: 'You are emotional, nurturing, and deeply intuitive. Strong connection to family and home. Sensitive and caring with natural healing abilities. Protective of loved ones. Excellent memory and imagination. Moody but deeply loyal. Value security and tradition.',
      
      strengths: 'Highly intuitive and empathetic, Nurturing and caring nature, Strong family values, Excellent memory, Creative and imaginative, Loyal and protective, Good financial management, Natural healing abilities',
      
      weaknesses: 'Overly emotional and moody, Clingy and dependent in relationships, Hold grudges for long time, Difficulty letting go of past, Too sensitive to criticism, Can be manipulative emotionally, Pessimistic outlook, Fear of rejection',
      
      career: 'Healthcare and Nursing, Counseling and Psychology, Hospitality Industry, Real Estate, Early Childhood Education, Food and Catering, Interior Design, Social Work, History and Archives',
      
      love: 'Deeply romantic and need emotional security. Loyal and devoted partner. Can be possessive and clingy. Compatible with Scorpio, Pisces, Taurus, and Virgo.',
      
      health: 'Prone to digestive issues, stomach problems, emotional eating, and breast-related issues. Mental health needs attention. Avoid stress eating.',
      
      guidance: 'Build emotional resilience and independence. Let go of past hurts. Avoid being overly controlling. Balance nurturing others with self-care. Develop thicker skin for criticism.'
    },
    
    'Simha': {
      name: 'Simha (Leo)',
      englishName: 'Leo',
      symbol: '♌',
      element: 'Fire',
      quality: 'Fixed',
      lord: 'Sun (Surya)',
      luckyColor: 'Gold, Orange, Yellow',
      luckyDay: 'Sunday',
      luckyNumber: '1, 10, 19',
      luckyStone: 'Ruby, Sunstone',
      
      personality: 'You are confident, charismatic, and natural-born leader. Generous and warm-hearted with strong creative abilities. Love being in spotlight and receiving appreciation. Regal presence and dignified manner. Loyal and protective of loved ones. Strong sense of honor and integrity.',
      
      strengths: 'Natural leadership and charisma, Generous and warm-hearted, Creative and artistic talents, Confident and courageous, Loyal and protective nature, Strong sense of responsibility, Inspiring to others, Optimistic outlook',
      
      weaknesses: 'Excessive ego and pride, Need constant attention and praise, Can be dominating and bossy, Stubborn and inflexible, Difficulty admitting mistakes, Extravagant spending habits, Can be melodramatic, Sensitivity to criticism',
      
      career: 'Entertainment and Performing Arts, Politics and Leadership, Management and Administration, Teaching and Mentoring, Fashion and Luxury Brands, Event Management, Public Speaking, Creative Direction, Entrepreneurship',
      
      love: 'Passionate and generous in love. Need admiration and loyalty from partner. Protective and devoted but can be possessive. Compatible with Aries, Sagittarius, Gemini, and Libra.',
      
      health: 'Prone to heart problems, back pain, spine issues, and blood pressure. Need to control ego-related stress. Regular exercise important for heart health.',
      
      guidance: 'Control ego and practice humility. Share spotlight with others. Listen more and dominate less. Accept criticism gracefully. Balance generosity with financial planning. Lead with compassion.'
    },
    
    'Kanya': {
      name: 'Kanya (Virgo)',
      englishName: 'Virgo',
      symbol: '♍',
      element: 'Earth',
      quality: 'Mutable',
      lord: 'Mercury (Budh)',
      luckyColor: 'Green, White, Yellow',
      luckyDay: 'Wednesday',
      luckyNumber: '5, 14, 23',
      luckyStone: 'Emerald, Peridot',
      
      personality: 'You are analytical, practical, and detail-oriented perfectionist. Organized and methodical in approach. Helpful and service-oriented nature. Intelligent with strong critical thinking. Health-conscious and hygiene-focused. Modest and humble despite capabilities.',
      
      strengths: 'Highly analytical and detail-oriented, Practical and organized, Strong work ethic, Helpful and service-minded, Excellent problem-solving skills, Health-conscious lifestyle, Reliable and dependable, Good with finances',
      
      weaknesses: 'Overly critical and judgmental, Perfectionist leading to procrastination, Worry and anxiety-prone, Difficulty relaxing and enjoying life, Can be cold and emotionally detached, Nitpick small details, Low self-esteem despite abilities, Overly cautious',
      
      career: 'Healthcare and Medicine, Accounting and Auditing, Research and Analysis, Quality Control, Editing and Proofreading, Nutrition and Dietetics, Administrative Services, Laboratory Work, Technical Writing',
      
      love: 'Reserved and cautious in love. Need intellectual connection and practical compatibility. Loyal and devoted once committed. Compatible with Taurus, Capricorn, Cancer, and Scorpio.',
      
      health: 'Prone to digestive problems, intestinal issues, anxiety disorders, and stress-related ailments. Need to relax perfectionist tendencies for better health.',
      
      guidance: 'Reduce self-criticism and accept imperfection. Learn to relax and enjoy life. Be less judgmental of others. Balance analysis with intuition. Express emotions more freely.'
    },
    
    'Tula': {
      name: 'Tula (Libra)',
      englishName: 'Libra',
      symbol: '♎',
      element: 'Air',
      quality: 'Cardinal',
      lord: 'Venus (Shukra)',
      luckyColor: 'Pink, Blue, Green',
      luckyDay: 'Friday',
      luckyNumber: '6, 15, 24',
      luckyStone: 'Diamond, Opal',
      
      personality: 'You are diplomatic, charming, and seek balance in all things. Social and cooperative with natural grace. Strong sense of justice and fairness. Appreciate beauty and harmony. Excellent mediator and peacemaker. Indecisive but fair-minded.',
      
      strengths: 'Diplomatic and fair-minded, Charming and sociable nature, Strong sense of justice, Appreciation for beauty and arts, Excellent mediator and peacemaker, Cooperative and team-oriented, Graceful and well-mannered, Romantic and relationship-oriented',
      
      weaknesses: 'Extremely indecisive, Avoid confrontation at all costs, Can be superficial, Dependency in relationships, Difficulty being alone, People-pleasing tendencies, Passive-aggressive behavior, Overly concerned with appearance',
      
      career: 'Law and Justice, Diplomacy and International Relations, Fashion and Design, Arts and Entertainment, Human Resources, Counseling and Mediation, Public Relations, Beauty and Cosmetics, Partnership Businesses',
      
      love: 'Romantic and need partnership for fulfillment. Seek harmony and balance in relationships. Charming and affectionate partner. Compatible with Gemini, Aquarius, Leo, and Sagittarius.',
      
      health: 'Prone to kidney problems, lower back pain, skin issues, and diabetes. Need to make decisions to reduce mental stress. Balance social life with rest.',
      
      guidance: 'Learn to make decisions independently. Face conflicts directly. Develop self-sufficiency. Be authentic rather than people-pleasing. Balance giving with receiving in relationships.'
    },
    
    'Vrishchika': {
      name: 'Vrishchika (Scorpio)',
      englishName: 'Scorpio',
      symbol: '♏',
      element: 'Water',
      quality: 'Fixed',
      lord: 'Mars (Mangal)',
      luckyColor: 'Red, Maroon, Black',
      luckyDay: 'Tuesday',
      luckyNumber: '9, 18, 27',
      luckyStone: 'Red Coral, Bloodstone',
      
      personality: 'You are intense, passionate, and deeply mysterious. Strong willpower and determination. Excellent at research and uncovering hidden truths. Loyal and protective but can be secretive. Transformative nature with ability to regenerate. Magnetic personality.',
      
      strengths: 'Intense focus and determination, Excellent research abilities, Loyal and protective nature, Powerful intuition, Strong emotional depth, Resourceful and strategic thinking, Courageous and fearless, Transformative abilities',
      
      weaknesses: 'Jealous and possessive nature, Tendency toward revenge, Secretive and trust issues, Controlling and manipulative at times, Hold grudges forever, Intense mood swings, Difficulty forgiving, Can be ruthless',
      
      career: 'Investigation and Detective Work, Psychology and Psychiatry, Surgery and Medicine, Research and Science, Occult Sciences, Finance and Investments, Mining and Oil Industry, Crisis Management, Forensics',
      
      love: 'Intensely passionate and need deep emotional connection. Extremely loyal but very possessive and jealous. All-or-nothing approach to love. Compatible with Cancer, Pisces, Virgo, and Capricorn.',
      
      health: 'Prone to reproductive system issues, urinary tract problems, piles, and STDs. Emotional intensity affects health. Need healthy outlets for intense emotions.',
      
      guidance: 'Learn to forgive and let go. Control jealousy and possessiveness. Trust others more. Use your power for good, not manipulation. Transform negative emotions into positive action.'
    },
    
    'Dhanu': {
      name: 'Dhanu (Sagittarius)',
      englishName: 'Sagittarius',
      symbol: '♐',
      element: 'Fire',
      quality: 'Mutable',
      lord: 'Jupiter (Guru)',
      luckyColor: 'Yellow, Orange, Purple',
      luckyDay: 'Thursday',
      luckyNumber: '3, 12, 21',
      luckyStone: 'Yellow Sapphire, Topaz',
      
      personality: 'You are optimistic, adventurous, and freedom-loving. Philosophical and seek higher knowledge. Love travel and exploring new cultures. Honest and straightforward, sometimes bluntly. Generous and jovial nature. Independent spirit with broad vision.',
      
      strengths: 'Optimistic and positive outlook, Adventurous and open-minded, Philosophical and wise, Honest and straightforward, Generous and helpful, Love of learning and travel, Independent and freedom-loving, Enthusiastic and energetic',
      
      weaknesses: 'Tactless and overly blunt, Commitment-phobic, Restless and impatient, Can be preachy and self-righteous, Overconfident and reckless, Difficulty with routine, Irresponsible at times, Tendency to over-promise',
      
      career: 'Teaching and Higher Education, Travel and Tourism, Philosophy and Religion, Sports and Athletics, Publishing and Writing, Law and Justice, International Business, Motivational Speaking, Adventure Sports',
      
      love: 'Need freedom and space in relationships. Adventurous and fun-loving partner. Honest but can be tactless. Compatible with Aries, Leo, Libra, and Aquarius.',
      
      health: 'Prone to hip and thigh problems, liver issues, sciatica, and weight gain from overindulgence. Need moderation in eating and drinking.',
      
      guidance: 'Develop tact and think before speaking. Learn commitment and responsibility. Balance freedom with obligations. Be more organized. Practice humility despite knowledge.'
    },
    
    'Makara': {
      name: 'Makara (Capricorn)',
      englishName: 'Capricorn',
      symbol: '♑',
      element: 'Earth',
      quality: 'Cardinal',
      lord: 'Saturn (Shani)',
      luckyColor: 'Black, Dark Blue, Brown',
      luckyDay: 'Saturday',
      luckyNumber: '8, 17, 26',
      luckyStone: 'Blue Sapphire, Black Onyx',
      
      personality: 'You are ambitious, disciplined, and highly responsible. Patient and persistent in achieving goals. Practical and traditional with strong work ethic. Mature beyond years with great wisdom. Reserved but reliable. Build slow but create lasting foundations.',
      
      strengths: 'Highly disciplined and responsible, Ambitious with long-term vision, Patient and persistent, Practical and realistic, Strong work ethic, Reliable and trustworthy, Good at planning and organizing, Financial wisdom',
      
      weaknesses: 'Overly serious and pessimistic, Workaholic tendencies, Difficulty expressing emotions, Can be cold and distant, Too rigid and inflexible, Fear of failure, Tendency toward depression, Difficulty having fun',
      
      career: 'Business and Management, Government and Administration, Engineering and Architecture, Banking and Finance, Law and Justice, Real Estate, Construction, Time Management Consulting, Elderly Care',
      
      love: 'Reserved and take time to open up. Seek stable and long-term relationships. Loyal and committed once involved. Compatible with Taurus, Virgo, Scorpio, and Pisces.',
      
      health: 'Prone to bone and joint problems, dental issues, arthritis, depression, and chronic diseases. Need to balance work with relaxation and joy.',
      
      guidance: 'Learn to enjoy life and have fun. Express emotions openly. Balance work with personal life. Be less rigid and more flexible. Trust the process and timing.'
    },
    
    'Kumbha': {
      name: 'Kumbha (Aquarius)',
      englishName: 'Aquarius',
      symbol: '♒',
      element: 'Air',
      quality: 'Fixed',
      lord: 'Saturn (Shani)',
      luckyColor: 'Blue, Grey, Aqua',
      luckyDay: 'Saturday',
      luckyNumber: '4, 8, 13',
      luckyStone: 'Blue Sapphire, Amethyst',
      
      personality: 'You are innovative, humanitarian, and intellectual. Progressive thinker with unique perspectives. Value independence and individuality. Friendly but emotionally detached. Interested in social causes and technology. Unconventional and original.',
      
      strengths: 'Innovative and original thinking, Humanitarian and altruistic, Intellectual and analytical, Independent and freedom-loving, Friendly and social, Visionary and progressive, Good with technology, Open-minded',
      
      weaknesses: 'Emotionally detached and aloof, Rebellious without cause, Unpredictable behavior, Difficulty with intimacy, Can be stubborn, Tendency to be impersonal, Avoid emotional expression, Can be eccentric',
      
      career: 'Technology and IT, Social Work and NGOs, Science and Research, Aviation and Space, Astrology and Occult, Innovation and Invention, Environmental Work, Electronics Engineering, Humanitarian Organizations',
      
      love: 'Need intellectual connection and friendship in relationships. Value independence and space. Can be emotionally distant. Compatible with Gemini, Libra, Sagittarius, and Aries.',
      
      health: 'Prone to circulation problems, ankle issues, varicose veins, and nervous disorders. Need to ground yourself and express emotions for better health.',
      
      guidance: 'Develop emotional warmth and intimacy. Balance independence with connection. Be more consistent and reliable. Express feelings openly. Ground visionary ideas in practical action.'
    },
    
    'Meena': {
      name: 'Meena (Pisces)',
      englishName: 'Pisces',
      symbol: '♓',
      element: 'Water',
      quality: 'Mutable',
      lord: 'Jupiter (Guru)',
      luckyColor: 'Sea Green, Purple, White',
      luckyDay: 'Thursday',
      luckyNumber: '3, 7, 12',
      luckyStone: 'Yellow Sapphire, Aquamarine',
      
      personality: 'You are compassionate, intuitive, and deeply spiritual. Artistic and imaginative with rich inner world. Empathetic and can feel others emotions. Dreamy and romantic nature. Adaptable like water. Natural healers with mystical inclinations.',
      
      strengths: 'Highly intuitive and psychic, Compassionate and empathetic, Artistic and creative, Spiritual and mystical, Adaptable and flexible, Natural healing abilities, Romantic and idealistic, Selfless and giving',
      
      weaknesses: 'Overly emotional and escapist, Difficulty with boundaries, Can be victim-minded, Tendency toward addiction, Too trusting and gullible, Lack of practicality, Avoid reality and responsibility, Confused and indecisive',
      
      career: 'Arts and Music, Spiritual Healing, Psychology and Counseling, Photography and Film, Charity and Social Work, Alternative Medicine, Poetry and Writing, Nursing and Healthcare, Ocean-related professions',
      
      love: 'Romantic and idealistic in love. Need deep emotional and spiritual connection. Can be self-sacrificing and lose self in relationships. Compatible with Cancer, Scorpio, Taurus, and Capricorn.',
      
      health: 'Prone to foot problems, addiction issues, water retention, and psychosomatic illnesses. Need boundaries to protect energy. Avoid escapism through substances.',
      
      guidance: 'Develop boundaries and protect your energy. Balance spirituality with practicality. Face reality instead of escaping. Build self-worth and avoid victim mentality. Ground your dreams in action.'
    }
  };

  return rashiDetails[rashiName] || rashiDetails['Mesha'];
};

export const calculateRashiByDateOnly = (dob) => {
  const date = new Date(dob);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  // Approximate Rashi by sun sign dates (simplified for offline use)
  if ((month === 4 && day >= 14) || (month === 5 && day <= 14)) return 'Mesha';
  if ((month === 5 && day >= 15) || (month === 6 && day <= 14)) return 'Vrishabha';
  if ((month === 6 && day >= 15) || (month === 7 && day <= 14)) return 'Mithuna';
  if ((month === 7 && day >= 15) || (month === 8 && day <= 14)) return 'Karka';
  if ((month === 8 && day >= 15) || (month === 9 && day <= 14)) return 'Simha';
  if ((month === 9 && day >= 15) || (month === 10 && day <= 14)) return 'Kanya';
  if ((month === 10 && day >= 15) || (month === 11 && day <= 14)) return 'Tula';
  if ((month === 11 && day >= 15) || (month === 12 && day <= 14)) return 'Vrishchika';
  if ((month === 12 && day >= 15) || (month === 1 && day <= 13)) return 'Dhanu';
  if ((month === 1 && day >= 14) || (month === 2 && day <= 12)) return 'Makara';
  if ((month === 2 && day >= 13) || (month === 3 && day <= 13)) return 'Kumbha';
  if ((month === 3 && day >= 14) || (month === 4 && day <= 13)) return 'Meena';
  
  return 'Mesha';
};
