(()=>{var e={399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USER:1,CHAR:2,MASK:3}},643:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return[];for(var n=[],a=!1,s=0;s<e.length;s++){var r=t[e[s]];if(a&&r&&(r=null,a=!1),r)r.regexp&&n.push(r);else{if(!a&&"\\"===e[s]){a=!0;continue}a=!1,n.push({char:e[s],next:null})}}return n}},842:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.data,n=e.input,a=void 0===n?"":n,r=e.selection,i=e.mask,o=e.maskChar,u=e.maskString,l=[],c="",h=0,f=0,m=0,d=0;i[h];){var p=t.length>f?t[f]:null,v=i[h],k=null;if(r.start<=h&&m<a.length&&(k=a.slice(m)),v.char&&(k&&k[0]===v.char?m++:(p&&(p.char===v.char||p.type!==s.default.USER)||a)&&f++,l.push({char:v.char,type:s.default.CHAR}),k&&d++,c+=v.char),v.regexp){var g=null;if(k){for(var y=0;!v.regexp.test(k[y])&&k.length>y;)y++,m++;k.length>y&&(m++,d++,f++,g=k[y],l.push({char:g,type:s.default.USER}),c+=g)}if(!g){if(p&&p.type===s.default.CHAR&&t.length>f+1){f++;continue}p&&p.type===s.default.USER&&v.regexp.test(p.char)?(l.push({char:p.char,type:s.default.USER}),c+=p.char,f++):(g=u?u[h]:o,l.push({char:g,type:s.default.MASK}),t.length>h&&f++,c+=g)}}h++}for(var S=r.start+d,w=l.length-1,b=0;w>=0&&l[w].type!==s.default.USER;)l[w].type===s.default.MASK&&(b=0),l[w].type===s.default.CHAR&&b++,w--;w+=b;for(var C="",_=0;_<=w;_++)C+=l[_].char;return{value:l,visibleValue:C,maskedValue:c,selection:{start:S,end:S}}};var a,s=(a=n(399))&&a.__esModule?a:{default:a}},478:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.value,n=e.selection,a=e.reformat,r=(e.mask,e.maskChar),i=e.maskString;if(n.end<n.start){var o=n.end;n.end=n.start,n.start=o}return n.start===n.end?t:t.length>n.start?t.slice(0,n.start).concat(function(){if(a)return"";if(i){for(var e=[],t=n.start;t<n.end;t++)e.push({char:i[t],type:s.default.MASK});return e}return function(e){for(var t=[],n=0;n<e;n++)t.push({char:r,type:s.default.MASK});return t}(n.end-n.start)}(),t.slice(n.end,t.length)):t};var a,s=(a=n(399))&&a.__esModule?a:{default:a}},217:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createInput=t.defaults=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=u(n(643)),r=u(n(842)),i=u(n(478)),o=u(n(399));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var n=t.value,a=t.mask,r=t.reformat,i=t.maskFormat,o=t.maskChar,u=t.maskString;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u&&u.length!==a.length)throw new Error("maskString must have same length as mask");if(o.length>1)throw new Error("maskChar must have only 1 char");this._maskString=u,this._maskChar=o,this._reformat=r,this.selection={start:0,end:0},this.setMaskFormat(i),this._mask=(0,s.default)(a,this._maskFormat),this.setValue(n)}return a(e,[{key:"setMaskFormat",value:function(e){this._maskFormat=e.reduce((function(e,t){return e[t.str]=t,e}),{})}},{key:"input",value:function(e){var t=this._value,n=void 0;this._reformat?n=this._reformat({data:t,input:e,selection:this.selection}):(t=(0,i.default)({value:t,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString}),this.selection.end=this.selection.start,n=(0,r.default)({data:t,input:e,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})),this._value=n.value,this._maskedValue=n.maskedValue,this._visibleValue=n.visibleValue,this.setSelection(n.selection)}},{key:"setSelection",value:function(e){var t=e.start,n=e.end;this.selection={start:t,end:n}}},{key:"getSelection",value:function(){return{start:this.selection.start,end:this.selection.end}}},{key:"backspace",value:function(){this.removePreviosOrSelected()}},{key:"paste",value:function(e){this.input(e)}},{key:"setMask",value:function(e){this._mask=(0,s.default)(e,this._maskFormat),this.setValue(this._value)}},{key:"getState",value:function(){return{value:this.getValue(),maskedValue:this.getMaskedValue(),visibleValue:this.getVisibleValue(),selection:this.getSelection()}}},{key:"getValue",value:function(){return this._value}},{key:"setReformat",value:function(e){this._reformat=e,this.setValue(this._value)}},{key:"getMaskedValue",value:function(){return this._maskedValue}},{key:"getVisibleValue",value:function(){return this._visibleValue}},{key:"setMaskChar",value:function(e){if(e.length>1)throw new Error("maskChar must have only 1 char");this._maskChar=e,this.setValue(this._value)}},{key:"setMaskString",value:function(e){if(e&&e.length!==this._mask.length)throw new Error("maskString must have same length as mask");this._maskString=e,this.setValue(this._value)}},{key:"removePreviosOrSelected",value:function(){this.selection.start===this.selection.end&&(this.selection.start=this.selection.end-1,this.selection.start<0&&(this.selection.start=0)),this.input("")}},{key:"removeNextOrSelected",value:function(){this.selection.start===this.selection.end&&this.selection.end++,this.input("")}},{key:"setValue",value:function(e){var t=void 0;if(this._reformat)t=this._reformat({data:e,selection:this.selection});else{var n=e;if(!Array.isArray(n)){n=[];for(var a=0;a<e.length;a++)n.push({char:e[a],type:o.default.USER})}t=(0,r.default)({data:n,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})}this._value=t.value,this._maskedValue=t.maskedValue,this._visibleValue=t.visibleValue,this.setSelection(t.selection)}}]),e}(),c=t.defaults={maskFormat:[{str:"0",regexp:/[0-9]/},{str:"*",regexp:/./},{str:"a",regexp:/[a-zA-Z]/}],maskChar:"",showMask:!1,removeSelectedRange:i.default};t.createInput=function(e){var t=e.value,n=e.maskString,a=e.mask,s=e.reformat,r=e.maskFormat,i=void 0===r?c.maskFormat:r,o=e.maskChar,u=s,h=a;return u||h?u&&(h=null):u=function(e){return e},new l({value:t,mask:h,reformat:u,maskFormat:i,maskChar:void 0===o?c.maskChar:o,maskString:n})}},780:(e,t,n)=>{"use strict";var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(217),i=(a=n(626))&&a.__esModule?a:{default:a},o=function(){function e(t,n){var a=this,s=n.mask,i=void 0===s?r.defaults.mask:s,o=n.value,u=void 0===o?"":o,l=n.reformat,c=n.maskString,h=n.maskChar,f=void 0===h?r.defaults.maskChar:h,m=n.maskFormat,d=void 0===m?r.defaults.maskFormat:m,p=n.showMask,v=n.alwaysShowMask,k=n.onChange;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showValue=function(){a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.element.value=a.input.getMaskedValue():a.element.value=a.input.getVisibleValue()},this.setSelection=function(){if(a.canSetSelection){var e=a.input.getSelection();a.element.setSelectionRange(e.start,e.end),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,0)})((function(){return a.element.setSelectionRange(e.start,e.end)}))}},this.onPaste=function(e){e.preventDefault(),a.getSelection(),a.input.paste(e.clipboardData.getData("Text")),a.showValue(),setTimeout(a.setSelection,0),a.props.onChange&&a.props.onChange(e)},this.onChange=function(e){var t;t=a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.input.getMaskedValue():a.input.getVisibleValue(),e.target.value!==t&&(a.getSelection(),a.input.setValue(e.target.value),a.showValue(),setTimeout(a.setSelection,0)),a.props.onChange&&a.props.onChange(e)},this.onKeyPress=function(e){e.metaKey||e.altKey||e.ctrlKey||"Enter"===e.key||(e.preventDefault(),a.getSelection(),a.input.input(e.key||e.data||String.fromCharCode(e.which)),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onKeyDown=function(e){8===e.which&&(e.preventDefault(),a.getSelection(),a.input.removePreviosOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e)),46===e.which&&(e.preventDefault(),a.getSelection(),a.input.removeNextOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onFocus=function(){a.canSetSelection=!0},this.onBlur=function(){a.canSetSelection=!1},this.input=this.input=(0,r.createInput)({value:u,reformat:l,maskString:c,maskChar:f,mask:i,maskFormat:d}),this.props={mask:i,value:u,reformat:l,maskChar:f,maskFormat:d,maskString:c,showMask:p,alwaysShowMask:v,onChange:k},this.showMask=v||p,this.element=t,this.showValue(),this.subscribe()}return s(e,[{key:"getSelection",value:function(){this.input.setSelection({start:this.element.selectionStart,end:this.element.selectionEnd})}},{key:"subscribe",value:function(){this.unsubscribe={onPaste:(0,i.default)(this.element,"paste",this.onPaste),onKeyDown:(0,i.default)(this.element,"keydown",this.onKeyDown),onKeyPress:(0,i.default)(this.element,this.keyPressPropName(),this.onKeyPress),onChange:(0,i.default)(this.element,"change",this.onChange),onFocus:(0,i.default)(this.element,"focus",this.onFocus),onBlur:(0,i.default)(this.element,"blur",this.onBlur)}}},{key:"keyPressPropName",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent.match(/Android/i)?"beforeinput":"keypress"}},{key:"setProps",value:function(e){var t=e.mask,n=e.value,a=e.reformat,s=e.maskString,r=e.maskChar,i=e.maskFormat,o=e.showMask,u=e.alwaysShowMask,l=e.onChange,c=!1;this.props.onChange!==l&&(this.props.onChange=l),this.props.alwaysShowMask===u&&this.props.showMask===o||(this.showMask=u||o,this.props.alwaysShowMask=u,this.props.showMask=o,c=!0),i&&i!==this.props.maskFormat&&(this.input.setMaskFormat(i),this.props.maskFormat=i,c=!0),t!==this.props.mask&&(this.input.setMask(t),this.props.mask=t,c=!0),s!==this.props.maskString&&(this.input.setMaskString(s),this.props.maskString=s,c=!0),r!==this.props.maskChar&&(this.input.setMaskChar(r),this.props.maskChar=r,c=!0),a!==this.props.reformat&&(this.input.setReformat(a),this.props.reformat=a,c=!0),n!==this.props.value&&(this.input.setValue(n),this.props.value=n,c=!0),c&&(this.showValue(),this.setSelection())}},{key:"destroy",value:function(){this.unsubscribe.onPaste(),this.unsubscribe.onKeyDown(),this.unsubscribe.onKeyPress(),this.unsubscribe.onChange(),this.unsubscribe.onFocus(),this.unsubscribe.onBlur()}}]),e}();t.Z=o},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],o=0;o<e.length;o++){var u=e[o],l=a.base?u[0]+a.base:u[0],c=r[l]||0,h="".concat(l," ").concat(c);r[l]=c+1;var f=n(h),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var d=s(m,a);a.byIndex=o,t.splice(o,0,{identifier:h,updater:d,references:1})}i.push(h)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=a(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var o=n(r[i]);t[o].references--}for(var u=a(e,s),l=0;l<r.length;l++){var c=n(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=u}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},626:e=>{!function(){"use strict";function t(e,t,n,a){var s="removeEventListener",r=function(){e[s](t,n)};return e.addEventListener?(e.addEventListener(t,n,a),r):e.attachEvent?(t="on"+t,e.attachEvent(t,n),s="detachEvent",r):e.on?(e.on(t,n),s="off",r):void 0}t.define=function(e,t){return function(n,a,s,r){return n[e](a,s,r),function(){n[t](a,s)}}},e.exports=t}()},619:()=>{const e=document.querySelectorAll(".dropdown:not(.is-hoverable)");function t(){e.forEach((function(e){e.classList.remove("is-active")}))}e.length>0&&(e.forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation(),e.classList.toggle("is-active")}))})),document.addEventListener("click",(function(e){t()}))),document.addEventListener("keydown",(function(e){let n=e||window.event;"Esc"!==n.key&&"Escape"!==n.key||t()}))},72:()=>{for(var e=function(e){e.preventDefault(),e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)},t=document.getElementsByClassName("buy"),n=0;n<t.length;n++)t[n].addEventListener("click",e,!1)},514:()=>{const e=document.querySelector("#file-js-example input[type=file]");e.onchange=()=>{e.files.length>0&&(document.querySelector("#file-js-example .file-name").textContent=e.files[0].name)}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};n.r(e);var t=n(379),a=n.n(t),s=n(795),r=n.n(s),i=n(569),o=n.n(i),u=n(565),l=n.n(u),c=n(216),h=n.n(c),f=n(589),m=n.n(f),d={};function p(e,t){if(0===e.length)return!0;for(let n=0;n<t;++n)if(!e[n].value)return!1;return!0}function v(e,t="success"){Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:t,text:e})}d.styleTagTransform=m(),d.setAttributes=l(),d.insert=o().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=h(),a()(e.default,d),e.default&&e.default.locals&&e.default.locals,document.addEventListener("DOMContentLoaded",(()=>{let e=window.location.origin+window.location.pathname,t=[{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"}].filter((t=>t.page===e.split("/").pop())).shift();const n=(FormData,a=t.action,async e=>{const t=await fetch(a,{method:"POST",body:e});if(!t.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await t.text()});var a;document.querySelectorAll("form").forEach((e=>{e.addEventListener("submit",(function(a){let s=function(){let e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll("textarea"),n=p(e,e.length),a=p(t,t.length);return!(!n||!a)}();a.preventDefault();const r=new FormData(this);var i;0==s?v("Не все данные введены","error"):n(r).then((n=>{""==n.trim()?v(t.message):v(t.message_error,"error"),function(e,t){e.reset(),document.getElementById("file").value="",document.querySelector("#file-js-example .file-name").textContent="Ничего не добавлено"}(e)})).catch((e=>console.error(e))),setTimeout(void((i=t.redirect)&&window.setTimeout((function(){window.location=i}),2e3)),2e3)}))}))}));var k=n(780),g=document.getElementById("enterToAccount");let y;g&&(g.onclick=function(){Swal.fire({title:"Войти в аккаунт",html:'<a href="/register" class="register-link">или зарегистрироваться</a><input id="phone" type="tel" class="auth-field input-selector" placeholder="Номер телефона"><input id="password" type="password" class="auth-field" placeholder="Пароль">',preConfirm:()=>[document.getElementById("phone").value,document.getElementById("password").value],backdrop:'\n            rgba(18,97,199,0.4)\n            url("../public/images/nyan-cat.gif")\n            left top\n            no-repeat\n          ',background:"linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)",confirmButtonColor:"#0C57C7",confirmButtonText:"Войти"}),new k.Z(document.querySelector(".input-selector"),{mask:"+(000)-00-00-000",alwaysShowMask:!0,maskChar:"_"})}),document.querySelectorAll(".buy").forEach((e=>e.addEventListener("click",(()=>function(e){if((async()=>{const e=await fetch("get_auth",{method:"POST"});if(!e.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await e.text()})().then((e=>{e.length||(v("Вы не авторизованы","error"),y=0)})).catch((e=>console.error(e))),null!=y)return!1;let t=JSON.parse(localStorage.getItem("steamCart"))||[],n=t.find((t=>t.id===e));n?n.count=n.count+1:(n={id:e,count:1},t.push(n)),localStorage.setItem("steamCart",JSON.stringify(t)),v("Товар под номером "+e+" в корзине")}(e.id))))),n(619),n(72),n(514)})()})();