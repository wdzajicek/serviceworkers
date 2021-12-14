"use strict";(self.webpackChunkserviceworkers=self.webpackChunkserviceworkers||[]).push([[68],{6068:function(e,t,n){n.r(t),n.d(t,{default:function(){return Mt}});var r={};n.r(r),n.d(r,{afterMain:function(){return E},afterRead:function(){return w},afterWrite:function(){return j},applyStyles:function(){return M},arrow:function(){return G},auto:function(){return c},basePlacements:function(){return u},beforeMain:function(){return O},beforeRead:function(){return y},beforeWrite:function(){return _},bottom:function(){return i},clippingParents:function(){return p},computeStyles:function(){return te},createPopper:function(){return Pe},createPopperBase:function(){return Ce},createPopperLite:function(){return Te},detectOverflow:function(){return ge},end:function(){return l},eventListeners:function(){return re},flip:function(){return ve},hide:function(){return we},left:function(){return a},main:function(){return x},modifierPhases:function(){return k},offset:function(){return Oe},placements:function(){return v},popper:function(){return h},popperGenerator:function(){return De},popperOffsets:function(){return xe},preventOverflow:function(){return Ee},read:function(){return b},reference:function(){return m},right:function(){return s},start:function(){return f},top:function(){return o},variationPlacements:function(){return g},viewport:function(){return d},write:function(){return A}});var o="top",i="bottom",s="right",a="left",c="auto",u=[o,i,s,a],f="start",l="end",p="clippingParents",d="viewport",h="popper",m="reference",g=u.reduce((function(e,t){return e.concat([t+"-"+f,t+"-"+l])}),[]),v=[].concat(u,[c]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+l])}),[]),y="beforeRead",b="read",w="afterRead",O="beforeMain",x="main",E="afterMain",_="beforeWrite",A="write",j="afterWrite",k=[y,b,w,O,x,E,_,A,j];function D(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function P(e){return e instanceof C(e).Element||e instanceof Element}function T(e){return e instanceof C(e).HTMLElement||e instanceof HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof C(e).ShadowRoot||e instanceof ShadowRoot)}var M={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];T(o)&&D(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});T(r)&&D(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function S(e){return e.split("-")[0]}var N=Math.max,H=Math.min,B=Math.round;function W(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(T(e)&&t){var i=e.offsetHeight,s=e.offsetWidth;s>0&&(r=B(n.width)/s||1),i>0&&(o=B(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function R(e){var t=W(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&L(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(e){return C(e).getComputedStyle(e)}function $(e){return["table","td","th"].indexOf(D(e))>=0}function V(e){return((P(e)?e.ownerDocument:e.document)||window.document).documentElement}function Y(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||V(e)}function F(e){return T(e)&&"fixed"!==I(e).position?e.offsetParent:null}function K(e){for(var t=C(e),n=F(e);n&&$(n)&&"static"===I(n).position;)n=F(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===I(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&T(e)&&"fixed"===I(e).position)return null;for(var n=Y(e);T(n)&&["html","body"].indexOf(D(n))<0;){var r=I(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e,t,n){return N(e,H(t,n))}function Q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var G={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,c=e.options,f=n.elements.arrow,l=n.modifiersData.popperOffsets,p=S(n.placement),d=U(p),h=[a,s].indexOf(p)>=0?"height":"width";if(f&&l){var m=function(e,t){return Q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,u))}(c.padding,n),g=R(f),v="y"===d?o:a,y="y"===d?i:s,b=n.rects.reference[h]+n.rects.reference[d]-l[d]-n.rects.popper[h],w=l[d]-n.rects.reference[d],O=K(f),x=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,E=b/2-w/2,_=m[v],A=x-g[h]-m[y],j=x/2-g[h]/2+E,k=z(_,j,A),D=d;n.modifiersData[r]=((t={})[D]=k,t.centerOffset=k-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Z(e){return e.split("-")[1]}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,f=e.offsets,p=e.position,d=e.gpuAcceleration,h=e.adaptive,m=e.roundOffsets,g=e.isFixed,v=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:B(t*r)/r||0,y:B(n*r)/r||0}}(f):"function"==typeof m?m(f):f,y=v.x,b=void 0===y?0:y,w=v.y,O=void 0===w?0:w,x=f.hasOwnProperty("x"),E=f.hasOwnProperty("y"),_=a,A=o,j=window;if(h){var k=K(n),D="clientHeight",P="clientWidth";k===C(n)&&"static"!==I(k=V(n)).position&&"absolute"===p&&(D="scrollHeight",P="scrollWidth"),k=k,(c===o||(c===a||c===s)&&u===l)&&(A=i,O-=(g&&j.visualViewport?j.visualViewport.height:k[D])-r.height,O*=d?1:-1),c!==a&&(c!==o&&c!==i||u!==l)||(_=s,b-=(g&&j.visualViewport?j.visualViewport.width:k[P])-r.width,b*=d?1:-1)}var T,L=Object.assign({position:p},h&&J);return d?Object.assign({},L,((T={})[A]=E?"0":"",T[_]=x?"0":"",T.transform=(j.devicePixelRatio||1)<=1?"translate("+b+"px, "+O+"px)":"translate3d("+b+"px, "+O+"px, 0)",T)):Object.assign({},L,((t={})[A]=E?O+"px":"",t[_]=x?b+"px":"",t.transform="",t))}var te={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,u={placement:S(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ne={passive:!0},re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,s=r.resize,a=void 0===s||s,c=C(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,ne)})),a&&c.addEventListener("resize",n.update,ne),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,ne)})),a&&c.removeEventListener("resize",n.update,ne)}},data:{}},oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var se={start:"end",end:"start"};function ae(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e){var t=C(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ue(e){return W(V(e)).left+ce(e).scrollLeft}function fe(e){var t=I(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function le(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:T(e)&&fe(e)?e:le(Y(e))}function pe(e,t){var n;void 0===t&&(t=[]);var r=le(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=C(r),s=o?[i].concat(i.visualViewport||[],fe(r)?r:[]):r,a=t.concat(s);return o?a:a.concat(pe(Y(s)))}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t){return t===d?de(function(e){var t=C(e),n=V(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,s=0,a=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:o,height:i,x:s+ue(e),y:a}}(e)):P(t)?function(e){var t=W(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):de(function(e){var t,n=V(e),r=ce(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=N(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=N(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+ue(e),c=-r.scrollTop;return"rtl"===I(o||n).direction&&(a+=N(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:c}}(V(e)))}function me(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?S(c):null,p=c?Z(c):null,d=n.x+n.width/2-r.width/2,h=n.y+n.height/2-r.height/2;switch(u){case o:t={x:d,y:n.y-r.height};break;case i:t={x:d,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:h};break;case a:t={x:n.x-r.width,y:h};break;default:t={x:n.x,y:n.y}}var m=u?U(u):null;if(null!=m){var g="y"===m?"height":"width";switch(p){case f:t[m]=t[m]-(n[g]/2-r[g]/2);break;case l:t[m]=t[m]+(n[g]/2-r[g]/2)}}return t}function ge(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.boundary,f=void 0===c?p:c,l=n.rootBoundary,g=void 0===l?d:l,v=n.elementContext,y=void 0===v?h:v,b=n.altBoundary,w=void 0!==b&&b,O=n.padding,x=void 0===O?0:O,E=Q("number"!=typeof x?x:X(x,u)),_=y===h?m:h,A=e.rects.popper,j=e.elements[w?_:y],k=function(e,t,n){var r="clippingParents"===t?function(e){var t=pe(Y(e)),n=["absolute","fixed"].indexOf(I(e).position)>=0,r=n&&T(e)?K(e):e;return P(r)?t.filter((function(e){return P(e)&&q(e,r)&&"body"!==D(e)&&(!n||"static"!==I(e).position)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],s=o.reduce((function(t,n){var r=he(e,n);return t.top=N(r.top,t.top),t.right=H(r.right,t.right),t.bottom=H(r.bottom,t.bottom),t.left=N(r.left,t.left),t}),he(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(P(j)?j:j.contextElement||V(e.elements.popper),f,g),C=W(e.elements.reference),L=me({reference:C,element:A,strategy:"absolute",placement:a}),M=de(Object.assign({},A,L)),S=y===h?M:C,B={top:k.top-S.top+E.top,bottom:S.bottom-k.bottom+E.bottom,left:k.left-S.left+E.left,right:S.right-k.right+E.right},R=e.modifiersData.offset;if(y===h&&R){var $=R[a];Object.keys(B).forEach((function(e){var t=[s,i].indexOf(e)>=0?1:-1,n=[o,i].indexOf(e)>=0?"y":"x";B[e]+=$[n]*t}))}return B}var ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var l=n.mainAxis,p=void 0===l||l,d=n.altAxis,h=void 0===d||d,m=n.fallbackPlacements,y=n.padding,b=n.boundary,w=n.rootBoundary,O=n.altBoundary,x=n.flipVariations,E=void 0===x||x,_=n.allowedAutoPlacements,A=t.options.placement,j=S(A),k=m||(j!==A&&E?function(e){if(S(e)===c)return[];var t=ie(e);return[ae(e),t,ae(t)]}(A):[ie(A)]),D=[A].concat(k).reduce((function(e,n){return e.concat(S(n)===c?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?v:c,l=Z(r),p=l?a?g:g.filter((function(e){return Z(e)===l})):u,d=p.filter((function(e){return f.indexOf(e)>=0}));0===d.length&&(d=p);var h=d.reduce((function(t,n){return t[n]=ge(e,{placement:n,boundary:o,rootBoundary:i,padding:s})[S(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:b,rootBoundary:w,padding:y,flipVariations:E,allowedAutoPlacements:_}):n)}),[]),C=t.rects.reference,P=t.rects.popper,T=new Map,L=!0,M=D[0],N=0;N<D.length;N++){var H=D[N],B=S(H),W=Z(H)===f,R=[o,i].indexOf(B)>=0,q=R?"width":"height",I=ge(t,{placement:H,boundary:b,rootBoundary:w,altBoundary:O,padding:y}),$=R?W?s:a:W?i:o;C[q]>P[q]&&($=ie($));var V=ie($),Y=[];if(p&&Y.push(I[B]<=0),h&&Y.push(I[$]<=0,I[V]<=0),Y.every((function(e){return e}))){M=H,L=!1;break}T.set(H,Y)}if(L)for(var F=function(e){var t=D.find((function(t){var n=T.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},K=E?3:1;K>0&&"break"!==F(K);K--);t.placement!==M&&(t.modifiersData[r]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[o,s,i,a].some((function(t){return e[t]>=0}))}var we={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=ge(t,{elementContext:"reference"}),a=ge(t,{altBoundary:!0}),c=ye(s,r),u=ye(a,o,i),f=be(c),l=be(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},Oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,c=void 0===i?[0,0]:i,u=v.reduce((function(e,n){return e[n]=function(e,t,n){var r=S(e),i=[a,o].indexOf(r)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],f=c[1];return u=u||0,f=(f||0)*i,[a,s].indexOf(r)>=0?{x:f,y:u}:{x:u,y:f}}(n,t.rects,c),e}),{}),f=u[t.placement],l=f.x,p=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=u}},xe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,l=n.altAxis,p=void 0!==l&&l,d=n.boundary,h=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,O=ge(t,{boundary:d,rootBoundary:h,padding:g,altBoundary:m}),x=S(t.placement),E=Z(t.placement),_=!E,A=U(x),j="x"===A?"y":"x",k=t.modifiersData.popperOffsets,D=t.rects.reference,C=t.rects.popper,P="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,T="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(k){if(u){var B,W="y"===A?o:a,q="y"===A?i:s,I="y"===A?"height":"width",$=k[A],V=$+O[W],Y=$-O[q],F=y?-C[I]/2:0,Q=E===f?D[I]:C[I],X=E===f?-C[I]:-D[I],G=t.elements.arrow,J=y&&G?R(G):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[W],ne=ee[q],re=z(0,D[I],J[I]),oe=_?D[I]/2-F-re-te-T.mainAxis:Q-re-te-T.mainAxis,ie=_?-D[I]/2+F+re+ne+T.mainAxis:X+re+ne+T.mainAxis,se=t.elements.arrow&&K(t.elements.arrow),ae=se?"y"===A?se.clientTop||0:se.clientLeft||0:0,ce=null!=(B=null==L?void 0:L[A])?B:0,ue=$+ie-ce,fe=z(y?H(V,$+oe-ce-ae):V,$,y?N(Y,ue):Y);k[A]=fe,M[A]=fe-$}if(p){var le,pe="x"===A?o:a,de="x"===A?i:s,he=k[j],me="y"===j?"height":"width",ve=he+O[pe],ye=he-O[de],be=-1!==[o,a].indexOf(x),we=null!=(le=null==L?void 0:L[j])?le:0,Oe=be?ve:he-D[me]-C[me]-we+T.altAxis,xe=be?he+D[me]+C[me]-we-T.altAxis:ye,Ee=y&&be?function(e,t,n){var r=z(e,t,n);return r>n?n:r}(Oe,he,xe):z(y?Oe:ve,he,y?xe:ye);k[j]=Ee,M[j]=Ee-he}t.modifiersData[r]=M}},requiresIfExists:["offset"]};function _e(e,t,n){void 0===n&&(n=!1);var r,o,i=T(t),s=T(t)&&function(e){var t=e.getBoundingClientRect(),n=B(t.width)/e.offsetWidth||1,r=B(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=V(t),c=W(e,s),u={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==D(t)||fe(a))&&(u=(r=t)!==C(r)&&T(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ce(r)),T(t)?((f=W(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):a&&(f.x=ue(a))),{x:c.left+u.scrollLeft-f.x,y:c.top+u.scrollTop-f.y,width:c.width,height:c.height}}function Ae(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var je={placement:"bottom",modifiers:[],strategy:"absolute"};function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?je:o;return function(e,t,n){void 0===n&&(n=i);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,f={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n;l(),a.options=Object.assign({},i,a.options,o),a.scrollParents={reference:P(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)};var s,u,p=function(e){var t=Ae(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,a.options.modifiers),u=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return a.orderedModifiers=p.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:a,name:t,instance:f,options:r});c.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!u){var e=a.elements,t=e.reference,n=e.popper;if(ke(t,n)){a.rects={reference:_e(t,K(n),"fixed"===a.options.strategy),popper:R(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var o=a.orderedModifiers[r],i=o.fn,s=o.options,c=void 0===s?{}:s,l=o.name;"function"==typeof i&&(a=i({state:a,options:c,name:l,instance:f})||a)}else a.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){l(),u=!0}};if(!ke(e,t))return f;function l(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Ce=De(),Pe=De({defaultModifiers:[re,xe,te,M,Oe,ve,Ee,G,we]}),Te=De({defaultModifiers:[re,xe,te,M]});const Le="transitionend",Me=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),Se=e=>Me(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,Ne=e=>!(!Me(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),He=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),Be=()=>{},We=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},Re=[],qe=()=>"rtl"===document.documentElement.dir,Ie=e=>{"function"==typeof e&&e()},$e=/[^.]*(?=\..*)\.|.*/,Ve=/\..*/,Ye=/::\d+$/,Fe={};let Ke=1;const Ue={mouseenter:"mouseover",mouseleave:"mouseout"},ze=/^(mouseenter|mouseleave)/i,Qe=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Xe(e,t){return t&&`${t}::${Ke++}`||e.uidEvent||Ke++}function Ge(e){const t=Xe(e);return e.uidEvent=t,Fe[t]=Fe[t]||{},Fe[t]}function Ze(e,t,n=null){const r=Object.keys(e);for(let o=0,i=r.length;o<i;o++){const i=e[r[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function Je(e,t,n){const r="string"==typeof t,o=r?n:t;let i=nt(e);return Qe.has(i)||(i=e),[r,o,i]}function et(e,t,n,r,o){if("string"!=typeof t||!e)return;if(n||(n=r,r=null),ze.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[i,s,a]=Je(t,n,r),c=Ge(e),u=c[a]||(c[a]={}),f=Ze(u,s,i?n:null);if(f)return void(f.oneOff=f.oneOff&&o);const l=Xe(s,t.replace($e,"")),p=i?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(let a=i.length;a--;)if(i[a]===s)return o.delegateTarget=s,r.oneOff&&rt.off(e,o.type,t,n),n.apply(s,[o]);return null}}(e,n,r):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&rt.off(e,r.type,t),t.apply(e,[r])}}(e,n);p.delegationSelector=i?n:null,p.originalHandler=s,p.oneOff=o,p.uidEvent=l,u[l]=p,e.addEventListener(a,p,i)}function tt(e,t,n,r,o){const i=Ze(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function nt(e){return e=e.replace(Ve,""),Ue[e]||e}const rt={on(e,t,n,r){et(e,t,n,r,!1)},one(e,t,n,r){et(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[o,i,s]=Je(t,n,r),a=s!==t,c=Ge(e),u=t.startsWith(".");if(void 0!==i){if(!c||!c[s])return;return void tt(e,c,s,i,o?n:null)}u&&Object.keys(c).forEach((n=>{!function(e,t,n,r){const o=t[n]||{};Object.keys(o).forEach((i=>{if(i.includes(r)){const r=o[i];tt(e,t,n,r.originalHandler,r.delegationSelector)}}))}(e,c,n,t.slice(1))}));const f=c[s]||{};Object.keys(f).forEach((n=>{const r=n.replace(Ye,"");if(!a||t.includes(r)){const t=f[n];tt(e,c,s,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=We(),o=nt(t),i=t!==o,s=Qe.has(o);let a,c=!0,u=!0,f=!1,l=null;return i&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),f=a.isDefaultPrevented()),s?(l=document.createEvent("HTMLEvents"),l.initEvent(o,c,!0)):l=new CustomEvent(t,{bubbles:c,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((e=>{Object.defineProperty(l,e,{get:()=>n[e]})})),f&&l.preventDefault(),u&&e.dispatchEvent(l),l.defaultPrevented&&void 0!==a&&a.preventDefault(),l}};var ot=rt;function it(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function st(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}var at={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${st(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${st(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=it(e.dataset[n])})),t},getDataAttribute:(e,t)=>it(e.getAttribute(`data-bs-${st(t)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})},ct={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!He(e)&&Ne(e)))}};const ut=new Map;var ft={set(e,t,n){ut.has(e)||ut.set(e,new Map);const r=ut.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(e,t)=>ut.has(e)&&ut.get(e).get(t)||null,remove(e,t){if(!ut.has(e))return;const n=ut.get(e);n.delete(t),0===n.size&&ut.delete(e)}};const lt="dropdown",pt="Escape",dt="Space",ht="ArrowUp",mt="ArrowDown",gt=new RegExp("ArrowUp|ArrowDown|Escape"),vt="click.bs.dropdown.data-api",yt="keydown.bs.dropdown.data-api",bt="show",wt='[data-bs-toggle="dropdown"]',Ot=".dropdown-menu",xt=qe()?"top-end":"top-start",Et=qe()?"top-start":"top-end",_t=qe()?"bottom-end":"bottom-start",At=qe()?"bottom-start":"bottom-end",jt=qe()?"left-start":"right-start",kt=qe()?"right-start":"left-start",Dt={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ct={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Pt extends class{constructor(e){(e=Se(e))&&(this._element=e,ft.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ft.remove(this._element,this.constructor.DATA_KEY),ot.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){((e,t,n=!0)=>{if(!n)return void Ie(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const i=({target:n})=>{n===t&&(o=!0,t.removeEventListener(Le,i),Ie(e))};t.addEventListener(Le,i),setTimeout((()=>{o||t.dispatchEvent(new Event(Le))}),r)})(e,t,n)}static getInstance(e){return ft.get(Se(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Dt}static get DefaultType(){return Ct}static get NAME(){return lt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(He(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(ot.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;const t=Pt.getParentFromElement(this._element);this._inNavbar?at.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((e=>ot.on(e,"mouseover",Be))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(bt),this._element.classList.add(bt),ot.trigger(this._element,"shown.bs.dropdown",e)}hide(){if(He(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){ot.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>ot.off(e,"mouseover",Be))),this._popper&&this._popper.destroy(),this._menu.classList.remove(bt),this._element.classList.remove(bt),this._element.setAttribute("aria-expanded","false"),at.removeDataAttribute(this._menu,"popper"),ot.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e={...this.constructor.Default,...at.getDataAttributes(this._element),...e},((e,t,n)=>{Object.keys(n).forEach((r=>{const o=n[r],i=t[r],s=i&&Me(i)?"element":null==(a=i)?`${a}`:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(o).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}))})(lt,e,this.constructor.DefaultType),"object"==typeof e.reference&&!Me(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${lt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(void 0===r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:Me(this._config.reference)?t=Se(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),o=n.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=Pe(t,this._menu,n),o&&at.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(bt)}_getMenuElement(){return ct.next(this._element,Ot)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return jt;if(e.classList.contains("dropstart"))return kt;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?Et:xt:t?At:_t}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ct.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(Ne);n.length&&((e,t,n,r)=>{let o=e.indexOf(t);if(-1===o)return e[!n&&r?e.length-1:0];const i=e.length;return o+=n?1:-1,r&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))]})(n,t,e===mt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Pt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=ct.find(wt);for(let n=0,r=t.length;n<r;n++){const r=Pt.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const o={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(o.clickEvent=e)}r._completeHide(o)}}static getParentFromElement(e){return(e=>{const t=(e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t})(e);return t?document.querySelector(t):null})(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===dt||e.key!==pt&&(e.key!==mt&&e.key!==ht||e.target.closest(Ot)):!gt.test(e.key))return;const t=this.classList.contains(bt);if(!t&&e.key===pt)return;if(e.preventDefault(),e.stopPropagation(),He(this))return;const n=this.matches(wt)?this:ct.prev(this,wt)[0],r=Pt.getOrCreateInstance(n);if(e.key!==pt)return e.key===ht||e.key===mt?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==dt||Pt.clearMenus());r.hide()}}var Tt,Lt;ot.on(document,yt,wt,Pt.dataApiKeydownHandler),ot.on(document,yt,Ot,Pt.dataApiKeydownHandler),ot.on(document,vt,Pt.clearMenus),ot.on(document,"keyup.bs.dropdown.data-api",Pt.clearMenus),ot.on(document,vt,wt,(function(e){e.preventDefault(),Pt.getOrCreateInstance(this).toggle()})),Tt=Pt,Lt=()=>{const e=We();if(e){const t=Tt.NAME,n=e.fn[t];e.fn[t]=Tt.jQueryInterface,e.fn[t].Constructor=Tt,e.fn[t].noConflict=()=>(e.fn[t]=n,Tt.jQueryInterface)}},"loading"===document.readyState?(Re.length||document.addEventListener("DOMContentLoaded",(()=>{Re.forEach((e=>e()))})),Re.push(Lt)):Lt();var Mt=Pt}}]);