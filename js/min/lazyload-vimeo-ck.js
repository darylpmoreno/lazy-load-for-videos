!function(e,$,t){function n(){y(),p(),u()}var i="preview-vimeo",o="."+i,a="lazyload-info-icon",r="."+a,c=.5625;e.init=function(e){s(e),$(document).ready(n()).ajaxStop(function(){n()}),"function"==typeof k.init&&l.responsive===!0&&k.init(),"function"==typeof l.callback&&l.callback()};var l,s=function(e){l=$.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0,callback:null},e)},d=function(){return'<a class="'+a+'" href="http://kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>'},p=function(){if(l.displayBranding!==!1&&0===$(o).siblings(r).length){var e=$(o),t=$(d());e.before(t)}},u=function(){$(o).on("click",function(){var e=z(this);f(this),v(this);var t="";l.playercolour!==t&&(l.playercolour=h(l.playercolour),t="&color="+l.playercolour),$(this).html('<iframe src="'+m(e)+"?autoplay=1"+t+'" style="height:'+parseInt($("#"+e).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof k.resize&&l.responsive===!0&&k.resize()})},f=function(e){$(e).removeClass(i)},v=function(e){$(e).prev(r).remove()},m=function(e){return"//player.vimeo.com/video/"+e},h=function(e){var t=e.toString().replace(/[.#]/g,"");return t},y=function(){$(o).each(function(){var e=z(this);$(this).empty(),b(e)})},b=function(e){var t=w(e)+".json?callback=showThumb",n=document.createElement("script");n.type="text/javascript",n.src=t;var i="";l.videoseo===!0&&(i=' itemprop="name"'),$("#"+e).prepend(n).prepend('<div style="height:'+parseInt($("#"+e).css("height"))+"px;width:"+parseInt($("#"+e).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+i+"></span></div>").addClass(l.buttonstyle),g(e)},g=function(e){l.videoseo===!0&&$.getJSON(w(e)+"?callback=?",{format:"json"},function(t){$("#"+e).append('<meta itemprop="contentLocation" content="'+t[0].url+'" />'),$("#"+e).append('<meta itemprop="embedUrl" content="'+m(e)+'" />'),$("#"+e).append('<meta itemprop="thumbnail" content="'+t[0].thumbnail_large+'" />'),$("#"+e).append('<meta itemprop="datePublished" content="'+t[0].upload_date+'" />'),$("#"+e).append('<meta itemprop="duration" content="'+t[0].duration+'" />'),$("#"+e).append('<meta itemprop="aggregateRating" content="'+t.data.rating+'" />')})},w=function(e){return"//vimeo.com/api/v2/video/"+e+".json"},z=function(e){var t=$(e).attr("id");return t};$.fn.bindFirst=function(e,t){var n=$(this);n.unbind(e,t),n.bind(e,t);var i=$._data(n[0]).events,o=i[e];o.unshift(o.pop()),i[e]=o};var k={config:{container:$(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){k.config.container.length>0&&($(window).on("resize",k.resize),$(window).bindFirst("load",function(){k.resize()}),$(window).on("load",function(){k.resize()}))},resize:function(){$(k.config.selector,k.config.container).each(function(){var e=$(this),t=e.parent().width(),n=Math.round(t*c);e.attr("height",n),e.attr("width",t),e.css({height:n,width:t})})}}}(window.lazyload_vimeo=window.lazyload_vimeo||{},jQuery);