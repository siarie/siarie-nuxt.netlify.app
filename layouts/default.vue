<template>
  <div class="content">
    <main class="content-wrapper">
      <Navbar v-if="!isHome" />
      <nuxt />
    </main>
    <Footer v-if="!isHome"/>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
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
@import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');
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
  width: 100%;
  background: #f0f0f1;
  border-radius: 5px;
  padding: 10px;
  word-wrap: break-word;
  code {
    font-family: 'Josefin Sans', sans-serif;
  }
}

.container {
  width: 95%;
}
@media only screen and (min-width: 48em) {
  .container {
    width: 87% !important;
  }
}
@media only screen and (min-width: 62em) {
  .container {
    width: 87% !important;
  }
}
@media only screen and (min-width: 75em) {
  .container {
    width: 80% !important;
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
}
.flex {
  display: flex;
}

footer {
  width: 100%;
  text-align: center;
  font-size: 1.35rem;
}
</style>
