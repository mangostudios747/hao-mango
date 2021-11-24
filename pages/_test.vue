<template>
  <div>
    <div v-if="$store.state.currentTest">
      <h1  class="font-bold text-black leading-4 text-2xl">{{$store.state.testData.name}}</h1>
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
