<template>
    <section class="container">
        <div class="main show-markdown-html" v-html="html" v-highlight></div>
    </section>
</template>
<script>
import marked from 'marked'
import axios from 'axios'
export default {
    asyncData() {
        return axios.get( `${process.client ? '' : process.env.baseUrl }/api/about`).then( response=> {
            var res = response.data;
            if (res.code == 0) { 
                return {html: marked((res.data||{content:''}).content)};
            }
        }).catch(error=>{
            console.log(error)
        })
    },
    data(){
        return {
            html: ''
        }
    },
    transition:  {
        name: 'animation1',
        mode: 'out-in'
    },
    head() {
        return {
            title: 'Micaiah\'s site - About'
        }
    }
}
</script>

<style scoped>
    .main{
        margin: 2rem auto;
    }
</style>
