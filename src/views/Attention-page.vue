<template>
    <div style="height: 3000px">
      <!--  <div style="width: 70%;float: left;border: 1px solid #E6E6E6;height: 1500px" >
            <waterfall></waterfall>

        </div>
        <div style="width: 29%;float: right;border: 1px solid #e6e6e6">

        </div>-->
        <waterfall></waterfall>

    </div>
</template>

<script>
    import Vue from 'vue'
    import Test from './Test'

    Vue.component("waterfall",Test)
    export default {
        name: "AttentionPage"
    }
</script>

<style scoped>

</style>