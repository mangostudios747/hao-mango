<template>
<div class="flex flex-col pb-4 overflow-x-hidden h-screen w-screen dark:bg-gray-700 bg-gray-100">
  <nav class="sticky flex top-0 px-8 w-full py-2 h-16 ">
    <button class="mr-3 sm:hidden" @click="sidebar=!sidebar">
      <menu-icon size="1.5x" class="stroke-current dark:text-gray-50"></menu-icon>
    </button>
<h1 class="text-green-500  my-auto  text-2xl font-bold tracking-wide">HaoMango</h1>
  </nav>
  <div class="flex h-full flex-row ">
    <nav :class="sidebar?'w-full -mr-80 pl-2 sm:mr-2 flex-auto block  sm:w-80 ':'hidden sm:w-80  sm:block '" v-if="chaps" class="flex flex-col overflow-x-hidden transition-transform duration-300 ml-3 transform mr-2">
    <a @click="sidebar=false;" :href="'/hao-mango/'+chap.slug" :key="chap.slug" v-for="chap of chaps" class="rounded-2xl block my-1 w-full mr-3 py-2 px-4 text-green-500 " :class="$store.state.currentTest === chap.slug? 'bg-gray-200 dark:bg-gray-800 shadow-inner  pointer-events-non':'hover:shadow-inner dark:hover:bg-gray-800 hover:bg-gray-200 bg-white dark:bg-gray-600 shadow cursor-pointer'">
      <span class="my-2">{{chap.name}} </span>
      <progress-bar :key="pid+''+chap.progress" class="mt-2 mb-1" :value="chap.progress"></progress-bar>
    </a>

   </nav>
   <div  :class="sidebar?'translate-x-96 sm:translate-x-0':'translate-x-0'" class="py-6 sm:py-12 h-full w-full overflow-y-scroll mx-4  rounded-2xl shadow-inner duration-300 transition-transform bg-gray-200 dark:bg-gray-800 px-4 transform sm:px-16">
      <Nuxt/>
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
  }),
  beforeMount() {
    this.reloadProg();
  },
  computed:{
    pid(){
      return (this.$store.state.currentProblem || {}).oti;
    }
  },
  watch: {
    pid(){
      this.reloadProg();
    }
  },
  methods:{
    reloadProg(){
      this.chaps.forEach(function (chap){
        const prog = JSON.parse(localStorage.getItem(chap.slug) || 'false')
        if (!prog) {
          chap.progress = 0;
          return;
        }
        console.log(prog);
        let s = 0;
        for (const e of Object.values(prog)){
          let s2 = 0;
          for (const e2 of Object.values(e.progress)){
            s2 += e2;
          }
          s += s2/18
        }
        chap.progress = s/Object.keys(prog).length;
      })
    }
  }
}

</script>

<style>

</style>
