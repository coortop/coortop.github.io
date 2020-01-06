Stun.utils=Stun.$u={debounce:function(t,e,i){var n;return function(){var o=this,a=arguments;if(n&&clearTimeout(n),i){var r=!n;n=setTimeout(function(){n=null},e),r&&t.apply(o,a)}else n=setTimeout(function(){t.apply(o,a)},e)}},throttle:function(t,e,i){var n,o,a,r=0;i||(i={});var s=function(){r=!1===i.leading?0:(new Date).getTime(),n=null,t.apply(o,a),n||(o=a=null)};return function(){var c=(new Date).getTime();r||!1!==i.leading||(r=c);var l=e-(c-r);o=this,a=arguments,l<=0||l>e?(n&&(clearTimeout(n),n=null),r=c,t.apply(o,a),n||(o=a=null)):n||!1===i.trailing||(n=setTimeout(s,l))}},hasMobileUA:function(){var t=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t)},isTablet:function(){return window.screen.width>767&&window.screen.width<992&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},showThemeInConsole:function(){},codeToKeyCode:function(t){return{ArrowLeft:37,ArrowRight:39,Escape:27,Enter:13}[t]},popAlert:function(t,e,i){if(!$(".stun-alert")[0]){var n=CONFIG.fontawesome.prefix,o=$('<div class="stun-message"><div class="stun-alert stun-alert-'+t+'"><i class="stun-alert-icon '+n+" fa-"+{success:"check-circle",info:"exclamation-circle",warning:"exclamation-circle",error:"times-circle"}[t]+'"></i><span class="stun-alert-description">'+e+"</span></div></div>");$("body").append(o)}$(document).ready(function(){$(".stun-alert").velocity("stop").velocity("transition.slideDownBigIn",{duration:300}).velocity("reverse",{delay:1e3*i||5e3,duration:260,complete:function(){$(".stun-alert").css("display","none")}})})},copyText:function(t){try{var e=window.getSelection(),i=document.createRange();i.selectNodeContents(t),e.removeAllRanges(),e.addRange(i);var n=e.toString(),o=document.createElement("input");if(o.style.display="none",o.setAttribute("readonly","readonly"),o.setAttribute("value",n),document.body.appendChild(o),o.setSelectionRange(0,-1),document.execCommand("copy"))return document.execCommand("copy"),document.body.removeChild(o),!0;document.body.removeChild(o)}catch(t){return!1}},wrapImageWithFancyBox:function(){$(".content img").not(":hidden").each(function(){var t=$(this),e=t.attr("title")||t.attr("alt"),i=t.parent("a"),n=["data-src","data-original","src"],o="";if(!i[0]){for(var a=0;a<n.length;a++)if(t.attr(n[a])){o=t.attr(n[a]);break}i=t.wrap('<a class="fancybox" href="'+o+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a"),t.is(".gallery img")?i.attr("data-fancybox","gallery"):i.attr("data-fancybox","default")}e&&i.attr("title",e).attr("data-caption",e)}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",hash:!1,buttons:["share","slideShow","fullScreen","download","thumbs","close"]})},showImageToWaterfall:function(){var t=CONFIG.gallery_waterfall,e=parseInt(t.col_width),i=parseInt(t.gap_x);this.waitAllImageLoad(".gallery__img",function(){$(".gallery").masonry({itemSelector:".gallery__img",columnWidth:e,percentPosition:!0,gutter:i,transitionDuration:0})})},lazyLoadImage:function(){$("img.lazyload").lazyload()},addIconToExternalLink:function(t){if($(t)[0]){var e=CONFIG.fontawesome.prefix,i=$('<span class="external-link"></span>'),n=$('<i class="'+e+" fa-"+CONFIG.external_link.icon.name+'"></i>');$(t).find('a[target="_blank"]').wrap(i).parent(".external-link").append(n)}},registerHotkeyToSwitchPost:function(){var t=this;$(document).on("keydown",function(e){var i=e.keyCode===t.codeToKeyCode("ArrowLeft"),n=e.keyCode===t.codeToKeyCode("ArrowRight");if(e.ctrlKey&&i){var o=$(".paginator-post-prev").find("a")[0];o&&o.click()}else if(e.ctrlKey&&n){var a=$(".paginator-post-next").find("a")[0];a&&a.click()}})},registerShowReward:function(){$(".reward-button").on("click",function(){var t=$(".reward-qr");t.is(":visible")?t.css("display","none"):t.velocity("stop").velocity("transition.slideDownIn",{duration:300})})},registerClickToZoomImage:function(){$("#content-wrap img").not(":hidden").each(function(){$(this).addClass("zoom-image")});var t=$('<div class="zoom-image-mask"></div>'),e=$("<img>"),i=!1;function n(){e.velocity("reverse"),t.velocity("reverse",{complete:function(){$(".zoom-image.show").remove(),$(".zoom-image-mask").remove(),$(".zoom-image").removeClass("hide")}})}$(window).on("scroll",function(){i&&(i=!1,setTimeout(n,200))}),$(document).on("click",function(){n()}),$(".zoom-image").on("click",function(n){if(!$(this).hasClass("noZoom")){n.stopPropagation(),i=!0;var o=this.getBoundingClientRect(),a=$(this).width(),r=$(this).height(),s=$(this).outerWidth(),c=$(this).outerHeight(),l=$(window).width(),d=$(window).height(),u=l/a,p=d/r,f=(u<p?u:p)||1,h=l/2-(o.x+s/2),m=d/2-(o.y+c/2);e.attr("class",this.className),e.attr("src",this.src),e.addClass("show"),e.css({left:$(this).offset().left+(s-a)/2,top:$(this).offset().top+(c-r)/2,width:a,height:r}),$(this).addClass("hide"),$("body").append(t).append(e),t.velocity({opacity:1}),e.velocity({translateX:h,translateY:m,scale:f},{duration:300,easing:[.2,0,.2,1]})}})},addCopyButton:function(){$("figure.highlight").each(function(){if(!$(this).find("figcaption")[0]){var t=$(this).attr("class").split(/\s/).filter(function(t){return"highlight"!==t});$('<figcaption class="custom"><div class="custom-lang">'+t+"</div></figcaption>").insertBefore($(this).children().first())}});var t=CONFIG.fontawesome.prefix,e=$('<div class="copy-button" data-popover='+CONFIG.prompt.copy_button+' data-popover-pos="up"><i class="'+t+' fa-clipboard"></i></div>');$("figure.highlight figcaption, .post-copyright").append(e)},registerCopyEvent:function(){$(".copy-button").on("click",function(){var t=null,e=$(this).parents("figure.highlight").find("td.code")[0];t=e||$(this).parent()[0],Stun.utils.copyText(t)?Stun.utils.popAlert("success",CONFIG.prompt.copy_success):Stun.utils.popAlert("error",CONFIG.prompt.copy_error)})},waitAllImageLoad:function(t,e){var i=[];$(t).each(function(){var t=$.Deferred();$(this).bind("load",function(){t.resolve()}),this.complete&&setTimeout(function(){t.resolve()},500),i.push(t)}),$.when.apply(null,i).then(e)}};