<template>
  <a
    v-on:click="$emit('click', $event)"
    class="
          float-right
          rounded-lg
          shadow-lg
          px-3
          text-base
          py-1
          my-2
          bg-green-500
          font-semibold
          hover:shadow
          text-white
        "
  >
    <slot/>
  </a>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style scoped>

</style>
