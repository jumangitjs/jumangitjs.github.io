(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{1532:function(t,e,i){},"615b":function(t,e,i){},"697e":function(t,e,i){"use strict";var n=i("1532"),s=i.n(n);s.a},"6ece":function(t,e,i){},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},ac22:function(t,e,i){"use strict";var n=i("e4ec"),s=i.n(n);s.a},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"parallax h-100 w-100"},[i("div",{staticClass:"floating-div",style:t.floatingDivStyle},[i("MainContent")],1)])},s=[],a=i("5530"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-100 w-100 d-flex align-center justify-center",on:{click:function(e){return t.clickMainContent()}}},[i("v-card",{staticClass:"floating-card",attrs:{color:"primary"}},[i("div",{staticClass:"h-100 d-flex flex-row flex-wrap align-content-between"},[i("v-card-title",{staticClass:"w-100 mb-auto display-2"},[i("h2",[t._v(" "+t._s(t.pageContent.title)+" ")])]),i("v-card-text",{staticClass:"w-100 headline"},[i("div",t._l(t.pageContent.content,(function(e,n){return i("div",{key:n},[t._v(" • "),"string"!==typeof e?i("a",{staticClass:"item-link",attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(t.getContentText(e))+" ")]):i("span",[t._v(" "+t._s(t.getContentText(e))+" ")])])})),0)]),i("v-card-actions",{staticClass:"w-100 mt-auto"},[i("Footer")],1)],1)])],1)},o=[],l=i("70a4"),c=i("2f62"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-100 d-flex justify-content-between"},[t._m(0),i("v-spacer"),i("div",{staticClass:"overline"},[i("span",[t._v(" made with ")]),i("a",{attrs:{href:"https://vuetifyjs.com/en/",target:"_blank"}},[i("v-icon",[t._v("mdi-vuetify")])],1)]),i("v-spacer"),t._l(t.contactMeDetails,(function(e,n){return i("div",{key:n},[i("v-btn",{attrs:{href:e.link,target:"_blank",icon:""}},[i("v-icon",[t._v(t._s(e.icon))])],1)],1)}))],2)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{staticClass:"overline"},[t._v(" turn on vue devtools ")])])}],d={name:"Footer",computed:Object(a["a"])({},Object(c["b"])(["contactMeDetails"]))},f=d,v=i("2877"),g=i("6544"),b=i.n(g),p=(i("4160"),i("caad"),i("c7cd"),i("53ca")),m=i("3835"),_=(i("86cc"),i("8dd9")),y=_["a"],C=(i("99af"),i("a9e3"),i("8d4f"),i("a9ad")),B=i("80d2"),x=C["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(B["f"])(this.calculatedSize),width:Object(B["f"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),k=x,O=i("4e82"),w=i("f2e7"),j=i("fe6c"),S=i("1c87"),z=i("af2b"),$=i("58df"),V=i("d9bd"),E=Object($["a"])(y,S["a"],j["a"],z["a"],Object(O["a"])("btnToggle"),Object(w["b"])("inputValue")),N=E.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(a["a"])({"v-btn":!0},S["a"].options.computed.classes.call(this),{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses,{},this.groupClasses,{},this.elevationClasses,{},this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(a["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(m["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(V["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(k,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,n=this.generateRouteLink(),s=n.tag,a=n.data;return"button"===s&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(p["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?a:i(this.color,a),e)}}),T=i("132d"),F=(i("20f6"),Object(B["g"])("spacer","div","v-spacer")),M=Object(v["a"])(f,u,h,!1,null,null,null),D=M.exports;b()(M,{VBtn:N,VIcon:T["a"],VSpacer:F});var L={name:"MainContent",components:{Footer:D},computed:Object(a["a"])({},Object(c["b"])(["contactMeDetails","sideNavOpen"]),{pageContent:function(){return this.$store.getters.pageContent(this.$route.hash?this.$route.hash:"#landing")}}),methods:{getContentText:function(t){return"".concat(this.extractContentText(t))},extractContentText:function(t){return"string"===typeof t?t:t.text},clickMainContent:function(){this.sideNavOpen&&this.$store.dispatch(l["a"].toggleSideNav)}}},P=L,I=(i("697e"),i("0481"),i("4069"),i("615b"),i("2b0e")),R=i("ade3"),H=(i("6ece"),i("0789")),W=i("a452"),q=i("7560"),A=Object($["a"])(C["a"],Object(j["b"])(["absolute","fixed","top","bottom"]),W["a"],q["a"]),J=A.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(B["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(B["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(R["a"])(t,this.$vuetify.rtl?"right":"left",Object(B["f"])(this.normalizedValue,"%")),Object(R["a"])(t,"width",Object(B["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?H["b"]:H["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(B["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(B["j"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(R["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(B["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),X=J,G=I["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(X,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),K=Object($["a"])(G,S["a"],y).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(a["a"])({"v-card":!0},S["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},y.options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},y.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=G.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),Q=Object(B["g"])("v-card__actions"),U=(Object(B["g"])("v-card__subtitle"),Object(B["g"])("v-card__text")),Y=Object(B["g"])("v-card__title"),Z=Object(v["a"])(P,r,o,!1,null,"8985fad6",null),tt=Z.exports;b()(Z,{VCard:K,VCardActions:Q,VCardText:U,VCardTitle:Y});var et={name:"Home",components:{MainContent:tt},created:function(){},computed:Object(a["a"])({},Object(c["b"])(["isSmallWidthMode"]),{floatingDivStyle:function(){return{width:"calc(100% - ".concat(this.isSmallWidthMode?56:256,"px)")}}})},it=et,nt=(i("ac22"),Object(v["a"])(it,n,s,!1,null,"befec69e",null));e["default"]=nt.exports},e4ec:function(t,e,i){}}]);
//# sourceMappingURL=home.2b9f51e9.js.map