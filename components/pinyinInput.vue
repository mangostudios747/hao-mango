<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <div :key="idx" v-for="(c, idx) of data" class="flex mx-auto flex-col">
        <div class="grid grid-cols-5 mx-0 rounded-md">
          <div @click="input[idx].tone='0'" :class="input[idx].tone==0?'active':(wrong&&data[idx].tone==0?'hint':'')" class="tone-select-box ">
            
          </div>
          <div @click="input[idx].tone='1'" :class="input[idx].tone==1?'active':(wrong&&data[idx].tone==1?'hint':'')" class="tone-select-box ">
            <tone-one/>
          </div>
          <div @click="input[idx].tone='2'" :class="input[idx].tone==2?'active':(wrong&&data[idx].tone==2?'hint':'')" class="tone-select-box">
            <tone-two/>
          </div>
          <div @click="input[idx].tone='3'" :class="input[idx].tone==3?'active':(wrong&&data[idx].tone==3?'hint':'')" class="tone-select-box">
            <tone-three/>
          </div>
          <div @click="input[idx].tone='4'" :class="input[idx].tone==4?'active':(wrong&&data[idx].tone==4?'hint':'')" class="tone-select-box">
            <tone-four/>
          </div>
        </div>
        <div class="rounded-md shadow-inner  bg-gray-200 dark:bg-gray-800 mt-3 mb-2 focus-within:bg-white dark:focus-within:bg-gray-600 focus-within:shadow-md w-full mx-auto">
          <input :placeholder="wrong?data[idx].letters:''" v-model="input[idx]['letters']" class="bg-transparent  focus:outline-none px-3 text-lg w-full" />
        </div>
      </div>
    </div>
    <div>
      <submit-button v-if="!correct" @click="check"/>
      <next-button @click="$store.dispatch('nextProblem')" v-if="correct" />
    </div>
  </div>
</template>

<script>
import submitButton from './submitButton.vue';
import toneOne from './tones/tone-one.vue';
import toneTwo from './tones/tone-two.vue'
import toneThree from './tones/tone-three.vue';
import toneFour from './tones/tone-four.vue'
export default {
  components: { submitButton, toneOne, toneTwo, toneThree, toneFour },
  props: ["data"],
  data: ()=>({
    wrong: false,
    correct: false,
    input: Array(),
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
  methods: {
    resetInput(){
      Object.assign(this, {
        wrong: false,
        correct: false,
        input: Array(),
        rightOnFirstTry: true,
      })
      this.input = Array.from({length: this.data.length},e=>({letters:'', tone:null}));
    },
    check(){
      const ansJSON = JSON.stringify(this.input);
      const keyJSON = JSON.stringify(this.data);
      if (ansJSON === keyJSON){
        // save
        if (this.rightOnFirstTry) {
          this.$store.commit('saveQuestion')
        }

          this.correct = true;

        this.$emit('correct');
      } else {
        console.log(ansJSON, keyJSON)
        this.rightOnFirstTry = false;
        this.wrong = true;
        this.$emit('wrong');
      }
    }
  }
};
</script>

<style>
.tone-select-box {
  @apply  h-8 w-auto py-1 justify-center cursor-pointer bg-white dark:bg-gray-600 shadow flex text-center hover:shadow-lg;
}

.tone-select-box.active {
  @apply bg-gray-200 dark:bg-gray-800 text-white shadow-inner
}

.tone-select-box:first-of-type {
  @apply rounded-l-lg;
}

.tone-select-box:last-of-type {
  @apply rounded-r-lg
}

.tone-select-box.hint {
  @apply border-4 border-green-500;
}
</style>
