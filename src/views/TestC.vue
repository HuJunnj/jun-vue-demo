<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>I'm C Component</div>
  <div>pinia:{{counter.$state.count}}</div>
</template>

<style scoped>

</style>