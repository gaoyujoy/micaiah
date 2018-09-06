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
                                <postItem></postItem>
                                <postItem></postItem>
                            </div>
                            <Pager></Pager>
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
export default {
    asyncData({ req }) {
        return {
        }
    },
    components: {
        Pager,
        postItem
    },
    transition:  {
        name: 'animation1',
        mode: 'out-in'
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
