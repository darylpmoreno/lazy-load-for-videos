!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=5)}([function(t,e,o){"use strict";!function(t,e,o){var n,i=".preview-youtube",a="js-lazyload--not-loaded",r="";function l(){e(i).parent().removeClass(a)}t.init=function(t){d(t),e(document).ready(c()).ajaxStop(function(){c()}),"function"==typeof s.init&&!0===n.responsive?s.init():l(),"function"==typeof n.callback&&n.callback()};var d=function(t){n=e.extend({theme:"dark",colour:"red",controls:!0,loadpolicy:!0,modestbranding:!1,showinfo:!0,relations:!0,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0",displaybranding:!1,loadthumbnail:!0,callback:null},t)},c=function(){e("a.lazy-load-youtube").each(function(t){var o,i=e(this),a=i.attr("href"),l="";(o=a.split("/embed/")[1])||(o=a.split("://youtu.be/")[1]),o||(o=a.split("v=")[1].replace(/&/,"?"));var d=o.split("?")[0].split("#")[0],c="https://www.youtube.com/embed/"+(l=void 0!==n.preroll&&n.preroll!==l?n.preroll:o);!function(){if(!0===n.displaybranding&&0===i.siblings(".lazyload-info-icon").length){var t=i,o=e('<a class="lazyload-info-icon" href="https://www.kweber.com/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');t.before(o)}}();var u=function(t){return"https://www.youtube.com/watch?v="+t},p=function(t){return parseInt(t.css("width"))-4},f=0,v=[3600,60,1],h=o.match(/[#&?]t=(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(h)for(var m=1;m<h.length;m++)void 0!==h[m]&&(f+=parseInt(h[m])*v[m-1]);0===f&&(h=o.match(/[#&?](?:t|start)=(\d+)/))&&(f=h[1]),o=o.split("#")[0];var y="";f&&0!==f&&-1===o.indexOf("start=")&&(y=(-1===o.indexOf("?")?"?":"&")+"start="+f);var b="";!0===n.videoseo&&(b=' itemprop="name"'),-1!==o.indexOf("showinfo=0")?i.html(""):i.html('<div aria-hidden="true" class="lazy-load-info"><span class="titletext youtube"'+b+">"+(void 0!==i.attr("data-video-title")?i.attr("data-video-title"):void 0!==i.html()&&""!==i.html()?i.html():"")+"</span></div>"),i.prepend('<div aria-hidden="true" style="height:'+function(t){var e=0;if(!1===n.responsive)e=parseInt(t.css("height"))-4;else{var o=p(t);e=Math.round(.5625*o)}return e}(i)+"px;width:"+p(i)+'px;" class="lazy-load-div"></div>').addClass(n.buttonstyle);!function(t){var e="https://i2.ytimg.com/vi/"+t+"/"+n.thumbnailquality+".jpg";r=e}(d);var g,w,z,_,k,x,j,O,S,I,P,M,C=function(){return r};n.loadthumbnail&&(g=i,w=C(),(z=e('<img style="display:none" src="'+w+'"/>')).load(function(){120===z.width()&&(w=w.replace("maxresdefault","0")),"none"===g.css("background-image")&&g.css("background-image","url("+w+")").css("background-color","#000").css("background-position","center center").css("background-repeat","no-repeat"),z.remove()}),e("body").append(z)),!0===n.videoseo&&(i.append('<meta itemprop="contentLocation" content="'+u(d)+'" />'),i.append('<meta itemprop="embedUrl" content="'+c+'" />'),i.append('<meta itemprop="thumbnail" content="'+C()+'" />'),e.getJSON("https://gdata.youtube.com/feeds/api/videos/"+d+"?v=2&alt=jsonc&callback=?",function(t){i.append('<meta itemprop="datePublished" content="'+t.data.uploaded+'" />'),i.append('<meta itemprop="duration" content="'+t.data.duration+'" />'),i.append('<meta itemprop="aggregateRating" content="'+t.data.rating+'" />')})),i.attr("id",d+t),i.attr("href",u(d)+(f?"#t="+f+"s":"")),S="",I="",P="",M="",void 0!==n.theme&&n.theme!==S&&"dark"!==n.theme&&(S="&theme="+n.theme),void 0!==n.colour&&n.colour!==I&&"red"!==n.colour&&(I="&color="+n.colour),_=n.showinfo?"":"&showinfo=0",k=n.relations?"":"&rel=0",x=n.controls?"":"&controls=0",j=n.loadpolicy?"":"&iv_load_policy=3",O=n.modestbranding?"&modestbranding=1":"",l=l!==d?d+",":"",void 0!==n.postroll&&n.postroll!==P&&(P=n.postroll),""===l&&""===P||(M="&playlist="+l+P),c+=(-1===c.indexOf("?")?"?":"&")+"autoplay=1"+S+I+x+j+O+_+k+M+y;var F='<iframe width="'+parseInt(i.css("width"))+'" height="'+parseInt(i.css("height"))+'" style="vertical-align:top;" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';e(this).on("click",function(){return L(this),T(this),e("#"+d+t).replaceWith(F),"function"==typeof s.resize&&!0===n.responsive&&s.resize(),!1});var L=function(t){e(t).removeClass("preview-youtube")},T=function(t){e(t).prev(".lazyload-info-icon").remove()}})};e.fn.bindFirst=function(t,o){var n=e(this);n.unbind(t,o),n.bind(t,o);var i=e._data(n[0]).events,a=i[t];a.unshift(a.pop()),i[t]=a};var s={config:{container:e(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-div"},init:function(){s.config.container.length>0&&(e(window).on("resize",s.resize),e(window).bindFirst("load",function(){s.resize()}),e(window).on("load",function(){s.resize(),l()}))},resize:function(){e(s.config.selector,s.config.container).each(function(){var t=e(this),o=t.parent().width(),n=Math.round(.5625*o);t.attr("height",n),t.attr("width",o),t.css({height:n,width:o})})}};e(function(){t.init(lazyload_video_settings.youtube)})}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery)},function(t,e,o){"use strict";!function(t,e){window.showThumb=function(t){var o=t[0];lazyload_video_settings.vimeo.loadthumbnail&&e("[id="+o.id+"]").css("background-image","url("+o.thumbnail_large+")").css("background-color","#000").css("background-position","center center").css("background-repeat","no-repeat")};var o,n=".preview-vimeo",i="js-lazyload--not-loaded";function a(){e(n).parent().removeClass(i)}t.init=function(t){r(t),e(document).ready(l()).ajaxStop(function(){l()}),"function"==typeof b.init&&!0===o.responsive?b.init():a(),"function"==typeof o.callback&&o.callback()};var r=function(t){o=e.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0,displayBranding:!1,loadthumbnail:!0,callback:null},t)};function l(){v(),d(),c()}var d=function(){if(!0===o.displayBranding&&0===e(n).siblings(".lazyload-info-icon").length){var t=e(n),i=e('<a class="lazyload-info-icon" href="https://www.kweber.com/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');t.before(i)}},c=function(){e(n).on("click",function(t){t.preventDefault();var n=e(this).attr("id");s(this),u(this);var i="";o.playercolour!==i&&(o.playercolour=f(o.playercolour),i="&color="+o.playercolour),e(this).replaceWith('<iframe src="'+p(n)+"?autoplay=1"+i+'" style="height:'+parseInt(e("#"+n).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof b.resize&&!0===o.responsive&&b.resize()})},s=function(t){e(t).removeClass("preview-vimeo")},u=function(t){e(t).prev(".lazyload-info-icon").remove()},p=function(t){return"https://player.vimeo.com/video/"+t},f=function(t){return t.toString().replace(/[.#]/g,"")},v=function(){e(n).each(function(){var t=e(this),o=t.attr("id");t.empty(),h(t,o)})},h=function(t,n){var i;lazyload_video_settings.vimeo.loadthumbnail&&((i=document.createElement("script")).type="text/javascript",i.src=y(n)+".json?callback=showThumb",t.after(i));var a="";!0===o.videoseo&&(a=' itemprop="name"');var r="";lazyload_video_settings.vimeo.show_title&&(r='<div aria-hidden="true" class="lazy-load-info"><span class="titletext vimeo"'+a+" >"+t.attr("data-video-title")+"</span></div>");t.prepend(r).prepend('<div aria-hidden="true" style="height:'+parseInt(e("#"+n).css("height"))+"px;width:"+parseInt(e("#"+n).css("width"))+'px;" class="lazy-load-div"></div>').addClass(o.buttonstyle),m(n)},m=function(t){!0===o.videoseo&&e.getJSON(y(t)+"?callback=?",{format:"json"},function(o){var n=o[0];e("#"+t).append('<meta itemprop="contentLocation" content="'+n.url+'" />').append('<meta itemprop="embedUrl" content="'+p(t)+'" />').append('<meta itemprop="thumbnail" content="'+n.thumbnail_large+'" />').append('<meta itemprop="datePublished" content="'+n.upload_date+'" />').append('<meta itemprop="duration" content="'+n.duration+'" />').append('<meta itemprop="aggregateRating" content="'+o.data.rating+'" />')})},y=function(t){return"https://vimeo.com/api/v2/video/"+t+".json"};e.fn.bindFirst=function(t,o){var n=e(this);n.unbind(t,o),n.bind(t,o);var i=e._data(n[0]).events,a=i[t];a.unshift(a.pop()),i[t]=a};var b={config:{container:e(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-div"},init:function(){if(b.config.container.length>0){var t=e(window);t.on("resize",b.resize),t.bindFirst("load",function(){b.resize()}),t.on("load",function(){b.resize(),a()})}},resize:function(){e(b.config.selector,b.config.container).each(function(){var t=e(this),o=t.parent().width(),n=Math.round(.5625*o);t.attr("height",n),t.attr("width",o),t.css({height:n,width:o})})}};e(function(){t.init(lazyload_video_settings.vimeo)})}(window.lazyload_vimeo=window.lazyload_vimeo||{},jQuery)},,,,function(t,e,o){"use strict";o(6),o(0),o(1)},function(t,e,o){}]);
//# sourceMappingURL=lazyload-all.js.map