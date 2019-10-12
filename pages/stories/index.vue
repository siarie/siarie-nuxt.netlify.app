<template>
  <section class="container">
    <div class="row card mt-2">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="header text-center">Stories</div>
        <div class="body">
          <ul>
            <li v-for="(data, key) in stories" :key="key">
              <time>{{ data.date }}</time>
              <nuxt-link :to="`/stories/${data.slug}`">{{
                data.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData() {
    const fm = require('front-matter');
    const moment = require('moment');
    moment.locale('id');
    const data = await require.context('@/content/', false, /\.md$/);
    const posts = data
      .keys()
      .map(key => {
        // const [, name] = key.match(/\/(.+)\.md$/)
        // return data(key)
        let res = data(key);
        res.slug = key.slice(2, -3);
        return res;
      })
      .map(content => {
        let attr = fm(content.default).attributes;
        attr.slug = content.slug;
        attr.date = moment(attr.date).format('MMM DD YYYY');
        return attr;
      })
      .sort((a, b) => {
        return a.date < b.date
      });
    return {
      stories: posts
    };
  },
  head(){
    return {
      title: 'Stories | Siarie',
      meta: [
        { name: "description", property: "og:description", content: 'Story List', hid: "description" },
        { property: "og:title", content: 'Stories | Siarie' },
        { property: "og:image", content: '' },
        { name: 'twitter:title', content: 'Stories | Siarie' },
        { name: "twitter:description", content: 'Story List' },
        { name: "twitter:image", content: '' }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
  time {
    font-size: 1.2rem;
    margin-right: 1rem
  }
</style>
