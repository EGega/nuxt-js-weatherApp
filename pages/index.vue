<template>
  <div>
    <SearchBar />
    <WeatherCard :key="updateKey"/>
  </div>
</template>

<script setup>
import {useStore} from "~/store/store"
const store = useStore()
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
let updateKey = 0
// I need to force the update in order to get the component to rerender
 watch(store, () => {
  updateKey += 1 
  instance?.proxy?.$forceUpdate();
  })
</script>

<style scoped>

</style>