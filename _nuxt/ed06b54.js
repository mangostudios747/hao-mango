(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,8],{267:function(t,e,n){"use strict";n.r(e);var r={name:"Button"},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"\n        float-right\n        rounded-lg\n        shadow-lg\n        px-3\n        text-base\n        py-1\n        my-2\n        bg-green-500\n        font-semibold\n        hover:shadow\n        text-white\n      ",on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)}),[],!1,null,"942ec2cc",null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r={name:"nextButton"},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("btn",{on:{click:function(e){return t.$emit("click",e)}}},[t._v("Next\n")])}),[],!1,null,"4e4fd4e2",null);e.default=component.exports;installComponents(component,{Btn:n(267).default})},284:function(t,e,n){"use strict";n.r(e);n(36),n(21),n(11),n(40),n(37),n(22),n(27),n(28),n(38),n(39),n(23);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c=n(281).default,l={name:"hanziInput",props:["data"],data:function(){return{writers:[],input:[],correct:!1,mistakes:0,wrong:!1,rightOnFirstTry:!0}},beforeMount:function(){this.resetInput()},mounted:function(){this.createBox()},computed:{done:function(){var t,e=!0,n=r(this.input);try{for(n.s();!(t=n.n()).done;){var o=t.value;e=e&&o.done}}catch(t){n.e(t)}finally{n.f()}return!this.correct&&e&&this.mistakes<4&&this.$store.commit("saveQuestion"),this.correct=e,e},type:function(){return this.$store.state.currentProblem.type}},watch:{data:{deep:!0,handler:function(){this.resetInput(),this.$nextTick(this.createBox)}},type:function(){this.resetInput(),this.$nextTick(this.createBox)},input:{deep:!0,handler:function(){console.log()}}},methods:{resetInput:function(){Object.assign(this,{correct:!1,input:[],wrong:!1,mistakes:0,rightOnFirstTry:!0,writers:[]}),this.input=Array.from({length:this.data.length},(function(t){return{done:!1,percentDone:0}}))},createBox:function(){var t,e=this.$store.state.currentProblem,n=e.id,o=e.type,l=this.$store.state.testProgress[n].progress[o]<2,f=r(this.data);try{for(f.s();!(t=f.n()).done;){var h=t.value;this.writers.push(c.create("".concat(h,"-target"),h,{width:200,height:200,showOutline:l,padding:5,showHintAfterMisses:2,showCharacter:!1,leniency:1.5,strokeHighlightSpeed:1,highlightColor:"#10B981"}))}}catch(t){f.e(t)}finally{f.f()}var d=this;this.writers.forEach((function(t,e){return t.quiz({onMistake:function(){d.mistakes++},onCorrectStroke:function(t){var n=t.strokeNum,r=t.strokesRemaining;d.input[e].percentDone=(n+1)/(n+r+1)},onComplete:function(){d.input[e].done=!0}})}))}}},f=n(35),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex flex-row justify-center flex-wrap"},t._l(t.data,(function(e,r){return n("div",{key:e+t.$store.state.currentProblem.type,staticClass:"mx-1"},[n("progress-bar",{attrs:{value:t.input[r].percentDone}}),t._v(" "),n("div",{attrs:{id:e+"-target"}})],1)})),0),t._v(" "),t.done?n("next-button",{on:{click:function(e){return t.$store.dispatch("nextProblem")}}}):t._e()],1)}),[],!1,null,"06068efc",null);e.default=component.exports;installComponents(component,{ProgressBar:n(198).default,NextButton:n(269).default})}}]);