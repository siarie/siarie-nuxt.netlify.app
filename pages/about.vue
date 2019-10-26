<template>
  <section class="container">
    <div class="card">
    <div class="row">
      <div class="col-sm-3 col-xs-12">
        <img :src="`/avatar.webp`" alt="Sri Aspari"
        class="kocheng">
      </div>
      <div class="col-sm-9 col-xs-12">
        <p>Hello World,</p>
        <p>
          My name is Sri Aspari, also you can call me
          <b>siarie</b>. I am a Web Developer, especially in Frontend Web. I
          come from Boyolali, a little city known as New Zealand Van Java.
        </p>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'About | Siarie',
      meta: [
        { name: "description", property: "og:description", content: 'About', hid: "description" },
        { property: "og:title", content: 'About | Siarie' },
        { property: "og:image", content: '' },
        { name: 'twitter:title', content: 'About | Siarie' },
        { name: "twitter:description", content: 'About' },
        { name: "twitter:image", content: '' }
      ]
    };
  }
};
</script>

<style scoped>
.kocheng {
  width: 100%;
  border-radius: 50%;
}
.card {
  padding: 5px;
}
</style>
