/*! skrollr 0.6.29 (2014-11-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(e,t,n){"use strict";function r(n){if(o=t.documentElement,i=t.body,X(),se=this,n=n||{},pe=n.constants||{},n.easing)for(var r in n.easing)Y[r]=n.easing[r];be=n.edgeStrategy||"set",ce={beforerender:n.beforerender,render:n.render,keyframe:n.keyframe},fe=n.forceHeight!==!1,fe&&(Pe=n.scale||1),de=n.mobileDeceleration||k,me=n.smoothScrolling!==!1,ge=n.smoothScrollingDuration||E,ve={targetTop:se.getScrollTop()},We=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),We?(ue=t.getElementById(n.skrollrBody||S),ue&&ae(),G(),Ie(o,[y,w],[b])):Ie(o,[y,x],[b]),se.refresh(),Te(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Be||e!==_e)&&(Be=t,_e=e,ze=!0)});var a=V();return function s(){Q(),we=a(s)}(),se}var o,i,a={get:function(){return se},init:function(e){return se||new r(e)},VERSION:"0.6.29"},s=Object.prototype.hasOwnProperty,l=e.Math,u=e.getComputedStyle,c="touchstart",f="touchmove",p="touchcancel",d="touchend",h="skrollable",m=h+"-before",g=h+"-between",v=h+"-after",y="skrollr",b="no-"+y,x=y+"-desktop",w=y+"-mobile",T="linear",C=1e3,k=.004,S="skrollr-body",E=200,N="start",A="end",D="center",I="bottom",L="___skrollable_id",O=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,M=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,j=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,P=/^(@?[a-z\-]+)\[(\w+)\]$/,F=/-([a-z0-9_])/g,$=function(e,t){return t.toUpperCase()},q=/[\-+]?[\d]*\.?[\d]+/g,_=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,z=/[a-z\-]+-gradient/g,R="",W="",X=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(u){var t=u(i,null);for(var r in t)if(R=r.match(e)||+r==r&&t[r].match(e))break;if(!R)return R=W="",n;R=R[0],"-"===R.slice(0,1)?(W=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):W="-"+R.toLowerCase()+"-"}},V=function(){var t=e.requestAnimationFrame||e[R.toLowerCase()+"RequestAnimationFrame"],n=He();return(We||!t)&&(t=function(t){var r=He()-n,o=l.max(0,1e3/60-r);return e.setTimeout(function(){n=He(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[R.toLowerCase()+"CancelAnimationFrame"];return(We||!t)&&(t=function(t){return e.clearTimeout(t)}),t},Y={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-l.cos(e*l.PI)/2+.5},sqrt:function(e){return l.sqrt(e)},outCubic:function(e){return l.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-l.abs(3*l.cos(1.028*e*t)/t)}};r.prototype.refresh=function(e){var r,o,i=!1;for(e===n?(i=!0,le=[],Re=0,e=t.getElementsByTagName("*")):e.length===n&&(e=[e]),r=0,o=e.length;o>r;r++){var a=e[r],s=a,l=[],u=me,c=be,f=!1;if(i&&L in a&&delete a[L],a.attributes){for(var p=0,d=a.attributes.length;d>p;p++){var m=a.attributes[p];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name)if("data-emit-events"!==m.name){var g=m.name.match(M);if(null!==g){var v={props:m.value,element:a,eventType:m.name.replace(F,$)};l.push(v);var y=g[1];y&&(v.constant=y.substr(1));var b=g[2];/p$/.test(b)?(v.isPercentage=!0,v.offset=(0|b.slice(0,-1))/100):v.offset=0|b;var x=g[3],w=g[4]||x;x&&x!==N&&x!==A?(v.mode="relative",v.anchors=[x,w]):(v.mode="absolute",x===A?v.isEnd=!0:v.isPercentage||(v.offset=v.offset*Pe))}}else f=!0;else c=m.value;else u="off"!==m.value;else if(s=t.querySelector(m.value),null===s)throw'Unable to find anchor target "'+m.value+'"'}if(l.length){var T,C,k;!i&&L in a?(k=a[L],T=le[k].styleAttr,C=le[k].classAttr):(k=a[L]=Re++,T=a.style.cssText,C=De(a)),le[k]={element:a,styleAttr:T,classAttr:C,anchorTarget:s,keyFrames:l,smoothScrolling:u,edgeStrategy:c,emitEvents:f,lastFrameIndex:-1},Ie(a,[h],[])}}}for(Ee(),r=0,o=e.length;o>r;r++){var S=le[e[r][L]];S!==n&&(J(S),te(S))}return se},r.prototype.relativeToAbsolute=function(e,t,n){var r=o.clientHeight,i=e.getBoundingClientRect(),a=i.top,s=i.bottom-i.top;return t===I?a-=r:t===D&&(a-=r/2),n===I?a+=s:n===D&&(a+=s/2),a+=se.getScrollTop(),0|a+.5},r.prototype.animateTo=function(e,t){t=t||{};var r=He(),o=se.getScrollTop();return he={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||C,startTime:r,endTime:r+(t.duration||C),easing:Y[t.easing||T],done:t.done},he.topDiff||(he.done&&he.done.call(se,!1),he=n),se},r.prototype.stopAnimateTo=function(){he&&he.done&&he.done.call(se,!0),he=n},r.prototype.isAnimatingTo=function(){return!!he},r.prototype.isMobile=function(){return We},r.prototype.setScrollTop=function(t,n){return ye=n===!0,We?Xe=l.min(l.max(t,0),je):e.scrollTo(0,t),se},r.prototype.getScrollTop=function(){return We?Xe:e.pageYOffset||o.scrollTop||i.scrollTop||0},r.prototype.getMaxScrollTop=function(){return je},r.prototype.on=function(e,t){return ce[e]=t,se},r.prototype.off=function(e){return delete ce[e],se},r.prototype.destroy=function(){var e=U();e(we),ke(),Ie(o,[b],[y,x,w]);for(var t=0,r=le.length;r>t;t++)ie(le[t].element);o.style.overflow=i.style.overflow="",o.style.height=i.style.height="",ue&&a.setStyle(ue,"transform","none"),se=n,ue=n,ce=n,fe=n,je=0,Pe=1,pe=n,de=n,Fe="down",$e=-1,_e=0,Be=0,ze=!1,he=n,me=n,ge=n,ve=n,ye=n,Re=0,be=n,We=!1,Xe=0,xe=n};var G=function(){var r,a,s,u,h,m,g,v,y,b,x,w;Te(o,[c,f,p,d].join(" "),function(e){var o=e.changedTouches[0];for(u=e.target;3===u.nodeType;)u=u.parentNode;switch(h=o.clientY,m=o.clientX,b=e.timeStamp,O.test(u.tagName)||e.preventDefault(),e.type){case c:r&&r.blur(),se.stopAnimateTo(),r=u,a=g=h,s=m,y=b;break;case f:O.test(u.tagName)&&t.activeElement!==u&&e.preventDefault(),v=h-g,w=b-x,se.setScrollTop(Xe-v,!0),g=h,x=b;break;default:case p:case d:var i=a-h,T=s-m,C=T*T+i*i;if(49>C){if(!O.test(r.tagName)){r.focus();var k=t.createEvent("MouseEvents");k.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(k)}return}r=n;var S=v/w;S=l.max(l.min(S,3),-3);var E=l.abs(S/de),N=S*E+.5*de*E*E,A=se.getScrollTop()-N,D=0;A>je?(D=(je-A)/N,A=je):0>A&&(D=-A/N,A=0),E*=1-D,se.animateTo(0|A+.5,{easing:"outCubic",duration:E})}}),e.scrollTo(0,0),o.style.overflow=i.style.overflow="hidden"},K=function(){var e,t,n,r,i,a,s,u,c,f,p,d=o.clientHeight,h=Ne();for(u=0,c=le.length;c>u;u++)for(e=le[u],t=e.element,n=e.anchorTarget,r=e.keyFrames,i=0,a=r.length;a>i;i++)s=r[i],f=s.offset,p=h[s.constant]||0,s.frame=f,s.isPercentage&&(f*=d,s.frame=f),"relative"===s.mode&&(ie(t),s.frame=se.relativeToAbsolute(n,s.anchors[0],s.anchors[1])-f,ie(t,!0)),s.frame+=p,fe&&!s.isEnd&&s.frame>je&&(je=s.frame);for(je=l.max(je,Ae()),u=0,c=le.length;c>u;u++){for(e=le[u],r=e.keyFrames,i=0,a=r.length;a>i;i++)s=r[i],p=h[s.constant]||0,s.isEnd&&(s.frame=je-s.offset+p);e.keyFrames.sort(Me)}},Z=function(e,t){for(var n=0,r=le.length;r>n;n++){var o,i,l=le[n],u=l.element,c=l.smoothScrolling?e:t,f=l.keyFrames,p=f.length,d=f[0],y=f[f.length-1],b=d.frame>c,x=c>y.frame,w=b?d:y,T=l.emitEvents,C=l.lastFrameIndex;if(b||x){if(b&&-1===l.edge||x&&1===l.edge)continue;switch(b?(Ie(u,[m],[v,g]),T&&C>-1&&(Se(u,d.eventType,Fe),l.lastFrameIndex=-1)):(Ie(u,[v],[m,g]),T&&p>C&&(Se(u,y.eventType,Fe),l.lastFrameIndex=p)),l.edge=b?-1:1,l.edgeStrategy){case"reset":ie(u);continue;case"ease":c=w.frame;break;default:case"set":var k=w.props;for(o in k)s.call(k,o)&&(i=oe(k[o].value),0===o.indexOf("@")?u.setAttribute(o.substr(1),i):a.setStyle(u,o,i));continue}}else 0!==l.edge&&(Ie(u,[h,g],[m,v]),l.edge=0);for(var S=0;p-1>S;S++)if(c>=f[S].frame&&f[S+1].frame>=c){var E=f[S],N=f[S+1];for(o in E.props)if(s.call(E.props,o)){var A=(c-E.frame)/(N.frame-E.frame);A=E.props[o].easing(A),i=re(E.props[o].value,N.props[o].value,A),i=oe(i),0===o.indexOf("@")?u.setAttribute(o.substr(1),i):a.setStyle(u,o,i)}T&&C!==S&&("down"===Fe?Se(u,E.eventType,Fe):Se(u,N.eventType,Fe),l.lastFrameIndex=S);break}}},Q=function(){ze&&(ze=!1,Ee());var e,t,r=se.getScrollTop(),o=He();if(he)o>=he.endTime?(r=he.targetTop,e=he.done,he=n):(t=he.easing((o-he.startTime)/he.duration),r=0|he.startTop+t*he.topDiff),se.setScrollTop(r,!0);else if(!ye){var i=ve.targetTop-r;i&&(ve={startTop:$e,topDiff:r-$e,targetTop:r,startTime:qe,endTime:qe+ge}),ve.endTime>=o&&(t=Y.sqrt((o-ve.startTime)/ge),r=0|ve.startTop+t*ve.topDiff)}if(We&&ue&&a.setStyle(ue,"transform","translate(0, "+-Xe+"px) "+xe),ye||$e!==r){Fe=r>$e?"down":$e>r?"up":Fe,ye=!1;var s={curTop:r,lastTop:$e,maxTop:je,direction:Fe},l=ce.beforerender&&ce.beforerender.call(se,s);l!==!1&&(Z(r,se.getScrollTop()),$e=r,ce.render&&ce.render.call(se,s)),e&&e.call(se,!1)}qe=o},J=function(e){for(var t=0,n=e.keyFrames.length;n>t;t++){for(var r,o,i,a,s=e.keyFrames[t],l={};null!==(a=j.exec(s.props));)i=a[1],o=a[2],r=i.match(P),null!==r?(i=r[1],r=r[2]):r=T,o=o.indexOf("!")?ee(o):[o.slice(1)],l[i]={value:o,easing:Y[r]};s.props=l}},ee=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(q,function(e){return 100*(e/255)+"%"})}),W&&(z.lastIndex=0,e=e.replace(z,function(e){return W+e})),e=e.replace(q,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},te=function(e){var t,n,r={};for(t=0,n=e.keyFrames.length;n>t;t++)ne(e.keyFrames[t],r);for(r={},t=e.keyFrames.length-1;t>=0;t--)ne(e.keyFrames[t],r)},ne=function(e,t){var n;for(n in t)s.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},re=function(e,t,n){var r,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var i=[e[0]];for(r=1;o>r;r++)i[r]=e[r]+(t[r]-e[r])*n;return i},oe=function(e){var t=1;return _.lastIndex=0,e[0].replace(_,function(){return e[t++]})},ie=function(e,t){e=[].concat(e);for(var n,r,o=0,i=e.length;i>o;o++)r=e[o],n=le[r[L]],n&&(t?(r.style.cssText=n.dirtyStyleAttr,Ie(r,n.dirtyClassAttr)):(n.dirtyStyleAttr=r.style.cssText,n.dirtyClassAttr=De(r),r.style.cssText=n.styleAttr,Ie(r,n.classAttr)))},ae=function(){xe="translateZ(0)",a.setStyle(ue,"transform",xe);var e=u(ue),t=e.getPropertyValue("transform"),n=e.getPropertyValue(W+"transform"),r=t&&"none"!==t||n&&"none"!==n;r||(xe="")};a.setStyle=function(e,t,n){var r=e.style;if(t=t.replace(F,$).replace("-",""),"zIndex"===t)r[t]=isNaN(n)?n:""+(0|n);else if("float"===t)r.styleFloat=r.cssFloat=n;else try{R&&(r[R+t.slice(0,1).toUpperCase()+t.slice(1)]=n),r[t]=n}catch(o){}};var se,le,ue,ce,fe,pe,de,he,me,ge,ve,ye,be,xe,we,Te=a.addEvent=function(t,n,r){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),r.call(this,t)};n=n.split(" ");for(var i,a=0,s=n.length;s>a;a++)i=n[a],t.addEventListener?t.addEventListener(i,r,!1):t.attachEvent("on"+i,o),Ve.push({element:t,name:i,listener:r})},Ce=a.removeEvent=function(e,t,n){t=t.split(" ");for(var r=0,o=t.length;o>r;r++)e.removeEventListener?e.removeEventListener(t[r],n,!1):e.detachEvent("on"+t[r],n)},ke=function(){for(var e,t=0,n=Ve.length;n>t;t++)e=Ve[t],Ce(e.element,e.name,e.listener);Ve=[]},Se=function(e,t,n){ce.keyframe&&ce.keyframe.call(se,e,t,n)},Ee=function(){var e=se.getScrollTop();je=0,fe&&!We&&(i.style.height=""),K(),fe&&!We&&(i.style.height=je+o.clientHeight+"px"),We?se.setScrollTop(l.min(se.getScrollTop(),je)):se.setScrollTop(e,!0),ye=!0},Ne=function(){var e,t,n=o.clientHeight,r={};for(e in pe)t=pe[e],"function"==typeof t?t=t.call(se):/p$/.test(t)&&(t=t.slice(0,-1)/100*n),r[e]=t;return r},Ae=function(){var e,t=0;return ue&&(t=l.max(ue.offsetHeight,ue.scrollHeight)),e=l.max(t,i.scrollHeight,i.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},De=function(t){var n="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[n],n="baseVal"),t[n]},Ie=function(t,r,o){var i="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[i],i="baseVal"),o===n)return t[i]=r,n;for(var a=t[i],s=0,l=o.length;l>s;s++)a=Oe(a).replace(Oe(o[s])," ");a=Le(a);for(var u=0,c=r.length;c>u;u++)-1===Oe(a).indexOf(Oe(r[u]))&&(a+=" "+r[u]);t[i]=Le(a)},Le=function(e){return e.replace(H,"")},Oe=function(e){return" "+e+" "},He=Date.now||function(){return+new Date},Me=function(e,t){return e.frame-t.frame},je=0,Pe=1,Fe="down",$e=-1,qe=He(),_e=0,Be=0,ze=!1,Re=0,We=!1,Xe=0,Ve=[];"function"==typeof define&&define.amd?define([],function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:e.skrollr=a}(window,document);