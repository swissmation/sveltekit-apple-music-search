import{S as I,i as V,s as q,e as g,t as j,c as v,a as p,h as D,d,g as b,K as u,j as E,w as B,k as $,x as N,m as w,b as x,y as C,q as F,o as K,B as T,T as U}from"../../../chunks/vendor-07f31755.js";import{S as z}from"../../../chunks/SearchForm-160dfa81.js";import"../../../chunks/singletons-d1fb5791.js";function k(o,s,e){const n=o.slice();return n[1]=s[e],n}function y(o){let s,e=o[1].trackName+"",n;return{c(){s=g("div"),n=j(e)},l(r){s=v(r,"DIV",{});var c=p(s);n=D(c,e),c.forEach(d)},m(r,c){b(r,s,c),u(s,n)},p(r,c){c&1&&e!==(e=r[1].trackName+"")&&E(n,e)},d(r){r&&d(s)}}}function A(o){let s,e,n,r,c,_,m;n=new z({});let h=o[0],l=[];for(let t=0;t<h.length;t+=1)l[t]=y(k(o,h,t));return{c(){s=g("div"),e=g("div"),B(n.$$.fragment),r=$(),c=j(o[0]),_=$();for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){s=v(t,"DIV",{class:!0});var i=p(s);e=v(i,"DIV",{class:!0});var a=p(e);N(n.$$.fragment,a),r=w(a),c=D(a,o[0]),_=w(a);for(let f=0;f<l.length;f+=1)l[f].l(a);a.forEach(d),i.forEach(d),this.h()},h(){x(e,"class","relative w-full max-w-lg"),x(s,"class","min-h-screen flex items-center justify-center px-16")},m(t,i){b(t,s,i),u(s,e),C(n,e,null),u(e,r),u(e,c),u(e,_);for(let a=0;a<l.length;a+=1)l[a].m(e,null);m=!0},p(t,[i]){if((!m||i&1)&&E(c,t[0]),i&1){h=t[0];let a;for(a=0;a<h.length;a+=1){const f=k(t,h,a);l[a]?l[a].p(f,i):(l[a]=y(f),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=h.length}},i(t){m||(F(n.$$.fragment,t),m=!0)},o(t){K(n.$$.fragment,t),m=!1},d(t){t&&d(s),T(n),U(l,t)}}}let S=[];const M=async({fetch:o,params:s})=>{var e=s.search;console.log(`load searchString: ${e}`);var r=await(await o("/songs.json?search={search}")).json();return S=r.results,S};function G(o,s,e){let{songs:n=[]}=s;return o.$$set=r=>{"songs"in r&&e(0,n=r.songs)},[n]}class O extends I{constructor(s){super();V(this,s,G,A,q,{songs:0})}}export{O as default,M as load};
