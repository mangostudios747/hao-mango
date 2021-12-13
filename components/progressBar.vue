<template>
  <div class="h-3 relative  max-w-xl rounded-full overflow-hidden">
    <div class="w-full shadow-inner h-full bg-gray-300 dark:bg-gray-900 absolute"></div>
    <div :class="`bg-${color}`" class="h-full transition-all duration-200 shadow-2xl rounded-full absolute" :style="`width:${value*100}%`"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props:{
    value:{
      default:0,type:Number
    },
    color:{
      default:'green-500',
      type: String
    }
  }
}
</script>

<style scoped>
</style>
