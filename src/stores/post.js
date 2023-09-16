// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),

  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filters((post) => post.userId === authorId)
    }
  },

  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => Response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },

    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((Response) => Response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})