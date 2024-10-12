import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://digital-museum-69c4c.firebaseapp.com',
	integrations: [mdx(), sitemap()],
	outDir: 'dist'
});
