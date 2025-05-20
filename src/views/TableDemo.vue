<template>
  <el-table :data= tableData style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" width="120" />
    <el-table-column fixed="right" label="Operations" min-width="150">
      <template #default>
        <div style="display: flex; align-items: center; gap: 8px;">
          <el-button type="info" :icon="Message" circle />
          <el-button type="primary" :icon="Edit" @click="handleClick" circle/>
          <el-button type="danger" :icon="Delete" circle />
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {ElTable, ElTableColumn, ElButton} from 'element-plus'
import {
  Delete,
  Edit,
  Message,
} from '@element-plus/icons-vue'
const handleClick = () => {
  console.log('click')
}
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
])
</script>

<style scoped>
</style>
