(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11,12],{270:function(t,e,n){"use strict";n.r(e);var r={components:{},props:["q"]},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-lg"},[t._v("Translate "+t._s(t.q.data))])])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{correct:!1,wrong:!1}},computed:{cp:function(){return this.$store.state.currentProblem.oti}},watch:{cp:function(){this.correct=!1,this.wrong=!1}},components:{Question:n(270).default},props:["problem"]},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-4 px-6 rounded-lg shadow my-6",class:t.correct?"bg-green-100":t.wrong?"bg-red-100":"bg-gray-100"},[n("question",{staticClass:"mb-3",attrs:{q:t.problem.question}}),t._v(" "),n("answer-input",{attrs:{a:t.problem.answer},on:{wrong:function(e){t.wrong=!0},correct:function(e){t.correct=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Question:n(270).default,AnswerInput:n(284).default})},304:function(t,e,n){"use strict";n.r(e);var r=n(275),o=(n(270),{components:{Problem:r.default}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",{staticClass:"font-bold text-black leading-4 text-2xl"},[t._v("Home")])])}],!1,null,null,null);e.default=component.exports}}]);