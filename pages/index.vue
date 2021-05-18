<template>
  <section class="home-page">
    <div class="home-page-base">
        <div class="home-page-content">
            <div class="home-page-head">
                <img src="/img/head.jpg"/>
            </div>
            <h2 itemprop="name" class="title-text">Gaoyu</h2>
            <div class="home-page-share">
                <a rel="nofollow" href="https://github.com/gaoyujoy" class="social__icon icon--twitter"><i class="icon-github-circled-alt2"></i></a>
            </div>
            <div class="home-page-blog">
                <nuxt-link to="/blog">Visit My Blog</nuxt-link>
            </div>
        </div>
    </div>
    <div class="home-page-footer"><a href="http://beian.miit.gov.cn/" target="_blank">渝ICP备18012981号</a></div>
  </section>
</template>
<script>
export default {
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  layout: 'home',
  transition:  {
    name: 'animation1',
    mode: 'out-in'
  },
  head() {
    return {
      title: 'Gaoyu\'s Site'
    }
  }
}
</script>

<style scoped lang="less">
    .home-page{
        background: url(/img/bg.jpg) no-repeat;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-size: auto 130%;
        background-position: 50%;
        background-color: #000000;
        .home-page-base{
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,.7);
            display: table;
            .home-page-content{
                display: table-cell;
                vertical-align: middle;
                width: 300px;
                height: 300px;
                animation: fade-in-down .8s;
                .home-page-head{
                    width: 100px;
                    height: 100px;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                    animation: head-animation 3s infinite;
                    img{
                        width: 100%;
                    }
                }
                .title-text{
                    color: #ffffff;
                    text-align: center;
                }
                .home-page-share{
                    font-size: 1.5rem;
                    text-align: center;
                    a{
                        color: #fff;
                        &:hover{
                            color: #f4645f;
                        }
                    }
                }
                .home-page-blog{
                    text-align: center;
                }
            }
        }
        .home-page-footer{
          position: fixed;
          bottom: 0px;
          width: 100%;
          text-align: center;
          height: 30px;
          line-height: 30px;
          background-color: #000000;
          a {
            font-size: 12px;
          }
        }
    }
</style>
