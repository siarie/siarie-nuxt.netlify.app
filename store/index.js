export const actions = {
    nuxtServerInit(store)  {
        const INIT = [
            store.dispatch('article/BlogFeeds')
        ]
        return Promise.all(INIT)
    }
}