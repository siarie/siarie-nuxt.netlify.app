<template>
  <div class="_home">
    <div class="box text-center">
      <div class="box-wrapper">
        <div class="image-box">
          <img
          :src="`/avatar.webp`"
          alt="Sri Aspari">
        </div>
        <div class="text">
          <h2>Sri Aspari</h2>
          <span>Web Developer</span>
        </div>
        <div class="navigation">
          <nuxt-link :to="'/stories'" class="">stories</nuxt-link>
          <nuxt-link :to="'/about'" class="">about</nuxt-link>
          <nuxt-link :to="'/projects'" class="">portofolio</nuxt-link>
        </div>
        <hr class="hrline" />
        <div class="social">
          <ul>
            <li v-for="(data, key) in social" :key="key">
              <a :href="data.url" target="_blank"
                ><component :is="data.name + '-icon'"></component
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as icons from 'vue-feather-icons';

export default {
  components: {
    ...icons
  },
  data() {
    return {
      social: [
        { name: 'twitter', url: 'https://twitter.com/siarie_' },
        { name: 'github', url: 'https://github.com/siarie' },
        { name: 'send', url: 'https://t.me/siarie' },
        { name: 'linkedin', url: 'https://linkedin.com/in/siarie' },
        { name: 'mail', url: 'mailto:sriaspari@gmail.com' }
      ]
    };
  },
  head(){
    return {
      meta: [
        { name: "description", property: "og:description", content: 'Personal Website', hid: "description" },
        { property: "og:title", content: 'Sri Aspari | Siarie - Web Developer' },
        { property: "og:image", content: '/siarie.me.webp' },
        { name: 'twitter:title', content: 'Sri Aspari | Siarie - Web Developer' },
        { name: "twitter:description", content: 'Personal Website' },
        { name: "twitter:image", content: '/siarie.me.webp' }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
._home {
  background: #ffffff;
  width: 100%;
  height: 100vh;
  font-family: "Josefin Sans",sans-serif;
}

.box {
  position: fixed;
  padding: 0 80px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 3px;
}
.image-box {
  margin: 20px auto;
  margin-top: 20px;
  width: 250px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
}

.text {
  line-height: 2.5rem;
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 1.3rem;
    background: #dc143c;
    padding: 0.2rem 0.7rem;
    border-radius: 15px;
    color: #ffffff;
    font-weight: 700;
    text-transform: none;
  }
}

.hrline {
  width: 280px;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: .5rem 0;
}
.social {
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      &:not(:first-child) {
        margin-left: 15px;
      }
      a {
        border: none;
      }
    }
  }
}
.navigation {
  margin-top: 1rem;
  font-size: 1.6rem;
  a {
    margin: 0 0.3rem;
  }
}
</style>
