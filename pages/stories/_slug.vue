<template>
  <section class="container" :key="$route.params.slug">
    <div class="row card">
        <div class="header"><h1>{{ attributes.title }}</h1></div>
        <div class="body" v-html="content"></div>
    </div>
    <div class="row card" style="margin-top:2rem !important;">
      <div class="col-md-12">
        <div class="body" id="comment-section">
          <div id="commento"></div>
          <!-- <script src="https://cdn.commento.io/js/commento.js"></script> -->
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
    // if (res.attributes.publish == false) {
    //   return false
    // }

    return {
      attributes: res.attributes,
      content: marked(res.body)
    };
  },
  mounted() {
    let commento = document.createElement('script')
    commento.setAttribute('src', 'https://cdn.commento.io/js/commento.js')
    commento.async = true
    let comment_section = document.getElementById('comment-section')
    comment_section.appendChild(commento)
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
        { name: 'twitter:description', content: `${this.attributes.description}` },
        { name: 'twitter:image', content: `${this.attributes.thumbnail}` }
      ]
    };
  }
};
</script>
