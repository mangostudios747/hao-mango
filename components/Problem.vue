<template>
  <div :class="correct?'bg-green-100 dark:bg-green-800':(wrong?'bg-red-100 dark:bg-red-800':'bg-gray-100 dark:bg-gray-700')" class="py-4 px-6 rounded-lg shadow my-6">
      <question class="mb-3" :q="problem.question" />
      <answer-input @wrong="wrong = true;" @correct="correct = true;" :a="problem.answer" />
  </div>
</template>

<script>
import Question from './Question.vue'
export default {
  data: ()=>({
    correct: false,
    wrong: false
  }),
  computed:{
    cp(){
      return this.$store.state.currentProblem.oti;
    }
  },
  watch:{
    cp(){
      this.correct = false; this.wrong = false;
    }
  },
  components: { Question },
    props:['problem']
}
</script>

<style>

</style>
