(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc28f31"],{"0225c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification",class:{"not-read":!t.item.isSeen},on:{click:function(e){return t.openNotification()}}},[a("div",{staticClass:"notification__image",class:{circle:t.circle}},[t.largeImage?a("img",{attrs:{src:t.largeImage,alt:""}}):t.isPost&&t.circle?a("p",{staticClass:"notification__name"},[t._v(" "+t._s(t.item.userFirstName[0])+t._s(t.item.userLastName[0])+" ")]):t.isPost?a("div"):t.curentEventStartdate&&!t.circle?a("div",{staticClass:"bgEventDate"},[a("h5",[t._v(t._s(t.months[t.curentEventStartdate.getMonth()]))]),a("p",[t._v(t._s(t.curentEventStartdate.getDate()))]),a("img",{attrs:{src:i("d990"),alt:""}})]):t.circle&&(t.item.userFirstName||t.item.userLastName)?a("p",{staticClass:"notification__name"},[t._v(" "+t._s(t.item.userFirstName[0])+t._s(t.item.userLastName[0])+" ")]):t._e()]),t.smallImage?a("div",{staticClass:"notification__imageSmall"},[a("img",{attrs:{src:t.smallImage,alt:""}})]):t._e(),a("div",{staticClass:"notification__text"},[a("p",{staticClass:"title"},[t._v(t._s(t.item.title))]),a("div",{staticClass:"notification__info"},[a("span",{staticClass:"notification__time"},[t._v(t._s(t.time))]),t.item.content.length>0?a("span",{staticClass:"name"},[t._v('"'+t._s(t.item.content)+'"')]):t._e()])])])},s=[],r=i("1da1"),n=(i("7db0"),i("b680"),i("96cf"),i("a026")),c={data:function(){return{time:"0m",circle:!1,largeImage:null,smallImage:null,curentEventStartdate:null,isPost:!1,months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},methods:{openNotification:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadGroup(t.item.groupId);case 2:if(t.item.isSeen||t.readNotification(),console.log("imp>>>>",!t.isMember()),t.isMember()){e.next=7;break}return n["default"].notify({group:"system",title:"Oops!",text:"group is unavailable",type:"error"}),e.abrupt("return");case 7:if(!t.item.postId){e.next=18;break}return e.next=10,t.loadPost(t.item.postId);case 10:return i=t.$store.getters.getPost,e.next=13,t.setActivePage("Posts");case 13:t.$router.push({path:"/groups/".concat(i.groupId)}),t.$store.dispatch("setCurrentPost",i),t.$store.dispatch("setActiveModal","post"),e.next=32;break;case 18:if(!t.item.eventId){e.next=29;break}return e.next=21,t.loadEvent(t.item.eventId);case 21:return a=t.$store.getters.getEvent,e.next=24,t.setActivePage("Events");case 24:t.$router.push({path:"/groups/".concat(a.groupId)}),t.$store.dispatch("setCurrentEvent",a),t.$store.dispatch("setActiveModal","event"),e.next=32;break;case 29:return e.next=31,t.setActivePage("Members");case 31:t.$router.push({path:"/groups/".concat(t.item.groupId)});case 32:case"end":return e.stop()}}),e)})))()},isMember:function(){var t=this,e=this.getGroup.users;return!!e&&e.find((function(e){return e.email==t.getCurrentUser.email}))},readNotification:function(){var t=this,e="READ_NOTIFICATION",i="POST";this.makeRequest(e,i,[this.item.id]).then((function(e){200==e.status&&(console.log("notification has been read!"),t.$emit("readNotif",t.item.id))}))},getEventStartdate:function(){var t=60*(new Date).getTimezoneOffset()*1e3,e=new Date(this.item.entityDateTime);this.curentEventStartdate=new Date(+e-t)},getPostCreatedTime:function(){var t=new Date,e=new Date(this.item.createdOnUtc);t=+t+6e4,this.time=((+t-e)/1e3/60).toFixed(),this.time>1440?this.time=(this.time/60/24).toFixed()+"d":this.time>60?this.time=(this.time/60).toFixed()+"h":0==this.time?this.time="now":this.time+="m"},imageUrl:function(){this.largeImage=this.item.largeImageUrl,this.smallImage=this.item.smallImageUrl},updateNotification:function(){switch(this.getPostCreatedTime(),this.item.type){case 1:case 2:case 3:case 4:case 5:this.circle=!0,this.imageUrl();break;case 21:case 22:case 23:case 24:case 25:case 26:case 27:this.getEventStartdate(),this.imageUrl(),this.circle=!0;break;case 28:case 29:case 31:case 32:case 33:case 34:case 35:case 36:this.imageUrl(),this.isPost=!0,this.circle=!0;break;case 37:this.imageUrl(),this.isPost=!0;break;case 41:"Your question on test was answered"==this.item.title?(this.getEventStartdate(),this.imageUrl()):(this.circle=!0,this.imageUrl());break;case 42:case 43:this.getEventStartdate(),this.imageUrl(),this.item.content="";break;case 44:this.imageUrl();break;case 52:case 53:this.getEventStartdate(),this.imageUrl();break;default:this.circle=!1,this.imageUrl()}}},props:{item:{type:Object,default:null}},watch:{item:function(){this.updateNotification()}},created:function(){this.updateNotification()},beforeDestroy:function(){window.removeEventListener("keyup",this.handler)}},o=c,u=i("2877"),l=Object(u["a"])(o,a,s,!1,null,null,null);e["default"]=l.exports},1148:function(t,e,i){"use strict";var a=i("a691"),s=i("1d80");t.exports=function(t){var e=String(s(this)),i="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(i+=e);return i}},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"7db0":function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").find,r=i("44d2"),n="find",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(n)},b680:function(t,e,i){"use strict";var a=i("23e7"),s=i("a691"),r=i("408a"),n=i("1148"),c=i("d039"),o=1..toFixed,u=Math.floor,l=function(t,e,i){return 0===e?i:e%2===1?l(t,e-1,i*t):l(t*t,e/2,i)},m=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=function(t,e,i){var a=-1,s=i;while(++a<6)s+=e*t[a],t[a]=s%1e7,s=u(s/1e7)},d=function(t,e){var i=6,a=0;while(--i>=0)a+=t[i],t[i]=u(a/e),a=a%e*1e7},f=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var a=String(t[e]);i=""===i?a:i+n.call("0",7-a.length)+a}return i},g=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));a({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,i,a,c,o=r(this),u=s(t),g=[0,0,0,0,0,0],v="",p="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(v="-",o=-o),o>1e-21)if(e=m(o*l(2,69,1))-69,i=e<0?o*l(2,-e,1):o/l(2,e,1),i*=4503599627370496,e=52-e,e>0){h(g,0,i),a=u;while(a>=7)h(g,1e7,0),a-=7;h(g,l(10,a,1),0),a=e-1;while(a>=23)d(g,1<<23),a-=23;d(g,1<<a),h(g,1,1),d(g,2),p=f(g)}else h(g,0,i),h(g,1<<-e,0),p=f(g)+n.call("0",u);return u>0?(c=p.length,p=v+(c<=u?"0."+n.call("0",u-c)+p:p.slice(0,c-u)+"."+p.slice(c-u))):p=v+p,p}})},d990:function(t,e,i){t.exports=i.p+"img/bg-event-date.b19b4e0e.svg"}}]);
//# sourceMappingURL=chunk-0bc28f31.965b2ba0.js.map