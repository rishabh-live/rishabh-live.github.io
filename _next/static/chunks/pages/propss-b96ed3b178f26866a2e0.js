_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"HaE+":function(n,t,r){"use strict";function e(n,t,r,e,u,o,a){try{var s=n[o](a),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(e,u)}function u(n){return function(){var t=this,r=arguments;return new Promise((function(u,o){var a=n.apply(t,r);function s(n){e(a,u,o,s,c,"next",n)}function c(n){e(a,u,o,s,c,"throw",n)}s(void 0)}))}}r.d(t,"a",(function(){return u}))},bUu9:function(n,t,r){"use strict";r.r(t);var e=r("o0o1"),u=r.n(e),o=r("HaE+"),a=r("q1tI"),s=r.n(a).a.createElement;function c(n){var t=n.stars;return s("div",null,"Next stars: ",t)}c.getInitialProps=function(){var n=Object(o.a)(u.a.mark((function n(t){var r,e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.github.com/repos/vercel/next.js");case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",{stars:e.stargazers_count});case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t.default=c},thCf:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/propss",function(){return r("bUu9")}])}},[["thCf",0,1,2]]]);