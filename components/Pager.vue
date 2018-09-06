<template>
    <nav class="pagination">
        <p>共计 13 篇文章，2 页。</p>
        <ul class="menu menu--nowrap">
            <li>
                <div class="button button--secondary button--circle disabled">
                    <i class="fas fa-angle-left"></i>
                </div>
            </li>
            <li>
                <div class="button button--primary button--circle focus">
                    <span>1</span>
                </div>
            </li>
            <li>
                <a class="button button--secondary button--circle" href="/blog/page2">
                    <span>2</span>
                </a>
            </li>
            <li>
                <a class="button button--secondary button--circle" href="/blog/page2">
                    <i class="fas fa-angle-right"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    
    props: ['data']
}
</script>
<style scoped>
</style>
