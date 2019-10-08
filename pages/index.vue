<template>
  <div class="_home">
    <div class="box text-center">
      <div class="box-wrapper">
        <div class="image-box">
          <img
          src=https://d33wubrfki0l68.cloudfront.net/08e8052685bf16c955a582db518225d98d5c8dbf/0d139/img/siarie.jpg
          alt="Sri Aspari">
        </div>
        <div class="text">
          <!-- <p>Hello, I'm Sri Aspari a Web Developer</p> -->
          <h2>Sri Aspari</h2>
          <span>Web Developer</span>
        </div>
        <div class="navigation">
          <nuxt-link :to="'/'" class="">Stories</nuxt-link>
          <nuxt-link :to="'/about'" class="">About</nuxt-link>
          <nuxt-link :to="'/projects'" class="">Portofolio</nuxt-link>
        </div>
        <hr class="hrline" />
        <div class="links">
          <ul class="social">
            <li>
              <a href="//twitter.com/siarie_" target="_blank"
                ><twitter-icon></twitter-icon
              ></a>
            </li>
            <li>
              <a href="//github.com/siarie" target="_blank"
                ><github-icon></github-icon
              ></a>
            </li>
            <li>
              <a href="//t.me/siarie" target="_blank"
                ><send-icon></send-icon
              ></a>
            </li>
            <li>
              <a href="//linkedin/in/siarie"><linkedin-icon></linkedin-icon></a>
            </li>
            <li>
              <a href="mailto:mail@siarie.me"><mail-icon></mail-icon></a>
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
        { name: 'github', url: 'https://github.com' },
        { name: 'twitter', url: 'https://twitter.com' },
        { name: 'send', url: 'https://t.me' },
        { name: 'linkedin', url: 'https://linkedin.com' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
._home {
  background: #ffffff;
  width: 100%;
  height: 100vh;
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
}
.links {
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      &:not(:first-child) {
        margin-left: 15px;
      }
      a {
        color: #dc143c;
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
