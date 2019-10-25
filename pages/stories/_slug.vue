<template>
  <section class="container" :key="$route.params.slug">
    <div class="card">
      <div class="header">
        <h1>{{ attributes.title }}</h1>
      </div>
      <div class="body" v-html="content"></div>
      <div class="footer">
        <button v-on:click="openComment"><component size="1.5x" :is="`message-circle-icon`"></component><span>10</span></button>
        <button v-on:click="alert"><component size="1.5x" fill="#DC143C" stroke="#DC143C" :is="`heart-icon`"></component><span>10</span></button>
        <button v-on:click="alert" style="float: right"><component size="1.5x" :is="`bookmark-icon`"></component></button>
      </div>
    </div>
    <!-- <div class="card" style="margin-top:2rem !important;">
      <div class="col-md-12">
        <div class="body" id="comment-section">
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
const hljs = require('highlight.js');
const fm = require('front-matter');
const marked = require('marked');
marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlight(lang, code).value;
  },
  gfm: true
});
import * as icons from 'vue-feather-icons';

export default {
  components: {
    ...icons
  },
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
          content: `${this.attributes.description}`,
          hid: 'description'
        },
        { property: 'og:title', content: `${this.attributes.title} | Siarie` },
        { property: 'og:image', content: `${this.attributes.thumbnail}` },
        { name: 'twitter:title', content: `${this.attributes.title} | Siarie` },
        {
          name: 'twitter:description',
          content: `${this.attributes.description}`
        },
        { name: 'twitter:image', content: `${this.attributes.thumbnail}` }
      ]
    };
  },
  methods: {
    alert: function(event) {
      alert('This feature is not available right now')
    },
    openComment: function(){
      return window.commento.main()
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  display: inline-flex;
  align-items: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: #DC143C;
  }
  &:focus {
    color: #DC143C;
    outline: none
  }
}

span {
  margin: 0 2px;
  font-size: 8px;
}
</style>