(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77033a20"],{"099b":function(t,e,i){"use strict";i("837e")},"837e":function(t,e,i){},f3c7:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"event_setting-dialog"},[i("div",{staticClass:"modal",class:{show_bg:!t.type}},[i("div",{staticClass:"settings__content"},[i("div",{staticClass:"h1"},[t._v(t._s(t.type?"Edit":"Cancel")+" recurring event")]),i("div",{staticClass:"mt-20"},[i("div",{staticClass:"radio_holder"},[i("div",{staticClass:"radio-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.setting,expression:"setting"}],attrs:{type:"radio",id:"current",name:"ritem",value:"0"},domProps:{checked:t._q(t.setting,"0")},on:{change:function(e){t.setting="0"}}}),i("label",{attrs:{for:"current"}},[t._v("This event")])]),i("div",{staticClass:"radio-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.setting,expression:"setting"}],attrs:{type:"radio",id:"currentFollowing",name:"ritem",value:"1"},domProps:{checked:t._q(t.setting,"1")},on:{change:function(e){t.setting="1"}}}),i("label",{attrs:{for:"currentFollowing"}},[t._v("This and following events")])]),i("div",{staticClass:"radio-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.setting,expression:"setting"}],attrs:{type:"radio",id:"all",name:"ritem",value:"2"},domProps:{checked:t._q(t.setting,"2")},on:{change:function(e){t.setting="2"}}}),i("label",{attrs:{for:"all"}},[t._v("All events")])]),i("div",{staticClass:"mt-30 settings_action"},[i("c-button",{staticClass:"button-cancel fs-16",attrs:{variant:"outline-info",tag:"button",size:"sm"},on:{click:t.closeSetting}},[t._v(" Cancel ")]),i("c-button",{staticClass:"fs-16 confirm_btn",attrs:{tag:"button",size:"sm",variant:"info"},on:{click:t.saveSetting}},[t._v(" OK ")])],1)])])])])])},s=[],a={props:{admin:{type:Boolean,default:!1},type:{type:Boolean,default:!0}},data:function(){return{setting:0}},methods:{saveSetting:function(){this.$emit("save",this.setting)},closeSetting:function(){this.$emit("cancel")}},mounted:function(){},beforeDestroy:function(){}},o=a,c=(i("099b"),i("2877")),l=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-77033a20.41bb3906.js.map