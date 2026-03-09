// ========================================
// GRAPHIC DESIGN PORTFOLIO DATA – MNC Fresher Edition
// ========================================
const portfolioData = {
  name: 'Gunja',
  tagline: 'Graphic Designer | M.Sc. Computer Science Graduate',
  location: 'New Delhi, India',
  phone: '+91 7827601318',
  email: 'Gunjagunja899@gmail.com',
  resumeLink: 'assets/gk-resume.pdf',

  typingTitles: [
    'Graphic Designer',
    'Visual Communication Designer',
    'Brand Identity Creator',
    'AI-Powered Designer',
    'UI/UX Design Enthusiast'
  ],

  about: `M.Sc. Computer Science graduate with a strong foundation in visual design and brand communication. I specialise in crafting professional brand identities, digital marketing creatives, and AI-assisted design work using industry-standard tools. My technical background combined with creative expertise makes me uniquely positioned to deliver design solutions that are both visually compelling and strategically effective — skills I am eager to bring to a forward-thinking organisation.`,

  stats: [
    { number: '20+', label: 'Design Projects',    icon: '🎨' },
    { number: '7+',  label: 'Certifications',     icon: '📜' },
    { number: 'M.Sc.', label: 'Computer Science', icon: '🎓' },
    { number: '5+',  label: 'Tools Mastered',     icon: '⚡' }
  ],

  skills: [
    { category: 'Design Software',  items: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro', 'CorelDRAW', 'Figma'] },
    { category: 'Design Expertise', items: ['Logo & Brand Identity', 'Social Media Design', 'Poster & Banner Design', 'Typography', 'Color Theory', 'Visual Hierarchy'] },
    { category: 'AI Design Tools',  items: ['Midjourney', 'DALL-E 3', 'Adobe Firefly', 'Stable Diffusion', 'Leonardo AI'] },
    { category: 'Technical Skills', items: ['HTML/CSS Basics', 'Digital Marketing', 'MS Office Suite', 'Data Entry (35 WPM)', 'Research & Documentation'] },
    { category: 'Fashion & Textile Design', items: ['Lehenga Design', 'Embroidery Digitizing', 'Wilcom EmbroideryStudio', 'Pattern Making', 'Zari & Bead Work', 'Bridal Wear Concepts'] }
  ],

  education: [
    {
      degree: 'M.Sc. Computer Science',
      institution: 'GCW',
      year: '2024 – Present',
      note: 'Final Year',
      icon: 'ri-graduation-cap-line'
    },
    {
      degree: 'B.Sc. (General)',
      institution: 'IGNOU',
      year: '2021 – 2024',
      note: 'Completed',
      icon: 'ri-book-line'
    },
    {
      degree: 'B.Sc. Medical Lab Technology',
      institution: 'Singhania University',
      year: '2019 – 2022',
      note: 'Completed',
      icon: 'ri-flask-line'
    },
    {
      degree: 'Class XII – CBSE',
      institution: 'Delhi',
      year: '2020',
      note: 'Passed',
      icon: 'ri-award-line'
    }
  ],

  certifications: [
    { title: 'Web Designing & Graphic Workshop',        org: "Khazani Women's Vocational Institute, New Delhi", icon: 'ri-palette-line' },
    { title: 'Digital Marketing – Selling via Digital Media', org: 'ICICI Foundation',  icon: 'ri-megaphone-line' },
    { title: 'Data Entry Operator (NSDC Approved)',     org: 'NIIT Foundation',  icon: 'ri-keyboard-line' },
    { title: 'Microsoft YouthSpark – AI & Code Future', org: 'Microsoft & NASSCOM Foundation', icon: 'ri-robot-line' },
    { title: 'Career Edge Professional Program',        org: 'NIIT Foundation',  icon: 'ri-briefcase-line' },
    { title: 'English & Personality Development',       org: 'Freedom English Academy', icon: 'ri-speak-line' },
    { title: 'Civil Defence Basic Training Certificate',org: 'Govt. of NCT Delhi', icon: 'ri-shield-check-line' }
  ],

  social: {
    instagram: 'https://instagram.com',
    behance:   'https://behance.net',
    linkedin:  'https://linkedin.com',
    email:     'mailto:Gunjagunja899@gmail.com'
  },

  // ── Featured Logo Designs ─────────────────────────────────
  featuredLogos: [
    {
      id: 'fl1',
      brand: 'TechNova',
      category: 'Tech Startup',
      tagline: 'Innovation Reimagined',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="none" stroke="white" stroke-width="3" opacity="0.9"/>
        <polygon points="50,18 80,34 80,66 50,82 20,66 20,34" fill="none" stroke="white" stroke-width="1.5" opacity="0.3"/>
        <path d="M38,46 L62,46 M50,46 L50,68" stroke="white" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="50" cy="38" r="4.5" fill="white" opacity="0.9"/>
      </svg>`
    },
    {
      id: 'fl2',
      brand: 'Bloom Beauty',
      category: 'Cosmetics Brand',
      tagline: 'Elegance Redefined',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" fill="none" stroke="white" stroke-width="2" opacity="0.9"/>
        <circle cx="50" cy="50" r="36" fill="none" stroke="white" stroke-width="1" opacity="0.35" stroke-dasharray="3 5"/>
        <text x="50" y="57" text-anchor="middle" dominant-baseline="middle" font-size="46" font-weight="900" fill="white" font-family="Georgia,serif" font-style="italic" opacity="0.95">B</text>
        <circle cx="50" cy="6"  r="3"   fill="white" opacity="0.7"/>
        <circle cx="86" cy="28" r="2.5" fill="white" opacity="0.55"/>
        <circle cx="86" cy="72" r="2.5" fill="white" opacity="0.55"/>
        <circle cx="50" cy="94" r="3"   fill="white" opacity="0.7"/>
        <circle cx="14" cy="72" r="2.5" fill="white" opacity="0.55"/>
        <circle cx="14" cy="28" r="2.5" fill="white" opacity="0.55"/>
      </svg>`
    },
    {
      id: 'fl3',
      brand: 'GreenEarth',
      category: 'Organic Brand',
      tagline: 'Pure. Natural. Sustainable.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="43" fill="none" stroke="white" stroke-width="2.5" opacity="0.8"/>
        <ellipse cx="50" cy="50" rx="43" ry="20" fill="none" stroke="white" stroke-width="1" opacity="0.35"/>
        <line x1="7" y1="50" x2="93" y2="50" stroke="white" stroke-width="1" opacity="0.35"/>
        <path d="M50,18 C70,22 82,38 78,58 C74,74 60,82 48,78 C30,72 24,54 34,36 C39,26 48,18 50,18 Z" fill="white" opacity="0.88"/>
        <path d="M50,78 L50,90" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
        <path d="M44,85 C44,85 50,83 56,85" stroke="white" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
      </svg>`
    },
    {
      id: 'fl4',
      brand: 'FitPulse',
      category: 'Fitness Brand',
      tagline: 'Move. Perform. Excel.',
      gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,6 94,50 50,94 6,50" fill="none" stroke="white" stroke-width="3" opacity="0.85"/>
        <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="white" stroke-width="1.2" opacity="0.25"/>
        <polyline points="18,52 28,52 34,34 42,70 50,38 58,62 66,50 73,50 82,50" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`
    },
    {
      id: 'fl5',
      brand: 'LunaKids',
      category: "Children's Education",
      tagline: 'Learn. Play. Grow.',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M65,16 C44,20 30,37 30,57 C30,76 44,92 65,96 C40,94 18,78 18,55 C18,32 38,15 65,16 Z" fill="white" opacity="0.92"/>
        <circle cx="78" cy="26" r="5"   fill="white" opacity="0.9"/>
        <circle cx="88" cy="46" r="3"   fill="white" opacity="0.7"/>
        <circle cx="84" cy="66" r="3.5" fill="white" opacity="0.8"/>
        <circle cx="72" cy="13" r="2.5" fill="white" opacity="0.65"/>
        <path d="M90,30 L92,24 L94,30 L100,30 L95,34 L97,40 L92,36 L87,40 L89,34 L84,30 Z" fill="white" opacity="0.75"/>
      </svg>`
    }
  ],

  // ── Full Portfolio ────────────────────────────────────────
  portfolio: [
    // LOGOS
    {
      id: 1,
      category: 'logo',
      title: 'TechNova – Brand Identity',
      description: 'Complete brand identity system for a cutting-edge tech startup. Designed a hexagonal icon mark that communicates precision and technological innovation, paired with a bold sans-serif wordmark and a cohesive blue-violet colour palette suitable for digital and print applications.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: '#667eea',
      tags: ['Logo Design', 'Brand Identity', 'Tech Startup'],
      size: 'wide',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="none" stroke="white" stroke-width="3" opacity="0.9"/>
        <polygon points="50,18 80,34 80,66 50,82 20,66 20,34" fill="none" stroke="white" stroke-width="1.5" opacity="0.3"/>
        <path d="M38,46 L62,46 M50,46 L50,68" stroke="white" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="50" cy="38" r="4.5" fill="white" opacity="0.9"/>
      </svg>`
    },
    {
      id: 2,
      category: 'logo',
      title: 'Bloom Beauty – Luxury Cosmetics',
      description: 'Elegant brand identity for a premium cosmetics brand targeting urban women aged 25–40. The circular emblem with a stylised italic "B" and decorative dot motifs communicates femininity, luxury, and timelessness — appropriate for packaging, digital, and retail signage.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: '#f093fb',
      tags: ['Logo Design', 'Luxury Branding', 'Cosmetics'],
      size: 'tall',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" fill="none" stroke="white" stroke-width="2" opacity="0.9"/>
        <circle cx="50" cy="50" r="36" fill="none" stroke="white" stroke-width="1" opacity="0.35" stroke-dasharray="3 5"/>
        <text x="50" y="57" text-anchor="middle" dominant-baseline="middle" font-size="46" font-weight="900" fill="white" font-family="Georgia,serif" font-style="italic" opacity="0.95">B</text>
        <circle cx="50" cy="6"  r="3"   fill="white" opacity="0.7"/>
        <circle cx="86" cy="28" r="2.5" fill="white" opacity="0.55"/>
        <circle cx="86" cy="72" r="2.5" fill="white" opacity="0.55"/>
        <circle cx="50" cy="94" r="3"   fill="white" opacity="0.7"/>
        <circle cx="14" cy="72" r="2.5" fill="white" opacity="0.55"/>
        <circle cx="14" cy="28" r="2.5" fill="white" opacity="0.55"/>
      </svg>`
    },
    {
      id: 3,
      category: 'logo',
      title: 'GreenEarth Organics – Eco Brand',
      description: 'Nature-inspired brand identity for an organic food and wellness company. The globe-leaf fusion mark communicates sustainability, freshness, and global responsibility. Designed to work across product packaging, digital platforms, and retail environments.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      accent: '#43e97b',
      tags: ['Logo Design', 'Eco Branding', 'Organic'],
      size: 'normal',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="43" fill="none" stroke="white" stroke-width="2.5" opacity="0.8"/>
        <ellipse cx="50" cy="50" rx="43" ry="20" fill="none" stroke="white" stroke-width="1" opacity="0.35"/>
        <line x1="7" y1="50" x2="93" y2="50" stroke="white" stroke-width="1" opacity="0.35"/>
        <path d="M50,18 C70,22 82,38 78,58 C74,74 60,82 48,78 C30,72 24,54 34,36 C39,26 48,18 50,18 Z" fill="white" opacity="0.88"/>
        <path d="M50,78 L50,90" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
        <path d="M44,85 C44,85 50,83 56,85" stroke="white" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
      </svg>`
    },
    {
      id: 4,
      category: 'logo',
      title: 'FitPulse – Fitness & Wellness',
      description: 'High-energy brand identity for a fitness and wellness startup. The diamond-frame with an ECG pulse line conveys vitality, performance, and movement. Adaptable for gym signage, app icons, merchandise, and social media branding.',
      gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
      accent: '#f7971e',
      tags: ['Logo Design', 'Fitness Brand', 'Sports'],
      size: 'normal',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,6 94,50 50,94 6,50" fill="none" stroke="white" stroke-width="3" opacity="0.85"/>
        <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="white" stroke-width="1.2" opacity="0.25"/>
        <polyline points="18,52 28,52 34,34 42,70 50,38 58,62 66,50 73,50 82,50" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`
    },
    {
      id: 5,
      category: 'logo',
      title: "LunaKids – Children's Education",
      description: "Whimsical yet professional logo for a children's e-learning and toy brand. The crescent moon with twinkling star elements and a playful mascot communicates imagination, wonder, and safety — perfectly aligned with the brand's young audience.",
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      accent: '#a18cd1',
      tags: ['Logo Design', "Children's Brand", 'Education'],
      size: 'wide',
      svgLogo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M65,16 C44,20 30,37 30,57 C30,76 44,92 65,96 C40,94 18,78 18,55 C18,32 38,15 65,16 Z" fill="white" opacity="0.92"/>
        <circle cx="78" cy="26" r="5"   fill="white" opacity="0.9"/>
        <circle cx="88" cy="46" r="3"   fill="white" opacity="0.7"/>
        <circle cx="84" cy="66" r="3.5" fill="white" opacity="0.8"/>
        <circle cx="72" cy="13" r="2.5" fill="white" opacity="0.65"/>
        <path d="M90,30 L92,24 L94,30 L100,30 L95,34 L97,40 L92,36 L87,40 L89,34 L84,30 Z" fill="white" opacity="0.75"/>
      </svg>`
    },

    // SOCIAL MEDIA
    {
      id: 6,
      category: 'social',
      title: 'Summer Sale – Instagram Campaign',
      description: 'High-engagement Instagram post series for a retail Summer Sale campaign. Uses bold typography hierarchy, warm pastel palette, and strategic whitespace to drive conversions. Designed following Instagram best-practice dimensions (1080×1080px) and brand guidelines.',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #ffecd2 100%)',
      accent: '#ff9a9e',
      tags: ['Instagram', 'Social Media Marketing', 'Campaign'],
      symbol: '☀️',
      size: 'tall'
    },
    {
      id: 7,
      category: 'social',
      title: 'Grand Opening – Facebook Cover',
      description: 'Eye-catching Facebook cover and event banner for a flagship store grand opening. The deep teal-purple gradient with celebratory typography and event details drove 2,000+ organic reach on launch day.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      accent: '#30cfd0',
      tags: ['Facebook', 'Event Marketing', 'Cover Design'],
      symbol: '🎉',
      size: 'wide'
    },
    {
      id: 8,
      category: 'social',
      title: 'Limited Offer – Promotional Creative',
      description: 'Urgency-driven promotional creative with FOMO-inducing design elements. The bold red/orange gradient and countdown-style layout encourage immediate consumer action. Delivered across Instagram Stories, Facebook Posts, and WhatsApp Status.',
      gradient: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
      accent: '#ff416c',
      tags: ['Promotional Design', 'Performance Marketing', 'Digital Ad'],
      symbol: '🔥',
      size: 'normal'
    },

    // POSTERS
    {
      id: 9,
      category: 'poster',
      title: 'Neon Beats – Music Festival Poster',
      description: 'Premium A2 event poster for an annual music festival. The dark neon aesthetic with layered typographic elements, glitch-inspired treatments, and atmospheric depth creates a premium collector-worthy design. Print-ready at 300dpi with CMYK colour profile.',
      gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      accent: '#bf00ff',
      tags: ['Event Poster', 'Print Design', 'Music'],
      symbol: '🎵',
      size: 'tall'
    },
    {
      id: 10,
      category: 'poster',
      title: 'Mega Sale Weekend – Retail Banner',
      description: 'Large-format retail sale banner designed for both digital display boards and print flex banners. The warm golden gradient with bold hierarchy and product callouts has proven high conversion in retail environments.',
      gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      accent: '#fda085',
      tags: ['Retail Banner', 'Print & Digital', 'Sale Campaign'],
      symbol: '🛍️',
      size: 'wide'
    },
    {
      id: 11,
      category: 'poster',
      title: 'Fashion Week 2025 – Editorial Ad',
      description: 'Sophisticated full-page editorial advertisement for a Fashion Week event. Dark, minimal aesthetic with precise typographic hierarchy and high contrast delivers a luxury feel appropriate for magazine print and premium digital placements.',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      accent: '#e94560',
      tags: ['Editorial Design', 'Fashion', 'Luxury Print Ad'],
      symbol: '👗',
      size: 'normal'
    },

    // AI DESIGN
    {
      id: 12,
      category: 'ai',
      title: 'AI Dreamscape – Digital Artwork',
      description: 'Surreal concept artwork created using Midjourney v6 with prompt engineering and iterative refinement. Post-processed in Adobe Photoshop for colour grading, sharpening, and composite adjustments. Demonstrates proficiency in AI art direction and prompt crafting.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      accent: '#4facfe',
      tags: ['AI Art Direction', 'Midjourney', 'Digital Artwork'],
      symbol: '🌌',
      size: 'wide'
    },
    {
      id: 13,
      category: 'ai',
      title: 'Futura City – AI Concept Poster',
      description: 'Futuristic cityscape concept poster generated with DALL-E 3, then refined and composited in Adobe Photoshop. Text elements, UI overlays, and colour correction were added manually to produce a polished, print-ready final piece.',
      gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      accent: '#00c9ff',
      tags: ['AI Generation', 'DALL-E 3', 'Photoshop Compositing'],
      symbol: '🏙️',
      size: 'tall'
    },
    {
      id: 14,
      category: 'ai',
      title: 'Abstract Marks – AI Logo Series',
      description: 'Series of abstract logo concepts generated using Adobe Firefly and refined through iterative vectorisation in Adobe Illustrator. Demonstrates a hybrid AI-human workflow for rapid logo ideation and professional output delivery.',
      gradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
      accent: '#c471f5',
      tags: ['AI Logo Ideation', 'Adobe Firefly', 'Illustrator'],
      symbol: '✨',
      size: 'normal'
    },

    // ── FASHION DESIGN – Lehenga Collection ─────────────────────
    {
      id: 15,
      category: 'fashion',
      title: 'Royal Floral Bridal Lehenga',
      description: 'Traditional bridal lehenga inspired by Mughal floral gardens. Deep maroon silk base with rich gold zari embroidery. Large symmetrical floral medallion at the centre, flanked by scattered bud motifs, and a heavily embroidered scalloped border at the hem for maximum visual impact.',
      embroideryLogic: [
        'Symmetry (Santulan): Floral motifs arranged in circular symmetry so the complete lehenga reads as one balanced composition.',
        'Density Control: Heavy zari embroidery at the lower border that transitions to scattered lighter buds moving upward toward the waist.',
        'Color Harmony: Gold zari with copper and blush-pink threads complement the deep maroon base without overpowering it.',
        'Traditional Elements: Floral and paisley vocabulary drawn from authentic Mughal embroidery for a timeless heirloom aesthetic.',
        'Layering: Base satin-stitch zari laid first, then bead and stone work added on top for a rich three-dimensional texture.'
      ],
      gradient: 'linear-gradient(135deg, #6B1220 0%, #2D0A10 100%)',
      accent: '#D4AF37',
      tags: ['Bridal Wear', 'Floral Embroidery', 'Zari Work', 'Traditional Design'],
      size: 'tall',
      svgDesign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M70,45 L130,45 L185,188 L15,188 Z" fill="#6B1220" opacity="0.95"/>
  <rect x="62" y="28" width="76" height="20" rx="4" fill="#4A0E17" stroke="#D4AF37" stroke-width="2"/>
  <line x1="66" y1="40" x2="134" y2="40" stroke="#D4AF37" stroke-width="0.8" opacity="0.55"/>
  <line x1="100" y1="45" x2="100" y2="162" stroke="#4A0E17" stroke-width="2" opacity="0.55"/>
  <line x1="80" y1="45" x2="45" y2="162" stroke="#4A0E17" stroke-width="1" opacity="0.3"/>
  <line x1="120" y1="45" x2="155" y2="162" stroke="#4A0E17" stroke-width="1" opacity="0.3"/>
  <path d="M15,160 Q100,172 185,160 L185,188 L15,188 Z" fill="#3D0C14"/>
  <line x1="15" y1="160" x2="185" y2="160" stroke="#D4AF37" stroke-width="2" opacity="0.85"/>
  <path d="M18,174 Q24,168 30,174 Q36,168 42,174 Q48,168 54,174 Q60,168 66,174 Q72,168 78,174 Q84,168 90,174 Q96,168 102,174 Q108,168 114,174 Q120,168 126,174 Q132,168 138,174 Q144,168 150,174 Q156,168 162,174 Q168,168 174,174 Q180,168 186,174" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.75"/>
  <circle cx="100" cy="105" r="20" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.6"/>
  <circle cx="100" cy="105" r="6" fill="#D4AF37" opacity="0.85"/>
  <ellipse cx="100" cy="90" rx="4" ry="9" fill="#D4AF37" opacity="0.55"/>
  <ellipse cx="100" cy="120" rx="4" ry="9" fill="#D4AF37" opacity="0.55"/>
  <ellipse cx="85" cy="105" rx="9" ry="4" fill="#D4AF37" opacity="0.55"/>
  <ellipse cx="115" cy="105" rx="9" ry="4" fill="#D4AF37" opacity="0.55"/>
  <ellipse cx="89" cy="94" rx="4" ry="9" fill="#D4AF37" opacity="0.4" transform="rotate(45 89 94)"/>
  <ellipse cx="111" cy="94" rx="4" ry="9" fill="#D4AF37" opacity="0.4" transform="rotate(-45 111 94)"/>
  <ellipse cx="89" cy="116" rx="4" ry="9" fill="#D4AF37" opacity="0.4" transform="rotate(-45 89 116)"/>
  <ellipse cx="111" cy="116" rx="4" ry="9" fill="#D4AF37" opacity="0.4" transform="rotate(45 111 116)"/>
  <circle cx="55" cy="128" r="9" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.5"/>
  <circle cx="55" cy="128" r="3.5" fill="#D4AF37" opacity="0.5"/>
  <circle cx="145" cy="128" r="9" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.5"/>
  <circle cx="145" cy="128" r="3.5" fill="#D4AF37" opacity="0.5"/>
  <circle cx="72" cy="70" r="2" fill="#D4AF37" opacity="0.5"/>
  <circle cx="128" cy="70" r="2" fill="#D4AF37" opacity="0.5"/>
  <circle cx="86" cy="62" r="1.5" fill="#D4AF37" opacity="0.4"/>
  <circle cx="114" cy="62" r="1.5" fill="#D4AF37" opacity="0.4"/>
  <circle cx="60" cy="86" r="1.5" fill="#D4AF37" opacity="0.35"/>
  <circle cx="140" cy="86" r="1.5" fill="#D4AF37" opacity="0.35"/>
</svg>`
    },
    {
      id: 16,
      category: 'fashion',
      title: 'Peacock Heritage Lehenga',
      description: 'Heritage-inspired lehenga celebrating the beauty of the Indian peacock. Emerald green velvet base with panel-based peacock motif composition. Central peacock figure with radiating feather work, stone embellishments, and sequin detailing create depth and festive luminosity.',
      embroideryLogic: [
        'Panel Layout: Lehenga divided into three vertical panels with the central peacock as the dominant focal composition.',
        'Motif Focus: Full peacock body with spread tail feathers is the primary design statement, supporting smaller side motifs.',
        'Texture Layering: Thread embroidery forms the base, sequins add shimmer, and semi-precious stones provide dimensional depth.',
        'Feather Gradation: Feather tips transition from deep teal to bright emerald, mimicking natural peacock plumage gradation.',
        'Symmetry: Mirror-image feather arrangement on either side of the central peacock ensures full visual balance.'
      ],
      gradient: 'linear-gradient(135deg, #1A5E40 0%, #0A2E1E 100%)',
      accent: '#40E0A0',
      tags: ['Heritage Wear', 'Peacock Motif', 'Stone Embroidery', 'Velvet Base'],
      size: 'tall',
      svgDesign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M70,45 L130,45 L185,188 L15,188 Z" fill="#1A5E40" opacity="0.95"/>
  <rect x="62" y="28" width="76" height="20" rx="4" fill="#0F3D29" stroke="#40E0A0" stroke-width="2"/>
  <line x1="66" y1="40" x2="134" y2="40" stroke="#40E0A0" stroke-width="0.8" opacity="0.5"/>
  <line x1="100" y1="45" x2="100" y2="160" stroke="#0F3D29" stroke-width="2" opacity="0.6"/>
  <line x1="76" y1="45" x2="42" y2="160" stroke="#0F3D29" stroke-width="1.5" opacity="0.4"/>
  <line x1="124" y1="45" x2="158" y2="160" stroke="#0F3D29" stroke-width="1.5" opacity="0.4"/>
  <path d="M15,160 Q100,172 185,160 L185,188 L15,188 Z" fill="#0F3D29"/>
  <line x1="15" y1="160" x2="185" y2="160" stroke="#40E0A0" stroke-width="2" opacity="0.85"/>
  <ellipse cx="100" cy="112" rx="7" ry="13" fill="#40E0A0" opacity="0.65"/>
  <circle cx="100" cy="96" r="7" fill="#1A5E40" stroke="#40E0A0" stroke-width="1.8"/>
  <circle cx="100" cy="93" r="2.5" fill="#40E0A0"/>
  <line x1="100" y1="89" x2="100" y2="82" stroke="#40E0A0" stroke-width="1.5"/>
  <circle cx="100" cy="80" r="3.2" fill="#40E0A0" opacity="0.9"/>
  <path d="M100,103 Q87,84 74,72" fill="none" stroke="#40E0A0" stroke-width="1.8" opacity="0.75"/>
  <circle cx="73" cy="71" r="5.5" fill="none" stroke="#40E0A0" stroke-width="1.5"/>
  <circle cx="73" cy="71" r="2.2" fill="#40E0A0" opacity="0.8"/>
  <path d="M100,103 Q113,84 126,72" fill="none" stroke="#40E0A0" stroke-width="1.8" opacity="0.75"/>
  <circle cx="127" cy="71" r="5.5" fill="none" stroke="#40E0A0" stroke-width="1.5"/>
  <circle cx="127" cy="71" r="2.2" fill="#40E0A0" opacity="0.8"/>
  <path d="M100,103 Q82,88 68,58" fill="none" stroke="#40E0A0" stroke-width="1" opacity="0.45"/>
  <path d="M100,103 Q118,88 132,58" fill="none" stroke="#40E0A0" stroke-width="1" opacity="0.45"/>
  <path d="M100,125 Q67,140 41,155" fill="none" stroke="#40E0A0" stroke-width="1.8" opacity="0.65"/>
  <circle cx="39" cy="156" r="5.5" fill="none" stroke="#40E0A0" stroke-width="1.5"/>
  <circle cx="39" cy="156" r="2.2" fill="#40E0A0" opacity="0.7"/>
  <path d="M100,125 Q133,140 159,155" fill="none" stroke="#40E0A0" stroke-width="1.8" opacity="0.65"/>
  <circle cx="161" cy="156" r="5.5" fill="none" stroke="#40E0A0" stroke-width="1.5"/>
  <circle cx="161" cy="156" r="2.2" fill="#40E0A0" opacity="0.7"/>
  <ellipse cx="42" cy="105" rx="5" ry="9" fill="#40E0A0" opacity="0.28"/>
  <ellipse cx="158" cy="105" rx="5" ry="9" fill="#40E0A0" opacity="0.28"/>
  <path d="M18,170 L28,165 L38,170 L48,165 L58,170 L68,165 L78,170 L88,165 L98,170 L108,165 L118,170 L128,165 L138,170 L148,165 L158,170 L168,165 L178,170 L188,165" fill="none" stroke="#40E0A0" stroke-width="1.5" opacity="0.7"/>
  <circle cx="33" cy="174" r="2" fill="#40E0A0" opacity="0.7"/>
  <circle cx="68" cy="174" r="2" fill="#40E0A0" opacity="0.7"/>
  <circle cx="103" cy="174" r="2" fill="#40E0A0" opacity="0.7"/>
  <circle cx="138" cy="174" r="2" fill="#40E0A0" opacity="0.7"/>
  <circle cx="173" cy="174" r="2" fill="#40E0A0" opacity="0.7"/>
</svg>`
    },
    {
      id: 17,
      category: 'fashion',
      title: 'Modern Geometric Festive Lehenga',
      description: 'Contemporary festive lehenga merging traditional craftsmanship with modern geometric sensibility. Midnight blue silk with a structured diamond lattice grid across the skirt. Shisha mirror work at grid intersections reflects light for glamorous festive sparkle — ideal for modern brides and wedding guests seeking a structured, contemporary silhouette.',
      embroideryLogic: [
        'Repeating Geometric Pattern: Diamond lattice grid ensures a structured, uniform design distribution across all skirt panels.',
        'Visual Rhythm: Repeating geometric structure creates a modern architectural rhythm, distinguishing it from traditional organic motifs.',
        'Light Reflection (Shisha): Mirror work at every grid intersection maximises light play and festive luminosity from all angles.',
        'Contrast Layers: Silver thread outlines each geometric cell, creating crisp contrast against the dark midnight blue base.',
        'Consistent Density: Unlike classical designs, geometric embroidery maintains even density across the entire surface for a balanced modern look.'
      ],
      gradient: 'linear-gradient(135deg, #0D1B3E 0%, #060D1E 100%)',
      accent: '#C0C8E8',
      tags: ['Contemporary Design', 'Geometric Pattern', 'Mirror Work', 'Festive Wear'],
      size: 'tall',
      svgDesign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M70,45 L130,45 L185,188 L15,188 Z" fill="#0D1B3E" opacity="0.97"/>
  <rect x="62" y="28" width="76" height="20" rx="4" fill="#060D1E" stroke="#C0C8E8" stroke-width="2"/>
  <line x1="66" y1="40" x2="134" y2="40" stroke="#C0C8E8" stroke-width="0.8" opacity="0.5"/>
  <line x1="25" y1="65" x2="175" y2="65" stroke="#C0C8E8" stroke-width="0.7" opacity="0.2"/>
  <line x1="19" y1="88" x2="181" y2="88" stroke="#C0C8E8" stroke-width="0.7" opacity="0.2"/>
  <line x1="15" y1="110" x2="185" y2="110" stroke="#C0C8E8" stroke-width="0.7" opacity="0.2"/>
  <line x1="14" y1="132" x2="186" y2="132" stroke="#C0C8E8" stroke-width="0.7" opacity="0.2"/>
  <line x1="14" y1="152" x2="186" y2="152" stroke="#C0C8E8" stroke-width="0.7" opacity="0.2"/>
  <line x1="70" y1="45" x2="15" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="83" y1="45" x2="33" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="97" y1="45" x2="53" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="110" y1="45" x2="74" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="124" y1="45" x2="97" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="130" y1="45" x2="185" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="117" y1="45" x2="167" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="103" y1="45" x2="147" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="90" y1="45" x2="123" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <line x1="77" y1="45" x2="100" y2="188" stroke="#C0C8E8" stroke-width="0.7" opacity="0.16"/>
  <circle cx="100" cy="65" r="4.5" fill="#C0C8E8" opacity="0.4"/>
  <circle cx="100" cy="65" r="2" fill="white" opacity="0.65"/>
  <circle cx="79" cy="88" r="4.5" fill="#C0C8E8" opacity="0.38"/>
  <circle cx="79" cy="88" r="2" fill="white" opacity="0.6"/>
  <circle cx="121" cy="88" r="4.5" fill="#C0C8E8" opacity="0.38"/>
  <circle cx="121" cy="88" r="2" fill="white" opacity="0.6"/>
  <circle cx="62" cy="110" r="4.5" fill="#C0C8E8" opacity="0.35"/>
  <circle cx="62" cy="110" r="2" fill="white" opacity="0.55"/>
  <circle cx="100" cy="110" r="6.5" fill="#C0C8E8" opacity="0.58"/>
  <circle cx="100" cy="110" r="2.8" fill="white" opacity="0.8"/>
  <circle cx="138" cy="110" r="4.5" fill="#C0C8E8" opacity="0.35"/>
  <circle cx="138" cy="110" r="2" fill="white" opacity="0.55"/>
  <circle cx="47" cy="132" r="4" fill="#C0C8E8" opacity="0.3"/>
  <circle cx="47" cy="132" r="1.8" fill="white" opacity="0.5"/>
  <circle cx="78" cy="132" r="4.5" fill="#C0C8E8" opacity="0.38"/>
  <circle cx="78" cy="132" r="2" fill="white" opacity="0.58"/>
  <circle cx="122" cy="132" r="4.5" fill="#C0C8E8" opacity="0.38"/>
  <circle cx="122" cy="132" r="2" fill="white" opacity="0.58"/>
  <circle cx="153" cy="132" r="4" fill="#C0C8E8" opacity="0.3"/>
  <circle cx="153" cy="132" r="1.8" fill="white" opacity="0.5"/>
  <circle cx="100" cy="110" r="13" fill="none" stroke="#C0C8E8" stroke-width="1" opacity="0.32"/>
  <path d="M15,158 Q100,168 185,158 L185,188 L15,188 Z" fill="#060D1E"/>
  <line x1="15" y1="158" x2="185" y2="158" stroke="#C0C8E8" stroke-width="2" opacity="0.7"/>
  <polygon points="36,173 42,167 48,173 42,179" fill="none" stroke="#C0C8E8" stroke-width="1" opacity="0.65"/>
  <circle cx="42" cy="173" r="1.5" fill="#C0C8E8" opacity="0.8"/>
  <polygon points="70,173 76,167 82,173 76,179" fill="none" stroke="#C0C8E8" stroke-width="1" opacity="0.65"/>
  <circle cx="76" cy="173" r="1.5" fill="#C0C8E8" opacity="0.8"/>
  <polygon points="100,173 106,167 112,173 106,179" fill="none" stroke="#C0C8E8" stroke-width="1" opacity="0.65"/>
  <circle cx="106" cy="173" r="1.5" fill="#C0C8E8" opacity="0.8"/>
  <polygon points="130,173 136,167 142,173 136,179" fill="none" stroke="#C0C8E8" stroke-width="1" opacity="0.65"/>
  <circle cx="136" cy="173" r="1.5" fill="#C0C8E8" opacity="0.8"/>
  <polygon points="160,173 166,167 172,173 166,179" fill="none" stroke="#C0C8E8" stroke-width="1" opacity="0.65"/>
  <circle cx="166" cy="173" r="1.5" fill="#C0C8E8" opacity="0.8"/>
</svg>`
    }
  ]
};
