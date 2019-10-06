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
              {{
              data.name
              }}
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
      siteTitle: "Sri Aspari",
      checked: false,
      items: [
        // { name: "Stories", path: "/stories" },
        { name: "About", path: "/about" }
        // { name: "Menu3", path: "/menu3" }
      ]
    };
  }
};
</script>