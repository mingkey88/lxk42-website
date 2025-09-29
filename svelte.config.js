import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
    },
    csp: {
      mode: 'hash',
      directives: {
        'default-src': ['self'],
        'script-src': ['self'],
        'style-src': ['self', 'unsafe-inline'], // Allow inline styles for Tailwind
        'img-src': ['self', 'data:', 'https:'], // Allow images from HTTPS sources and data URIs
        'font-src': ['self', 'https:'], // Allow fonts from HTTPS sources
        'connect-src': ['self', 'https://api.web3forms.com'], // Allow connections to same origin and Web3Forms API
        'media-src': ['self'], // Allow video/audio from same origin
        'object-src': ['none'], // Prevent object/embed/applet
        'frame-src': ['none'], // Prevent iframe embedding
        'base-uri': ['self'], // Restrict base element
        'form-action': ['self'], // Restrict form submissions to same origin
        'upgrade-insecure-requests': true, // Upgrade HTTP to HTTPS
      },
    },
  },
  preprocess: vitePreprocess(),
};
