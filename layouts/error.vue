<template>
  <div class="error-body">
    <p>抱歉！找不到您想要的内容，请尝试其他方法进行访问</p>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style lang="less" scoped>
.error-body{
  min-height: 300px;
  padding-top: 100px;
  text-align: center;
  p{
    text-align: center;
    font-size: 20px;
  }
  a{
    display: inline-block;
    margin: 50px auto 0;
    &:hover{
      text-decoration: none;
    }
  }
}
</style>
