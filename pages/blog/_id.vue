<template>
    <section class="main">
        <div class="col-main">
            <article itemscope="" itemtype="http://schema.org/Article">
                <div class="article__header">
                    <header><h1 itemprop="headline">{{post.title}}</h1></header>
                </div>
                <div class="article__info clearfix">
                    <ul class="left-col menu">
                        <li>
                            <nuxt-link class="button button--secondary button--pill button--sm" :to="`/archive/${post.tag}`">{{post.tagName}}</nuxt-link>
                        </li>
                        <meta itemprop="keywords" content="JavaScript">
                    </ul>
                    <ul class="right-col menu">
                        <li>
                            <i class="fontello icon-calendar" /> 
                            <time datetime="2018-01-12T00:00:00+08:00" itemprop="datePublished">{{post.created_at}}</time>
                        </li>
                        <li itemprop="interactionStatistic" itemscope="" itemtype="http://schema.org/InteractionCounter">
                            <link itemprop="interactionType" href="http://schema.org/WatchAction">
                            <i class="fontello icon-eye" /> 
                            <span class="js-pageview" data-page-key="100018">{{post.view}}</span> 阅读
                        </li>
                    </ul>
                </div>
                <div class="js-article-content">
                    <div class="layout--article">
                        <div class="article__content show-markdown-html" itemprop="articleBody" v-html="getMarked" v-highlight></div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
<script>
import marked from 'marked'
import axios from 'axios'
export default {
    asyncData({ route }) {
        return axios.get( `${process.client ? '' : process.env.baseUrl }/api/post?id=${route.params.id}`).then( response=> {
            var res = response.data;
            if (res.code == 0) { 
                return {post: res.data};
            }
        }).catch(error=>{
            console.log(error)
        })
    },
    transition:  {
        name: 'animation1',
        mode: 'out-in'
    },
    computed:{
        getMarked(){
            return marked(this.post.content);
        }
    },
    head() {
        return {
            title: 'Micaiah\'s site - About'
        }
    }
}
</script>

<style scoped>
    .col-main{
        
        margin: 0 auto;
        
        max-width: 1070px;
    }
</style>
