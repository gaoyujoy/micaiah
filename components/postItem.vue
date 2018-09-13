<template>
    <article class="post-item" itemscope="" itemtype="http://schema.org/BlogPosting">
        <header class="article__header">
            <h2 itemprop="headline">
                <nuxt-link :to="`/blog/${data._id}`">{{data.title}}</nuxt-link>
            </h2>
        </header>
        <div class="article__content" itemprop="description articleBody">
            <p>{{data.info}}</p>
        </div>
        <p class="post-list__readmore">
            <nuxt-link :to="`/blog/${data._id}`">阅读更多</nuxt-link>
        </p>
        <div class="article__info clearfix">
            <meta itemprop="author" content="Tian Qi">
            <ul class="left-col menu">
                <li>
                    <nuxt-link class="button button--secondary button--pill button--sm" :to="`/tags/${data.tag}`">{{data.tagName}}</nuxt-link>
                </li>
                <meta itemprop="keywords" content="JavaScript">
            </ul>
            <ul class="right-col menu">
                <li>
                    <i class="far fa-calendar-alt"></i>
                    <span itemprop="datePublished">{{data.created_at}}</span>
                </li>
                <li itemprop="interactionStatistic" itemscope="" itemtype="http://schema.org/InteractionCounter">
                    <link itemprop="interactionType" href="http://schema.org/WatchAction">
                    <i class="far fa-eye"></i>
                    <span class="js-pageview" itemprop="userInteractionCount" :content="data.view">{{data.view}}</span> 阅读
                </li>
            </ul>
        </div>
    </article>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    
    props: ['data']
}
</script>
<style scoped lang="less">
</style>
