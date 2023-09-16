import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const userAuthorStore = defineStore({
    id: 'author',
    state: () => ({
        authors: []
    }),

    getters: {
        getPostAuthor: (state) => {
            const postStore = usePostStore()
            return state.authors.find((author) => author.id === postStore.post.userId)
        }
    },

    actions: {
        async fetchAuthors() {
            this.author = await fetch('https://jsonplaceholder.typicode.com/users')
            .then((Response) => Response.json)
        }
    }


}) 