export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'GreenTech Solutions SG',
    avatar: null,
    rating: 5,
    projectType: 'Web Design & Development',
    content:
      "Working with Light & Kaki Studio was like having creative kakis who truly understood our vision. They didn't just build us a website - they crafted a digital home that perfectly captures our sustainable mission. The warm design aesthetic they brought was something we never knew we needed, but now can't imagine living without.",
  },
  {
    id: 2,
    name: 'Marcus Lim',
    role: 'Marketing Director',
    company: 'Heritage Hospitality',
    avatar: null,
    rating: 5,
    projectType: 'Digital Marketing Campaign',
    content:
      'The team at LXK42 transformed our digital presence completely. Their cultural sensitivity in balancing modern aesthetics with our heritage brand was remarkable. What impressed us most was how they made the entire process feel collaborative - like we were working with trusted friends rather than just another studio.',
  },
  {
    id: 3,
    name: 'Priya Rajendran',
    role: 'Creative Director',
    company: 'Artisan Collective',
    avatar: null,
    rating: 5,
    projectType: 'Branding & Identity',
    content:
      "The 'kaki' philosophy isn't just marketing talk - it's how they actually work. Every brainstorming session felt like hanging out with friends who happened to be incredibly talented designers. They captured the essence of our artisan community with such warmth and authenticity that our members felt seen and celebrated.",
  },
  {
    id: 4,
    name: 'David Tan',
    role: 'Startup Founder',
    company: 'EduTech Innovations',
    avatar: null,
    rating: 5,
    projectType: 'Web App Development',
    content:
      'As a first-time founder, I was overwhelmed by the technical aspects of building our platform. LXK42 not only delivered an incredible web application but educated me throughout the process. Their patient, friend-like approach made what could have been a stressful experience into an enjoyable journey of learning and growth.',
  },
  {
    id: 5,
    name: 'Mei Ling Wong',
    role: 'Operations Manager',
    company: 'Local Favorites F&B',
    avatar: null,
    rating: 5,
    projectType: 'Motion Graphics & Animation',
    content:
      'The animated videos LXK42 created for our social media campaigns have been game-changers. They perfectly captured the soul of our hawker heritage while making it feel fresh and modern. The organic, painterly animation style they developed for us has become our signature - customers now recognize our content instantly.',
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    role: 'Managing Partner',
    company: 'Urban Planning Consultancy',
    avatar: null,
    rating: 5,
    projectType: 'Graphic Design & Branding',
    content:
      'Light & Kaki Studio understood that our work in urban planning needed to feel both professional and approachable to communities. They created visual materials that speak to both government stakeholders and everyday Singaporeans. The way they integrated subtle local cultural elements while maintaining international appeal was masterful.',
  },
];

export const getTestimonialsByService = (/** @type {string} */ service) => {
  const serviceMap = {
    'web-design': ['Web Design & Development', 'Graphic Design & Branding'],
    'web-app': ['Web App Development', 'Web Design & Development'],
    'digital-marketing': ['Digital Marketing Campaign', 'Motion Graphics & Animation'],
    branding: ['Branding & Identity', 'Graphic Design & Branding'],
    'graphic-design': ['Graphic Design & Branding', 'Branding & Identity'],
    'motion-graphics': ['Motion Graphics & Animation', 'Digital Marketing Campaign'],
  };

  const relevantTypes = serviceMap[/** @type {keyof typeof serviceMap} */ (service)] || [];
  return testimonials.filter(testimonial => relevantTypes.includes(testimonial.projectType));
};

export const getFeaturedTestimonials = (count = 3) => {
  // Return a balanced mix of different project types
  const featured = [
    testimonials[0], // Web Design
    testimonials[1], // Digital Marketing
    testimonials[2], // Branding
  ];
  return featured.slice(0, count);
};
