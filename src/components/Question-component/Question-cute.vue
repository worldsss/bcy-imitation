<template>
    <div>
        <el-card style="margin-bottom: 10px">
            <el-row :gutter="10">
             <el-col :span="2">
                 <slot name="question-avatar"></slot>
<!--                 <el-avatar :size="30" src="4.jpg"></el-avatar>-->
             </el-col>
             <el-col :span="20">

                <h4 style="margin: 0px 0px 5px 0px">
<!--                    这里是回答的名称-->
                    <slot name="question-name"></slot>
                </h4>
                 <h3 style="margin: 0px 0px 0px 0px">
<!--                     这里是问题，你平常吃饭吗？之类的-->
                    <slot name="question-text"></slot>
                 </h3>
                 <p style="margin-top: 5px">
                     <el-link href="#" :underline="false">
<!--                         这里是回答名称-->
                         <slot name="question-nameLink"></slot>
                         <slot name="question-content"></slot>

                     </el-link>
                 </p>
                 <el-row :gutter="10" >
                     <el-col :span="6">
                         <el-link icon="el-icon-star-off" :underline="false" type="info">
                             <slot name="question-collect"></slot>
                         </el-link>
                     </el-col>
                     <el-col :span="6">
                         <el-link icon="el-icon-position" :underline="false" type="info">
                             <slot name="question-go"></slot>
                         </el-link>
                     </el-col>
                     <el-col :span="6">
                         <el-link icon="el-icon-chat-line-round" :underline="false" type="info">
                             <slot name="question-comment"></slot>
                         </el-link>
                     </el-col>
                     <el-col :span="6">
                         <el-link icon="el-icon-view" :underline="false" type="info">
                             <slot name="question-click"></slot>
                         </el-link>
                     </el-col>
                 </el-row>
             </el-col>
             <el-col :span="2">
                 <slot name="question-firstImg"></slot>
<!--                 <el-avatar shape="shape" src="4.jpg"></el-avatar>-->
             </el-col>
            </el-row>

        </el-card>
    </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
img{
    width: 100%;
}
</style>