import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://arnelimperial.github.io/digital-filipino-frontier',
	// base: '/digital-filipino-frontier/', 
	integrations: [mdx(), sitemap()],
	outDir: 'dist'
});
