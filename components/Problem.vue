<template>
  <div class="py-4 px-6 rounded-lg shadow bg-gray-100 my-6">
      <question class="mb-3" :q="problem.question" />
      <answer-input :a="problem.answer" />
  </div>
</template>

<script>
import Question from './Question.vue'
export default {
  components: { Question },
    props:['problem']
}
</script>

<style>

</style>
