(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{428:function(e,t,r){"use strict";r.r(t);r(180);var a=r(103),n=r(314),l=Object(a.c)({name:"currency-format-example",setup:function(){var e,t=Object(n.v)(),r=t.languages,l=t.language,o=(e=r.value).concat.apply(e,["pt-PT","pt-BR"]),c=Object(a.k)(l.value),u=Object(a.k)({currency:"USD",currencyDisplay:"symbol"}),s=Object(n.m)(u,c),i=s.formatString,v=s.format,p=Object(a.k)(400);return{locales:o,selectedLocale:c,formatString:i,options:u,value:p,formattedValue:v(p)}}}),o=r(27),c=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",[r("li",[r("label",{attrs:{for:"value"}},[e._v("value")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],attrs:{name:"value",type:"number"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"locale"}},[e._v("Locale")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLocale,expression:"selectedLocale"}],attrs:{name:"locale"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedLocale=t.target.multiple?r:r[0]}}},e._l(e.locales,(function(t){return r("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),r("li",[r("label",{attrs:{for:"currency"}},[e._v("options.currency")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.options.currency,expression:"options.currency"}],attrs:{name:"currency"},domProps:{value:e.options.currency},on:{input:function(t){t.target.composing||e.$set(e.options,"currency",t.target.value)}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"currencyDisplay"}},[e._v("options.currencyDisplay")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.options.currencyDisplay,expression:"options.currencyDisplay"}],attrs:{name:"currencyDisplay"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.options,"currencyDisplay",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"symbol"}},[e._v("symbol")]),e._v(" "),r("option",{attrs:{value:"code"}},[e._v("code")])])])]),e._v(" "),r("p",[e._v("\n    value:\n    "),r("b",[e._v(e._s(e.formatString(e.value)))])]),e._v(" "),r("p",[e._v("\n    formatted:\n    "),r("b",[e._v(e._s(e.formattedValue))])]),e._v(" "),r("p",[e._v("\n    Override currency\n    "),r("b",[e._v(e._s(e.formatString(e.value,"EUR")))])])])}),[],!1,null,null,null);t.default=c.exports}}]);