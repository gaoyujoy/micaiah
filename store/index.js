import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        blogs: [],
        page: 1,
        total: 0
    },
    mutations: {
        setBlogs (state, blogs) {
            state.blogs = blogs;
        },
        changePage(state, page) { 
            state.page = page;
        },
        setTotal(state, total) { 
            state.total = total;
        }
    },
    getters: {
        getPage: state => {
            return state.page;
        },
        getBlogs: state => { 
            return state.blogs;
        }
    }
})

export default store