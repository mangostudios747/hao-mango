<template>
  <div>
      <pinyin-input v-if="a.type==='p'" :data="a.data" />
    <english-input v-if="a.type==='e'" :data="a.data "/>
    <hanzi-input v-if="a.type==='c'" :data="a.data" />
  </div>
</template>

<script>
import pinyinInput from './pinyinInput.vue'
export default {
  components: { pinyinInput },
    props: ['a']
}
</script>

<style>

</style>
