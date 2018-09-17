<template>
    <section class="container">
        <div class="main" v-html="html"></div>
    </section>
</template>
<script>
import marked from 'marked'
import axios from 'axios'
export default {
    asyncData({ req }) {
        return axios.get( `/api/about`).then( response=> {
            var res = response.data;
            if (res.code == 0) { 
                return {html: marked(res.data.content)};
            }
        }).catch(error=>{
            console.log(error)
        })
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
