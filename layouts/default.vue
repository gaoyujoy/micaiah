<template>
    <div class="root" data-is-touch="false">
        <div class="layout--page clearfix">
            <div class="page__main js-page-main">
                <div class="page__main-inner">
                    <Header/>
                    <nuxt/>
                    <my-footer/>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
    components: {
        MyFooter,
        Header
    }
}
</script>

<style>
</style>
