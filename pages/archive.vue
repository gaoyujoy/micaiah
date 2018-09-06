<template>
    <div class="page__content">
        <div class="main">
            <div class="col-aside js-col-aside"></div>
            <div class="col-main">
                <article itemscope="" itemtype="http://schema.org/WebPage">
                    <div class="article__info clearfix"></div>
                    <div class="js-article-content">
                        <div class="layout--archive js-all">
                            <div class="search-box js-search-box">
                                <div class="search-box__icon-search">
                                    <i class="fontello icon-search"></i>
                                </div>
                                <input type="text">
                                <div class="search-box__icon-clear js-icon-clear">
                                    <div class="button button--secondary button--circle button--sm"><i class="fas fa-times"></i></div>
                                </div>
                            </div>
                            <div class="site-tags js-tags">
                                <ul class="menu">
                                    <li>
                                        <button type="button" class="button button--secondary button--pill tag-button js-article-tag js-tag-show-all focus" data-encode="">
                                            Show All<div class="tag-button__count">13</div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="js-result layout--archive__result">
                                <div>
                                    <section>
                                        <h2 class="year">2018</h2>
                                        <ul>
                                            <li>
                                                <span class="date">01月12日</span>
                                                <a class="link" href="/blog/2018/01/12/jscodeshift.html">jscodeshift 入门指南</a>
                                            </li>
                                            <li>
                                                <span class="date">01月12日</span>
                                                <a class="link" href="/blog/2018/01/12/jscodeshift.html">jscodeshift 入门指南</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="page__comments"></section>
                </article>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  asyncData({ req }) {
    return {
    }
  },
  transition:  {
    name: 'animation1',
    mode: 'out-in'
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
