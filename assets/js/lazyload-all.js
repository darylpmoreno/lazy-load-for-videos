!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){window.showThumb=function(e){jQuery("#"+e[0].id).css("background","#000 url("+e[0].thumbnail_large+") center center no-repeat"),lazyload_video_settings.vimeo.show_title&&jQuery("#"+e[0].id).children().children(".titletext.vimeo").text(e[0].title)},function(e,t){function n(){t(i).parent().removeClass(a)}function o(){v(),c(),d()}var i=".preview-vimeo",a="js-lazyload--not-loaded";e.init=function(e){l(e),t(document).ready(o()).ajaxStop(function(){o()}),"function"==typeof w.init&&!0===r.responsive?w.init():n(),"function"==typeof r.callback&&r.callback()};var r,l=function(e){r=t.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0,displayBranding:!1,callback:null},e)},c=function(){if(!0===r.displayBranding&&0===t(i).siblings(".lazyload-info-icon").length){var e=t(i),n=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(n)}},d=function(){t(i).on("click",function(){var e=b(this);s(this),u(this);var n="";r.playercolour!==n&&(r.playercolour=f(r.playercolour),n="&color="+r.playercolour),t(this).html('<iframe src="'+p(e)+"?autoplay=1"+n+'" style="height:'+parseInt(t("#"+e).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof w.resize&&!0===r.responsive&&w.resize()})},s=function(e){t(e).removeClass("preview-vimeo")},u=function(e){t(e).prev(".lazyload-info-icon").remove()},p=function(e){return"//player.vimeo.com/video/"+e},f=function(e){return e.toString().replace(/[.#]/g,"")},v=function(){t(i).each(function(){var e=b(this);t(this).empty(),h(e)})},h=function(e){var n=y(e)+".json?callback=showThumb",o=document.createElement("script");o.type="text/javascript",o.src=n;var i="";!0===r.videoseo&&(i=' itemprop="name"'),t("#"+e).prepend(o).prepend('<div style="height:'+parseInt(t("#"+e).css("height"))+"px;width:"+parseInt(t("#"+e).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+i+"></span></div>").addClass(r.buttonstyle),m(e)},m=function(e){!0===r.videoseo&&t.getJSON(y(e)+"?callback=?",{format:"json"},function(n){t("#"+e).append('<meta itemprop="contentLocation" content="'+n[0].url+'" />'),t("#"+e).append('<meta itemprop="embedUrl" content="'+p(e)+'" />'),t("#"+e).append('<meta itemprop="thumbnail" content="'+n[0].thumbnail_large+'" />'),t("#"+e).append('<meta itemprop="datePublished" content="'+n[0].upload_date+'" />'),t("#"+e).append('<meta itemprop="duration" content="'+n[0].duration+'" />'),t("#"+e).append('<meta itemprop="aggregateRating" content="'+n.data.rating+'" />')})},y=function(e){return"//vimeo.com/api/v2/video/"+e+".json"},b=function(e){return t(e).attr("id")};t.fn.bindFirst=function(e,n){var o=t(this);o.unbind(e,n),o.bind(e,n);var i=t._data(o[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var w={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){w.config.container.length>0&&(t(window).on("resize",w.resize),t(window).bindFirst("load",function(){w.resize()}),t(window).on("load",function(){w.resize(),n()}))},resize:function(){t(w.config.selector,w.config.container).each(function(){var e=t(this),n=e.parent().width(),o=Math.round(.5625*n);e.attr("height",o),e.attr("width",n),e.css({height:o,width:n})})}};t(function(){e.init(lazyload_video_settings.vimeo)})}(window.lazyload_vimeo=window.lazyload_vimeo||{},jQuery)},function(e,t){!function(e,t,n){function o(){t(i).parent().removeClass(a)}var i=".preview-youtube",a="js-lazyload--not-loaded",r="";e.init=function(e){c(e),t(document).ready(d()).ajaxStop(function(){d()}),"function"==typeof s.init&&!0===l.responsive?s.init():o(),"function"==typeof l.callback&&l.callback()};var l,c=function(e){l=t.extend({theme:"dark",colour:"red",controls:!0,loadpolicy:!0,showinfo:!0,relations:!0,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0",displaybranding:!1,callback:null},e)},d=function(){t("a.lazy-load-youtube").each(function(e){var n,o=t(this),i=o.attr("href"),a="";!function(){n=i.split("/embed/")[1],n||(n=i.split("://youtu.be/")[1]),n||(n=i.split("v=")[1].replace(/\&/,"?"))}();var c=n.split("?")[0].split("#")[0];!function(){a=void 0!==l.preroll&&l.preroll!==a?l.preroll:n}();var d="//www.youtube.com/embed/"+a;!function(){if(!0===l.displaybranding&&0===o.siblings(".lazyload-info-icon").length){var e=o,n=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(n)}}();var u=function(e){return"//www.youtube.com/watch?v="+e},p=function(e){return parseInt(e.css("width"))-4},f=0,v=[3600,60,1],h=n.match(/[#&?]t=(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(h)for(var m=1;m<h.length;m++)void 0!==h[m]&&(f+=parseInt(h[m])*v[m-1]);0===f&&(h=n.match(/[#&?](?:t|start)=(\d+)/))&&(f=h[1]),n=n.split("#")[0];var y="";f&&0!==f&&-1===n.indexOf("start=")&&(y=(-1===n.indexOf("?")?"?":"&")+"start="+f);var b="";!0===l.videoseo&&(b=' itemprop="name"'),-1!==n.indexOf("showinfo=0")?o.html(""):o.html('<div class="lazy-load-youtube-info"><span class="titletext youtube"'+b+">"+function(){return void 0!==o.attr("video-title")?o.attr("video-title"):void 0!==o.attr("data-video-title")?o.attr("data-video-title"):void 0!==o.html()&&""!==o.html()?o.html():""}()+"</span></div>"),o.prepend('<div style="height:'+function(e){var t=0;if(!1===l.responsive)t=parseInt(e.css("height"))-4;else{var n=p(e);t=Math.round(.5625*n)}return t}(o)+"px;width:"+p(o)+'px;" class="lazy-load-youtube-div"></div>').addClass(l.buttonstyle);!function(e){var t="//i2.ytimg.com/vi/"+e+"/"+l.thumbnailquality+".jpg";r=t}(c);var w=function(){return r};!function(e){var n=w(),o=t('<img style="display:none" src="'+n+'"/>');o.load(function(){120===o.width()&&(n=n.replace("maxresdefault","0")),"none"===e.css("background-image")&&e.css("background","#000 url("+n+") center center no-repeat"),o.remove()}),t("body").append(o)}(o),!0===l.videoseo&&(o.append('<meta itemprop="contentLocation" content="'+u(c)+'" />'),o.append('<meta itemprop="embedUrl" content="'+d+'" />'),o.append('<meta itemprop="thumbnail" content="'+w()+'" />'),t.getJSON("//gdata.youtube.com/feeds/api/videos/"+c+"?v=2&alt=jsonc&callback=?",function(e){o.append('<meta itemprop="datePublished" content="'+e.data.uploaded+'" />'),o.append('<meta itemprop="duration" content="'+e.data.duration+'" />'),o.append('<meta itemprop="aggregateRating" content="'+e.data.rating+'" />')})),o.attr("id",c+e),o.attr("href",u(c)+(f?"#t="+f+"s":"")),function(){var e,t,n,o,i="",r="",s="",u="";void 0!==l.theme&&l.theme!==i&&"dark"!==l.theme&&(i="&theme="+l.theme),void 0!==l.colour&&l.colour!==r&&"red"!==l.colour&&(r="&color="+l.colour),e=l.showinfo?"":"&showinfo=0",t=l.relations?"":"&rel=0",n=l.controls?"":"&controls=0",o=l.loadpolicy?"":"&iv_load_policy=3",a=a!==c?c+",":"",void 0!==l.postroll&&l.postroll!==s&&(s=l.postroll),""===a&&""===s||(u="&playlist="+a+s),d+=(-1===d.indexOf("?")?"?":"&")+"autoplay=1"+i+r+n+o+e+t+u+y}();var g='<iframe width="'+parseInt(o.css("width"))+'" height="'+parseInt(o.css("height"))+'" style="vertical-align:top;" src="'+d+'" frameborder="0" allowfullscreen></iframe>';t(this).on("click",function(){return z(this),x(this),t("#"+c+e).replaceWith(g),"function"==typeof s.resize&&!0===l.responsive&&s.resize(),!1});var z=function(e){t(e).removeClass("preview-youtube")},x=function(e){t(e).prev(".lazyload-info-icon").remove()}})};t.fn.bindFirst=function(e,n){var o=t(this);o.unbind(e,n),o.bind(e,n);var i=t._data(o[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var s={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){s.config.container.length>0&&(t(window).on("resize",s.resize),t(window).bindFirst("load",function(){s.resize()}),t(window).on("load",function(){s.resize(),o()}))},resize:function(){t(s.config.selector,s.config.container).each(function(){var e=t(this),n=e.parent().width(),o=Math.round(.5625*n);e.attr("height",o),e.attr("width",n),e.css({height:o,width:n})})}};t(function(){e.init(lazyload_video_settings.youtube)})}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery)},,,function(e,t){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=(n.n(o),n(1)),a=(n.n(i),n(0));n.n(a)}]);
//# sourceMappingURL=lazyload-all.js.map