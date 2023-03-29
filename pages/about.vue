<template>
  <div>
<p> {{store.value}} </p>
  </div>
</template>

<script setup>
import {useStore} from "~/store/store"
const store = useStore()
</script>

<style lang="scss" scoped>

</style>