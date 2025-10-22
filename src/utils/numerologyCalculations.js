export const calculateMulank = (birthDate) => {
  const date = new Date(birthDate).getDate();
  return reduceToSingleDigit(date);
};

export const calculateBhagyank = (fullDate) => {
  const date = new Date(fullDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const total = day + month + year;
  return reduceToSingleDigit(total);
};

const reduceToSingleDigit = (num) => {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    const str = num.toString();
    num = str.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
};

export const getNumberTraits = (number) => {
  const traits = {
    1: {
      planet: 'Sun (Surya)',
      element: 'Fire',
      traits: 'Leadership, Independence, Confidence, Ambition, Innovation',
      
      personality: 'You are a natural-born leader with strong charisma and confidence. Self-reliant and self-motivated, you prefer paving your own path rather than following others. Your fearless nature and clear vision inspire people around you. Highly ambitious and goal-oriented, you always aim for the top and work tirelessly to achieve your dreams. Creative and innovative, you bring fresh ideas and unique perspectives to everything you do.',
      
      strengths: 'Natural leadership abilities, Strong confidence and courage, Creative and innovative thinking, High determination and willpower, Independence and self-reliance, Inspirational to others, Quick decision-making skills, Pioneering spirit',
      
      weaknesses: 'Can be overcontrolling and dominating, Prone to ego and arrogance, Impatient and impulsive decisions, Difficulty accepting criticism, Need constant attention and praise, Reluctance to work in teams, Stubborn and inflexible at times, Can become self-centered',
      
      luckyColor: 'Gold, Orange, Yellow',
      luckyDay: 'Sunday, Monday',
      luckyNumbers: '1, 10, 19, 28',
      
      career: 'Entrepreneur and Business Owner (natural leaders who excel at building their own empire), CEO and Top Management positions, Politics and Public Leadership, Creative fields like Media, Art, Entertainment, Law and Advocacy, Marketing and Brand Strategy, Motivational Speaker, Public Figure, Fashion Designer, Architecture',
      
      relationships: 'Passionate and deeply loyal in love. You love with absolute devotion and expect the same commitment from your partner. Protective and caring, but your dominating nature may create challenges if your partner also wants to lead. Best with partners who appreciate your strength while maintaining their own identity. Most compatible with Mulank 2, 3, and 9.',
      
      healthConcerns: 'Heart and blood pressure issues, Eye problems, Stress-related conditions, Headaches due to overthinking',
      
      guidance: 'Balance confidence with humility - learn to listen to others and value their opinions. Practice patience and avoid rushing into decisions. Embrace teamwork and celebrate others\' achievements, not just your own. Control your ego and stay grounded despite success. Learn when to let go and not overextend yourself. Trust the process and understand that success takes time. Develop emotional intelligence to strengthen relationships. Practice gratitude daily and lead with compassion rather than dominance.',
      
      spiritualPractice: 'Surya Namaskar (Sun Salutation) every morning, Offer water to the rising Sun, Chant Gayatri Mantra or Sun mantras on Sundays',
      
      remedies: 'Wear Ruby gemstone for strength and vitality, Donate wheat, jaggery, or copper on Sundays, Serve and respect father figures, Practice meditation to control ego, Wear gold-colored or orange clothes on important days, Avoid wearing black and dark blue colors'
    },
    
    2: {
      planet: 'Moon (Chandra)',
      element: 'Water',
      traits: 'Sensitivity, Diplomacy, Cooperation, Intuition, Imagination',
      
      personality: 'You are gentle, kind-hearted, and deeply emotional. Blessed with strong intuition and imagination, you have a natural healing nature and excellent diplomatic skills. Peace-loving and cooperative, you excel at bringing people together and resolving conflicts. Highly creative with artistic abilities, you see beauty in the world that others miss. Your empathetic nature makes you an excellent listener and caring friend.',
      
      strengths: 'Exceptional emotional intelligence, Natural peacemaker and diplomat, Strong intuition and psychic abilities, Creative and artistic talents, Caring and nurturing nature, Adaptable and flexible, Excellent at collaboration, Good at understanding others emotions',
      
      weaknesses: 'Extreme mood swings and emotional instability, Anxiety and worry easily, Lack of focus and clarity, Overly dependent on others approval, Avoid confrontation even when necessary, Can be indecisive, Sensitive to criticism, Tendency to overthink and doubt yourself',
      
      luckyColor: 'White, Cream, Silver, Light Green',
      luckyDay: 'Monday, Friday',
      luckyNumbers: '2, 11, 20, 29',
      
      career: 'Counseling and Psychology (natural healers and listeners), Healthcare and Nursing, Teaching young children, Arts and Creative Writing, Music and Dance, Interior Design and Decoration, Hospitality and Customer Service, Social Work, HR and People Management, Astrology and Spiritual Healing',
      
      relationships: 'Romantic and deeply caring in relationships. You seek emotional security and harmony with your partner. Loyal and devoted, but may become too dependent emotionally. Need a partner who provides stability and reassurance. Can be hurt easily, so need gentle and understanding companions. Most compatible with Mulank 1, 4, and 7.',
      
      healthConcerns: 'Mental health issues like anxiety and depression, Digestive problems, Fluid retention, Sleep disorders, Hormonal imbalances',
      
      guidance: 'Build emotional strength and reduce dependency on others validation. Practice meditation and mindfulness daily to calm your fluctuating mind. Set clear boundaries in relationships to avoid being taken advantage of. Learn to make decisions confidently without excessive worry. Channel your emotions through creative outlets like art or music. Develop focus and complete one task before starting another. Practice saying no when needed and stand up for yourself. Spend time near water bodies for emotional healing and peace.',
      
      spiritualPractice: 'Moon meditation on Mondays (especially during full moon), Chant Moon mantras (Om Som Somaya Namah), Practice yoga and breathing exercises, Keep a gratitude journal',
      
      remedies: 'Wear Pearl gemstone for mental calmness and emotional balance, Donate white items, rice, or milk on Mondays, Show respect and serve mothers and elderly women, Keep a silver item with you, Drink water from a silver vessel, Avoid confrontation on Mondays'
    },
    
    3: {
      planet: 'Jupiter (Guru)',
      element: 'Fire',
      traits: 'Optimism, Creativity, Communication, Wisdom, Expansion',
      
      personality: 'You are naturally optimistic, cheerful, and full of positive energy. Blessed with excellent communication skills, you express yourself beautifully through words and creative pursuits. Knowledgeable and wise beyond your years, you love learning and sharing knowledge with others. Your spiritual inclination and philosophical nature make you a natural teacher and guide. Sociable and friendly, you attract people with your warm personality and infectious enthusiasm.',
      
      strengths: 'Excellent communication and expression, Natural teaching and mentoring abilities, Optimistic and positive mindset, Creative and artistic talents, Spiritual wisdom and guidance, Good financial sense and prosperity attraction, Social charm and popularity, Inspiring and motivational to others',
      
      weaknesses: 'Tendency to overindulge in pleasures (food, luxury), Lack of discipline and focus, Scattered energy across too many projects, Financial delays despite good earning potential, Can be overly talkative or preachy, Difficulty with routine and structure, Procrastination, Overconfidence in abilities',
      
      luckyColor: 'Yellow, Purple, Light Blue',
      luckyDay: 'Thursday, Tuesday',
      luckyNumbers: '3, 12, 21, 30',
      
      career: 'Teaching and Education (natural gurus and mentors), Writing and Journalism, Public Speaking and Motivational Training, Religious or Spiritual Leadership, Creative Arts and Entertainment, Law and Justice, Banking and Finance, Travel and Tourism, Advertising and Communication, Publishing and Media',
      
      relationships: 'Warm, expressive, and affectionate in love. You bring joy and laughter to relationships. Need intellectual stimulation along with emotional connection. Can be flirtatious and enjoy social attention. Loyal once committed but need freedom and space. Compatible partners appreciate your wisdom and accept your need for personal growth. Most compatible with Mulank 1, 5, and 6.',
      
      healthConcerns: 'Liver and digestive issues, Weight gain due to overindulgence, Diabetes risk, Hip and thigh problems, Respiratory issues',
      
      guidance: 'Develop discipline and stick to routines for better productivity. Focus your energy on fewer projects to achieve mastery rather than spreading yourself too thin. Practice financial discipline and avoid unnecessary expenses. Share your knowledge selflessly without expecting recognition. Balance spiritual pursuits with practical responsibilities. Listen more and preach less - not everyone needs advice. Complete tasks before starting new ones. Practice gratitude and humility despite your natural abundance. Engage in charity and help those seeking knowledge.',
      
      spiritualPractice: 'Study spiritual texts and scriptures, Guru seva (service to teachers), Thursday fasting or prayers, Chant Jupiter mantras (Om Gram Greem Graum Sah Gurave Namah), Wear 5 Mukhi Rudraksha for wisdom',
      
      remedies: 'Wear Yellow Sapphire gemstone for prosperity and wisdom, Donate yellow items, turmeric, or books on Thursdays, Respect and serve teachers and elders, Feed cows and Brahmins, Apply yellow sandalwood tilak on forehead, Read religious texts daily'
    },
    
    4: {
      planet: 'Rahu (Shadow Planet)',
      element: 'Air',
      traits: 'Innovation, Analysis, Discipline, Practicality, Stability',
      
      personality: 'You are practical, hardworking, and extremely disciplined. Methodical and systematic, you prefer structured approaches and planned execution. Blessed with analytical and progressive thinking, you see solutions where others see problems. Innovative and tech-savvy, you embrace modern methods and unconventional paths. Loyal and dependable, people trust your judgment and reliability. However, Rahu\'s influence brings sudden changes and uncertainties in life.',
      
      strengths: 'Strong analytical and problem-solving skills, Innovative and progressive thinking, Hardworking and disciplined nature, Reliable and trustworthy, Good with technology and modern systems, Practical and grounded approach, Ability to handle challenges calmly, Focus and determination',
      
      weaknesses: 'Confusion and mental instability at times, Sudden ups and downs in life, Tendency to overthink and worry, Stubbornness and rigid thinking, Difficulty trusting others, Pessimistic outlook, Attract controversies or misunderstandings, Financial instability despite hard work',
      
      luckyColor: 'Blue, Grey, Electric Blue',
      luckyDay: 'Saturday, Sunday',
      luckyNumbers: '4, 13, 22, 31',
      
      career: 'Engineering and Technology (natural problem-solvers), Architecture and Construction, Computer Science and IT, Management and Administration, Research and Development, Real Estate and Property, Accounting and Finance, Government Services, Manufacturing and Production, Event Planning and Organization',
      
      relationships: 'Loyal and committed but may struggle with emotional expression. You seek stable and long-term relationships. Can be overly practical in matters of heart. Need patient partners who understand your reserved nature. Trust issues may create initial barriers. Once comfortable, you are deeply devoted. Most compatible with Mulank 1, 2, and 7.',
      
      healthConcerns: 'Nervous system disorders, Joint and bone problems, Mental stress and anxiety, Digestive issues, Skin problems',
      
      guidance: 'Practice meditation to calm your anxious mind and reduce overthinking. Embrace change rather than resisting it - Rahu brings transformation through chaos. Ground yourself through nature walks and earthing practices. Learn to trust others and delegate work instead of controlling everything. Balance work with relaxation and social connections. Seek stability through spiritual practices rather than material security alone. Be flexible and adapt to sudden changes gracefully. Serve the underprivileged and help animals to reduce Rahu\'s negative effects.',
      
      spiritualPractice: 'Worship Lord Ganesha for removing obstacles, Chant Rahu mantras (Om Rahave Namah) on Saturdays, Wear 8 Mukhi Rudraksha for Rahu balance, Practice grounding meditation',
      
      remedies: 'Wear Hessonite (Gomed) gemstone after astrological consultation, Donate mustard oil, black sesame, or blankets on Saturdays, Feed and serve dogs and poor people, Keep Gomati Chakra for financial stability, Avoid gambling and speculation, Perform Rahu Shanti puja'
    },
    
    5: {
      planet: 'Mercury (Budh)',
      element: 'Earth',
      traits: 'Communication, Intelligence, Adaptability, Curiosity, Business Acumen',
      
      personality: 'You are quick-witted, intelligent, and blessed with excellent communication skills. Naturally curious and versatile, you love learning new things and exploring diverse interests. Adaptable and flexible, you handle change better than most. Your sharp business sense and analytical mind make you great at calculations and commerce. Youthful energy and enthusiasm keep you dynamic throughout life. Social and charming, you easily make friends and connections.',
      
      strengths: 'Exceptional communication and networking skills, Sharp intellect and quick learning ability, Business acumen and financial intelligence, Adaptability to changing situations, Multi-talented and versatile, Good with languages and writing, Youthful energy and enthusiasm, Excellent negotiation skills',
      
      weaknesses: 'Nervous and restless nature, Inconsistency and lack of commitment, Overthinking and mental fatigue, Difficulty making long-term decisions, Can be manipulative in communication, Scattered focus on too many things, Impatience and irritability, Prone to stress and anxiety',
      
      luckyColor: 'Green, Light Green, Turquoise',
      luckyDay: 'Wednesday, Friday',
      luckyNumbers: '5, 14, 23',
      
      career: 'Business and Entrepreneurship (natural traders), Sales and Marketing, Communication and Public Relations, Journalism and Media, Stock Market and Trading, E-commerce and Digital Business, Travel and Tourism industry, Languages and Translation, Content Creation and Social Media, Consulting and Advisory Services',
      
      relationships: 'Fun-loving, expressive, and need variety in relationships. You get bored with monotony and need intellectual stimulation. Can be flirtatious and enjoy social interactions. Commitment may be challenging as you value freedom. Need partners who are equally dynamic and open-minded. Good at communication but may avoid deep emotional discussions. Most compatible with Mulank 1, 3, and 6.',
      
      healthConcerns: 'Nervous system issues and anxiety, Respiratory problems, Skin allergies, Speech or throat problems, Insomnia due to overthinking',
      
      guidance: 'Develop focus and complete tasks before jumping to new ones. Practice mindfulness and meditation to calm your restless mind. Channel your communication skills positively rather than manipulation. Build deeper relationships instead of surface-level connections. Commit to important relationships and responsibilities. Balance mental activity with physical exercise. Learn to slow down and enjoy moments rather than constantly seeking stimulation. Practice speech discipline - think before speaking. Journal your thoughts to organize your scattered mind.',
      
      spiritualPractice: 'Chant Mercury mantras on Wednesdays (Om Budhaya Namah), Feed green vegetables to cows, Practice pranayama for mental clarity, Keep a green plant in your workspace',
      
      remedies: 'Wear Emerald or Green Aventurine gemstone for mental peace, Donate green items, books, or stationery on Wednesdays, Respect siblings and develop good communication with them, Practice speech discipline and avoid gossip, Keep mercury-related yantra, Massage with essential oils to calm nerves'
    },
    
    6: {
      planet: 'Venus (Shukra)',
      element: 'Water',
      traits: 'Love, Harmony, Beauty, Luxury, Compassion',
      
      personality: 'You are naturally charming, artistic, and blessed with refined taste for beauty and luxury. Loving and compassionate, you thrive in harmonious environments and relationships. Family-oriented and nurturing, you take care of loved ones with devotion. Blessed with creative talents in art, music, fashion, and design. Social and hospitable, you enjoy hosting and creating beautiful spaces. Your magnetic personality attracts people and opportunities naturally.',
      
      strengths: 'Artistic and creative talents, Loving and compassionate nature, Strong family values and loyalty, Natural charm and attractiveness, Good at creating harmony and beauty, Excellent taste in fashion and design, Generous and helpful to others, Diplomatic and peace-loving',
      
      weaknesses: 'Tendency towards over-indulgence in pleasures, Emotional dependency and attachment issues, Can be materialistic and luxury-loving, Difficulty saying no to loved ones, Jealousy in relationships, Avoid confrontation even when necessary, Spend excessively on appearance and comfort, Can be lazy and seek easy comforts',
      
      luckyColor: 'Pink, White, Light Blue, Cream',
      luckyDay: 'Friday, Monday',
      luckyNumbers: '6, 15, 24',
      
      career: 'Fashion Design and Styling (natural aesthetics), Interior Design and Decoration, Beauty and Cosmetics industry, Hospitality and Hotel Management, Arts and Entertainment, Jewelry Design, Wedding Planning, Music and Performing Arts, Luxury Brand Marketing, Counseling and Relationship Therapy',
      
      relationships: 'Romantic, affectionate, and devoted in love. You seek deep emotional and physical connection. Need beauty, romance, and harmony in relationships. Can be possessive and jealous but very loyal. May sacrifice too much for loved ones. Ideal partner appreciates your love language and shares your aesthetic values. Most compatible with Mulank 3, 5, and 9.',
      
      healthConcerns: 'Reproductive system issues, Kidney and urinary problems, Diabetes due to sweet indulgence, Throat and thyroid issues, Weight gain',
      
      guidance: 'Balance material desires with spiritual growth - true beauty comes from within. Practice detachment in relationships while remaining loving. Avoid over-indulgence in food, luxury, and pleasures. Develop financial discipline and save for future. Learn to say no when necessary and set healthy boundaries. Focus on inner beauty and character development alongside outer appearance. Channel your love and compassion through service to others. Practice honesty in all relationships rather than people-pleasing. Develop self-worth independent of relationships and material possessions.',
      
      spiritualPractice: 'Worship Goddess Lakshmi on Fridays, Chant Venus mantras (Om Shukraya Namah), Practice loving-kindness meditation, Perform acts of charity to women',
      
      remedies: 'Wear Diamond or White Sapphire gemstone for relationship harmony, Donate white items, rice, or sweets on Fridays, Keep Gomati Chakra for wealth and family peace, Respect and serve women and wife/partner, Offer white flowers to Goddess Lakshmi, Use rose water and sandalwood for spiritual cleansing'
    },
    
    7: {
      planet: 'Ketu (Shadow Planet)',
      element: 'Water',
      traits: 'Spirituality, Intuition, Wisdom, Analysis, Detachment',
      
      personality: 'You are deeply spiritual, intuitive, and philosophical by nature. Blessed with profound wisdom and analytical abilities, you seek truth and meaning in everything. Introspective and contemplative, you spend significant time in self-reflection. Naturally drawn to mysticism, occult sciences, and spiritual practices. Independent and prefer solitude over superficial social gatherings. Your mysterious aura and depth attract people seeking guidance.',
      
      strengths: 'Strong spiritual and intuitive abilities, Deep analytical and research skills, Wisdom beyond years, Natural healing powers, Independent and self-sufficient, Original thinker with unique perspectives, Good at meditation and spiritual practices, Excellent at understanding hidden truths',
      
      weaknesses: 'Tendency towards isolation and loneliness, Difficulty expressing emotions, Can be detached from worldly matters, Fear and anxiety about unknown, Struggle with materialistic success, Misunderstood by others, Prone to depression, Difficulty in relationships due to emotional distance',
      
      luckyColor: 'Purple, Violet, White, Sea Green',
      luckyDay: 'Monday, Thursday',
      luckyNumbers: '7, 16, 25',
      
      career: 'Spiritual Teaching and Healing (natural mystics), Research and Investigation, Astrology and Occult Sciences, Psychology and Counseling, Philosophy and Religious Studies, Writing and Metaphysics, Meditation and Yoga Instruction, Scientific Research, Detective work, Alternative Medicine and Healing',
      
      relationships: 'Reserved and cautious in love. You need time to open up emotionally. Seek spiritual and intellectual connection over physical attraction. May appear distant but are deeply loyal once committed. Need understanding partners who respect your need for solitude and spiritual pursuits. Can be challenging in intimate relationships due to emotional detachment. Most compatible with Mulank 2, 4, and 9.',
      
      healthConcerns: 'Nervous system and mental health issues, Digestive problems, Mysterious illnesses that are hard to diagnose, Lower body pain, Isolation-related depression',
      
      guidance: 'Balance spiritual pursuits with practical worldly responsibilities. Open up emotionally and build meaningful human connections rather than complete detachment. Your spiritual gifts are meant to help others, not isolate yourself. Practice grounding techniques to stay connected to earth while exploring higher realms. Accept material success as a tool for service, not as evil. Share your wisdom and insights with those seeking guidance. Overcome fears through meditation and faith. Spend time in nature for emotional healing. Develop trust in divine timing and surrender to the flow of life.',
      
      spiritualPractice: 'Daily meditation and mantra sadhana, Chant Ketu mantras (Om Ketave Namah), Wear 9 Mukhi Rudraksha for spiritual balance, Visit temples and holy places, Practice detachment through self-inquiry',
      
      remedies: 'Wear Cat\'s Eye gemstone after astrological consultation for focus and protection, Donate spiritual books or support spiritual organizations, Feed and care for dogs (Ketu\'s animal), Practice mindfulness and stay grounded, Light lamp with sesame oil on Tuesdays, Perform Ketu Shanti puja for peace'
    },
    
    8: {
      planet: 'Saturn (Shani)',
      element: 'Earth',
      traits: 'Discipline, Karma, Justice, Patience, Ambition',
      
      personality: 'You are disciplined, hardworking, and deeply connected to karmic principles. Serious and responsible, you take life and duties very seriously. Blessed with immense patience and perseverance, you endure challenges that others cannot. Strong sense of justice and ethics guides your decisions. Ambitious with long-term vision, you build slowly but create lasting foundations. Your practical wisdom and maturity often make you appear older than your age.',
      
      strengths: 'Exceptional discipline and work ethic, Strong sense of justice and integrity, Patience and perseverance through difficulties, Practical wisdom and maturity, Reliable and responsible nature, Long-term planning and strategic thinking, Financial acumen for wealth building, Ability to handle pressure and challenges',
      
      weaknesses: 'Face delays and obstacles in life, Tendency towards pessimism and negativity, Can be too serious and lack joy, Difficulty trusting others, Prone to loneliness and isolation, Harsh and judgmental at times, Health challenges and chronic issues, Fear of failure and rejection',
      
      luckyColor: 'Black, Dark Blue, Navy, Purple',
      luckyDay: 'Saturday',
      luckyNumbers: '8, 17, 26',
      
      career: 'Real Estate and Property Development, Law and Legal Services, Mining and Oil Industry, Construction and Infrastructure, Government and Administrative Services, Elderly Care Services, Archaeology and History, Time Management and Productivity Consulting, Justice and Judicial Services, Manufacturing and Heavy Industry',
      
      relationships: 'Serious and committed in relationships but may struggle with emotional expression. You seek loyalty and long-term commitment over casual romance. Can appear cold or distant due to reserved nature. Take time to trust and open up completely. Once committed, extremely loyal and protective. May face delays or challenges in finding right partner. Most compatible with Mulank 1, 4, and 6.',
      
      healthConcerns: 'Bone and joint problems (arthritis), Chronic diseases, Dental issues, Depression and mental health, Slow metabolism and digestive issues',
      
      guidance: 'Accept that delays are divine timing, not denials - Saturn tests patience before rewarding. Develop a positive mindset and cultivate joy despite challenges. Practice compassion and forgiveness towards yourself and others. Balance work with rest and social connections. Service to the poor and elderly reduces Saturn\'s harsh effects. Trust the karmic process and accept that you reap what you sow. Let go of control and surrender to higher timing. Develop emotional warmth and express feelings to loved ones. Remember that your struggles are building character and lasting success.',
      
      spiritualPractice: 'Worship Lord Shani and Hanuman on Saturdays, Chant Saturn mantras (Om Shanaischaraya Namah), Wear 7 Mukhi Rudraksha for Saturn balance, Offer mustard oil at Hanuman temple, Practice karma yoga (selfless service)',
      
      remedies: 'Wear Blue Sapphire only after proper astrological consultation, Donate black items, iron, or shoes on Saturdays, Serve the poor, elderly, and disabled regularly, Feed crows and respect servants, Light mustard oil lamp for Shani dev, Perform Shani Shanti puja to reduce hardships'
    },
    
    9: {
      planet: 'Mars (Mangal)',
      element: 'Fire',
      traits: 'Courage, Energy, Compassion, Leadership, Spirituality',
      
      personality: 'You are courageous, energetic, and blessed with warrior-like strength. Passionate and driven, you fight for what you believe in with full force. Compassionate humanitarian who cares deeply about social causes and helping others. Natural leader with commanding presence and protective instincts. Spiritual yet practical, you balance material and spiritual pursuits. Your magnetic personality and fierce independence inspire others. Quick to act and face challenges head-on.',
      
      strengths: 'Immense courage and bravery, High energy and enthusiasm, Compassionate and humanitarian nature, Natural leadership and protective instincts, Strong willpower and determination, Spiritual wisdom combined with practical action, Quick decision-making abilities, Inspiring and motivational to others',
      
      weaknesses: 'Quick temper and aggressive behavior, Impulsive and hasty decisions, Can be dominating and forceful, Difficulty controlling anger, Tendency to create conflicts, Impatient with slow progress, Restless and constantly seeking action, May burn out due to excessive energy',
      
      luckyColor: 'Red, Maroon, Orange',
      luckyDay: 'Tuesday, Thursday',
      luckyNumbers: '9, 18, 27',
      
      career: 'Military and Defense Services (natural warriors), Sports and Athletics, Social Work and NGO Leadership, Surgery and Emergency Medicine, Police and Law Enforcement, Firefighting and Rescue Services, Martial Arts Training, Adventure Sports and Exploration, Real Estate Development, Mechanical Engineering',
      
      relationships: 'Passionate, protective, and intensely loyal in love. You love deeply and expect complete honesty and commitment. Can be possessive and jealous due to your protective nature. Need a partner who can handle your strong personality. Quick to anger but also quick to forgive. Romantic and generous with loved ones. Most compatible with Mulank 1, 3, and 6.',
      
      healthConcerns: 'Blood pressure and heart issues, Accidents and injuries, Inflammatory conditions, Anger-related health problems, Excessive heat in body',
      
      guidance: 'Control your anger and practice patience before reacting. Channel your immense energy through physical activities and sports. Use your warrior spirit to fight for justice and help the weak, not to dominate others. Develop emotional regulation and think before acting impulsively. Practice forgiveness and let go of grudges. Balance your aggressive nature with compassion and gentleness. Respect others\' boundaries and opinions. Use your courage to protect and serve humanity. Dedicate your energy to spiritual growth and self-discipline through meditation and devotion to Lord Hanuman.',
      
      spiritualPractice: 'Worship Lord Hanuman for strength and discipline, Chant Mars mantras (Om Mangalaya Namah), Wear 3 Mukhi Rudraksha for Mars balance, Practice physical yoga and martial arts, Recite Hanuman Chalisa daily',
      
      remedies: 'Wear Red Coral gemstone for vitality and courage, Donate red items, lentils, or jaggery on Tuesdays, Visit Hanuman temple regularly, Practice anger management and meditation, Offer red flowers to Lord Hanuman, Perform Mars Shanti puja if needed'
    }
  };
  
  return traits[number] || traits[1];
};
