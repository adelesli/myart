(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        ASL Art Gallery\n      ")]),a("div",[a("q-btn",{attrs:{round:"",color:"blue-grey-4",icon:"brightness_medium"},on:{click:t.goDark}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1",width:168},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{staticStyle:{"max-width":"12em"}},[a("q-item-label",{staticClass:"text-grey-8 bg-grey-4",staticStyle:{"max-width":"12em"},attrs:{header:""}},[a("img",{staticStyle:{"max-width":"10em","object-fit":"cover"},attrs:{src:"icons/favicon-128x128.png"}}),a("div",{staticClass:"q-pt-sm"},[t._v("ASL Art Collection")])]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{staticClass:"text-dark",staticStyle:{"max-width":"12em"},attrs:{clickable:"",tag:"a",to:t.link,"active-class":"bg-secondary text-white"}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"positive",name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))])],1)],1)},l=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=a("2877"),d=a("66e5"),u=a("4074"),m=a("0016"),p=a("0170"),b=a("eebe"),f=a.n(b),w=Object(c["a"])(s,r,l,!1,null,"01f13be3",null),g=w.exports;f()(w,"components",{QItem:d["a"],QItemSection:u["a"],QIcon:m["a"],QItemLabel:p["a"]});const k=[{title:"Home",caption:"Home",icon:"house",link:"index"},{title:"Castellan",caption:"Castellan",icon:"anchor",link:"castellan"}];var v={name:"MainLayout",components:{EssentialLink:g},data(){return{leftDrawerOpen:!1,essentialLinks:k}},methods:{goDark(){this.$q.dark.toggle()}}},h=v,q=(a("dc84"),a("4d5a")),y=a("e359"),L=a("65c6"),Q=a("9c40"),x=a("6ac5"),_=a("9404"),S=a("1c1c"),D=a("09e3"),O=Object(c["a"])(h,n,i,!1,null,"cfcda25c",null);e["default"]=O.exports;f()(O,"components",{QLayout:q["a"],QHeader:y["a"],QToolbar:L["a"],QBtn:Q["a"],QToolbarTitle:x["a"],QDrawer:_["a"],QList:S["a"],QItemLabel:p["a"],QPageContainer:D["a"]})},aa90:function(t,e,a){},dc84:function(t,e,a){"use strict";var n=a("aa90"),i=a.n(n);i.a}}]);