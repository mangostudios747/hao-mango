(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,11,15,16,17,18,19],{269:function(t,e,n){"use strict";n.r(e);var r={name:"Button"},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"\n        float-right\n        rounded-lg\n        shadow-lg\n        px-3\n        cursor-pointer\n        text-base\n        py-1\n        my-2\n        bg-green-500\n        font-semibold\n        hover:shadow\n        text-white\n      ",on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)}),[],!1,null,"53187bce",null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r={name:"nextButton"},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("btn",{on:{click:function(e){return t.$emit("click",e)}}},[t._v("Next\n")])}),[],!1,null,"4e4fd4e2",null);e.default=component.exports;installComponents(component,{Btn:n(269).default})},272:function(t,e,n){"use strict";n.r(e);var r={},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("btn",{on:{click:function(e){return t.$emit("click",e)}}},[t._v("\n      Submit\n    ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Btn:n(269).default})},274:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("8061aad4",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n.r(e);var r={name:"tone-one"},o=n(37),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"xMidYMin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("line",{staticClass:"stroke-current text-black dark:text-gray-50",attrs:{x1:"0",y1:"50",x2:"100",y2:"50",class:"stroke-current text-black dark:text-gray-50"}})])}),[],!1,null,"404afbf4",null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r={name:"tone-two"},o=n(37),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[e("line",{staticClass:"stroke-current text-black dark:text-gray-50",attrs:{x1:"0",y1:"100",x2:"100",y2:"0"}})])}),[],!1,null,"0c1e1060",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var r={name:"tone-three"},o=n(37),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"stroke-current text-black dark:text-gray-50",attrs:{d:"M 0 20 L 50 80 L 100 20",fill:"transparent"}})])}),[],!1,null,"4905ecb5",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r={name:"tone-four"},o=n(37),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[e("line",{staticClass:"stroke-current text-black dark:text-gray-50",attrs:{x1:"0",y1:"0",x2:"100",y2:"100"}})])}),[],!1,null,"65373270",null);e.default=component.exports},283:function(t,e,n){"use strict";n(274)},284:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.tone-select-box{\n  display:flex;\n  height:2rem;\n  width:auto;\n  cursor:pointer;\n  justify-content:center;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity))\n}\n@media (prefers-color-scheme: dark){\n.tone-select-box{\n    --tw-bg-opacity:1;\n    background-color:rgba(75, 85, 99, var(--tw-bg-opacity))\n}\n}\n.tone-select-box{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  text-align:center;\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.tone-select-box:hover{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.tone-select-box.active{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity))\n}\n@media (prefers-color-scheme: dark){\n.tone-select-box.active{\n    --tw-bg-opacity:1;\n    background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n}\n.tone-select-box.active{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.tone-select-box:first-of-type{\n  border-top-left-radius:0.5rem;\n  border-bottom-left-radius:0.5rem\n}\n.tone-select-box:last-of-type{\n  border-top-right-radius:0.5rem;\n  border-bottom-right-radius:0.5rem\n}\n.tone-select-box.hint{\n  border-width:4px;\n  --tw-border-opacity:1;\n  border-color:rgba(16, 185, 129, var(--tw-border-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},288:function(t,e,n){"use strict";n.r(e);n(38),n(21);var r=n(272),o=n(277),c=n(278),l=n(279),d=n(280),f={components:{submitButton:r.default,toneOne:o.default,toneTwo:c.default,toneThree:l.default,toneFour:d.default},props:["data"],data:function(){return{wrong:!1,correct:!1,input:Array(),rightOnFirstTry:!0}},beforeMount:function(){this.resetInput()},watch:{data:{deep:!0,handler:function(){this.resetInput()}}},methods:{resetInput:function(){Object.assign(this,{wrong:!1,correct:!1,input:Array(),rightOnFirstTry:!0}),this.input=Array.from({length:this.data.length},(function(t){return{letters:"",tone:null}}))},check:function(){var t=JSON.stringify(this.input),e=JSON.stringify(this.data);t===e?(this.rightOnFirstTry&&this.$store.commit("saveQuestion"),this.correct=!0,this.$emit("correct")):(console.log(t,e),this.rightOnFirstTry=!1,this.wrong=!0,this.$emit("wrong"))}}},h=(n(283),n(37)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex flex-col"},t._l(t.data,(function(e,r){return n("div",{key:r,staticClass:"flex mx-auto flex-col"},[n("div",{staticClass:"grid grid-cols-5 mx-0 rounded-md"},[n("div",{staticClass:"tone-select-box ",class:0==t.input[r].tone?"active":t.wrong&&0==t.data[r].tone?"hint":"",on:{click:function(e){t.input[r].tone="0"}}}),t._v(" "),n("div",{staticClass:"tone-select-box ",class:1==t.input[r].tone?"active":t.wrong&&1==t.data[r].tone?"hint":"",on:{click:function(e){t.input[r].tone="1"}}},[n("tone-one")],1),t._v(" "),n("div",{staticClass:"tone-select-box",class:2==t.input[r].tone?"active":t.wrong&&2==t.data[r].tone?"hint":"",on:{click:function(e){t.input[r].tone="2"}}},[n("tone-two")],1),t._v(" "),n("div",{staticClass:"tone-select-box",class:3==t.input[r].tone?"active":t.wrong&&3==t.data[r].tone?"hint":"",on:{click:function(e){t.input[r].tone="3"}}},[n("tone-three")],1),t._v(" "),n("div",{staticClass:"tone-select-box",class:4==t.input[r].tone?"active":t.wrong&&4==t.data[r].tone?"hint":"",on:{click:function(e){t.input[r].tone="4"}}},[n("tone-four")],1)]),t._v(" "),n("div",{staticClass:"rounded-md shadow-inner  bg-gray-200 dark:bg-gray-800 mt-3 mb-2 focus-within:bg-white dark:focus-within:bg-gray-600 dark:text-gray-50 focus-within:shadow-md w-full mx-auto"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input[r].letters,expression:"input[idx]['letters']"}],staticClass:"bg-transparent  focus:outline-none px-3 text-lg w-full",attrs:{placeholder:t.wrong?t.data[r].letters:""},domProps:{value:t.input[r].letters},on:{input:function(e){e.target.composing||t.$set(t.input[r],"letters",e.target.value)}}})])])})),0),t._v(" "),n("div",[t.correct?t._e():n("submit-button",{on:{click:t.check}}),t._v(" "),t.correct?n("next-button",{on:{click:function(e){return t.$store.dispatch("nextProblem")}}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SubmitButton:n(272).default,NextButton:n(271).default})}}]);