<template>
  <nav class="bg-[#242947] text-[#fff] py-2 px-5 flex items-center justify-between" :class="{'bg-[#E4EAF3] text-[#000]' : !darkMode}">
    <div class="flex items-center gap-x-2">
      <button class="navbar-burger flex items-center text-blue-600 p-2 bg-[#EEB60E] rounded-tl-lg rounded-br-lg md:hidden">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill="#000" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
        <a class="bg-[#373F60] w-7 h-7 flex items-center justify-center rounded-full" href="#" :class="{'bg-[#C7CDDD]' : !darkMode}">
          <img class="w-5" src="../assets/imgs/icons8-home-50.png" :class="{'hidden' : !darkMode}">
          <img class="w-5" src="../assets/imgs/icons8-home-50-b.png" :class="{'hidden' : darkMode}">
        </a>
        <div class="relative">
          <a class="bg-[#373F60] w-7 h-7 inline-block flex items-center justify-center rounded-full" href="#" :class="{'bg-[#C7CDDD]' : !darkMode}">
            <img class="w-5" src="../assets/imgs/icons8-notification-50.png" :class="{'hidden' : !darkMode}">
            <img class="w-5" src="../assets/imgs/icons8-notification-50-b.png" :class="{'hidden' : darkMode}">
          </a>
          <span class="bg-[#F13939] w-4 h-4 flex items-center justify-center inline-block text-xs rounded absolute right-3/4 top-1/4">4</span>
        </div>
    </div>
    <div class="flex items-center gap-x-2">
        <div class="flex gap-x-2">
          <span class="font-bold">21-91014920</span>
          <a class="bg-[#373F60] w-7 h-7 inline-block flex items-center justify-center rounded-full" href="#" :class="{'bg-[#C7CDDD]' : !darkMode}">
            <img class="w-5" src="../assets/imgs/icons8-phone-64.png"  :class="{'hidden' : !darkMode}">
            <img class="w-5" src="../assets/imgs/icons8-telephone-64-b.png" :class="{'hidden' : darkMode}">
          </a>
        </div>
        <div @click="ChangeModeClicked" class="bg-[#373F60] h-7 w-7 flex items-center justify-center rounded-full" :class="{'bg-[#C7CDDD]' : !darkMode}">
          <img class="w-5 h-5" src="../assets/imgs/icons8-sun-30.png" :class="{'hidden' : !darkMode}">
          <img class="w-5 h-5" src="../assets/imgs/icons8-moon-50.png" :class="{'hidden' : darkMode}">
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  props:['darkMode'],
  methods: {
    ChangeModeClicked(){
      this.$emit('changeMode')
    }
  }
}
</script>

<style>

</style>