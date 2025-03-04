<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
  onMounted,
  reactive,
  ref,
  watch,
  onBeforeUpdate
} from 'vue'
import { useCounterStore } from '@/stores/counter'
/*定义变量*/
const count = ref(0); // 被 Proxy 代理
const state = reactive({
  message: 'Hello Vue3',
  name: 'jun',
  age: 29,
  address: 'singing city henan province'
}); // 被 Proxy 代理
/*定义计算方法*/
const doubleCount = computed(() =>{
  console.log("触发计算")
  return count.value * 2
}); // 计算属性 -> 依赖 Watcher
/*定义监听方法*/
watch(count, (newVal, oldVal) => {
  console.log(`count 从 ${oldVal} 变成 ${newVal}`); // 监听器 -> 依赖 Watcher
});

const counter = useCounterStore()

function increment() {
  counter.increment()
}
function reduce() {
  counter.count--;
}
/*定义普通方法*/
const sayHello = () => {
  console.log("Hello, Vue3!");
  count.value++;
}
const addCount = () => {
  count.value++;
}
const reduceCount = () => {
  count.value--;
}
// 组件 挂载前 运行（仅客户端，SSR 不执行）
onBeforeMount(() => {
  console.log("组件挂载前");
});
// 组件挂载后
onMounted(() => {
  console.log("组件已挂载！可以访问 DOM 了");
});

// 组件挂载后
onBeforeUpdate(() => {
  console.log("组件更新前");
});

// 组件挂载后
onUpdated(() => {
  console.log("组件更新后");
});

// 组件销毁前
onBeforeUnmount(() => {
  console.log("组件即将被销毁");
});
// 组件销毁前
onUnmounted(() => {
  console.log("组件被销毁");
});
</script>

<template>
  <div>I'm B Component</div>
  <div>pinia:{{counter.$state.count}}</div>
  <div>{{count}}</div>
  <div>{{doubleCount}}</div>
  <div>姓名：{{state.name}}</div>
  <div>地址：{{state.address}}</div>
  <div>年龄：{{state.age}}</div>
  <button @click="addCount">增加数量+1</button>
  <button @click="reduceCount">减少数量-1</button>
  <button @click="increment">全局状态管理+1</button>
  <button @click="reduce">全局状态管理-1</button>
</template>

<style scoped>

</style>