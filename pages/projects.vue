<template>
  <section class="container">
    <div class="row mt-2">
      <div class="col-md-4 mb-1" v-for="(data, key) in projects" :key="key">
        <div class="text-center gallery">
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
      {{ end }}
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            projects: this.$store.state.projects.all
        }
    }
}
</script>

<style>
.gallery {
  position: relative;
  height: 180px;
  border-radius: 5px;
  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.gallery .gallery-image {
  width: 100%;
  -ms-transform: scale(1.18, 1.18);
  -webkit-transform: scale(1.18, 1.18);
  transform: scale(1.18, 1.18);
}

.gallery .gallery-overlay {
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
.gallery:hover .gallery-overlay {
  opacity: 1;
}

.gallery .gallery-details {
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

.gallery:hover .gallery-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.gallery .gallery-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  /* margin-bottom: 0.5em; */
  text-transform: uppercase;
}

.gallery .gallery-details p {
  color: #fff;
  font-size: 1rem;
}
</style>
