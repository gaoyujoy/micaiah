<template>
    <div class="layout--archive js-all">
        <div class="search-box js-search-box">
            <div class="search-box__icon-search">
                <i class="fontello icon-search"></i>
            </div>
            <input type="text" v-model="searchKey" @input="changeSearchKey">
            <div class="search-box__icon-clear js-icon-clear" :style="{'display': searchKey==''? 'none' : 'block'}" @click="clearInput">
                <div class="button button--secondary button--circle button--sm"><i class="fontello icon-cancel"></i></div>
            </div>
        </div>
        <div class="site-tags js-tags" v-if="searchKey==''">
            <ul class="menu">
                <li>
                    <button @click="changeTag('all')" type="button" :class="['button button--secondary button--pill tag-button js-article-tag js-tag-show-all', {'focus':!actid||actid==''}]" data-encode="">
                        Show All<div class="tag-button__count" v-if="getTotal!=0">{{getTotal}}</div>
                    </button>
                </li>
                <li v-for="tag in tags" :key="tag._id">
                    <button @click="changeTag(tag._id)" type="button" :class="['button button--pill tag-button js-article-tag', getClass(tag.count),{'focus':actid==tag._id}]" data-encode="FrontEnd">
                        {{tag.title}}<div class="tag-button__count">{{tag.count}}</div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="js-result layout--archive__result">
            <div>
                <section v-for="(item, index) in blogs" :key="index">
                    <h2 class="year">{{item.year}}</h2>
                    <ul>
                        <li v-for="item2 in item.list" :key="item2._id">
                            <span class="date">{{item2.time}}</span>
                            <nuxt-link :to="`/blog/${item2._id}`">{{item2.title}}</nuxt-link>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <Pager :page-size="page_size" :page="page" :total="total" @change-page="changePage"></Pager>
    </div>
</template>
<script>
import axios from 'axios'
import Pager from '~/components/Pager.vue'
export default {
    props: {
        actid:{
            type: String,
            default: ''
        }
    },
    watch:{
        actid(value){
            this.getDatas(true);
        }
    },
    components: {
        Pager
    },
    created(){
        this.getDatas(true);
    },
    data(){
        return {
            page_size: 50,
            page: 1,
            total: 0,
            searchKey: '',
            tags: [],
            blogs: []
        }
    },
    computed:{
        getTotal(){
            var total = 0;
            for(var i = 0; i < this.tags.length; i++){
                total+=this.tags[i].count;
            }
            return total;
        }
    },
    methods:{
        getDatas(getId){
            var url = `${process.client ? '' : process.env.baseUrl }/api/tags?page=${this.page}`;
            if(getId&&this.actid&& this.actid!=''){
                url+=`&id=${this.actid}`;
            }
            if(this.searchKey!=''){
                url+=`&key=${this.searchKey}`;
            }
            axios.get(url).then( response=> {
                var res = response.data;
                if (res.code == 0) { 
                    this.tags = res.data || [];
                    this.blogs = res.blogs || [];
                    this.total = res.count || 0;
                }
            }).catch(error=>{
                console.log(error)
            })
        },
        clearInput(){
            this.searchKey = '';
            this.getDatas(true);
        },
        changeSearchKey(){
            this.getDatas(this.searchKey==''? true : false);
        },
        changePage(page){
            this.page = page;
            this.getDatas(true);
        },
        getClass(num){
            if(num==0){
                return 'tag-button-1';
            }else if(num<=5){
                return 'tag-button-2';
            }else{
                return 'tag-button-3';
            }
        },
        changeTag(type){
            if(type=='all'){
                this.$router.push(`/archive`);
            }else{
                this.$router.push(`/archive/${type}`);
            }
        }
    }
}
</script>

<style scoped>
</style>
