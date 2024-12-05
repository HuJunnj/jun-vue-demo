<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ElContainer, ElAside, ElHeader, ElMain} from 'element-plus'
import SideComponed from '@/components/SideComponed.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <SideComponed></SideComponed>
        </el-aside>
        <el-main><RouterView/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
</style>