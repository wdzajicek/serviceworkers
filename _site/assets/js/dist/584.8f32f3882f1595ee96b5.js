(self.webpackChunkserviceworkers=self.webpackChunkserviceworkers||[]).push([[584],{4362:function(e,t,r){var n=r(1589),s=Math.floor,a=function(e,t){var r=e.length,u=s(r/2);return r<8?i(e,t):o(e,a(n(e,0,u),t),a(n(e,u),t),t)},i=function(e,t){for(var r,n,s=e.length,a=1;a<s;){for(n=a,r=e[a];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},o=function(e,t,r,n){for(var s=t.length,a=r.length,i=0,o=0;i<s||o<a;)e[i+o]=i<s&&o<a?n(t[i],r[o])<=0?t[i++]:r[o++]:i<s?t[i++]:r[o++];return e};e.exports=a},7007:function(e,t,r){"use strict";r(4916);var n=r(1702),s=r(1320),a=r(2261),i=r(7293),o=r(5112),u=r(8880),h=o("species"),f=RegExp.prototype;e.exports=function(e,t,r,c){var l=o(e),p=!i((function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})),g=p&&!i((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[h]=function(){return r},r.flags="",r[l]=/./[l]),r.exec=function(){return t=!0,null},r[l](""),!t}));if(!p||!g||r){var v=n(/./[l]),m=t(l,""[e],(function(e,t,r,s,i){var o=n(e),u=t.exec;return u===a||u===f.exec?p&&!i?{done:!0,value:v(t,r,s)}:{done:!0,value:o(r,t,s)}:{done:!1}}));s(String.prototype,e,m[0]),s(f,l,m[1])}c&&u(f[l],"sham",!0)}},590:function(e,t,r){var n=r(7293),s=r(5112),a=r(1913),i=s("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),a&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},1574:function(e,t,r){"use strict";var n=r(9781),s=r(1702),a=r(6916),i=r(7293),o=r(1956),u=r(5181),h=r(5296),f=r(7908),c=r(8361),l=Object.assign,p=Object.defineProperty,g=s([].concat);e.exports=!l||i((function(){if(n&&1!==l({b:1},l(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach((function(e){t[e]=e})),7!=l({},e)[r]||o(l({},t)).join("")!=s}))?function(e,t){for(var r=f(e),s=arguments.length,i=1,l=u.f,p=h.f;s>i;)for(var v,m=c(arguments[i++]),d=l?g(o(m),l(m)):o(m),y=d.length,w=0;y>w;)v=d[w++],n&&!a(p,m,v)||(r[v]=m[v]);return r}:l},7651:function(e,t,r){var n=r(7854),s=r(6916),a=r(9670),i=r(614),o=r(4326),u=r(2261),h=n.TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var n=s(r,e,t);return null!==n&&a(n),n}if("RegExp"===o(e))return s(u,e,t);throw h("RegExp#exec called on incompatible receiver")}},1150:function(e){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},3197:function(e,t,r){"use strict";var n=r(7854),s=r(1702),a=2147483647,i=/[^\0-\u007E]/,o=/[.\u3002\uFF0E\uFF61]/g,u="Overflow: input needs wider integers to process",h=n.RangeError,f=s(o.exec),c=Math.floor,l=String.fromCharCode,p=s("".charCodeAt),g=s([].join),v=s([].push),m=s("".replace),d=s("".split),y=s("".toLowerCase),w=function(e){return e+22+75*(e<26)},b=function(e,t,r){var n=0;for(e=r?c(e/700):e>>1,e+=c(e/t);e>455;)e=c(e/35),n+=36;return c(n+36*e/(e+38))},R=function(e){var t=[];e=function(e){for(var t=[],r=0,n=e.length;r<n;){var s=p(e,r++);if(s>=55296&&s<=56319&&r<n){var a=p(e,r++);56320==(64512&a)?v(t,((1023&s)<<10)+(1023&a)+65536):(v(t,s),r--)}else v(t,s)}return t}(e);var r,n,s=e.length,i=128,o=0,f=72;for(r=0;r<e.length;r++)(n=e[r])<128&&v(t,l(n));var m=t.length,d=m;for(m&&v(t,"-");d<s;){var y=a;for(r=0;r<e.length;r++)(n=e[r])>=i&&n<y&&(y=n);var R=d+1;if(y-i>c((a-o)/R))throw h(u);for(o+=(y-i)*R,i=y,r=0;r<e.length;r++){if((n=e[r])<i&&++o>a)throw h(u);if(n==i){for(var P=o,U=36;;){var k=U<=f?1:U>=f+26?26:U-f;if(P<k)break;var S=P-k,L=36-k;v(t,l(w(k+S%L))),P=c(S/L),U+=36}v(t,l(w(P))),f=b(o,R,d==m),o=0,d++}}o++,i++}return g(t,"")};e.exports=function(e){var t,r,n=[],s=d(m(y(e),o,"."),".");for(t=0;t<s.length;t++)r=s[t],v(n,f(i,r)?"xn--"+R(r):r);return g(n,".")}},6091:function(e,t,r){var n=r(6530).PROPER,s=r(7293),a=r(1361);e.exports=function(e){return s((function(){return!!a[e]()||"​᠎"!=="​᠎"[e]()||n&&a[e].name!==e}))}},3111:function(e,t,r){var n=r(1702),s=r(4488),a=r(1340),i=r(1361),o=n("".replace),u="["+i+"]",h=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),c=function(e){return function(t){var r=a(s(t));return 1&e&&(r=o(r,h,"")),2&e&&(r=o(r,f,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},4765:function(e,t,r){"use strict";var n=r(6916),s=r(7007),a=r(9670),i=r(4488),o=r(1150),u=r(1340),h=r(8173),f=r(7651);s("search",(function(e,t,r){return[function(t){var r=i(this),s=null==t?void 0:h(t,e);return s?n(s,t,r):new RegExp(t)[e](u(r))},function(e){var n=a(this),s=u(e),i=r(t,n,s);if(i.done)return i.value;var h=n.lastIndex;o(h,0)||(n.lastIndex=0);var c=f(n,s);return o(n.lastIndex,h)||(n.lastIndex=h),null===c?-1:c.index}]}))},3210:function(e,t,r){"use strict";var n=r(2109),s=r(3111).trim;n({target:"String",proto:!0,forced:r(6091)("trim")},{trim:function(){return s(this)}})},1637:function(e,t,r){"use strict";r(6992);var n=r(2109),s=r(7854),a=r(5005),i=r(6916),o=r(1702),u=r(590),h=r(1320),f=r(2248),c=r(8003),l=r(4994),p=r(9909),g=r(5787),v=r(614),m=r(2597),d=r(9974),y=r(648),w=r(9670),b=r(111),R=r(1340),P=r(30),U=r(9114),k=r(8554),S=r(1246),L=r(5112),x=r(4362),q=L("iterator"),H="URLSearchParams",B="URLSearchParamsIterator",E=p.set,A=p.getterFor(H),O=p.getterFor(B),j=a("fetch"),C=a("Request"),I=a("Headers"),z=C&&C.prototype,F=I&&I.prototype,$=s.RegExp,M=s.TypeError,T=s.decodeURIComponent,N=s.encodeURIComponent,Q=o("".charAt),J=o([].join),D=o([].push),G=o("".replace),K=o([].shift),V=o([].splice),W=o("".split),X=o("".slice),Y=/\+/g,Z=Array(4),_=function(e){return Z[e-1]||(Z[e-1]=$("((?:%[\\da-f]{2}){"+e+"})","gi"))},ee=function(e){try{return T(e)}catch(t){return e}},te=function(e){var t=G(e,Y," "),r=4;try{return T(t)}catch(e){for(;r;)t=G(t,_(r--),ee);return t}},re=/[!'()~]|%20/g,ne={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},se=function(e){return ne[e]},ae=function(e){return G(N(e),re,se)},ie=function(e,t){if(e<t)throw M("Not enough arguments")},oe=l((function(e,t){E(this,{type:B,iterator:k(A(e).entries),kind:t})}),"Iterator",(function(){var e=O(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),!0),ue=function(e){this.entries=[],this.url=null,void 0!==e&&(b(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===Q(e,0)?X(e,1):e:R(e)))};ue.prototype={type:H,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,s,a,o,u,h=S(e);if(h)for(r=(t=k(e,h)).next;!(n=i(r,t)).done;){if(a=(s=k(w(n.value))).next,(o=i(a,s)).done||(u=i(a,s)).done||!i(a,s).done)throw M("Expected sequence with length 2");D(this.entries,{key:R(o.value),value:R(u.value)})}else for(var f in e)m(e,f)&&D(this.entries,{key:f,value:R(e[f])})},parseQuery:function(e){if(e)for(var t,r,n=W(e,"&"),s=0;s<n.length;)(t=n[s++]).length&&(r=W(t,"="),D(this.entries,{key:te(K(r)),value:te(J(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],D(r,ae(e.key)+"="+ae(e.value));return J(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var he=function(){g(this,fe);var e=arguments.length>0?arguments[0]:void 0;E(this,new ue(e))},fe=he.prototype;if(f(fe,{append:function(e,t){ie(arguments.length,2);var r=A(this);D(r.entries,{key:R(e),value:R(t)}),r.updateURL()},delete:function(e){ie(arguments.length,1);for(var t=A(this),r=t.entries,n=R(e),s=0;s<r.length;)r[s].key===n?V(r,s,1):s++;t.updateURL()},get:function(e){ie(arguments.length,1);for(var t=A(this).entries,r=R(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){ie(arguments.length,1);for(var t=A(this).entries,r=R(e),n=[],s=0;s<t.length;s++)t[s].key===r&&D(n,t[s].value);return n},has:function(e){ie(arguments.length,1);for(var t=A(this).entries,r=R(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){ie(arguments.length,1);for(var r,n=A(this),s=n.entries,a=!1,i=R(e),o=R(t),u=0;u<s.length;u++)(r=s[u]).key===i&&(a?V(s,u--,1):(a=!0,r.value=o));a||D(s,{key:i,value:o}),n.updateURL()},sort:function(){var e=A(this);x(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){for(var t,r=A(this).entries,n=d(e,arguments.length>1?arguments[1]:void 0),s=0;s<r.length;)n((t=r[s++]).value,t.key,this)},keys:function(){return new oe(this,"keys")},values:function(){return new oe(this,"values")},entries:function(){return new oe(this,"entries")}},{enumerable:!0}),h(fe,q,fe.entries,{name:"entries"}),h(fe,"toString",(function(){return A(this).serialize()}),{enumerable:!0}),c(he,H),n({global:!0,forced:!u},{URLSearchParams:he}),!u&&v(I)){var ce=o(F.has),le=o(F.set),pe=function(e){if(b(e)){var t,r=e.body;if(y(r)===H)return t=e.headers?new I(e.headers):new I,ce(t,"content-type")||le(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),P(e,{body:U(0,R(r)),headers:U(0,t)})}return e};if(v(j)&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return j(e,arguments.length>1?pe(arguments[1]):{})}}),v(C)){var ge=function(e){return g(this,z),new C(e,arguments.length>1?pe(arguments[1]):{})};z.constructor=ge,ge.prototype=z,n({global:!0,forced:!0},{Request:ge})}}e.exports={URLSearchParams:he,getState:A}},285:function(e,t,r){"use strict";r(8783);var n,s=r(2109),a=r(9781),i=r(590),o=r(7854),u=r(9974),h=r(1702),f=r(6048),c=r(1320),l=r(5787),p=r(2597),g=r(1574),v=r(8457),m=r(1589),d=r(8710).codeAt,y=r(3197),w=r(1340),b=r(8003),R=r(1637),P=r(9909),U=P.set,k=P.getterFor("URL"),S=R.URLSearchParams,L=R.getState,x=o.URL,q=o.TypeError,H=o.parseInt,B=Math.floor,E=Math.pow,A=h("".charAt),O=h(/./.exec),j=h([].join),C=h(1..toString),I=h([].pop),z=h([].push),F=h("".replace),$=h([].shift),M=h("".split),T=h("".slice),N=h("".toLowerCase),Q=h([].unshift),J="Invalid scheme",D="Invalid host",G="Invalid port",K=/[a-z]/i,V=/[\d+-.a-z]/i,W=/\d/,X=/^0x/i,Y=/^[0-7]+$/,Z=/^\d+$/,_=/^[\da-f]+$/i,ee=/[\0\t\n\r #%/:<>?@[\\\]^|]/,te=/[\0\t\n\r #/:<>?@[\\\]^|]/,re=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,ne=/[\t\n\r]/g,se=function(e){var t,r,n,s;if("number"==typeof e){for(t=[],r=0;r<4;r++)Q(t,e%256),e=B(e/256);return j(t,".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,s=0,a=0;a<8;a++)0!==e[a]?(s>r&&(t=n,r=s),n=null,s=0):(null===n&&(n=a),++s);return s>r&&(t=n,r=s),t}(e),r=0;r<8;r++)s&&0===e[r]||(s&&(s=!1),n===r?(t+=r?":":"::",s=!0):(t+=C(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},ae={},ie=g({},ae,{" ":1,'"':1,"<":1,">":1,"`":1}),oe=g({},ie,{"#":1,"?":1,"{":1,"}":1}),ue=g({},oe,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),he=function(e,t){var r=d(e,0);return r>32&&r<127&&!p(t,e)?e:encodeURIComponent(e)},fe={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ce=function(e,t){var r;return 2==e.length&&O(K,A(e,0))&&(":"==(r=A(e,1))||!t&&"|"==r)},le=function(e){var t;return e.length>1&&ce(T(e,0,2))&&(2==e.length||"/"===(t=A(e,2))||"\\"===t||"?"===t||"#"===t)},pe=function(e){return"."===e||"%2e"===N(e)},ge={},ve={},me={},de={},ye={},we={},be={},Re={},Pe={},Ue={},ke={},Se={},Le={},xe={},qe={},He={},Be={},Ee={},Ae={},Oe={},je={},Ce=function(e,t,r){var n,s,a,i=w(e);if(t){if(s=this.parse(i))throw q(s);this.searchParams=null}else{if(void 0!==r&&(n=new Ce(r,!0)),s=this.parse(i,null,n))throw q(s);(a=L(new S)).bindURL(this),this.searchParams=a}};Ce.prototype={type:"URL",parse:function(e,t,r){var s,a,i,o,u,h=this,f=t||ge,c=0,l="",g=!1,d=!1,y=!1;for(e=w(e),t||(h.scheme="",h.username="",h.password="",h.host=null,h.port=null,h.path=[],h.query=null,h.fragment=null,h.cannotBeABaseURL=!1,e=F(e,re,"")),e=F(e,ne,""),s=v(e);c<=s.length;){switch(a=s[c],f){case ge:if(!a||!O(K,a)){if(t)return J;f=me;continue}l+=N(a),f=ve;break;case ve:if(a&&(O(V,a)||"+"==a||"-"==a||"."==a))l+=N(a);else{if(":"!=a){if(t)return J;l="",f=me,c=0;continue}if(t&&(h.isSpecial()!=p(fe,l)||"file"==l&&(h.includesCredentials()||null!==h.port)||"file"==h.scheme&&!h.host))return;if(h.scheme=l,t)return void(h.isSpecial()&&fe[h.scheme]==h.port&&(h.port=null));l="","file"==h.scheme?f=xe:h.isSpecial()&&r&&r.scheme==h.scheme?f=de:h.isSpecial()?f=Re:"/"==s[c+1]?(f=ye,c++):(h.cannotBeABaseURL=!0,z(h.path,""),f=Ae)}break;case me:if(!r||r.cannotBeABaseURL&&"#"!=a)return J;if(r.cannotBeABaseURL&&"#"==a){h.scheme=r.scheme,h.path=m(r.path),h.query=r.query,h.fragment="",h.cannotBeABaseURL=!0,f=je;break}f="file"==r.scheme?xe:we;continue;case de:if("/"!=a||"/"!=s[c+1]){f=we;continue}f=Pe,c++;break;case ye:if("/"==a){f=Ue;break}f=Ee;continue;case we:if(h.scheme=r.scheme,a==n)h.username=r.username,h.password=r.password,h.host=r.host,h.port=r.port,h.path=m(r.path),h.query=r.query;else if("/"==a||"\\"==a&&h.isSpecial())f=be;else if("?"==a)h.username=r.username,h.password=r.password,h.host=r.host,h.port=r.port,h.path=m(r.path),h.query="",f=Oe;else{if("#"!=a){h.username=r.username,h.password=r.password,h.host=r.host,h.port=r.port,h.path=m(r.path),h.path.length--,f=Ee;continue}h.username=r.username,h.password=r.password,h.host=r.host,h.port=r.port,h.path=m(r.path),h.query=r.query,h.fragment="",f=je}break;case be:if(!h.isSpecial()||"/"!=a&&"\\"!=a){if("/"!=a){h.username=r.username,h.password=r.password,h.host=r.host,h.port=r.port,f=Ee;continue}f=Ue}else f=Pe;break;case Re:if(f=Pe,"/"!=a||"/"!=A(l,c+1))continue;c++;break;case Pe:if("/"!=a&&"\\"!=a){f=Ue;continue}break;case Ue:if("@"==a){g&&(l="%40"+l),g=!0,i=v(l);for(var b=0;b<i.length;b++){var R=i[b];if(":"!=R||y){var P=he(R,ue);y?h.password+=P:h.username+=P}else y=!0}l=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&h.isSpecial()){if(g&&""==l)return"Invalid authority";c-=v(l).length+1,l="",f=ke}else l+=a;break;case ke:case Se:if(t&&"file"==h.scheme){f=He;continue}if(":"!=a||d){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&h.isSpecial()){if(h.isSpecial()&&""==l)return D;if(t&&""==l&&(h.includesCredentials()||null!==h.port))return;if(o=h.parseHost(l))return o;if(l="",f=Be,t)return;continue}"["==a?d=!0:"]"==a&&(d=!1),l+=a}else{if(""==l)return D;if(o=h.parseHost(l))return o;if(l="",f=Le,t==Se)return}break;case Le:if(!O(W,a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&h.isSpecial()||t){if(""!=l){var U=H(l,10);if(U>65535)return G;h.port=h.isSpecial()&&U===fe[h.scheme]?null:U,l=""}if(t)return;f=Be;continue}return G}l+=a;break;case xe:if(h.scheme="file","/"==a||"\\"==a)f=qe;else{if(!r||"file"!=r.scheme){f=Ee;continue}if(a==n)h.host=r.host,h.path=m(r.path),h.query=r.query;else if("?"==a)h.host=r.host,h.path=m(r.path),h.query="",f=Oe;else{if("#"!=a){le(j(m(s,c),""))||(h.host=r.host,h.path=m(r.path),h.shortenPath()),f=Ee;continue}h.host=r.host,h.path=m(r.path),h.query=r.query,h.fragment="",f=je}}break;case qe:if("/"==a||"\\"==a){f=He;break}r&&"file"==r.scheme&&!le(j(m(s,c),""))&&(ce(r.path[0],!0)?z(h.path,r.path[0]):h.host=r.host),f=Ee;continue;case He:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!t&&ce(l))f=Ee;else if(""==l){if(h.host="",t)return;f=Be}else{if(o=h.parseHost(l))return o;if("localhost"==h.host&&(h.host=""),t)return;l="",f=Be}continue}l+=a;break;case Be:if(h.isSpecial()){if(f=Ee,"/"!=a&&"\\"!=a)continue}else if(t||"?"!=a)if(t||"#"!=a){if(a!=n&&(f=Ee,"/"!=a))continue}else h.fragment="",f=je;else h.query="",f=Oe;break;case Ee:if(a==n||"/"==a||"\\"==a&&h.isSpecial()||!t&&("?"==a||"#"==a)){if(".."===(u=N(u=l))||"%2e."===u||".%2e"===u||"%2e%2e"===u?(h.shortenPath(),"/"==a||"\\"==a&&h.isSpecial()||z(h.path,"")):pe(l)?"/"==a||"\\"==a&&h.isSpecial()||z(h.path,""):("file"==h.scheme&&!h.path.length&&ce(l)&&(h.host&&(h.host=""),l=A(l,0)+":"),z(h.path,l)),l="","file"==h.scheme&&(a==n||"?"==a||"#"==a))for(;h.path.length>1&&""===h.path[0];)$(h.path);"?"==a?(h.query="",f=Oe):"#"==a&&(h.fragment="",f=je)}else l+=he(a,oe);break;case Ae:"?"==a?(h.query="",f=Oe):"#"==a?(h.fragment="",f=je):a!=n&&(h.path[0]+=he(a,ae));break;case Oe:t||"#"!=a?a!=n&&("'"==a&&h.isSpecial()?h.query+="%27":h.query+="#"==a?"%23":he(a,ae)):(h.fragment="",f=je);break;case je:a!=n&&(h.fragment+=he(a,ie))}c++}},parseHost:function(e){var t,r,n;if("["==A(e,0)){if("]"!=A(e,e.length-1))return D;if(t=function(e){var t,r,n,s,a,i,o,u=[0,0,0,0,0,0,0,0],h=0,f=null,c=0,l=function(){return A(e,c)};if(":"==l()){if(":"!=A(e,1))return;c+=2,f=++h}for(;l();){if(8==h)return;if(":"!=l()){for(t=r=0;r<4&&O(_,l());)t=16*t+H(l(),16),c++,r++;if("."==l()){if(0==r)return;if(c-=r,h>6)return;for(n=0;l();){if(s=null,n>0){if(!("."==l()&&n<4))return;c++}if(!O(W,l()))return;for(;O(W,l());){if(a=H(l(),10),null===s)s=a;else{if(0==s)return;s=10*s+a}if(s>255)return;c++}u[h]=256*u[h]+s,2!=++n&&4!=n||h++}if(4!=n)return;break}if(":"==l()){if(c++,!l())return}else if(l())return;u[h++]=t}else{if(null!==f)return;c++,f=++h}}if(null!==f)for(i=h-f,h=7;0!=h&&i>0;)o=u[h],u[h--]=u[f+i-1],u[f+--i]=o;else if(8!=h)return;return u}(T(e,1,-1)),!t)return D;this.host=t}else if(this.isSpecial()){if(e=y(e),O(ee,e))return D;if(t=function(e){var t,r,n,s,a,i,o,u=M(e,".");if(u.length&&""==u[u.length-1]&&u.length--,(t=u.length)>4)return e;for(r=[],n=0;n<t;n++){if(""==(s=u[n]))return e;if(a=10,s.length>1&&"0"==A(s,0)&&(a=O(X,s)?16:8,s=T(s,8==a?1:2)),""===s)i=0;else{if(!O(10==a?Z:8==a?Y:_,s))return e;i=H(s,a)}z(r,i)}for(n=0;n<t;n++)if(i=r[n],n==t-1){if(i>=E(256,5-t))return null}else if(i>255)return null;for(o=I(r),n=0;n<r.length;n++)o+=r[n]*E(256,3-n);return o}(e),null===t)return D;this.host=t}else{if(O(te,e))return D;for(t="",r=v(e),n=0;n<r.length;n++)t+=he(r[n],ae);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return p(fe,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&ce(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,n=e.password,s=e.host,a=e.port,i=e.path,o=e.query,u=e.fragment,h=t+":";return null!==s?(h+="//",e.includesCredentials()&&(h+=r+(n?":"+n:"")+"@"),h+=se(s),null!==a&&(h+=":"+a)):"file"==t&&(h+="//"),h+=e.cannotBeABaseURL?i[0]:i.length?"/"+j(i,"/"):"",null!==o&&(h+="?"+o),null!==u&&(h+="#"+u),h},setHref:function(e){var t=this.parse(e);if(t)throw q(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new Ie(e.path[0]).origin}catch(e){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+se(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(w(e)+":",ge)},getUsername:function(){return this.username},setUsername:function(e){var t=v(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=he(t[r],ue)}},getPassword:function(){return this.password},setPassword:function(e){var t=v(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=he(t[r],ue)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?se(e):se(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,ke)},getHostname:function(){var e=this.host;return null===e?"":se(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,Se)},getPort:function(){var e=this.port;return null===e?"":w(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(""==(e=w(e))?this.port=null:this.parse(e,Le))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+j(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Be))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){""==(e=w(e))?this.query=null:("?"==A(e,0)&&(e=T(e,1)),this.query="",this.parse(e,Oe)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){""!=(e=w(e))?("#"==A(e,0)&&(e=T(e,1)),this.fragment="",this.parse(e,je)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Ie=function(e){var t=l(this,ze),r=arguments.length>1?arguments[1]:void 0,n=U(t,new Ce(e,!1,r));a||(t.href=n.serialize(),t.origin=n.getOrigin(),t.protocol=n.getProtocol(),t.username=n.getUsername(),t.password=n.getPassword(),t.host=n.getHost(),t.hostname=n.getHostname(),t.port=n.getPort(),t.pathname=n.getPathname(),t.search=n.getSearch(),t.searchParams=n.getSearchParams(),t.hash=n.getHash())},ze=Ie.prototype,Fe=function(e,t){return{get:function(){return k(this)[e]()},set:t&&function(e){return k(this)[t](e)},configurable:!0,enumerable:!0}};if(a&&f(ze,{href:Fe("serialize","setHref"),origin:Fe("getOrigin"),protocol:Fe("getProtocol","setProtocol"),username:Fe("getUsername","setUsername"),password:Fe("getPassword","setPassword"),host:Fe("getHost","setHost"),hostname:Fe("getHostname","setHostname"),port:Fe("getPort","setPort"),pathname:Fe("getPathname","setPathname"),search:Fe("getSearch","setSearch"),searchParams:Fe("getSearchParams"),hash:Fe("getHash","setHash")}),c(ze,"toJSON",(function(){return k(this).serialize()}),{enumerable:!0}),c(ze,"toString",(function(){return k(this).serialize()}),{enumerable:!0}),x){var $e=x.createObjectURL,Me=x.revokeObjectURL;$e&&c(Ie,"createObjectURL",u($e,x)),Me&&c(Ie,"revokeObjectURL",u(Me,x))}b(Ie,"URL"),s({global:!0,forced:!i,sham:!a},{URL:Ie})}}]);