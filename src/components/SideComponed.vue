<script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  import {ElRow,ElCol,ElMenu, ElSubMenu, ElIcon, ElMenuItemGroup, ElMenuItem } from 'element-plus'
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const jumpRouter = (path:string) => {
    router.push(path); // 跳转
    console.log("路由跳转")
  }
</script>
<template>
  <el-row class="tac">
    <el-col :span="18">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1" @click="jumpRouter('/home')">item one</el-menu-item>
            <el-menu-item index="1-2" @click="jumpRouter('/about')">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3" @click="jumpRouter('/')">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1" @click="jumpRouter('/a')">component a</el-menu-item>
            <el-menu-item index="1-4-2" @click="jumpRouter('/b')">component b</el-menu-item>
            <el-menu-item index="1-4-3" @click="jumpRouter('/c')">component c</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
