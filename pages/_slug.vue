<template lang="pug">
  section.blog(:key="$route.params.slug")
    article.read
      header.content
        .cover
          img(:src="getCoverURL(data.cover)" v-if="data.cover")
          .metadata
            h1 {{ data.title }}
            div
              time(:datetime="data.date") {{ formatDate(data.date) }}
      section.content(v-html="content")
    Sidebar
</template>

<script>
import Sidebar from '@/components/sidebar'

const hilijs = require('highlight.js')
const matter = require('gray-matter')
const marked = require('marked')
const moment = require('moment')

marked.setOptions({
  highlight: (code, lang) => {
    return hilijs.highlight(lang, code).value
  }
})

export default {
  components: { Sidebar },
  async asyncData({ params }) {
    
    const files = await import(`@/contents/articles/${params.slug}.md`)
    const article = matter(files.default)

    return {
      data: article.data,
      content: marked(article.content)
    }
  },
  methods: {
    formatDate(date) {
      return moment(date, 'YYYMMDD').fromNow()
    },

    getCoverURL(cover) {
      return `/img/post/${cover}`
    }
  },
  head() {
    return {
      title: `${this.data.title} - siarie` 
    }
  }
}
</script>