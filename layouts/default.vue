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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Josefin+Slab|Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,700,700i&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');
* {
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 10px;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #f7f8fb;
  font-size: 1.4rem;
}

pre {
  line-height: 1.45;
  font-size: 1.2rem;
  width: 100%;
  background: #f7f7f7;
  border-radius: 5px;
  padding: 10px;
  word-wrap: break-word;
  > code {
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    background: transparent;
    border-radius: 0;
    padding: 0;
  }
}

code {
  font-family: 'Josefin Sans', sans-serif;
  background: #f7f7f7;
  border-radius: 5px;
  padding: 2px 5px;
}
.container {
  width: 95%;
}
@media only screen and (min-width: 48rem) {
  .container {
    width: 87% !important;
  }
}
@media only screen and (min-width: 62rem) {
  .container {
    width: 87% !important;
  }
}
@media only screen and (min-width: 75rem) {
  .container {
    width: 70% !important;
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
  font-weight: 400;
  border-bottom: 2px solid #dc143c;
  color: #dc143c;
  &:hover {
    color: rgba(220, 20, 60, 0.8);
  }
  &:focus {
    color: rgba(220, 20, 60, 0.8);
    outline: none;
  }
}

blockquote {
  background: rgba(220, 60, 60, 0.05);
  padding: 1px 10px;
  border-left: 4px solid #dc143c;
  margin: 10px 0;;
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
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.15);

  .header {
    font-size: 1.8rem;
    font-weight: 700;
    border-bottom: 1px solid #ececec;
    padding: 1.5rem;
  }
  .body {
    line-height: 1.6;
    font-size: 1.65rem;
    padding: 2rem;
    padding-top: 0 !important;
  }
  .footer {
    border-top: 1px solid #ececec;
    font-size: 1.4rem;
    padding: 1.5rem;
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
</style>
