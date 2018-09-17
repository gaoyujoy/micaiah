<template>
    <div class="page__content">
        <div class="main">
            <div class="col-aside js-col-aside"></div>
            <div class="col-main">
                <article itemscope="" itemtype="http://schema.org/WebPage">
                    <div class="article__info clearfix"></div>
                    <div class="js-article-content">
                        <archive-com></archive-com>
                    </div>
                    <section class="page__comments"></section>
                </article>
            </div>
        </div>
    </div>
</template>
<script>
import archiveCom from '~/components/archiveCom.vue'
export default {
    transition:  {
        name: 'animation1',
        mode: 'out-in'
    },
    components: {
        archiveCom
    },
    methods:{
        
    },
    head() {
        return {
        title: 'Micaiah\'s site - Archive'
        }
    }
}
</script>

<style scoped>
</style>
