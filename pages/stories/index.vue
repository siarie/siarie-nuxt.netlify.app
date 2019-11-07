<template>
  <section class="container">
        <div class="blog-card" v-for="(data, key) in stories" :key="key">
          <div class="meta">
            <div
              class="photo"
              :style="{backgroundImage: 'url(' + imageThumb(data.thumbnail) + ')' }"
            ></div>
          </div>
          <div class="description">
            <h1>{{ data.title }}</h1>
            <p class="excerpt" v-html="articleExcerpt(data)"></p>
            <p class="read-more">
              <nuxt-link :to="`/stories/${data.slug}`">Read More</nuxt-link>
            </p>
          </div>
        </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      stories: this.$store.getters["article/getPublishedArticle"]
    }
  },
  methods: {
    articleExcerpt(data) {
      if (data.description === '') {
        const striptags = require('striptags')
        data.description = striptags(data.excerpt).split(/\s+/, 13).join(' ')
      }
      return data.description + '...'
    },

    imageThumb(image) {
      if (image === '') {
        image = '/siarie.me.webp'
      }
      return image
    }
  },
  head() {
    return {
      title: 'Stories | Siarie',
      meta: [
        {
          name: 'description',
          property: 'og:description',
          content: 'Story List',
          hid: 'description'
        },
        { property: 'og:title', content: 'Stories | Siarie' },
        { property: 'og:image', content: '' },
        { name: 'twitter:title', content: 'Stories | Siarie' },
        { name: 'twitter:description', content: 'Story List' },
        { name: 'twitter:image', content: '' }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$color_white: #fff;
$color_prime: #DC143C;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  display: flex;
  flex-direction: row;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  min-height: 170px;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
  }

  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
    }
    .read-more {
      margin: 0;
      position: relative;
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;
        &:after {
          content: '\21C1';
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin 0.3s, opacity 0.3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
  }
  p.excerpt {
    flex: 1;
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: '';
        position: absolute;
        height: 3px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 700px;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        // transform: skewX(-3deg);
        content: '';
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
  }
}
</style>
