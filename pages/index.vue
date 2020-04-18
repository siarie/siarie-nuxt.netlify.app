<template lang="pug">
  section.blog
    article.article(v-for="(data, key) in posts" :key="key")
      nuxt-link(:to="`/${data.slug}`" :title="data.title")
        .meta
          time(:datetime="data.date") {{ dateFromNow(data.date) }}
        h5 {{ data.title }}
        figure(v-if="data.cover")
          img(:src="blogCoverURL(data.cover)")
        figure.no-img(v-else)
          span {{ data.title }}
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    blogCoverURL: images => {
      return `/img/post/${images}`;
    },

    dateFromNow: (date) => {
      return moment(date, 'YYYYMMDD').fromNow()
    }
  },

  async asyncData() {
    const matter = require("gray-matter");
    const moment = require("moment");
    const files = require.context(`~/contents/articles`, false, /\.md$/);
    const posts = files
      .keys()
      .map(key => {
        let res = files(key);
        res.slug = key.slice(2, -3);
        return res;
      })
      .map(content => {
        let attr = matter(content.default).data;
        attr.slug = content.slug;
        return attr;
      })
      .sort((a, b) => {
        return a.date < b.date;
      });
    return { posts: posts };
  }
};
</script>