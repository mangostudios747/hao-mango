<template>
  <div class="word-box">
    <input class="text-center" placeholder="汉字" v-model="value.hanzi"  />
    <input class="text-center" placeholder="pinyin" :value="getPinyin(value.hanzi)" readonly />
    <input class="text-center" placeholder="english" v-model="value.definition" />
  </div>
</template>

<script>
const pinyin = require("pinyin");
export default {
  name: "wordInput",
  props:["value"],
  watch: {
    hanzi: {
      deep: true,
      handler() {
        this.value.pinyin = pinyin(this.value.hanzi, {
          style: pinyin.STYLE_TONE2
        }).map(e=>({
          letters: e[0].slice(0, e[0].length - 1),
          pinyin: e[0].slice(e[0].length-1)
        }));
        this.$emit('update:value', this.value)
      }
    }
  },
  computed: {
    hanzi(){
      return this.value.hanzi
    }
  },
  methods: {
    getPinyin(char, display = true){
      const py = pinyin(char, {
        style: display? pinyin.STYLE_TONE :pinyin.STYLE_TONE2
      })
      if (display){
        return py.map(e=>e.join('')).join('')
      }
      return py;

    },
  }

}
</script>

<style scoped>
.word-box {
  @apply my-1 bg-gray-100 rounded-lg p-5 shadow-md text-center hover:shadow-lg focus-within:shadow-2xl inline-flex;
}

.word-box input {
  @apply bg-gray-200 mx-auto rounded-md text-center my-1 shadow-inner;
}
</style>
