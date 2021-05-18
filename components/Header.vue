<template>
    <div class="page__header">
        <header class="header">
            <div class="main clearfix">
                <div class="logo">
                    <div class="header-head">
                        <img src="/img/head.jpg"/>
                    </div>
                    <a title="Gaoyu's Site" href="/">Gaoyu's Site</a>
                </div>
                <nav>
                    <ul>
                        <li v-for="(item,index) in menuLinks" :key="index" :class="{'active': isCurrent(item.link)}">
                            <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menuLinks: [
                    {title: '博客', link:'/blog'},
                    {title: '归档', link:'/archive'},
                    {title: '关于', link:'/about'}
                ],
                activePath: this.$route.path
            }
        },
        watch:{
            $route: function(value){
                this.activePath = value.path;
            }
        },
        methods:{
            isCurrent(link){
                return this.activePath.indexOf(link)>=0;
            }
        }
    }
</script>
<style scoped lang="less">
    .header-head{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.5rem;
        &>img{
            width: 100%;
        }
    }
</style>

