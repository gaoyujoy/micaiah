<template>
  <section class="container">
    关于页面
  </section>
</template>
<script>
export default {
  asyncData({ req }) {
    return {
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
</style>
