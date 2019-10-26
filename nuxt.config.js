const glob = require('glob');
const fs = require('fs');
const fm = require('front-matter');
const marked = require('marked');

let files = glob.sync('*.md', { cwd: 'content' });
function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/stories/${slug}`;
}

const env = {
  productionUrl: 'https://siarie.me',
  author: 'Sri Aspari'
};

export default {
  mode: 'universal',

  env: {
    PRODUCTION_URL: env.productionUrl,
    AUTHOR: env.author
  },

  generate: {
    routes: function() {
      return files.map(getSlugs);
    }
  },
  head: {
    title: 'Siarie',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ms-icon-144x144.png'
      },
      { name: 'author', content: env.author },
      { name: 'theme-color', content: '#DC143C' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@siarie_' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: new Date().toISOString() }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
      { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#c1c1c1' },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      { rel: 'stylesheet', href: '/css/flexboxgrid.min.css' }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript :)', body: true }]
  },
  loading: { 
    continous: true,
    color: '#DC143C',
    height: '2.5px'
  },
  pageTransition: 'page',
  css: [
    '@/node_modules/highlight.js/styles/github.css'
  ],
  modules: ['@nuxtjs/feed', '@nuxtjs/sitemap'],
  sitemap: {
    sitemap: {
      path: '/sitemap.xml',
      hostname: env.productionUrl,
      cacheTime: 1000 * 60 * 15,
      gzip: true,
      routes: function() {
        return files.map(getSlugs);
      }
    }
  },
  feed: [
    {
      path: '/stories/feed.xml',
      cacheTime: 1000 * 60 * 15,
      type: 'atom1',
      async create(feed) {
        feed.options = {
          title: env.author,
          link: `${env.productionUrl}/stories/feed.xml`,
          description: "siarie's personal homepage"
        };

        feed.addCategory('Personal Blog');

        feed.addContributor({
          name: env.author,
          email: 'mail@siarie.me',
          link: env.productionUrl
        });

        let postList = fs.readdirSync('./content')
        postList.forEach(post => {
          const file = fs.readFileSync(`./content/${post}`, 'utf8')
          const content = fm(file)
          feed.addItem({
            title: content.attributes.title,
            link: `${env.productionUrl}/stories/${post.slice(0, -3)}/`,
            description: marked(content.body),
            date: new Date(content.attributes.date)
          })
        })
      }
    }
  ],
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    }
  }
};
