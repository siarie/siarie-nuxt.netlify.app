<template lang="pug">
  aside
    section.widget
      .widget-profile
        header.about
          figure.photo
            img.profile-img(src="/avatar.webp")
          h4.name Sri Aspari
          p.title Software Enginner
        nav.github
          div
            p.heading Repositories
            p.title 10
          div
            p.heading Gist
            p.title 0
          div
            p.heading Followers
            p.title 2
        button#follow(onclick="window.open('//github.com/siarie')") Follow
</template>