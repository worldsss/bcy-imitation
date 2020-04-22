<template>
    
</template>

<script>
    // import marker from ''


  export default {
    name: "",
    created() {
      var rendererMD = new marked.Renderer();
      marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });//基本设置
      console.log(marked('I am using __markdown__.'));
      // Outputs: <p>I am using <strong>markdown</strong>.</p>
    }
  }
</script>

<style scoped>

</style>