<template>
  <div class="content">
    <main class="content-wrapper">
      <Navbar v-if="!isHome" />
      <nuxt />
    </main>
    <Footer v-if="!isHome" />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';
export default {
  components: { Navbar, Footer },

  computed: {
    isHome() {
      let is_home;
      if (this.$route.path === '/') {
        is_home = true;
      }
      return is_home;
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  font-size: 10px;
  text-rendering: optimizelegibility;
  scrollbar-color: #858585 #dbdbdb;
  scrollbar-width: thin;
}
body {
  font-family: 'Amiri', serif;
  line-height: 1.4;
  background: #f7f8fb;
  color: #333;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  font-size: 1.6rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1rem 0;
  // color: #000000;
}

pre {
  overflow: auto;
  line-height: 1.45;
  font-size: 1.4rem;
  width: 100%;
  background: #f6f8fa;
  border-radius: 5px;
  padding: 10px;
  word-wrap: normal;
  > code {
    font-family: 'Inconsolata';
    background: transparent;
    border-radius: 0;
    padding: 0;
  }
}

code {
  font-family: inherit;
  background: #f7f7f7;
  border-radius: 5px;
  padding: 2px 5px;
}
.container {
  width: 95%;
}
@media only screen and (min-width: 48rem) {
  .container {
    width: 77% !important;
  }
}
@media only screen and (min-width: 62rem) {
  .container {
    width: 77% !important;
  }
}
@media only screen and (min-width: 75rem) {
  .container {
    width: 50% !important;
  }
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
}
.content-wrapper {
  flex: 1;
}

.row {
  margin: 0 !important;
}
a {
  text-decoration: none;
  color: #dc143c;
  &:hover {
    color: inherit;
  }
  &:focus {
    color: rgba(#dc143c, 0.8);
    outline: none;
  }
}

blockquote {
  background: rgba(220, 60, 60, 0.05);
  padding: 5px 10px;
  border-left: 4px solid #dc143c;
  margin: 10px 0;
}
.flex {
  display: flex;
}
.sticky {
  position: sticky;
  top: 0;
  z-index: 9999;
}
/* -CARD- */
.card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.15);
  margin-bottom: 1.6%;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  border-radius: 5px;

  .header {
    border-bottom: 1px solid #ececec;
    padding: 0 2rem;
  }
  .body {
    padding: 1rem 2rem;
  }
  .footer {
    border-top: 1px solid #ececec;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    a {
      text-decoration: none;
    }
  }
}

footer {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 1.35rem;
}

// Transition
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
