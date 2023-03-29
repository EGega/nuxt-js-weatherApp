<template>
 <div class="flex flex-col items-center justify-center  min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">


	<div class="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
		<div class="flex justify-between">
			<div class="flex flex-col">
				<span class="text-5xl font-bold">{{temp.toFixed(1)}}°C</span>
				<span class="font-semibold mt-1 text-gray-500"> {{cityName}} {{country}} </span>
			</div>
			<img :src="imageUrl" alt="">
		</div>
		<div class="flex justify-between mt-12">
			<!-- Here I am iterating so can display the data for the next days -->
			<div v-for="(item, index) in list">
				<!-- I need to do the for loop in an outer empty div and then the if logic inside another wrapper div, If I use for and if inside the same div they won't work due to the instance problem. The reason why I have chosen the eighth of each iteration is simple, The request gives me data for five days but there is too much data, basically data for each three hours so 24 / 3 = 8 -->
        <div v-if="index % 8 === 0" class="flex flex-col items-center">
				<span class="font-semibold text-lg">{{item.main.temp.toFixed(1)}}°C</span>
        <img :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
           :alt="item.weather[0].description"
           class="w-16 h-16"
      >
				 <span class="font-semibold mt-1 text-sm">{{item.dt_txt.slice(5, 10).split("-").join(" / ")}}</span> 
				<span class="text-xs font-semibold text-gray-400">{{item.weather[0].description}}</span>
			</div>
			</div>
		</div>
	</div>


</div>
</template>

<script setup>
// imported from the store
import {useStore} from "~/store/store"
const store = useStore()

const { data: {_rawValue: today} } = await useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${store.value}&appid=a77c0b06ac25cd5a0f5cab55eea00cb7&units=metric`)
const { data: { _rawValue: nextDays} } = await useFetch (`https://api.openweathermap.org/data/2.5/forecast?q=${store.value}&appid=a77c0b06ac25cd5a0f5cab55eea00cb7&units=metric`)
const {name: cityName, sys: {country}, weather: [{icon}], main: {temp}} = today
const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
// destructuring the arrays of the upcoming days
const { list } = nextDays;
</script>

<style scoped>

</style>