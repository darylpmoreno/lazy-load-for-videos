var $llv=jQuery.noConflict(),$llv_o,setOptionsVimeo=function(l){$llv_o=$llv.extend({playercolour:""},l)};$llv(document).ready(function(){function l(){i(),t()}var e="preview-vimeo",o="."+e,t=function(){$llv(o).on("click",function(){var l=a(this),e="";$llv_o.playercolour!==e&&($llv_o.playercolour=r($llv_o.playercolour),e="&color="+$llv_o.playercolour),$llv(this).html('<iframe src="//player.vimeo.com/video/'+l+"?autoplay=1"+e+'" style="height:'+parseInt($llv("#"+l).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>')})},r=function(l){var e=l.toString().replace(/[.#]/g,"");return e},i=function(){$llv(o).each(function(){var l=a(this);n(l)})},n=function(l){var e="//vimeo.com/api/v2/video/"+l+".json?callback=showThumb",o=document.createElement("script");o.type="text/javascript",o.src=e,$llv("#"+l).prepend(o).prepend('<div style="height:'+parseInt($llv("#"+l).css("height"))+"px;width:"+parseInt($llv("#"+l).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"></span></div>')},a=function(l){var e=$llv(l).attr("id");return e};$llv(document).ready(l()).ajaxStop(function(){l()})});