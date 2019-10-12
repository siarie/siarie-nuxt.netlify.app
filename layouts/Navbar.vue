<template>
  <nav class="navbar sticky">
    <div class="container flex">
      <nuxt-link to="/" class="brand">{{ siteTitle }}</nuxt-link>

      <input id="nav" type="checkbox" class="hidden" :checked="checked" />
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div class="nav-wrapper">
        <ul class="nav-list">
          <li v-for="(data, index) in items" :key="index" class="nav-item">
            <nuxt-link :to="data.path" class="nav-link">
              {{ data.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      siteTitle: 'Sri Aspari',
      checked: false,
      items: [
        { name: 'Stories', path: '/stories' },
        { name: 'Projects', path: '/projects' }
        // { name: "Menu3", path: "/menu3" }
      ]
    };
  }
};
</script>

<style scoped>
.navbar {
  background: #ffffff;
  width: 100%;
  padding: 15px 0;
  font-size: 1.7rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  font-family: 'Poiret One', cursive;
  margin-bottom: 2rem;
}
.brand {
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  font-weight: 700;
  margin-right: auto;
  outline: none;
}
.brand:hover {
  color: #dc143c;
}
.nav-list {
  font-size: 1.4rem;
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-item:not(:first-child) {
  margin-left: 20px;
}
.nav-link {
  outline: none;
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: none;
}
.nav-link:hover {
  color: #000000 !important;
}

.nav-item:hover::first-letter {
  text-decoration: underline;
  color: #dc143c;
}
.hidden {
  display: none;
}

@media only screen and (max-width: 48em) {
  html {
    font-size: 9px;
  }

  .nav-btn {
    position: relative;
    z-index: 99999;
    cursor: pointer;
  }
  .navbar > .container {
    width: 95%;
  }
  .nav-btn i {
    display: block;
    width: 20px;
    height: 2px;
    background: #000;
    border-radius: 5px;
  }
  .nav-btn i:nth-child(1) {
    margin-top: 2px;
  }
  .nav-btn i:nth-child(2) {
    margin-top: 4px;
    opacity: 1;
  }
  .nav-btn i:nth-child(3) {
    margin-top: 4px;
  }
  .nav-wrapper {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    font-family: 'Josefin Sans', sans-serif;
    transition: all 0.375s;
  }

  .nav-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 15px;
    background: #dc143c;
    transform-origin: 0 0;
    transform: skew(20deg) translateX(calc(100vw - 50%));
    transition: all 0.275s 0.1s;
  }

  .nav-wrapper .nav-list {
    display: inline-flex;
    flex-direction: column;
    height: 100%; /* Should be 100%, but we have a notice message :D */
    align-items: flex-start;
    justify-content: center;
    transform: translateX(150%) skew(20deg);
  }
  .nav-wrapper .nav-list .nav-item {
    display: block;
    margin: 2rem 0;
    text-align: left;
    transform: skew(-20deg);
  }

  .nav-wrapper .nav-list .nav-item .nav-link {
    font-size: 2.5rem;
    opacity: 0;
    transform: translateY(-20px);
  }

  .nav-wrapper .nav-list li:nth-child(1) .nav-link {
    transition: all 275ms 175ms;
  }
  .nav-wrapper .nav-list li:nth-child(2) .nav-link {
    transition: all 275ms 225ms;
  }
  .nav-wrapper .nav-list li:nth-child(3) .nav-link {
    transition: all 275ms 275ms;
  }
  .nav-wrapper .nav-list li:nth-child(4) .nav-link {
    transition: all 275ms 325ms;
  }
  .nav-wrapper .nav-list li:nth-child(5) .nav-link {
    transition: all 275ms 375ms;
  }
}

#nav:checked ~ .nav-wrapper {
  opacity: 1;
  z-index: 9990;
  visibility: visible;
}
#nav:checked ~ .nav-wrapper::after {
  transform: skew(20deg) translateX(-100%);
}
#nav:checked ~ .nav-wrapper .nav-list .nav-item .nav-link {
  opacity: 1;
  transform: translateY(0);
}

#nav:checked + .nav-btn {
  transform: rotate(180deg);
  transition: 0.2s ease;
}

#nav:checked + .nav-btn i {
  background: #000;
}
#nav:checked + .nav-btn i:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
  opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
</style>
