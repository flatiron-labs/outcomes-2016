/*! Magnific Popup - v0.9.9 - 2014-09-06
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */
!function(e){var t,n,r,o,i,a,s,l="Close",c="BeforeClose",u="AfterClose",f="BeforeAppend",d="MarkupParse",p="Open",m="Change",h="mfp",g="."+h,v="mfp-ready",y="mfp-removing",b="mfp-prevent-close",x=function(){},w=!!window.jQuery,T=e(window),C=function(e,n){t.ev.on(h+e+g,n)},k=function(t,n,r,o){var i=document.createElement("div");return i.className="mfp-"+t,r&&(i.innerHTML=r),o?n&&n.appendChild(i):(i=e(i),n&&i.appendTo(n)),i},S=function(n,r){t.ev.triggerHandler(h+n,r),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(r)?r:[r]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},I=function(){e.magnificPopup.instance||(t=new x,t.init(),e.magnificPopup.instance=t)},A=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};x.prototype={constructor:x,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=A(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){r||(r=e(document.body));var i;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(i=0;i<l.length;i++)if(s=l[i],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=i;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+g,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+g,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(i=0;i<c.length;i++){var u=c[i];u=u.charAt(0).toUpperCase()+u.slice(1),t["init"+u].call(t)}S("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(C(d,function(e,t,n,r){n.close_replaceWith=E(r.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.wrap.css(t.fixedContentPos?{overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}:{top:T.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),T.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var f=t.wH=T.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(f)){var h=t._getScrollbarSize();h&&(m.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),S("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||r),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+g,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(f),S(p),n},close:function(){t.isOpen&&(S(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(y),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){S(l);var n=y+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var r={marginRight:""};t.isIE7?e("body, html").css("overflow",""):r.overflow="",e("html").css(r)}o.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,S(u)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,r=window.innerHeight*n;t.wrap.css("height",r),t.wH=r}else t.wH=e||T.height();t.fixedContentPos||t.wrap.css("height",t.wH),S("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var r=n.type;if(S("BeforeChange",[t.currItem?t.currItem.type:"",r]),t.currItem=n,!t.currTemplate[r]){var o=t.st[r]?t.st[r].markup:!1;S("FirstMarkupParse",o),t.currTemplate[r]=o?e(o):!0}i&&i!==n.type&&t.container.removeClass("mfp-"+i+"-holder");var a=t["get"+r.charAt(0).toUpperCase()+r.slice(1)](n,t.currTemplate[r]);t.appendContent(a,r),n.preloaded=!0,S(m,n),i=n.type,t.container.prepend(t.contentContainer),S("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",S(f),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var r,o=t.items[n];if(o.tagName?o={el:e(o)}:(r=o.type,o={data:o,src:o.src}),o.el){for(var i=t.types,a=0;a<i.length;a++)if(o.el.hasClass("mfp-"+i[a])){r=i[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=r||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,S("ElementParse",o),t.items[n]},addGroup:function(e,n){var r=function(r){r.mfpEl=this,t._openClick(r,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,r)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,r):(n.items=e,e.off(o).on(o,r)))},_openClick:function(n,r,o){var i=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(i||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(T.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=r.find(o.delegate)),t.open(o)}},updateStatus:function(e,r){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),r||"loading"!==e||(r=t.st.tLoading);var o={status:e,text:r};S("UpdateStatus",o),e=o.status,r=o.text,t.preloader.html(r),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(b)){var r=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(r&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(r)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||T.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,r){var o;r.data&&(n=e.extend(r.data,n)),S(d,[t,n,r]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var r=t.find(g+"-"+o[0]);if(r.length>0){var i=o[1];"replaceWith"===i?r[0]!==n[0]&&r.replaceWith(n):"img"===i?r.is("img")?r.attr("src",n):r.replaceWith('<img src="'+n+'" class="'+r.attr("class")+'" />'):r.attr(o[1],n)}}else t.find(g+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:x.prototype,modules:[],open:function(t,n){return I(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){I();var r=e(this);if("string"==typeof n)if("open"===n){var o,i=w?r.data("magnificPopup"):r[0].magnificPopup,a=parseInt(arguments[1],10)||0;i.items?o=i.items[a]:(o=r,i.delegate&&(o=o.find(i.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},r,i)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),w?r.data("magnificPopup",n):r[0].magnificPopup=n,t.addGroup(r,n);return r};var N,D,P,O="inline",M=function(){P&&(D.after(P.addClass(N)).detach(),P=null)};e.magnificPopup.registerModule(O,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(O),C(l+"."+O,function(){M()})},getInline:function(n,r){if(M(),n.src){var o=t.st.inline,i=e(n.src);if(i.length){var a=i[0].parentNode;a&&a.tagName&&(D||(N=o.hiddenClass,D=k(N),N="mfp-"+N),P=i.after(D).detach().removeClass(N)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),i=e("<div>");return n.inlineElement=i,i}return t.updateStatus("ready"),t._parseMarkup(r,{},n),r}}});var L,H="ajax",F=function(){L&&r.removeClass(L)},j=function(){F(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),L=t.st.ajax.cursor,C(l+"."+H,j),C("BeforeChange."+H,j)},getAjax:function(n){L&&r.addClass(L),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(r,o,i){var a={data:r,xhr:i};S("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,F(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),S("AjaxContentAdded")},error:function(){F(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var _,z=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var r=t.st.image.titleSrc;if(r){if(e.isFunction(r))return r.call(t,n);if(n.el)return n.el.attr(r)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),C(p+n,function(){"image"===t.currItem.type&&e.cursor&&r.addClass(e.cursor)}),C(l+n,function(){e.cursor&&r.removeClass(e.cursor),T.off("resize"+g)}),C("Resize"+n,t.resizeImage),t.isLowIE&&C("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,_&&clearInterval(_),e.isCheckingImgSize=!1,S("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,r=e.img[0],o=function(i){_&&clearInterval(_),_=setInterval(function(){return r.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(_),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},i)};o(1)},getImage:function(n,r){var o=0,i=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,S("ImageLoadComplete")):(o++,200>o?setTimeout(i,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=r.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",i).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(r,{title:z(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(_&&clearInterval(_),n.loadError?(r.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(r.removeClass("mfp-loading"),t.updateStatus("ready")),r):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,r.addClass("mfp-loading"),t.findImageSize(n)),r)}}});var $,B=function(){return void 0===$&&($=void 0!==document.createElement("p").style.MozTransform),$};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,r=".zoom";if(n.enabled&&t.supportsTransition){var o,i,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),r="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},i="transition";return o["-webkit-"+i]=o["-moz-"+i]=o["-o-"+i]=o[i]=r,t.css(o),t},u=function(){t.content.css("visibility","visible")};C("BuildControls"+r,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void u();i=s(e),i.css(t._getOffset()),t.wrap.append(i),o=setTimeout(function(){i.css(t._getOffset(!0)),o=setTimeout(function(){u(),setTimeout(function(){i.remove(),e=i=null,S("ZoomAnimationEnded")},16)},a)},16)}}),C(c+r,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;i=s(e)}i.css(t._getOffset(!0)),t.wrap.append(i),t.content.css("visibility","hidden"),setTimeout(function(){i.css(t._getOffset())},16)}}),C(l+r,function(){t._allowZoom()&&(u(),i&&i.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var r;r=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=r.offset(),i=parseInt(r.css("padding-top"),10),a=parseInt(r.css("padding-bottom"),10);o.top-=e(window).scrollTop()-i;var s={width:r.width(),height:(w?r.innerHeight():r[0].offsetHeight)-a-i};return B()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var q="iframe",R="//about:blank",W=function(e){if(t.currTemplate[q]){var n=t.currTemplate[q].find("iframe");n.length&&(e||(n[0].src=R),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(q),C("BeforeChange",function(e,t,n){t!==n&&(t===q?W():n===q&&W(!0))}),C(l+"."+q,function(){W()})},getIframe:function(n,r){var o=n.src,i=t.st.iframe;e.each(i.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return i.srcAction&&(a[i.srcAction]=o),t._parseMarkup(r,a,n),t.updateStatus("ready"),r}}});var X=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},U=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,r=".mfp-gallery",i=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",C(p+r,function(){n.navigateByImgClick&&t.wrap.on("click"+r,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+r,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),C("UpdateStatus"+r,function(e,n){n.text&&(n.text=U(n.text,t.currItem.index,t.items.length))}),C(d+r,function(e,r,o,i){var a=t.items.length;o.counter=a>1?U(n.tCounter,i.index,a):""}),C("BuildControls"+r,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var r=n.arrowMarkup,o=t.arrowLeft=e(r.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(b),a=t.arrowRight=e(r.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(b),s=i?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),C(m+r,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void C(l+r,function(){o.off(r),t.wrap.off("click"+r),t.arrowLeft&&i&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null})):!1},next:function(){t.direction=!0,t.index=X(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=X(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,r=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:r);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?r:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=X(n),!t.items[n].preloaded){var r=t.items[n];r.parsed||(r=t.parseEl(n)),S("LazyLoad",r),"image"===r.type&&(r.img=e('<img class="mfp-img" />').on("load.mfploader",function(){r.hasSize=!0}).on("error.mfploader",function(){r.hasSize=!0,r.loadError=!0,S("LazyLoadError",r)}).attr("src",r.src)),r.preloaded=!0}}}});var V="retina";e.magnificPopup.registerModule(V,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(C("ImageHasSize."+V,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),C("ElementParse."+V,function(t,r){r.src=e.replaceSrc(r,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,r=function(){T.off("touchmove"+i+" touchend"+i)},o="mfpFastClick",i="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,u,f,d,p;s.on("touchstart"+i,function(e){f=!1,p=1,d=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=d.clientX,u=d.clientY,T.on("touchmove"+i,function(e){d=e.originalEvent?e.originalEvent.touches:e.touches,p=d.length,d=d[0],(Math.abs(d.clientX-c)>10||Math.abs(d.clientY-u)>10)&&(f=!0,r())}).on("touchend"+i,function(e){r(),f||p>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+i,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+i+" click"+i),n&&T.off("touchmove"+i+" touchend"+i)}}(),I()}(window.jQuery||window.Zepto);