<template>
  <footer id="footer">
    <ul>
      <li>
        <nuxt-link :to="`/stories/`">stories</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/projects/`">projects</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="`/about/`">about</nuxt-link>
      </li>
      <li>
        <a :href="`/stories/feed.xml`">rss</a>
      </li>
    </ul>
    <p>
      Copyright &copy; 2019 <a href="/">SIARIE</a>. Powered by
      <a href="//nuxtjs.org">Nuxt.js</a>
    </p>
    <p>
      Source code is available on
      <a href="//github.com/siarie/siarie.me">Github</a>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  line-height: .5;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline;
    margin: 0 5px;
  }
  a {
    text-transform: uppercase
  }
}
</style>
