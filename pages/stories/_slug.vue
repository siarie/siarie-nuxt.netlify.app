<template>
  <section class="container" :key="$route.params.slug">
    <div class="row card mt-2">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="header">{{ attributes.title }}</div>
        <div class="body" v-html="content"></div>
      </div>
    </div>
    <div class="row card" style="margin-top:2rem !important;">
      <div class="col-md-12">
        <div class="body">
          <div id="commento"></div>
          <script src="https://cdn.commento.io/js/commento.js"></script>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const hljs = require('highlight.js');
const fm = require('front-matter');
const marked = require('marked');
marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlight(lang, code).value;
  }
});
export default {
  async asyncData({ params }) {
    let files = await import(`@/content/${params.slug}.md`);
    let res = fm(files.default);

    return {
      attributes: res.attributes,
      content: marked(res.body)
    };
  },
  head() {
    return {
      title: `${this.attributes.title} | Siarie`,
      meta: [
        {
          name: 'description',
          property: 'og:description',
          content: `${this.content}`,
          hid: 'description'
        },
        { property: 'og:title', content: `${this.attributes.title} | Siarie` },
        { property: 'og:image', content: `${this.attributes.thumbnail}` },
        { name: 'twitter:title', content: `${this.attributes.title} | Siarie` },
        { name: 'twitter:description', content: `${this.content}` },
        { name: 'twitter:image', content: `${this.attributes.thumbnail}` }
      ]
    };
  }
};
</script>
