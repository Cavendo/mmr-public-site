"use strict";!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){a("a[data-reveal-id]").on("click",function(b){b.preventDefault();var c=a(this).attr("data-reveal-id");a("#"+c).reveal(a(this).data())}),a.fn.reveal=function(b){var c={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:!0,dismissModalClass:"close-reveal-modal"},b=a.extend({},c,b);return this.each(function(){function c(){k.unbind("click.modalEvent"),a("."+b.dismissModalClass).unbind("click.modalEvent"),j||(f(),"fadeAndPop"==b.animation&&(g.css({top:a(document).scrollTop()-i,opacity:0,visibility:"visible"}),k.fadeIn(b.animationSpeed/2),g.delay(b.animationSpeed/2).animate({top:a(document).scrollTop()+h+"px",opacity:1},b.animationSpeed,e)),"fade"==b.animation&&(g.css({opacity:0,visibility:"visible",top:a(document).scrollTop()+h}),k.fadeIn(b.animationSpeed/2),g.delay(b.animationSpeed/2).animate({opacity:1},b.animationSpeed,e)),"none"==b.animation&&(g.css({visibility:"visible",top:a(document).scrollTop()+h}),k.css({display:"block"}),e())),g.unbind("reveal:open",c)}function d(){j||(f(),"fadeAndPop"==b.animation&&(k.delay(b.animationSpeed).fadeOut(b.animationSpeed),g.animate({top:a(document).scrollTop()-i+"px",opacity:0},b.animationSpeed/2,function(){g.css({top:h,opacity:1,visibility:"hidden"}),e()})),"fade"==b.animation&&(k.delay(b.animationSpeed).fadeOut(b.animationSpeed),g.animate({opacity:0},b.animationSpeed,function(){g.css({opacity:1,visibility:"hidden",top:h}),e()})),"none"==b.animation&&(g.css({visibility:"hidden",top:h}),k.css({display:"none"}))),g.unbind("reveal:close",d)}function e(){j=!1}function f(){j=!0}var g=a(this),h=parseInt(g.css("top")),i=g.height()+h,j=!1,k=a(".reveal-modal-bg");0==k.length&&(k=a('<div class="reveal-modal-bg" />').insertAfter(g),k.fadeTo("fast",.8)),g.bind("reveal:open",c),g.bind("reveal:close",d),g.trigger("reveal:open");a("."+b.dismissModalClass).bind("click.modalEvent",function(){g.trigger("reveal:close")});b.closeOnBackgroundClick&&(k.css({cursor:"pointer"}),k.bind("click.modalEvent",function(){g.trigger("reveal:close")})),a("body").keyup(function(a){27===a.which&&g.trigger("reveal:close")})})}}(jQuery),function(a){var b={common:{init:function(){a(".button-modal").click(function(b){b.preventDefault(),a("#myModal").reveal({animation:"fade",animationspeed:300,closeonbackgroundclick:!0,dismissmodalclass:"close-reveal-modal"})})}},home:{init:function(){}},about_us:{init:function(){}}},c={fire:function(a,c,d){var e=b;c=void 0===c?"init":c,""!==a&&e[a]&&"function"==typeof e[a][c]&&e[a][c](d)},loadEvents:function(){c.fire("common"),a.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(a,b){c.fire(b)})}};a(document).ready(c.loadEvents)}(jQuery);