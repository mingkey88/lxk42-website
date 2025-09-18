// Structured Data for SEO and Rich Snippets

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Light & Kaki Studio',
  alternateName: 'LXK42 Studio',
  url: 'https://www.lxk42.sg',
  logo: 'https://www.lxk42.sg/logo.png',
  description:
    "Creative digital studio in Singapore specializing in web design, development, and motion graphics with authentic 'kaki' (friendship) philosophy.",
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'LXK42 Founders',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Singapore',
    addressRegion: 'Singapore',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+65-9123-4567',
    contactType: 'customer service',
    availableLanguage: ['English', 'Chinese'],
  },
  sameAs: ['https://www.lxk42.sg'],
  services: [
    'Web Design',
    'Web Development',
    'Web Application Development',
    'Graphic Design',
    'Motion Graphics & Animation',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  knowsAbout: [
    'Svelte Development',
    'React Development',
    'JavaScript',
    'TypeScript',
    'UI/UX Design',
    'Web Development',
    'Graphic Design',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Light & Kaki Studio',
  alternateName: 'LXK42 Studio',
  url: 'https://www.lxk42.sg',
  description:
    "Singapore creative digital studio offering web design, development, and graphic design services with Japanese-inspired design and authentic 'kaki' collaboration philosophy.",
  inLanguage: 'en-SG',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.lxk42.sg/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Light & Kaki Studio',
  image: 'https://www.lxk42.sg/logo.png',
  description:
    "Creative digital companions specializing in web design, development, and motion graphics. Where creativity meets friendship with authentic Singapore 'kaki' philosophy.",
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Singapore',
    addressRegion: 'Singapore',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '1.3521',
    longitude: '103.8198',
  },
  url: 'https://www.lxk42.sg',
  telephone: '+65-9123-4567',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'Singapore',
  },
};

export const serviceSchemas = {
  'web-design': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design & Development',
    description:
      'Custom website design and development with Japanese-inspired aesthetics, responsive design, and modern technology stack including Svelte, React, and TypeScript.',
    provider: {
      '@type': 'Organization',
      name: 'Light & Kaki Studio',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceRange: '$$',
    },
  },
  'web-app': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Application Development',
    description:
      'Custom web application development using modern frameworks like Svelte, React, and Node.js with focus on user experience and performance.',
    provider: {
      '@type': 'Organization',
      name: 'Light & Kaki Studio',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
  },
  'graphic-design': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Graphic Design Services',
    description:
      'Print and digital graphic design including marketing materials, social media graphics, and publication design with Japanese-inspired aesthetics.',
    provider: {
      '@type': 'Organization',
      name: 'Light & Kaki Studio',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
  },
  'motion-graphics': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motion Graphics & Animation',
    description:
      'Custom motion graphics, animation, and video content for digital marketing, social media, and brand storytelling.',
    provider: {
      '@type': 'Organization',
      name: 'Light & Kaki Studio',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
  },
};

export const breadcrumbSchema = (/** @type {Array<{name: string, url: string}>} */ items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((/** @type {any} */ item, /** @type {number} */ index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const faqSchema = (/** @type {Array<{question: string, answer: string}>} */ faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((/** @type {any} */ faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const reviewSchema = (/** @type {Array<any>} */ reviews) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Light & Kaki Studio',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((/** @type {any} */ review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.content,
      datePublished: review.date || new Date().toISOString().split('T')[0],
    })),
  };
};

// Helper function to inject structured data
export const injectStructuredData = (
  /** @type {any} */ schema,
  /** @type {string|null} */ id = null
) => {
  if (typeof window === 'undefined') return;

  const scriptId = id || `structured-data-${Date.now()}`;

  // Remove existing script if updating
  const existingScript = document.getElementById(scriptId);
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Update page title and meta description
export const updatePageMeta = (/** @type {string} */ title, /** @type {string} */ description) => {
  if (typeof window === 'undefined') return;

  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    /** @type {HTMLMetaElement} */ (metaDescription).name = 'description';
    document.head.appendChild(metaDescription);
  }
  /** @type {HTMLMetaElement} */ (metaDescription).content = description;

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) /** @type {HTMLMetaElement} */ (ogTitle).content = title;

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) /** @type {HTMLMetaElement} */ (ogDescription).content = description;

  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) /** @type {HTMLMetaElement} */ (twitterTitle).content = title;

  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) /** @type {HTMLMetaElement} */ (twitterDescription).content = description;
};
