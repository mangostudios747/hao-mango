<template>
  <div class="">
    <div v-if="$store.state.currentTest">
         <h1  class="font-bold text-black leading-4 text-2xl">{{$store.state.testData.name}}</h1>
         <problem :problem="$store.state.currentProblem"/>
    </div>
    <div v-else>
   <h1  class="font-bold text-black leading-4 text-2xl">Home</h1>
   </div>
  </div>
</template>

<script>
import Problem from '~/components/Problem.vue'
import Question from '~/components/Question.vue'
export default {
  components: { Problem },}
</script>

<style>

</styl
Questione>
