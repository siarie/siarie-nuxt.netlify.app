<template>
  <section class="container">
    <div class="row">
      <div
        class="col-md-6"
        style="margin-bottom: 1rem"
        v-for="(data, key) in projects"
        :key="key"
      >
        <div class="gallery">
          <a :href="data.url" target="_blank">
            <img :src="data.image" class="gallery-image" />
            <div class="gallery-overlay"></div>
            <div class="gallery-details">
              <h3>{{ data.title }}</h3>
              <p>{{ data.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: this.$store.state.projects.all
    };
  },
  head(){
    return {
      title: 'Portfolio | Siarie',
      meta: [
        { name: "description", property: "og:description", content: 'Portfolio', hid: "description" },
        { property: "og:title", content: 'Portfolio | Siarie' },
        { property: "og:image", content: '' },
        { name: 'twitter:title', content: 'Portfolio | Siarie' },
        { name: "twitter:description", content: 'Portfolio' },
        { name: "twitter:image", content: '' }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  .gallery-image {
    width: 100%;
    -ms-transform: scale(1.18, 1.18);
    -webkit-transform: scale(1.18, 1.18);
    transform: scale(1.18, 1.18);
  }
  .gallery-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }
  &:hover {
    .gallery-overlay {
      opacity: 1;
    }
    .gallery-details {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
  }
  .gallery-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .gallery-details {
    h3 {
      color: #fff;
      font-weight: 500;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
    p {
      color: #fff;
      font-size: 1.2rem;
    }
  }
  a {
    border: none;
  }
}
</style>
