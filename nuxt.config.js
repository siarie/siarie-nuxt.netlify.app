var glob = require('glob');

let files = glob.sync('*.md', { cwd: 'content' });

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/stories/${slug}`;
}

export default {
  mode: 'universal',
  generate: {
    routes: function() {
      return files.map(getSlugs);
    }
  },
  head: {
    title: 'Sri Aspari | Siarie - Web Developer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      // { name: 'msapplication-TileColor', content: '#ffffff' },
      // { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      { name: "author", content: "Sri Aspari" },
      { name: 'theme-color', content: '#DC143C' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@siarie_' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: new Date().toISOString() }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#DC143C' },
  pageTransition: 'page',
  css: [
    '@/assets/css/flexboxgrid.min.css',
    '@/node_modules/highlight.js/styles/github.css'
  ],
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://siarie.me',
    routes: function() {
      return files.map(getSlugs);
    },
    exclude: [
      '/',
      '/about',
      '/stories',
      '/projects'
    ],
    path: '/rss.xml',
    gzip: true,
    generate: false,
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    }
  }
};
