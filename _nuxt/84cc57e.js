(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,7,8,11,12,15,16,17,18,19],{269:function(t,n,e){"use strict";e.r(n);var r={name:"Button"},o=e(37),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("a",{staticClass:"\n        float-right\n        rounded-lg\n        shadow-lg\n        px-3\n        cursor-pointer\n        text-base\n        py-1\n        my-2\n        bg-green-500\n        font-semibold\n        hover:shadow\n        text-white\n      ",on:{click:function(n){return t.$emit("click",n)}}},[t._t("default")],2)}),[],!1,null,"53187bce",null);n.default=component.exports},271:function(t,n,e){"use strict";e.r(n);var r={name:"nextButton"},o=e(37),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("btn",{on:{click:function(n){return t.$emit("click",n)}}},[t._v("Next\n")])}),[],!1,null,"4e4fd4e2",null);n.default=component.exports;installComponents(component,{Btn:e(269).default})},272:function(t,n,e){"use strict";e.r(n);var r={},o=e(37),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("btn",{on:{click:function(n){return t.$emit("click",n)}}},[t._v("\n      Submit\n    ")])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Btn:e(269).default})},274:function(t,n,e){var content=e(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("8061aad4",content,!0,{sourceMap:!1})},275:function(t,n,e){var content=e(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("1ed2b23c",content,!0,{sourceMap:!1})},277:function(t,n,e){"use strict";e.r(n);var r={name:"tone-one"},o=e(37),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"xMidYMin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("line",{staticClass:"stroke-2 stroke-current text-gray-800",attrs:{x1:"0",y1:"50",x2:"100",y2:"50",stroke:"black"}})])}),[],!1,null,"08484ec3",null);n.default=component.exports},278:function(t,n,e){"use strict";e.r(n);var r={name:"tone-two"},o=e(37),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{attrs:{x1:"0",y1:"100",x2:"100",y2:"0",stroke:"black"}})])}),[],!1,null,"26a75645",null);n.default=component.exports},279:function(t,n,e){"use strict";e.r(n);var r={name:"tone-three"},o=e(37),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M 0 20 L 50 80 L 100 20",fill:"transparent",stroke:"black"}})])}),[],!1,null,"f97c0a38",null);n.default=component.exports},280:function(t,n,e){"use strict";e.r(n);var r={name:"tone-four"},o=e(37),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{attrs:{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"black"}})])}),[],!1,null,"f80f0352",null);n.default=component.exports},283:function(t,n,e){"use strict";e(274)},284:function(t,n,e){var r=e(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.tone-select-box{\n  display:flex;\n  height:2rem;\n  width:auto;\n  cursor:pointer;\n  justify-content:center;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  text-align:center;\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.tone-select-box:hover{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.tone-select-box.active{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.tone-select-box:first-of-type{\n  border-top-left-radius:0.5rem;\n  border-bottom-left-radius:0.5rem\n}\n.tone-select-box:last-of-type{\n  border-top-right-radius:0.5rem;\n  border-bottom-right-radius:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},285:function(t,n,e){"use strict";e(275)},286:function(t,n,e){var r=e(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.char-container svg{\n  filter:drop-shadow(-1px -1px 2px rgb(182,185,190))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},287:function(t,n,e){"use strict";e.r(n);var r={components:{pinyinInput:e(288).default},props:["a"]},o=e(37),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["p"===t.a.type?e("pinyin-input",{attrs:{data:t.a.data},on:{wrong:function(n){return t.$emit("wrong")},correct:function(n){return t.$emit("correct")}}}):t._e(),t._v(" "),"e"===t.a.type?e("english-input",{attrs:{data:t.a.data},on:{wrong:function(n){return t.$emit("wrong")},correct:function(n){return t.$emit("correct")}}}):t._e(),t._v(" "),"c"===t.a.type?e("hanzi-input",{attrs:{data:t.a.data},on:{wrong:function(n){return t.$emit("wrong")},correct:function(n){return t.$emit("correct")}}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PinyinInput:e(288).default,EnglishInput:e(295).default,HanziInput:e(296).default})},288:function(t,n,e){"use strict";e.r(n);e(38),e(21);var r=e(272),o=e(277),c=e(278),l=e(279),f=e(280),d={components:{submitButton:r.default,toneOne:o.default,toneTwo:c.default,toneThree:l.default,toneFour:f.default},props:["data"],data:function(){return{wrong:!1,correct:!1,input:Array(),rightOnFirstTry:!0}},beforeMount:function(){this.resetInput()},watch:{data:{deep:!0,handler:function(){this.resetInput()}}},methods:{resetInput:function(){Object.assign(this,{wrong:!1,correct:!1,input:Array(),rightOnFirstTry:!0}),this.input=Array.from({length:this.data.length},(function(t){return{letters:"",tone:null}}))},check:function(){var t=JSON.stringify(this.input),n=JSON.stringify(this.data);t===n?(this.rightOnFirstTry&&this.$store.commit("saveQuestion"),this.correct=!0,this.$emit("correct")):(console.log(t,n),this.rightOnFirstTry=!1,this.wrong=!0,this.$emit("wrong"))}}},h=(e(283),e(37)),component=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-col"},t._l(t.data,(function(n,r){return e("div",{key:r,staticClass:"flex mx-auto flex-col"},[e("div",{staticClass:"grid grid-cols-4 mx-0 rounded-md"},[e("div",{staticClass:"tone-select-box ",class:1==t.input[r].tone?"active":"",on:{click:function(n){t.input[r].tone="1"}}},[e("tone-one")],1),t._v(" "),e("div",{staticClass:"tone-select-box",class:2==t.input[r].tone?"active":"",on:{click:function(n){t.input[r].tone="2"}}},[e("tone-two")],1),t._v(" "),e("div",{staticClass:"tone-select-box",class:3==t.input[r].tone?"active":"",on:{click:function(n){t.input[r].tone="3"}}},[e("tone-three")],1),t._v(" "),e("div",{staticClass:"tone-select-box",class:4==t.input[r].tone?"active":"",on:{click:function(n){t.input[r].tone="4"}}},[e("tone-four")],1)]),t._v(" "),e("div",{staticClass:"rounded-md shadow-inner  bg-gray-200 mt-3 mb-2 focus-within:bg-white focus-within:shadow-md w-full mx-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input[r].letters,expression:"input[idx]['letters']"}],staticClass:"bg-transparent  focus:outline-none px-3 text-lg w-full",domProps:{value:t.input[r].letters},on:{input:function(n){n.target.composing||t.$set(t.input[r],"letters",n.target.value)}}})])])})),0),t._v(" "),e("div",[t.correct?t._e():e("submit-button",{on:{click:t.check}}),t._v(" "),t.correct?e("next-button",{on:{click:function(n){return t.$store.dispatch("nextProblem")}}}):t._e()],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{SubmitButton:e(272).default,NextButton:e(271).default})},295:function(t,n,e){"use strict";e.r(n);var r={props:["data"],data:function(){return{correct:!1,input:null,wrong:!1,rightOnFirstTry:!0}},beforeMount:function(){this.resetInput()},watch:{data:{deep:!0,handler:function(){this.resetInput()}}},methods:{resetInput:function(){Object.assign(this,{correct:!1,input:null,wrong:!1,rightOnFirstTry:!0})},check:function(){if(this.data.answer===this.input){this.rightOnFirstTry?(this.$store.commit("saveQuestion"),this.correct=!0):this.correct=!0,this.$emit("correct")}else this.rightOnFirstTry=!1,this.wrong=!0,this.$emit("wrong")}}},o=e(37),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"grid gap-4 grid-cols-2 sm:grid-cols-4"},t._l(t.data.options,(function(option,n){return e("div",{key:n,staticClass:"bg-white cursor-pointer hover:shadow-sm rounded-lg px-3 py-2 text-center font-semibold shadow-md",class:t.input===option?"bg-green-500 text-white":"",on:{click:function(n){t.input=option}}},[t._v(t._s(option))])})),0),t._v(" "),e("div",{staticClass:"mt-4"},[t.correct?t._e():e("submit-button",{on:{click:t.check}}),t._v(" "),t.correct?e("next-button",{on:{click:function(n){return t.$store.dispatch("nextProblem")}}}):t._e()],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{SubmitButton:e(272).default,NextButton:e(271).default})},296:function(t,n,e){"use strict";e.r(n);e(38),e(21),e(11),e(32),e(39),e(22),e(27),e(28),e(40),e(41),e(23);function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==e.return||e.return()}finally{if(f)throw c}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var c=e(291).default,l={name:"hanziInput",props:["data"],data:function(){return{writers:[],input:[],correct:!1,mistakes:0,wrong:!1,rightOnFirstTry:!0}},beforeMount:function(){this.resetInput()},mounted:function(){this.createBox()},computed:{done:function(){var t,n=!0,e=r(this.input);try{for(e.s();!(t=e.n()).done;){var o=t.value;n=n&&o.done}}catch(t){e.e(t)}finally{e.f()}return!this.correct&&n&&this.mistakes<4&&this.$store.commit("saveQuestion"),this.correct=n,n&&this.$emit("correct"),n},datums:function(){return{oti:this.$store.state.currentProblem.oti,data:this.data}}},watch:{datums:{deep:!0,handler:function(){this.resetInput(),this.$nextTick(this.createBox)}},input:{deep:!0,handler:function(){console.log()}}},methods:{resetInput:function(){Object.assign(this,{correct:!1,input:[],wrong:!1,mistakes:0,rightOnFirstTry:!0,writers:[]}),this.input=Array.from({length:this.data.length},(function(t){return{done:!1,percentDone:0}}))},createBox:function(){var t,n=this.$store.state.currentProblem,e=n.id,o=n.type,l=this.$store.state.testProgress[e].progress[o]<2,f=r(this.data);try{for(f.s();!(t=f.n()).done;){var d=t.value;this.writers.push(c.create("".concat(d,"-target"),d,{width:200,height:200,showOutline:l,padding:5,showHintAfterMisses:2,showCharacter:!1,drawingColor:"#10b981",drawingWidth:15,drawingFadeDuration:500,outlineColor:"#D0D4D9",leniency:1.5,strokeHighlightSpeed:1,highlightColor:"#10B981"}))}}catch(t){f.e(t)}finally{f.f()}var h=this;this.writers.forEach((function(t,n){return t.quiz({onMistake:function(){h.mistakes++},onCorrectStroke:function(t){var e=t.strokeNum,r=t.strokesRemaining;h.input[n].percentDone=(e+1)/(e+r+1)},onComplete:function(){h.input[n].done=!0}})}))}}},f=(e(285),e(37)),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-row justify-center flex-wrap"},t._l(t.data,(function(n,r){return e("div",{key:n+t.$store.state.currentProblem.oti,staticClass:"mx-1"},[e("progress-bar",{attrs:{value:t.input[r].percentDone}}),t._v(" "),e("div",{staticClass:"char-container",attrs:{id:n+"-target"}})],1)})),0),t._v(" "),t.done?e("next-button",{staticClass:"ml-auto float-right",on:{click:function(n){return t.$store.dispatch("nextProblem")}}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ProgressBar:e(201).default,NextButton:e(271).default})}}]);