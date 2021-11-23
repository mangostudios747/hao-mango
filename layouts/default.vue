<template>
<div class="flex flex-col pb-4 overflow-x-hidden h-screen w-screen bg-gray-100">
  <nav class="sticky flex top-0 px-8 w-full h-16 ">
    <button class="mr-3 sm:hidden" @click="sidebar=!sidebar">
      <menu-icon size="1.5x" class="custom-class"></menu-icon>
    </button>
<h1 class="text-green-500  my-auto  text-2xl font-bold tracking-wide">HaoMango</h1>
  </nav>
  <div class="flex body h-full flex-row ">
    <nav :class="sidebar?'w-full -mr-80 pl-2 sm:mr-2 flex-auto block  sm:w-80 ':'hidden  sm:block '" v-if="chaps" class="flex flex-col overflow-x-hidden transition-transform duration-300 ml-3 transform mr-2">
    <router-link tag="a" :to="'/'+chap.slug" :key="chap.slug" v-for="chap of chaps" class="rounded-2xl block my-1 w-full mr-3 py-2 px-4 text-green-500 " :class="$store.state.currentTest == chap.slug? 'bg-gray-200 shadow-inner  pointer-events-non':'hover:shadow-inner hover:bg-gray-200 bg-white shadow cursor-pointer'">
      <span class="my-2">{{chap.name}}</span>
      <progress-bar class="mt-2 mb-1" :value="0.6"></progress-bar>
    </router-link>

   </nav>
   <div  :class="sidebar?'translate-x-96 sm:translate-x-0':'translate-x-0'" class="py-12 h-full w-full mx-4  rounded-2xl shadow-inner duration-300 transition-transform bg-gray-200 px-2 transform sm:px-16">
      <Nuxt />
   </div>

  </div>
  </div>
</template>
<script>
import { MenuIcon } from 'vue-feather-icons'
export default {
  components: {
    MenuIcon
  },
  async fetch() {
    const chaps = await this.$content('/').where({'extension':{$eq:'.json'}}).only(['slug', 'name', 'words']).fetch()
    console.log(chaps)
    this.chaps = chaps;
  },
  data: ()=>({
    chaps: [],
    sidebar: false
  })
}

</script>

<style>

</style>
