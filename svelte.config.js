import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn'
    }
  },
  preprocess: vitePreprocess(),
}
