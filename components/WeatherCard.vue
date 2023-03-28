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
			<div v-for="(item, index) in list">
        <div v-if="index % 8 === 0" class="flex flex-col items-center">
				<span class="font-semibold text-lg">{{item.main.temp}}</span>
				<span class="font-semibold text-lg">{{index}}</span>
				<svg class="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
				<span class="font-semibold mt-1 text-sm">11:00</span>
				<span class="text-xs font-semibold text-gray-400">AM</span>
			</div>
			</div>
		</div>
	</div>


</div>
</template>

<script setup>

const { data: {_rawValue: today} } = await useFetch('https://api.openweathermap.org/data/2.5/weather?q=tirana&appid=a77c0b06ac25cd5a0f5cab55eea00cb7&units=metric')
const { data: { _rawValue: nextDays} } = await useFetch ('https://api.openweathermap.org/data/2.5/forecast?q=tirana&appid=a77c0b06ac25cd5a0f5cab55eea00cb7&units=metric')
console.log(today);
console.log(nextDays);
const {name: cityName, sys: {country}, weather: [{icon}], main: {temp}} = today
console.log(cityName);


const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

const { list } = nextDays;
console.log(Array.isArray(list));

// list.slice(0,30).forEach(({ dt }) => {
//   const date = new Date(dt * 1000)
//   console.log(date);
// });

for (let i = 0; i < list.length; i += 8) {
  const { dt } = list[i];
  const date = new Date(dt * 1000)
  console.log(date.getDate());
  console.log(date.getMonth());
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const monthString = months[date.getMonth()];
	console.log(monthString);
}

</script>

<style scoped>

</style>