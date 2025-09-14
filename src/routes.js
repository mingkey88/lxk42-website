// Centralized route configuration with code-splitting
// Each route dynamically imports its page component

/**
 * @typedef {Object} AppRoute
 * @property {string} path
 * @property {string} name
 * @property {string} title
 * @property {() => Promise<{ default: any }>} load
 */

/** @type {AppRoute[]} */
export const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Light & Kaki Studio — Home',
    load: () => import('./pages/Home.svelte')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    title: 'About Us — Light & Kaki Studio',
    load: () => import('./pages/AboutUs.svelte')
  },
  {
    path: '/web-design',
    name: 'WebDesign',
    title: 'Web Design & Development — Light & Kaki Studio',
    load: () => import('./pages/WebDesign.svelte')
  },
  {
    path: '/web-app',
    name: 'WebApp',
    title: 'Web App Development — Light & Kaki Studio',
    load: () => import('./pages/WebApp.svelte')
  },
  {
    path: '/digital-marketing',
    name: 'DigitalMarketing',
    title: 'Digital Marketing — Light & Kaki Studio',
    load: () => import('./pages/DigitalMarketing.svelte')
  },
  {
    path: '/branding',
    name: 'Branding',
    title: 'Branding Solutions — Light & Kaki Studio',
    load: () => import('./pages/Branding.svelte')
  },
  {
    path: '/graphic-design',
    name: 'GraphicDesign',
    title: 'Graphic Design — Light & Kaki Studio',
    load: () => import('./pages/GraphicDesign.svelte')
  },
  {
    path: '/motion-graphics',
    name: 'MotionGraphics',
    title: 'Motion Graphics & Animation — Light & Kaki Studio',
    load: () => import('./pages/MotionGraphics.svelte')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    title: 'Portfolio — Light & Kaki Studio',
    load: () => import('./pages/Portfolio.svelte')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    title: 'Client Testimonials — Light & Kaki Studio',
    load: () => import('./pages/Testimonials.svelte')
  }
];

/**
 * Find a route by pathname
 * @param {string} pathname
 * @returns {AppRoute}
 */
export function findRoute(pathname) {
  return routes.find(r => r.path === pathname) || routes[0];
}
