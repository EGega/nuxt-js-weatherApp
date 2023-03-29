<template>
  <div class="body">
   <header class="shadow-sm">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink class="font-bold" to="/">Weather App</NuxtLink>
     
      <ul class="flex gap-4">
         <li><NuxtLink to="/">Home</NuxtLink> </li>
         <li><NuxtLink to="/about">About</NuxtLink> </li> 
         <template v-if="!modal">
          <!-- I am using material ui icons here -->
           <svg class="day-btn" @click="modeHandler" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 4V1h2v3h-2Zm0 19v-3h2v3h-2Zm9-10v-2h3v2h-3ZM1 13v-2h3v2H1Zm17.7-6.3l-1.4-1.4l1.75-1.8l1.45 1.45l-1.8 1.75ZM4.95 20.5L3.5 19.05l1.8-1.75l1.4 1.4l-1.75 1.8Zm14.1 0l-1.75-1.8l1.4-1.4l1.8 1.75l-1.45 1.45ZM5.3 6.7L3.5 4.95L4.95 3.5L6.7 5.3L5.3 6.7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"></path></svg>
         </template>
         <template v-else>
             <svg class="night-btn" @click="modeHandler" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#888888" d="M14 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T4 12q0-2.075.788-3.888t2.15-3.174q1.362-1.363 3.187-2.15T14 2q1.35 0 2.625.35t2.375 1q-2.275 1.325-3.638 3.588T14 12q0 2.8 1.363 5.063T19 20.65q-1.1.65-2.375 1T14 22Z"></path></svg>
         </template>
       </ul>
    </nav>
   </header>
   <div class="container mx-auto p-4">
    <slot/>
   </div>
  </div>
</template>


<script>
export default {
data() {
  return {
    modal: true,
  }
},
methods: {
  modeHandler() {
   if(this.modal) {
    this.modal = false,
    // I am using classlist instead of classname because I want to just add  or remove a class and not overwrite
    document.querySelector(".body").classList.add("night")
    document.querySelector(".body").classList.remove("day")
   }
   else if (!this.modal) {
    this.modal = true,
    document.querySelector(".body").classList.add("day")
    document.querySelector(".body").classList.remove("night")
   }
  }
}
}

</script>


<style scoped>
.router-link-active{
  color: #12b488;
}
/* I am not using tailwind because in the task usage of css is required, otherwise it would be much easier to add some tailwind classes */
.body {
  min-height: 100vh;
}
.night{
  background: #000;
  color: #fff;
  transition: all ease-in-out 300ms;
}
.day {
  background: #fff;
  color:#000;
   transition: all ease-in-out 300ms;
}
.day-btn, .night-btn {
  cursor: pointer;
}

</style>