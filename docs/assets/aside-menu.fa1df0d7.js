import{u as p,a as v,n as f,r as k,c as t,F as h,p as y,o as s,b as l,f as r,q as C,s as c,t as g,e as x,v as B,w}from"./vendor.49eac9c8.js";import{_ as z}from"./index.29329d79.js";const D={class:"aside-menu"},N={class:"item"},j=["onClick"],F={props:["menu"],setup(i){const _=p(),d=v(),n=f(d.name);console.log(n.value);function m({name:a,path:u,children:o=[]}){o.length||_.push(u),n.value=a===n.value?"":a}return(a,u)=>{const o=k("k-aside-menu");return s(),t("div",D,[(s(!0),t(h,null,y(i.menu,e=>(s(),t("div",N,[l("div",{class:w(["title",{current:n.value===e.name}]),onClick:M=>m(e)},[e.meta.icon?(s(),r(C(e.meta.icon),{key:0,class:"icon",size:"20"})):c("",!0),l("span",null,g(e.meta.title),1),e.children?(s(),r(x(B),{key:1,size:"20",class:"arrow"})):c("",!0)],10,j),e.children?(s(),r(o,{key:0,menu:e.children},null,8,["menu"])):c("",!0)]))),256))])}}};var b=z(F,[["__scopeId","data-v-612c5fe7"]]);export{b as default};