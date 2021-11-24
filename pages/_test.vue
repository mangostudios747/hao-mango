<template>
  <div>
    <h1  class="font-bold text-black leading-4 text-2xl mb-2">{{$store.state.testData.name}}</h1>
    <div class="flex w-full h-full" v-if="$store.getters.currentTestOver">
      <happy/>
    </div>
    <div v-else-if="$store.state.currentTest">

      <problem :problem="$store.state.currentProblem"/>
    </div>
    <div class="flex " v-else>
      <div class="my-auto mx-auto"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}){
    const { test } = params;
    const chap = await $content(test).fetch();
    return {chap};
  },
  mounted() {
    this.$store.dispatch('switchTest', {testID: this.chap.slug, test: this.chap});
  },
  beforeRouteUpdate(to, from, next){
    this.$store.dispatch('switchTest', {testID: this.chap.slug, test: this.chap});
    next();
  }
}
</script>

<style scoped>

</style>
