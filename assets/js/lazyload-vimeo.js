!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){window.showThumb=function(e){jQuery("#"+e[0].id).css("background","#000 url("+e[0].thumbnail_large+") center center no-repeat"),lazyload_video_settings.vimeo.show_title&&jQuery("#"+e[0].id).children().children(".titletext.vimeo").text(e[0].title)},function(e,t){function n(){t(i).parent().removeClass(a)}function o(){v(),c(),s()}var i=".preview-vimeo",a="js-lazyload--not-loaded";e.init=function(e){l(e),t(document).ready(o()).ajaxStop(function(){o()}),"function"==typeof g.init&&!0===r.responsive?g.init():n(),"function"==typeof r.callback&&r.callback()};var r,l=function(e){r=t.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0,displayBranding:!1,callback:null},e)},c=function(){if(!0===r.displayBranding&&0===t(i).siblings(".lazyload-info-icon").length){var e=t(i),n=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(n)}},s=function(){t(i).on("click",function(){var e=b(this);d(this),u(this);var n="";r.playercolour!==n&&(r.playercolour=f(r.playercolour),n="&color="+r.playercolour),t(this).html('<iframe src="'+p(e)+"?autoplay=1"+n+'" style="height:'+parseInt(t("#"+e).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof g.resize&&!0===r.responsive&&g.resize()})},d=function(e){t(e).removeClass("preview-vimeo")},u=function(e){t(e).prev(".lazyload-info-icon").remove()},p=function(e){return"//player.vimeo.com/video/"+e},f=function(e){return e.toString().replace(/[.#]/g,"")},v=function(){t(i).each(function(){var e=b(this);t(this).empty(),m(e)})},m=function(e){var n=y(e)+".json?callback=showThumb",o=document.createElement("script");o.type="text/javascript",o.src=n;var i="";!0===r.videoseo&&(i=' itemprop="name"'),t("#"+e).prepend(o).prepend('<div style="height:'+parseInt(t("#"+e).css("height"))+"px;width:"+parseInt(t("#"+e).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+i+"></span></div>").addClass(r.buttonstyle),h(e)},h=function(e){!0===r.videoseo&&t.getJSON(y(e)+"?callback=?",{format:"json"},function(n){t("#"+e).append('<meta itemprop="contentLocation" content="'+n[0].url+'" />'),t("#"+e).append('<meta itemprop="embedUrl" content="'+p(e)+'" />'),t("#"+e).append('<meta itemprop="thumbnail" content="'+n[0].thumbnail_large+'" />'),t("#"+e).append('<meta itemprop="datePublished" content="'+n[0].upload_date+'" />'),t("#"+e).append('<meta itemprop="duration" content="'+n[0].duration+'" />'),t("#"+e).append('<meta itemprop="aggregateRating" content="'+n.data.rating+'" />')})},y=function(e){return"//vimeo.com/api/v2/video/"+e+".json"},b=function(e){return t(e).attr("id")};t.fn.bindFirst=function(e,n){var o=t(this);o.unbind(e,n),o.bind(e,n);var i=t._data(o[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var g={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){g.config.container.length>0&&(t(window).on("resize",g.resize),t(window).bindFirst("load",function(){g.resize()}),t(window).on("load",function(){g.resize(),n()}))},resize:function(){t(g.config.selector,g.config.container).each(function(){var e=t(this),n=e.parent().width(),o=Math.round(.5625*n);e.attr("height",o),e.attr("width",n),e.css({height:o,width:n})})}};t(function(){e.init(lazyload_video_settings.vimeo)})}(window.lazyload_vimeo=window.lazyload_vimeo||{},jQuery)}]);
//# sourceMappingURL=lazyload-vimeo.js.map