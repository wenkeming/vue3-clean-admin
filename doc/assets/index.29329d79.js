import{o as u,c as m,u as y,a as g,r as _,b as l,d as a,e as E,F as L,f as k,g as O,h as w,i as $,j,k as P,l as R,m as x}from"./vendor.49eac9c8.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};A();const I="modulepreload",p={},V="./",c=function(n,r){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=`${V}${t}`,t in p)return;p[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":I,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e)return new Promise((v,b)=>{s.addEventListener("load",v),s.addEventListener("error",b)})})).then(()=>n())};var d=(i,n)=>{const r=i.__vccOpts||i;for(const[t,e]of n)r[t]=e;return r};const D={},T={id:"header"};function N(i,n){return u(),m("header",T)}var B=d(D,[["render",N]]);const C={id:"aside"},H={class:"aside-wrapper"},F=l("div",{class:"logo"},null,-1),S={setup(i){const n=y();g();const r=n.options.routes.filter(t=>t.meta.menu);return(t,e)=>{const o=_("k-aside-menu"),s=_("k-mode-switcher");return u(),m("aside",C,[l("div",H,[F,a(o,{menu:E(r)},null,8,["menu"]),a(s)])])}}},q={id:"main"},W={setup(i){return(n,r)=>{const t=_("router-view");return u(),m(L,null,[a(B),l("section",q,[a(t)]),a(S)],64)}}};const K={};function z(i,n){return" \u9996\u9875 "}var G=d(K,[["render",z]]);const J={};function M(i,n){const r=_("router-view");return u(),k(r)}var Q=d(J,[["render",M]]);const U=O({history:w(),routes:[{path:"/",name:"home",component:G,meta:{title:"\u9996\u9875",icon:$,menu:!0}},{path:"/list",name:"list",component:Q,meta:{title:"\u5217\u8868",icon:j,menu:!0},children:[{path:"/list/normal",name:"list-normal",component:()=>c(()=>import("./list-normal.bf2a0164.js"),["assets/list-normal.bf2a0164.js","assets/vendor.49eac9c8.js"]),meta:{title:"\u666E\u901A\u5217\u8868",menu:!0}},{path:"/list/table",name:"list-table",component:()=>c(()=>import("./list-table.e08643b4.js"),["assets/list-table.e08643b4.js","assets/vendor.49eac9c8.js"]),meta:{title:"\u8868\u683C",menu:!0}},{path:"/list/image",name:"list-image",component:()=>c(()=>import("./list-image.bd4d4ab7.js"),["assets/list-image.bd4d4ab7.js","assets/vendor.49eac9c8.js"]),meta:{title:"\u56FE\u7247",menu:!0}}]},{path:"/about",name:"about",component:()=>c(()=>import("./about.40b6c3c2.js"),["assets/about.40b6c3c2.js","assets/vendor.49eac9c8.js"]),meta:{title:"\u5173\u4E8E",menu:!0,icon:P}}]}),f={"./components/element/aside-menu.vue":()=>c(()=>import("./aside-menu.fa1df0d7.js"),["assets/aside-menu.fa1df0d7.js","assets/aside-menu.56c54d30.css","assets/vendor.49eac9c8.js"]),"./components/element/mode-switcher.vue":()=>c(()=>import("./mode-switcher.b98feb4a.js"),["assets/mode-switcher.b98feb4a.js","assets/mode-switcher.7e83e41f.css","assets/vendor.49eac9c8.js"])},h=R(W);Object.keys(f).forEach(i=>{const n=i.match(/ment\/(.+)\.vue/)[1];h.component("k-"+n,x(f[i]))});h.use(U).mount("#app");export{d as _};
