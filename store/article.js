export const state = () => ({
  feeds: []
});

export const mutations = {
  setBlogFeeds(state, list) {
    state.feeds = list;
  }
};

export const actions = {
   BlogFeeds({ commit }) {
    const moment = require('moment');
    moment.locale('id');
    const marked = require('marked')
    const fm = require('front-matter');
    let files = require.context(`~/content/`, false, /\.md$/);
    let posts = files
      .keys()
      .map(key => {
        let res = files(key);
        res.slug = key.slice(2, -3);
        return res;
      })
      .map(content => {
        let post = fm(content.default);
        let attr = post.attributes
        attr.slug = content.slug;
        attr.date = moment(attr.date).format('MMM DD YYYY');
        attr.description = attr.description;
        attr.excerpt = marked(post.body)
        return attr;
      })
      .sort((a, b) => {
        return a.date < b.date;
      });
    return commit('setBlogFeeds', posts);
  }
};
