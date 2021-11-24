<template>
  <div class="w-full text-center ">

    <progress-bar class="scale-150 my-10 mx-auto" :value="prog" />

    <p class="font-bold text-4xl tracking-wider mt-10 leading-relaxed">Yay! {{$store.state.testData.name}} completed!</p>

  </div>
</template>

<script>
export default {
  name: "happy",
  data:()=>({
    prog: 0
  }),
  mounted(){
    this.$confetti.start();
    this.prog = 1;
  },
  beforeDestroy() {
    this.$confetti.stop();
  }
}
</script>

<style scoped>

</style>
