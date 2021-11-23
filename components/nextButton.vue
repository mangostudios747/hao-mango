<template>
  <btn v-on:click="$emit('click', $event)">Next
  </btn>
</template>

<script>
export default {
  name: "nextButton"
}
</script>

<style scoped>

</style>
