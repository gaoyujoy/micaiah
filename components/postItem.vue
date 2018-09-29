<template>
    <article class="post-item" itemscope="" itemtype="http://schema.org/BlogPosting">
        <header class="article__header">
            <h2 itemprop="headline">
                <nuxt-link :to="`/blog/${data._id}`">{{data.title}}</nuxt-link>
            </h2>
        </header>
        <div class="article__content" itemprop="description articleBody">
            <p class="show-markdown-html" v-html="getMarked" v-highlight></p>
        </div>
        <p class="post-list__readmore">
            <nuxt-link :to="`/blog/${data._id}`">阅读更多</nuxt-link>
        </p>
        <div class="article__info clearfix">
            <ul class="left-col menu">
                <li>
                    <nuxt-link class="button button--secondary button--pill button--sm" :to="`/archive/${data.tag}`">{{data.tagName}}</nuxt-link>
                </li>
                <meta itemprop="keywords" content="JavaScript">
            </ul>
            <ul class="right-col menu">
                <li>
                    <i class="fontello icon-calendar" /> 
                    <span itemprop="datePublished">{{data.created_at}}</span>
                </li>
                <li itemprop="interactionStatistic" itemscope="" itemtype="http://schema.org/InteractionCounter">
                    <link itemprop="interactionType" href="http://schema.org/WatchAction">
                    <i class="fontello icon-eye" /> 
                    <span class="js-pageview" itemprop="userInteractionCount" :content="data.view">{{data.view}}</span> 阅读
                </li>
            </ul>
        </div>
    </article>
</template>
<script>
import marked from 'marked'
export default {
    data() {
        return {
        }
    },
    computed:{
        getMarked(){
            return marked(this.data.info);
        }
    },
    props: ['data']
}
</script>
<style scoped lang="less">
</style>
