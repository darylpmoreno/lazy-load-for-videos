!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(e.querySelectorAll(t))}},function(t,e,n){"use strict";var o=n(3),r=function(t){var e=window.jQuery||window.$;e&&e(document).ajaxStop(function(){console.log("yep"),t()})},i=n(0);n.d(e,"c",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return d});function c(t,e){t.setAttribute("style","background-image:url(".concat(e,");background-color:#000;background-position:center center;background-repeat:no-repeat;"))}var a=function(t,e){for(var n=this,o=arguments.length,r=new Array(o>2?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];var c=null;return function(){var o=!c,i=function(){return t.apply(n,r)};clearTimeout(c),c=setTimeout(i,e),o&&i()}}(function(){Object(i.a)(".container-lazyload").forEach(function(t){Object(i.a)("object, embed, iframe, .preview-lazyload, .lazy-load-div",t).forEach(function(t){var e=t,n=e.parentNode.clientWidth,o=Math.round(.5625*n);e.setAttribute("height","".concat(o,"px")),e.setAttribute("width","".concat(n,"px")),e.style.height="".concat(o,"px"),e.style.width="".concat(n,"px")})})},100);function u(){a()}function l(t){Object(i.a)(t).forEach(function(t){t.parentNode.classList.remove("js-lazyload--not-loaded")})}function d(t){var e=t.load,n=t.pluginOptions,i=t.previewVideoSelector;e(),r(function(){e(),!0===n.responsive&&u(),l(i)}),!0===n.responsive?function(t){Object(o.b)(u),window.addEventListener("resize",u),window.addEventListener("load",function(){u(),l(t)})}(i):l(i),"function"==typeof n.callback&&n.callback()}},function(t,e,n){"use strict";function o(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.childNodes[0];)e.appendChild(n.childNodes[0]);return e}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";function o(t){var e=window.jQuery||window.$;e&&e.fn&&e(window).bindFirst("load",t)}n.d(e,"b",function(){return o}),e.a=function(){var t=window.jQuery||window.$;t&&t.fn&&(t.fn.bindFirst=function(e,n){var o=t(this);o.unbind(e,n),o.bind(e,n);var r=t._data(o[0]).events,i=r[e];i.unshift(i.pop()),r[e]=i})}},function(t,e,n){"use strict";function o(t){document.addEventListener("DOMContentLoaded",t)}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";var o=n(1),r=n(2),i=n(0);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}window.showThumb=function(t){var e=t[0];lazyload_video_settings.vimeo.loadthumbnail&&Object(i.a)('[id="'.concat(e.id,'"]')).forEach(function(t){Object(o.c)(t,e.thumbnail_large)})};var a,u="preview-vimeo",l={buttonstyle:"",playercolour:"",responsive:!0,loadthumbnail:!0,callback:null};function d(t){var e=t,n=e.getAttribute("id");e.innerHTML="",function(t,e){if(lazyload_video_settings.vimeo.loadthumbnail){var n=document.createElement("script");n.src="".concat("https://vimeo.com/api/v2/video/".concat(e,".json"),".json?callback=showThumb"),t.parentNode.insertBefore(n,t.firstChild)}var o="";if(lazyload_video_settings.vimeo.show_title){var i=t.getAttribute("data-video-title");o='<div aria-hidden="true" class="lazy-load-info"><span class="titletext vimeo" itemprop="name">'.concat(i,"</span></div>")}var c=Object(r.a)("".concat(o,'<div aria-hidden="true" class="lazy-load-div"></div>'));t.insertBefore(c,t.firstChild),t.classList.add(a.buttonstyle)}(e,n)}function f(t){t.addEventListener("click",function(t){t.preventDefault();var e=t.target,n=e.getAttribute("id");e.classList.remove(u);var i="";a.playercolour!==i&&(a.playercolour=a.playercolour.toString().replace(/[.#]/g,""),i="&color=".concat(a.playercolour));var c,l=Object(r.a)('<iframe src="'.concat((c=n,"https://player.vimeo.com/video/".concat(c)),"?autoplay=1").concat(i,'" style="height:').concat(parseInt(e.clientHeight,10),'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'));e.parentNode.replaceChild(l,e),!0===a.responsive&&Object(o.b)()})}function s(){Object(i.a)(".".concat(u)).forEach(function(t){d(t),f(t)})}e.a=function(t){a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}({},l,t),Object(o.a)({load:s,pluginOptions:a,previewVideoSelector:".".concat(u)})}},,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(3),r=n(4),i=n(5);Object(r.a)(function(){Object(o.a)(),Object(i.a)(lazyload_video_settings.vimeo)})}]);