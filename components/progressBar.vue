<template>
  <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
    <div class="w-full shadow-inner h-full bg-gray-300 dark:bg-gray-700 absolute"></div>
    <div class="h-full transition-all duration-200 bg-green-500 shadow rounded-full absolute" :style="`width:${value*100}%`"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props:{
    value:{
      default:0.3,type:Number
    }
  }
}
</script>

<style scoped>
</style>
