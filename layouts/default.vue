<template>
  <div style="background-color: #EBEBEB;min-height:800px">
    <div style="margin-top:5px">
        <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
              <conmmon-menu></conmmon-menu>
              </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <Nuxt />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import CommonSide from '@/components/organisms/common/ConmmonMenu'
import { Route } from '@/utils/constants'
export default {

}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
