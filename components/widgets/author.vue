<template lang="pug">
  section.widget
    .widget-profile
      header.about
        figure.photo
          img.profile-img(:src="github.avatar_url")
        h4.name Sri Aspari
        p.title Software Enginner
      nav.github
        div
          p.heading Repositories
          p.title {{ github.repos }}
        div
          p.heading Gist
          p.title {{ github.gists }}
        div
          p.heading Followers
          p.title {{ github.followers }}
      button#follow(@click="openNewTab(github._url)") Follow
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      github: []
    };
  },
  methods: {
    openNewTab: url => {
      window.open(url);
    }
  },
  mounted() {
    axios.get("https://api.github.com/users/siarie").then(response => {
      const res = response.data;
      this.github = {
        avatar_url: res.avatar_url,
        _url: res.html_url,
        repos: res.public_repos,
        followers: res.followers,
        gists: res.gists | 0
      };
    });
  }
};
</script>