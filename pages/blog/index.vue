<template>
    <div class="page__content">
        <div class="main">
            <div class="col-aside js-col-aside"></div>
            <div class="col-main">
                <article itemscope="itemscope" itemtype="http://schema.org/WebPage">
                    <div class="article__info clearfix"></div>
                    <div class="js-article-content">
                        <div class="layout--home">
                            <div class="post-list">
                                <postItem :data="item" v-for="item in $store.state.blogs" :key="item._id"></postItem>
                            </div>
                            <Pager :page-size="page_size" :page="$store.state.page" :total="$store.state.total" @change-page="changePage"></Pager>
                        </div>
                    </div>
                    <section class="page__comments"></section>
                </article>
            </div>
        </div>
    </div>
</template>
<script>
import Pager from '~/components/Pager.vue'
import postItem from '~/components/postItem.vue'
import axios from 'axios'
export default {
    data(){
        return {
            page_size: 10
        }
    },
    created(){
        this.getDatas(this.$store.state.page);
    },
    components: {
        Pager,
        postItem
    },
    transition:  {
        name: 'animation1',
        mode: 'out-in'
    },
    methods:{
        changePage(page){
            this.$store.commit('changePage', page);
            this.getDatas(page);
        },
        getDatas(page){
            axios.get( `${process.client ? '' : process.env.baseUrl }/api/posts?page=${page}`).then( response=> {
                var res = response.data;
                if (res.code == 0) { 
                    this.$store.commit('setBlogs', response.data.data);
                    this.$store.commit('setTotal', response.data.total);
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    },

    head() {
        return {
            title: 'Micaiah\'s site - Blog'
        }
    }
}
</script>

<style scoped>
    .post-list{
        margin-top: 20px;
    }
</style>
