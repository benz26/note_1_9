!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../",n(n.s=12)}([function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"f",function(){return u}),n.d(t,"a",function(){return f}),n.d(t,"i",function(){return m}),n.d(t,"h",function(){return p});var r=n(1),o=n.n(r),i=o.a.React,a=(o.a.ReactDOM,o.a.Location),s=(o.a.Link,o.a.connect),c=(o.a.InjectedComponent,o.a.InjectedComponentSet,o.a.HotKeys),l=(o.a.HTMLContent,o.a.Head,o.a.Immutable),u=(o.a.createPlugin,o.a.classnames),f=o.a.Controller,m=o.a.moment,p=(o.a.markdown,o.a.Utils,o.a.getPayload,o.a.path,o.a.base64,o.a.fetch);o.a.semantic,o.a.SummaryModifier,o.a.ConfigModifier,o.a.EditorModifier},function(e,t){e.exports=kancloud},function(e,t,n){var r=n(6),o=n(9),i=n(16);for(var a in(t=e.exports=function(e,t){return new i(t).process(e)}).FilterXSS=i,r)t[a]=r[a];for(var a in o)t[a]=o[a];"undefined"!=typeof window&&(window.filterXSS=e.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=e.exports)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=(0,r.utils.getCurrentScript)();if(o){var i=o.src;n.p=i.substring(0,i.lastIndexOf("/",i.lastIndexOf("/")-1)+1)}},function(e,t,n){var r=n(7),o=n(14);for(var i in(t=e.exports=function(e,t){return new o(t).process(e)}).FilterCSS=o,r)t[i]=r[i];"undefined"!=typeof window&&(window.filterCSS=e.exports)},function(e,t){e.exports={indexOf:function(e,t){var n,r;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var r,o;if(Array.prototype.forEach)return e.forEach(t,n);for(r=0,o=e.length;r<o;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e);return t?t.index:-1}}},function(e,t,n){var r=n(4).FilterCSS,o=n(4).getDefaultWhiteList,i=n(5);function a(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var s=new r;function c(e){return e.replace(l,"&lt;").replace(u,"&gt;")}var l=/</g,u=/>/g,f=/"/g,m=/&quot;/g,p=/&#([a-zA-Z0-9]*);?/gim,d=/&colon;?/gim,g=/&newline;?/gim,h=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,b=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi;function y(e){return e.replace(f,"&quot;")}function w(e){return e.replace(m,'"')}function x(e){return e.replace(p,function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))})}function k(e){return e.replace(d,":").replace(g," ")}function E(e){for(var t="",n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<32?" ":e.charAt(n);return i.trim(t)}function S(e){return e=E(e=k(e=x(e=w(e))))}function O(e){return e=c(e=y(e))}var j=/<!--[\s\S]*?-->/g;t.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},t.getDefaultWhiteList=a,t.onTag=function(e,t,n){},t.onIgnoreTag=function(e,t,n){},t.onTagAttr=function(e,t,n){},t.onIgnoreTagAttr=function(e,t,n){},t.safeAttrValue=function(e,t,n,r){if(n=S(n),"href"===t||"src"===t){if("#"===(n=i.trim(n)))return"#";if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"tel:"!==n.substr(0,4)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===t){if(h.lastIndex=0,h.test(n))return""}else if("style"===t){if(b.lastIndex=0,b.test(n))return"";if(v.lastIndex=0,v.test(n)&&(h.lastIndex=0,h.test(n)))return"";!1!==r&&(n=(r=r||s).process(n))}return n=O(n)},t.escapeHtml=c,t.escapeQuote=y,t.unescapeQuote=w,t.escapeHtmlEntities=x,t.escapeDangerHtml5Entities=k,t.clearNonPrintableCharacter=E,t.friendlyAttrValue=S,t.escapeAttrValue=O,t.onIgnoreTagStripAll=function(){return""},t.StripTagBody=function(e,t){"function"!=typeof t&&(t=function(){});var n=!Array.isArray(e),r=[],o=!1;return{onIgnoreTag:function(a,s,c){if(function(t){return!!n||-1!==i.indexOf(e,t)}(a)){if(c.isClosing){var l="[/removed]",u=c.position+l.length;return r.push([!1!==o?o:c.position,u]),o=!1,l}return o||(o=c.position),"[removed]"}return t(a,s,c)},remove:function(e){var t="",n=0;return i.forEach(r,function(r){t+=e.slice(n,r[0]),n=r[1]}),t+=e.slice(n)}}},t.stripCommentTag=function(e){return e.replace(j,"")},t.stripBlankChar=function(e){var t=e.split("");return(t=t.filter(function(e){var t=e.charCodeAt(0);return!(127===t||t<=31&&10!==t&&13!==t)})).join("")},t.cssFilter=s,t.getDefaultCSSWhiteList=o},function(e,t){function n(){var e={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return e}var r=/javascript\s*\:/gim;t.whiteList=n(),t.getDefaultWhiteList=n,t.onAttr=function(e,t,n){},t.onIgnoreAttr=function(e,t,n){},t.safeAttrValue=function(e,t){return r.test(t)?"":t}},function(e,t){e.exports={indexOf:function(e,t){var n,r;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var r,o;if(Array.prototype.forEach)return e.forEach(t,n);for(r=0,o=e.length;r<o;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},function(e,t,n){var r=n(5);function o(e){var t=r.spaceIndex(e);if(-1===t)var n=e.slice(1,-1);else n=e.slice(1,t+1);return"/"===(n=r.trim(n).toLowerCase()).slice(0,1)&&(n=n.slice(1)),"/"===n.slice(-1)&&(n=n.slice(0,-1)),n}function i(e){return"</"===e.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(e,t){for(;t<e.length;t++){var n=e[t];if(" "!==n)return"="===n?t:-1}}function c(e,t){for(;t>0;t--){var n=e[t];if(" "!==n)return"="===n?t:-1}}function l(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}t.parseTag=function(e,t,n){"user strict";var r="",a=0,s=!1,c=!1,l=0,u=e.length,f="",m="";for(l=0;l<u;l++){var p=e.charAt(l);if(!1===s){if("<"===p){s=l;continue}}else if(!1===c){if("<"===p){r+=n(e.slice(a,l)),s=l,a=l;continue}if(">"===p){r+=n(e.slice(a,s)),f=o(m=e.slice(s,l+1)),r+=t(s,r.length,f,m,i(m)),a=l+1,s=!1;continue}if(('"'===p||"'"===p)&&"="===e.charAt(l-1)){c=p;continue}}else if(p===c){c=!1;continue}}return a<e.length&&(r+=n(e.substr(a))),r},t.parseAttr=function(e,t){"user strict";var n=0,o=[],i=!1,u=e.length;function f(e,n){if(!((e=(e=r.trim(e)).replace(a,"").toLowerCase()).length<1)){var i=t(e,n||"");i&&o.push(i)}}for(var m=0;m<u;m++){var p,d=e.charAt(m);if(!1!==i||"="!==d)if(!1===i||m!==n||'"'!==d&&"'"!==d||"="!==e.charAt(m-1)){if(/\s|\n|\t/.test(d)){if(e=e.replace(/\s|\n|\t/g," "),!1===i){if(-1===(p=s(e,m))){f(r.trim(e.slice(n,m))),i=!1,n=m+1;continue}m=p-1;continue}if(-1===(p=c(e,m-1))){f(i,l(r.trim(e.slice(n,m)))),i=!1,n=m+1;continue}}}else{if(-1===(p=e.indexOf(d,m+1)))break;f(i,r.trim(e.slice(n+1,p))),i=!1,n=(m=p)+1}else i=e.slice(n,m),n=m+1}return n<e.length&&(!1===i?f(e.slice(n)):f(i,l(r.trim(e.slice(n))))),r.trim(o.join(" "))}},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return m});var r,o=n(0),i=n(2),a=n.n(i),s=n(11),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=o.e.Component,f=o.e.Fragment,m=Object(s.hot)(e)(r=Object(o.g)(function(e){return{article:e.article,comment:e.comment,saving:e.loading["comment/save"]}},function(e){var t=e.comment;return{fetchUser:t.fetchUser,fetchReply:t.fetchReply,save:t.save,delete:t.delete,fetch:t.fetch}})(r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={error:null,disable:!1},l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u),c(t,[{key:"componentWillReceiveProps",value:function(e){if(e.comment.user?e.comment.user.mobile?this.setState({error:null}):this.setState({error:o.e.createElement(f,null,"根据国家相关法律的实名制要求，请先",o.e.createElement("a",{href:"https://www.kancloud.cn/setting/mobile",target:"_blank"},"绑定手机"),"号码")}):this.setState({error:o.e.createElement(f,null,"您需要",o.e.createElement("a",{href:"https://www.kancloud.cn/auth/login",target:"_blank"},"登录"),"并",o.e.createElement("strong",null,"绑定手机"),"后才可以发表评论")}),this.props.comment.disable||(this.props.article.ref!==e.article.ref&&(this.props.fetch(e.article.ref,1),this.content.value="",this.content.blur()),!this.props.comment.reply&&e.comment.reply&&(this.content.value="@"+(e.comment.reply.user.username?e.comment.reply.user.username:"#"+e.comment.reply.user.id)+" ",this.content.focus())),this.props.comment.disable&&!e.comment.disable){var t;(t=o.d.fromNative(window.location).hash.match(/^\/comment\/(\d+)$/))&&this.props.fetchReply(e.article.ref,t[1])}}},{key:"componentDidMount",value:function(){var e=this.props.article;this.props.fetchUser(),this.props.fetch(e.ref,1)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.article;this.props.save(t.ref,this.content.value),this.content.value=""}},{key:"handleReply",value:function(e){var t=this;return function(n){var r=t.content.value;r+="@"+e+" ",t.content.value=r,t.content.focus()}}},{key:"handleDelete",value:function(e){var t=this;return function(n){confirm("确定要删除吗?")&&t.props.delete(e)}}},{key:"handleLoadMore",value:function(e){e.preventDefault();var t=this.props,n=t.article,r=t.comment;this.props.fetch(n.ref,r.page+1)}},{key:"renderComment",value:function(){var e=this,t=this.props,n=t.article,r=t.comment,i=t.comment.reply,s=t.saving;if(r.disable)return null;var c=this.state.error;return o.e.createElement("div",{className:"article-comment"},o.e.createElement("h3",{className:"header"},"相关评论(",r.total,")"),o.e.createElement(o.b,{keyMap:{"ctrl+enter":function(t){document.activeElement===e.content&&e.handleSubmit(t)}}},o.e.createElement("form",{ref:function(t){e.form=t},className:"form",onSubmit:this.handleSubmit.bind(this)},o.e.createElement("input",{type:"hidden",name:"article_id",value:n.id}),o.e.createElement("div",{className:"field"},o.e.createElement("textarea",{disabled:!!c,ref:function(t){e.content=t},name:"content",placeholder:"文明上网,理性发言",rows:4})),o.e.createElement("div",{className:"field"},o.e.createElement("span",{className:"error"},c||r.error),o.e.createElement("button",{disabled:!!c||s,type:"submit",className:Object(o.f)("button",{loading:s})},"发布 (Ctrl+Enter)")))),o.e.createElement("div",{className:"comments"},i?o.e.createElement("div",{className:"comment active"},o.e.createElement("a",{className:"avatar"},o.e.createElement("img",{src:""+i.user.avatar})),o.e.createElement("div",{className:"content"},o.e.createElement("a",{className:"author"},a()(i.user.name)),o.e.createElement("div",{className:"metadata"},"@",i.user.username?i.user.username:"#"+i.user.id," · ",o.e.createElement("span",{className:"date"},Object(o.i)(i.create_time.date).fromNow())),o.e.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:a()(i.content)}}),o.e.createElement("div",{className:"actions"},o.e.createElement("a",{onClick:this.handleReply.call(this,i.user.username?i.user.username:"#"+i.user.id)},"回复"),i.can_delete?o.e.createElement("a",{onClick:this.handleDelete.call(this,i.id)},"删除"):null))):null,r.list.map(function(t){return i&&t.id===i.id?null:o.e.createElement("div",{key:t.id,className:"comment"},o.e.createElement("a",{className:"avatar"},o.e.createElement("img",{src:""+t.user.avatar})),o.e.createElement("div",{className:"content"},o.e.createElement("a",{className:"author"},a()(t.user.name)),o.e.createElement("div",{className:"metadata"},"@",t.user.username?t.user.username:"#"+t.user.id," ·",o.e.createElement("span",{className:"date"},Object(o.i)(t.create_time.date).fromNow())),o.e.createElement("div",{className:"text article-body",dangerouslySetInnerHTML:{__html:a()(t.content)}}),o.e.createElement("div",{className:"actions"},o.e.createElement("a",{onClick:e.handleReply.call(e,t.user.username?t.user.username:"#"+t.user.id)},o.e.createElement("i",{className:"icon reply"}),"回复"),t.can_delete?o.e.createElement("a",{onClick:e.handleDelete.call(e,t.id)},o.e.createElement("i",{className:"icon remove"}),"删除"):null)))}),r.list.size<r.total?o.e.createElement("div",{className:"load"},o.e.createElement("button",{onClick:this.handleLoadMore.bind(this),className:"button"},"加载更多")):null))}},{key:"render",value:function(){var e=this.props.children;return e?(e=o.e.Children.only(e),o.e.cloneElement(e,{children:this.renderComment()})):this.renderComment()}}]),t}())||r)||r}).call(this,n(13)(e))},function(module,exports,__webpack_require__){"use strict";var evalAllowed=!1;try{eval("evalAllowed = true")}catch(e){}var platformSupported=!!Object.setPrototypeOf&&evalAllowed;module.exports=__webpack_require__(17)},function(e,t,n){n(3),e.exports=n(25)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){var r=n(7),o=n(15);n(8);function i(e){return void 0===e||null===e}function a(e){(e=function(e){var t={};for(var n in e)t[n]=e[n];return t}(e||{})).whiteList=e.whiteList||r.whiteList,e.onAttr=e.onAttr||r.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||r.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||r.safeAttrValue,this.options=e}a.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,n=t.whiteList,r=t.onAttr,a=t.onIgnoreAttr,s=t.safeAttrValue;return o(e,function(e,t,o,c,l){var u=n[o],f=!1;if(!0===u?f=u:"function"==typeof u?f=u(c):u instanceof RegExp&&(f=u.test(c)),!0!==f&&(f=!1),c=s(o,c)){var m,p={position:t,sourcePosition:e,source:l,isWhite:f};return f?i(m=r(o,c,p))?o+":"+c:m:i(m=a(o,c,p))?void 0:m}})},e.exports=a},function(e,t,n){var r=n(8);e.exports=function(e,t){";"!==(e=r.trimRight(e))[e.length-1]&&(e+=";");var n=e.length,o=!1,i=0,a=0,s="";function c(){if(!o){var n=r.trim(e.slice(i,a)),c=n.indexOf(":");if(-1!==c){var l=r.trim(n.slice(0,c)),u=r.trim(n.slice(c+1));if(l){var f=t(i,s.length,l,u,n);f&&(s+=f+"; ")}}}i=a+1}for(;a<n;a++){var l=e[a];if("/"===l&&"*"===e[a+1]){var u=e.indexOf("*/",a+2);if(-1===u)break;i=(a=u+1)+1,o=!1}else"("===l?o=!0:")"===l?o=!1:";"===l?o||c():"\n"===l&&c()}return r.trim(s)}},function(e,t,n){var r=n(4).FilterCSS,o=n(6),i=n(9),a=i.parseTag,s=i.parseAttr,c=n(5);function l(e){return void 0===e||null===e}function u(e){(e=function(e){var t={};for(var n in e)t[n]=e[n];return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=o.onIgnoreTagStripAll),e.whiteList=e.whiteList||o.whiteList,e.onTag=e.onTag||o.onTag,e.onTagAttr=e.onTagAttr||o.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||o.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||o.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||o.safeAttrValue,e.escapeHtml=e.escapeHtml||o.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new r(e.css))}u.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,n=t.whiteList,r=t.onTag,i=t.onIgnoreTag,u=t.onTagAttr,f=t.onIgnoreTagAttr,m=t.safeAttrValue,p=t.escapeHtml,d=this.cssFilter;t.stripBlankChar&&(e=o.stripBlankChar(e)),t.allowCommentTag||(e=o.stripCommentTag(e));var g=!1;if(t.stripIgnoreTagBody){g=o.StripTagBody(t.stripIgnoreTagBody,i);i=g.onIgnoreTag}var h=a(e,function(e,t,o,a,g){var h,b={sourcePosition:e,position:t,isClosing:g,isWhite:n.hasOwnProperty(o)};if(!l(h=r(o,a,b)))return h;if(b.isWhite){if(b.isClosing)return"</"+o+">";var v=function(e){var t=c.spaceIndex(e);if(-1===t)return{html:"",closing:"/"===e[e.length-2]};var n="/"===(e=c.trim(e.slice(t+1,-1)))[e.length-1];return n&&(e=c.trim(e.slice(0,-1))),{html:e,closing:n}}(a),y=n[o],w=s(v.html,function(e,t){var n,r=-1!==c.indexOf(y,e);return l(n=u(o,e,t,r))?r?(t=m(o,e,t,d))?e+'="'+t+'"':e:l(n=f(o,e,t,r))?void 0:n:n});a="<"+o;return w&&(a+=" "+w),v.closing&&(a+=" /"),a+=">"}return l(h=i(o,a,b))?p(a):h},p);return g&&(h=g.remove(h)),h},e.exports=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n(18)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},a=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);t.AppContainer=a,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},function(e,t){e.exports=kancloud.React},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);n(22).default(r);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(21)(!1)).push([e.i,'.article-comment {\n  position: relative;\n}\n.article-comment .header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n  font-size: 16px;\n  margin: 10px 0 16px;\n}\n.article-comment .form {\n  overflow: hidden;\n}\n.article-comment .form .field {\n  margin-bottom: 16px;\n  overflow: hidden;\n}\n.article-comment .form .field :disabled {\n  pointer-events: none;\n  opacity: .45;\n}\n.article-comment .form .field textarea {\n  margin: 0;\n  -webkit-appearance: none;\n  padding: .78571429em 1em;\n  background: #fff;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  outline: none;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: .28571429rem;\n  box-shadow: inset 0 0 0 0 transparent;\n  transition: color 0.1s ease, border-color 0.1s ease;\n  font-size: 1em;\n  line-height: 1.2857;\n  resize: vertical;\n  vertical-align: top;\n  width: 100%;\n}\n.article-comment .form .field textarea:focus {\n  color: rgba(0, 0, 0, 0.95);\n  border-color: #21ba45;\n  border-radius: .28571429rem;\n  background: #fff;\n  box-shadow: inset 0 0 0 0 rgba(34, 36, 38, 0.35);\n}\n.article-comment .form .field .button {\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  outline: none;\n  border: none;\n  vertical-align: baseline;\n  color: rgba(0, 0, 0, 0.6);\n  padding: .78571429em 1.5em;\n  text-transform: none;\n  text-shadow: none;\n  font-weight: 400;\n  line-height: 1em;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  border-radius: .28571429rem;\n  user-select: none;\n  font-size: 13px;\n  color: #fff;\n  background: #21ba45 none;\n  float: right;\n}\n.article-comment .form .field .button:hover {\n  background-color: #16ab39;\n  color: #fff;\n}\n.article-comment .form .field .button.loading {\n  position: relative;\n  cursor: default;\n  text-shadow: none !important;\n  color: transparent !important;\n  opacity: 1;\n  pointer-events: auto;\n  transition: all 0s linear, opacity .1s ease;\n}\n.article-comment .form .field .button.loading:before,\n.article-comment .form .field .button.loading:after {\n  position: absolute;\n  content: "";\n  top: 50%;\n  left: 50%;\n  margin: -0.64285714em 0 0 -0.64285714em;\n  width: 1.28571429em;\n  height: 1.28571429em;\n}\n.article-comment .form .field .button.loading:before {\n  border-radius: 500rem;\n  border: 0.2em solid rgba(0, 0, 0, 0.15);\n}\n.article-comment .form .field .button.loading:after {\n  animation: button-spin 0.6s linear;\n  animation-iteration-count: infinite;\n  border-radius: 500rem;\n  border: .2em solid transparent;\n  border-top-color: #fff;\n  box-shadow: 0 0 0 1px transparent;\n}\n.article-comment .form .field .error {\n  color: red;\n  line-height: 33px;\n}\n.article-comment .comments {\n  max-width: 100%;\n  margin: 1.5em 0;\n}\n.article-comment .comments .comment {\n  position: relative;\n  background: none;\n  margin: 1rem 0 0;\n  padding: 1rem 0 0;\n  border: none;\n  border-top: 1px solid rgba(90, 90, 90, 0.1);\n  line-height: 1.2;\n}\n.article-comment .comments .comment:first-child {\n  border-top: none;\n  margin-top: 0;\n  padding-top: 0;\n}\n.article-comment .comments .comment .avatar {\n  display: block;\n  width: 2.5em;\n  height: auto;\n  float: left;\n  margin: .2em 0 0;\n}\n.article-comment .comments .comment .avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.article-comment .comments .comment .content {\n  margin-left: 3.5em;\n}\n.article-comment .comments .comment .content .author {\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 700;\n}\n.article-comment .comments .comment .content .metadata {\n  display: inline-block;\n  margin-left: .5em;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: .875em;\n}\n.article-comment .comments .comment .content .text {\n  margin: 6px 0 9px;\n  padding: 3px 0;\n  font-size: 1em;\n  word-wrap: break-word;\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 1.3;\n}\n.article-comment .comments .comment .content .actions {\n  font-size: .875em;\n}\n.article-comment .comments .comment .content .actions a {\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 .75em 0 0;\n  color: rgba(0, 0, 0, 0.4);\n}\n.article-comment .comments .comment.active {\n  padding: 10px;\n  background: rgba(68, 176, 53, 0.28);\n  border-radius: 5px;\n}\n.article-comment .comments .load {\n  margin-top: 15px;\n  text-align: center;\n}\n.article-comment .comments .load .button {\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  outline: none;\n  border: none;\n  vertical-align: baseline;\n  color: rgba(0, 0, 0, 0.6);\n  background: #e0e1e2 none;\n  padding: .78571429em 1.5em;\n  text-transform: none;\n  text-shadow: none;\n  font-weight: 400;\n  line-height: 1em;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  border-radius: .28571429rem;\n  user-select: none;\n  font-size: 13px;\n}\n.article-comment .comments .load .button:hover {\n  background-color: #cacbcd;\n  color: rgba(0, 0, 0, 0.8);\n}\n@keyframes button-spin {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=function(e){var t=function(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}(e);Object(r.createPlugin)({components:{style:function(){var e=r.React.createElement("style",{type:"text/css"},t.map(function(e){return e.parts.map(function(e){return e.css}).join("\n")}).join("\n"));return r.React.createElement(r.Head,{},e)}}})}},,,function(e,t,n){"use strict";n.r(t);var r,o,i=n(1),a=n(10),s=n(0),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})}}var u=s.c.List,f=s.c.Record,m="https://www.kancloud.cn",p=(o=r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["a"]),c(t,[{key:"fetchUser",value:regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(function(e){return e.set("user",void 0)});case 2:return e.next=4,this.call(l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.h)(m+"/comment/user");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,n)})));case 4:return t=e.sent,e.next=7,this.setState(function(e){return e.set("user",t)});case 7:case"end":return e.stop()}},e,this)})},{key:"fetchReply",value:regeneratorRuntime.mark(function e(t,n){var r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call(function(){var e=l(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.h)(m+"/comment/"+n+"?path="+t));case 1:case"end":return e.stop()}},e,o)}));return function(t){return e.apply(this,arguments)}}(),n);case 2:return r=e.sent,e.next=5,this.setState(function(e){return e.set("reply",r)});case 5:case"end":return e.stop()}},e,this)})},{key:"fetch",value:regeneratorRuntime.mark(function e(t,n){var r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==n){e.next=5;break}return e.next=3,this.setState(function(e){return e.merge({list:u(),total:0,reply:null,page:n})});case 3:e.next=7;break;case 5:return e.next=7,this.setState(function(e){return e.merge({page:n})});case 7:return e.prev=7,e.next=10,this.call(l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.h)(m+"/comment?path="+t+"&page="+n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,o)})));case 10:return r=e.sent,e.next=13,this.setState(function(e){return e.merge({disable:!1,list:e.list.concat(r.data),total:r.total})});case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(7),e.next=19,this.setState(function(e){return e.merge({disable:!0})});case 19:case"end":return e.stop()}},e,this,[[7,15]])})},{key:"save",value:regeneratorRuntime.mark(function e(t,n){var r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(function(e){return e.merge({error:null})});case 2:return e.prev=2,e.next=5,this.call(l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.h)(m+"/comment",{method:"post",body:{content:n,path:t}}));case 1:case"end":return e.stop()}},e,o)})));case 5:return r=e.sent,e.next=8,this.setState(function(e){return e.merge({list:e.list.unshift(r),total:e.total+1})});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,this.setState(function(t){return t.merge({error:e.t0.message})});case 14:case"end":return e.stop()}},e,this,[[2,10]])})},{key:"delete",value:regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call(function(){var e=l(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.h)(m+"/comment/"+t,{method:"delete"}));case 1:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}(),t);case 2:return e.next=4,this.setState(function(e){return e.merge({list:e.list.filter(function(e){return e.id!==t}),total:e.total-1})});case 4:case"end":return e.stop()}},e,this)})}]),t}(),r.state=f({disable:!0,list:u(),page:1,total:0,reply:null,user:void 0,error:null})(),o);n(19),t.default=Object(i.createPlugin)({components:{comment:a.a},activate:function(e,t){},controllers:{comment:p}})}]);