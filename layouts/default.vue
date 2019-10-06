<template>
  <div class="content">
    <main class="content-wrapper">
      <Navbar v-if="!isHome"/>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar';
export default {
  components: { Navbar },

  computed: {
    isHome() {
      let is_home
      if (this.$route.path === '/') {
        is_home = true
      }
      return is_home
    }
  }
};
</script>
