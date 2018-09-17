<template>
    <nav class="pagination">
        <p>共计 {{total}} 篇文章，{{page}} 页。</p>
        <ul class="menu menu--nowrap" v-if="pageBlock.length!=0&&showPage">
            <li>
                <a :class="['button button--secondary button--circle', {'disabled': page==1}]" @click="changePage(page-1)">
                    <i class="fontello icon-left-open"></i>
                </a> 
            </li>
            <li v-for="item in pageBlock" :key="item">
                <a  :class="['button button--primary button--circle', {'focus': item==page}]" @click="changePage(item)">
                    <span>{{item}}</span>
                </a>
            </li>
            <li>
                <a :class="['button button--secondary button--circle', {'disabled': page==totalPage}]" @click="changePage(page+1)">
                    <i class="fontello icon-right-open"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            pageBlock: [],
            showPage: false,
            visible_num: 6
        }
    },
    computed:{
        totalPage(){
            return Math.ceil(this.total / this.pageSize);
        }
    },
    created(){
        this.darw();
    },
    watch:{
        page(value){
            this.darw();
        },
        total(value){
            this.darw();
        }
    },
    methods:{
        changePage(page){
            if(page==0 || page > this.totalPage){
                return false;
            }
            this.$emit('change-page', page);
        },
        darw(){
            this.pageBlock = [];
            if (this.total == 0 || this.total <= this.pageSize) {
                this.showPage = false;
                return;
            }
            this.showPage = true;
            if (this.totalPage <= this.visible_num - 2) {
                for (var i = 1; i <= this.totalPage; i++){
                    this.pageBlock.push(i);
                }
            }else{
                if (this.page <= (this.visible_num - 4) / 2) {
                    for (var i = 1; i <= this.visible_num - 4; i++){
                        this.pageBlock.push(i);
                    }
                    this.pageBlock.push('...');
                    this.pageBlock.push(this.totalPage);
                } else if (this.page > (this.visible_num - 4) / 2 && this.page < this.totalPage - (this.visible_num - 4) / 2) {
                    this.pageBlock.push(1);
                    var l = (this.visible_num - 6) / 2, s = 0, e = 0;
                    if ((this.visible_num - 6) % 2 != 0) {
                        s = parseInt(l), e = parseInt(l);
                    } else {
                        s = parseInt(l) - 1, e = parseInt(l);
                    }
                    this.pageBlock.push(this.page - s == 3 ? 2 : '...');
                    for (var i = this.page - s; i <= this.page + e; i++){
                        this.pageBlock.push(i);
                    }
                    this.pageBlock.push(this.page + e == this.totalPage - 2 ? this.page + e + 1 : '...');
                    this.pageBlock.push(this.totalPage);
                } else {
                    this.pageBlock.push(1);
                    this.pageBlock.push('...');
                    for (var i = this.totalPage - (this.visible_num - 5); i <= this.totalPage; i++) {
                        this.pageBlock.push(i);
                    }
                }
            }
        }
    },
    props: ['page', 'total', 'pageSize']
}
</script>
<style scoped>
</style>
