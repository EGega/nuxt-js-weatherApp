<template>
  <div class="form-search">
   <form >
    <div class="searchDiv">
      <input type="text" class="searchInput" v-model="searchValue" placeholder="Search for a city?">
      <button class="searchBtn" type="submit" @click="updateValue">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#888888" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path></svg>
      </button>
   </div>
   </form>
  </div>
  
</template>

<script setup>
import { useStore } from '~/store/store'

const store = useStore()

let searchValue = ''

const updateValue = (e) => {
  e.preventDefault()
  store.setValue(searchValue)
  console.log(searchValue);
}

</script>

<style scoped>
.form-search {
  width: 25%;
  margin: auto;
  margin-bottom: 15px;

}
.searchTerm {
  width: 100%;
}
.searchDiv {
  display: flex;
  justify-content: space-between;
}
.searchInput {
  width: 90%;
  padding: 10px 0;
  outline: none;
  border-radius: 20px;
  /* It moves the placeholder */
  text-indent: 10px;
  background: none;
  border: 1px solid rgb(218, 161, 161);
}


</style>



