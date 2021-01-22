<template>
    <div>
        <el-menu router default-active="1" class="el-menu-vertical-demo" style="min-height:800px">
            <el-menu-item index="test"><i class="el-icon-message"></i>导航一</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                searchCriteria: ''
            }
        },

        methods:{
            handleIconClick(ev) {
                console.log(ev);
            }
        },
    }
</script>