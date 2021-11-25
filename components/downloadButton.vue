<template>
  <div>
    <btn class="float-left" :href="downloadURL" :download="name.split(' ').join('')">Download</btn>
  </div>
</template>

<script>
export default {
  name: "downloadButton",

  props:["name", "words"],
  computed:{

    downloadURL(){
      const file = new Blob([JSON.stringify({name: this.name, words:this.words})], {type: 'application/json'});
      return URL.createObjectURL(file);
    }
  }
}
</script>

<style scoped>

</style>
