<template>
    <div class="flex flex-col">
      <div  class="grid gap-4 grid-cols-2 sm:grid-cols-4">
        <div @click="input = option" :class="input === option? 'bg-green-500 text-white':''" :key="idx" class="bg-white cursor-pointer hover:shadow-sm rounded-lg px-3 py-2 text-center font-semibold shadow-md" v-for="(option, idx) of data.options">{{option}}</div>

      </div>
      <div class="mt-4">
        <submit-button v-if="!correct" @click="check"/>
        <next-button @click="$store.dispatch('nextProblem')" v-if="correct" />
      </div>
    </div>
</template>

<script>
export default {
    props:['data'],
  data:()=>({
    correct: false,
    input: null,
    wrong: false,
    rightOnFirstTry: true,
  }),
  beforeMount(){
    this.resetInput()
  },
  watch:{
    data:{
      deep: true,
      handler(){
        this.resetInput();
      }
    }
  },
  methods:{
    resetInput(){
      Object.assign(this, {
        correct: false,
        input: null,
        wrong: false,
        rightOnFirstTry: true,
      })
    },
      check(){
        if (this.data.answer === this.input){
          const v = this;
          // save
          if (this.rightOnFirstTry) {
            this.$store.commit('saveQuestion');
            this.correct = true;
          }
          else {
            this.correct = true;
          }
          this.$emit('correct');
        }
        else {
          this.rightOnFirstTry = false;
          this.wrong = true;
          this.$emit('wrong');
        }
      }
  }
}
</script>

<style>

</style>
