(window.webpackJsonp=window.webpackJsonp||[]).push([[21,9,13,14],{270:function(t,e,r){"use strict";r.r(e);var n={components:{},props:["q"]},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"text-2xl mb-2"},[t._v("Translate "),r("span",{staticClass:"text-green-500 font-semibold "},[t._v("“"+t._s(t.q.data)+"” ")]),t._v(":")])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{correct:!1,wrong:!1}},computed:{cp:function(){return this.$store.state.currentProblem.oti}},watch:{cp:function(){this.correct=!1,this.wrong=!1}},components:{Question:r(270).default},props:["problem"]},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-4 px-6 rounded-lg shadow my-6",class:t.correct?"bg-green-100 dark:bg-green-800":t.wrong?"bg-red-100 dark:bg-red-800":"bg-gray-100 dark:bg-gray-700"},[r("question",{staticClass:"mb-3",attrs:{q:t.problem.question}}),t._v(" "),r("answer-input",{attrs:{a:t.problem.answer},on:{wrong:function(e){t.wrong=!0},correct:function(e){t.correct=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Question:r(270).default,AnswerInput:r(287).default})},297:function(t,e,r){"use strict";r.r(e);var n={name:"happy",data:function(){return{prog:0}},mounted:function(){this.$confetti.start(),this.prog=1},beforeDestroy:function(){this.$confetti.stop()}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full text-center "},[r("progress-bar",{staticClass:"scale-150 my-10 mx-auto",attrs:{value:t.prog}}),t._v(" "),r("p",{staticClass:"font-bold text-4xl tracking-wider mt-10 leading-relaxed"},[t._v("Yay! "+t._s(t.$store.state.testData.name)+" completed!")])],1)}),[],!1,null,"709cc8a0",null);e.default=component.exports;installComponents(component,{ProgressBar:r(201).default})},316:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(43),r(27),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=n.test,e.next=4,r(o).fetch();case 4:return c=e.sent,e.abrupt("return",{chap:c});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.dispatch("switchTest",{testID:this.chap.slug,test:this.chap})},beforeRouteUpdate:function(t,e,r){this.$store.dispatch("switchTest",{testID:this.chap.slug,test:this.chap}),r()}}),c=r(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"font-bold text-black dark:text-gray-50 leading-4 text-2xl mb-2"},[t._v(t._s(t.$store.state.testData.name))]),t._v(" "),t.$store.getters.currentTestOver?r("div",{staticClass:"flex w-full h-full"},[r("happy")],1):t.$store.state.currentTest?r("div",[r("problem",{attrs:{problem:t.$store.state.currentProblem}})],1):r("div",{staticClass:"flex "},[r("div",{staticClass:"my-auto mx-auto"})])])}),[],!1,null,"54c4fb6e",null);e.default=component.exports;installComponents(component,{Happy:r(297).default,Problem:r(276).default})}}]);