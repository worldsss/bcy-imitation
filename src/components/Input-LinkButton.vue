<template>
    <div>
        <el-button style="width: 100%;padding:5px;background-color: #f5f6f7">
            <el-row>
                <el-col :span="5">
<!--                    插槽图片-->
                    <slot name="link-img" ></slot>
                    <!--<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                         alt="" style="width: 100%;height: 100%;margin: 10px">-->
                </el-col>
                <el-col :span="12" style="margin-left: 20px">
                    <p class="my-test-left">
<!--                        插槽，链接名称-->
                        <slot name="link-name"></slot>
                    </p>
                    <p style="opacity: 0.5">
<!--                        插槽，链接介绍-->
                        <slot name="link-info"></slot>
                    </p>
                </el-col>
            </el-row>
        </el-button>
    </div>
</template>

<script>
  export default {
    name: "InputLinkButton"
  }
</script>

<style scoped>

</style>