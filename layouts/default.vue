<template>
    <div class="root" data-is-touch="false">
        <div class="layout--page clearfix">
            <div class="page__main js-page-main">
                <div class="page__main-inner">
                    <Header/>
                    <div class="show-content">
                        <nuxt/>
                    </div>
                    <my-footer/>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import Header from '~/components/Header.vue'
import Vue from 'vue'
import hljs from 'highlight.js';
if(process.client){          
    window.hljs = hljs;
    Vue.directive('highlight',function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
            hljs.highlightBlock(block)
        })
    })
}
export default {
    components: {
        MyFooter,
        Header
    }
}
</script>

<style>
.show-content{
    padding-bottom: 200px;
}
</style>
