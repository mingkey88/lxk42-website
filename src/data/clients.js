// Client Data for Logo Strip

export const clients = [
  {
    id: 1,
    name: "GreenTech Solutions",
    logo: null, // Will use text fallback
    description: "Sustainable technology solutions for modern businesses",
    industry: "Technology",
    projectType: "Web Development"
  },
  {
    id: 2,
    name: "Heritage Hospitality",
    logo: null,
    description: "Boutique hotels celebrating Singapore's rich heritage",
    industry: "Hospitality",
    projectType: "Digital Marketing"
  },
  {
    id: 3,
    name: "Artisan Collective",
    logo: null,
    description: "Platform connecting local craftsmen with design lovers",
    industry: "E-commerce",
    projectType: "Branding & Web Design"
  },
  {
    id: 4,
    name: "EduTech Innovations",
    logo: null,
    description: "Next-generation learning platform for Southeast Asia",
    industry: "Education",
    projectType: "Web Application"
  },
  {
    id: 5,
    name: "Local Favorites F&B",
    logo: null,
    description: "Celebrating hawker culture through modern dining experiences",
    industry: "Food & Beverage",
    projectType: "Motion Graphics"
  },
  {
    id: 6,
    name: "Urban Planning Consultancy",
    logo: null,
    description: "Shaping sustainable cities for future generations",
    industry: "Urban Planning",
    projectType: "Graphic Design"
  },
  {
    id: 7,
    name: "Wellness & Co",
    logo: null,
    description: "Holistic wellness solutions for busy professionals",
    industry: "Healthcare",
    projectType: "Web Design"
  },
  {
    id: 8,
    name: "FinTech Forward",
    logo: null,
    description: "Democratizing financial services across Southeast Asia",
    industry: "Financial Services",
    projectType: "Web Application"
  },
  {
    id: 9,
    name: "Creative Minds Academy",
    logo: null,
    description: "Nurturing the next generation of creative professionals",
    industry: "Education",
    projectType: "Branding"
  },
  {
    id: 10,
    name: "Sustainable Living Co",
    logo: null,
    description: "Making sustainable living accessible and affordable",
    industry: "Sustainability",
    projectType: "Digital Marketing"
  },
  {
    id: 11,
    name: "Tech Startup Hub",
    logo: null,
    description: "Accelerating innovation in the Singapore startup ecosystem",
    industry: "Technology",
    projectType: "Web Development"
  },
  {
    id: 12,
    name: "Cultural Heritage Foundation",
    logo: null,
    description: "Preserving and sharing Singapore's multicultural stories",
    industry: "Non-Profit",
    projectType: "Motion Graphics"
  }
];

// Get clients by industry
export const getClientsByIndustry = (industry) => {
  return clients.filter(client =>
    client.industry.toLowerCase() === industry.toLowerCase()
  );
};

// Get clients by project type
export const getClientsByProject = (projectType) => {
  return clients.filter(client =>
    client.projectType.toLowerCase().includes(projectType.toLowerCase())
  );
};

// Get featured clients (random selection)
export const getFeaturedClients = (count = 8) => {
  const shuffled = [...clients].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Industry statistics
export const industryStats = {
  "Technology": clients.filter(c => c.industry === "Technology").length,
  "Education": clients.filter(c => c.industry === "Education").length,
  "Healthcare": clients.filter(c => c.industry === "Healthcare").length,
  "Hospitality": clients.filter(c => c.industry === "Hospitality").length,
  "E-commerce": clients.filter(c => c.industry === "E-commerce").length,
  "Food & Beverage": clients.filter(c => c.industry === "Food & Beverage").length,
  "Financial Services": clients.filter(c => c.industry === "Financial Services").length,
  "Sustainability": clients.filter(c => c.industry === "Sustainability").length,
  "Non-Profit": clients.filter(c => c.industry === "Non-Profit").length,
  "Urban Planning": clients.filter(c => c.industry === "Urban Planning").length
};