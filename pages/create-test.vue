<template>
  <div>

    <input v-model="name" class="text-2xl font-bold tracking-wide px-2 focus:outline-none bg-transparent transparent focus:border-green-500 border-b-2 border-gray-500"/>

    <div class="flex flex-col flex-wrap">
      <word-input class="word-box" v-model="words[idx]" :key="idx" v-for="(word, idx) of words" >
       <!--- <input class="text-center" v-model="word.hanzi"  />
        {{getPinyin(word.hanzi)}}
        <input class="text-center" v-model="word.definition" />--->
      </word-input>
      <div @click="newWord" class="cursor-pointer word-box">
        <plus-icon class="mx-auto" size="1.5x" />
      </div>

    </div>
    <client-only>
      <download-button :name="name" :words="words"/>
    </client-only>

  </div>
</template>

<script>
const pinyin = require("pinyin");
import { PlusIcon } from 'vue-feather-icons'

export default {
  name: "create-test",
  components: {
    PlusIcon
  },
  data: ()=>({
    name: "Untitled Chapter",
    words:[],
  }),
  computed: {

  },
  watch: {
    words: {
      deep: true,
      handler(){
        localStorage.setItem('writing:newTest', JSON.stringify({
          name: this.name,
          words: this.words
        }))
      }
    }
  },
  mounted(){
    const c = localStorage.getItem('writing:newTest');
    if (c){
      Object.assign(this, JSON.parse(c));
    }
  },
  methods : {
    newWord(){
      this.words.push({
        hanzi:'',
        definition:''
      })
    },

  }
}
</script>

<style scoped>
.word-box {
  @apply bg-gray-100 my-1 rounded-lg p-5 flex-col sm:flex-row flex-wrap shadow-md text-center hover:shadow-lg focus-within:shadow-2xl inline-flex;
}
</style>
