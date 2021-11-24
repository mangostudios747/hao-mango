<template>
  <div class="flex flex-col">
  <div class="flex flex-row justify-center flex-wrap">
    <div :key="char+$store.state.currentProblem.oti" v-for="(char, idx) of data" class="mx-1" >
      <progress-bar :value="input[idx].percentDone" />
      <div class="char-container" :id="char+'-target'">
      </div>
    </div>
  </div>
    <next-button class="ml-auto float-right" @click="$store.dispatch('nextProblem');" v-if="done" />
  </div>
</template>

<script>
const HanziWriter = require('hanzi-writer').default;
export default {
  name: "hanziInput",
  props:["data"],
  data:()=>({
    writers:[],
    input:[],
    correct: false,
    mistakes: 0,
    wrong: false,
    rightOnFirstTry: true
  }),
  beforeMount() {
    this.resetInput()
  },
  mounted(){
    this.createBox()
  },
  computed:{
    done(){
      let d = true;
      for (const e of this.input){
        d = d && e.done;
      }

      if (!this.correct && d && (this.mistakes < 4)){
        // it is finished for the first time;
        this.$store.commit('saveQuestion')
      }

      this.correct = d;
      if (d){
        this.$emit('correct');
      }

      return d;
    },
    datums(){
      return { oti:this.$store.state.currentProblem.oti, data: this.data }
    }
  },
  watch:{
    datums:{
      deep: true,
      handler(){
        this.resetInput();
        this.$nextTick(this.createBox)
      }
    },
    input: {
      deep: true,
      handler(){
        console.log();
      }
    }
  },
  methods:{
    resetInput(){
      Object.assign(this,{
        correct: false,
        input:[],
        wrong: false,
        mistakes: 0,
        rightOnFirstTry: true,
        writers: [],
      });
      this.input = Array.from({length: this.data.length}, e=>({done: false, percentDone:0}))
    },
    createBox(){
      const {id, type} = this.$store.state.currentProblem;
      const prog = this.$store.state.testProgress[id].progress[type];
      const showOutline = prog < 2; // do it twice before with help, then once without
      for (const char of this.data) {
        this.writers.push(HanziWriter.create(`${char}-target`, char, {
          width: 200,
          height: 200,
          showOutline,
          padding: 5,
          showHintAfterMisses: 2,
          showCharacter: false,
          drawingColor:'#10b981',
          drawingWidth: 15,
          drawingFadeDuration:500,
          outlineColor: '#D0D4D9',
          leniency: 1.5,
          strokeHighlightSpeed: 1,
          highlightColor: '#10B981'
        }));
      }
      const v = this;
      this.writers.forEach((e, idx)=>e.quiz({
        onMistake(){
          v.mistakes++;
        },
        onCorrectStroke({strokeNum, strokesRemaining}){
          v.input[idx].percentDone = (strokeNum + 1)/(strokeNum + strokesRemaining + 1)
           // update some progress bar
        },
        onComplete(){
          v.input[idx].done = true;

        }
      }))
    }
  }
}
</script>

<style >
.char-container svg {
  filter: drop-shadow(-1px -1px 2px rgb(182, 185, 190));
}


</style>
