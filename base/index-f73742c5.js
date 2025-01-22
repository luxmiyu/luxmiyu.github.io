(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const s=[{dark:"eaeaea",light:"2a2a2a",name:"text"},{dark:"bababa",light:"5a5a5a",name:"text-secondary"},{dark:"cd435c",light:"e86880",name:"selection"},{dark:"eaeaea",light:"2a2a2a",name:"selection-text"},{dark:"1a1a1a",light:"eaeaea",name:"background"},{dark:"222222",light:"dedede",name:"background-accent"},{dark:"3a3a3a",light:"d2d2d2",name:"shadow"},{dark:"8a8a8a",light:"8a8a8a",name:"hr"},{dark:"2a2a2a",light:"d8d8d8",name:"button"},{dark:"bababa",light:"5a5a5a",name:"button-border"},{dark:"3a3a3a",light:"eaeaea",name:"button-hover"},{dark:"5a5a5a",light:"fafafa",name:"button-active"},{dark:"8a8a8a",light:"fafafa",name:"button-disabled"},{dark:"2a2a2a",light:"d8d8d8",name:"input"},{dark:"5a5a5a",light:"8a8a8a",name:"input-border"},{dark:"eaeaea",light:"5a5a5a",name:"scrollbar-thumb"},{dark:"1a1a1a",light:"eaeaea",name:"scrollbar-track"},{dark:"bababa",light:"eaeaea",name:"range"},{dark:"3a3a3a",light:"aaaaaa",name:"range-border"},{dark:"3a3a3a",light:"aaaaaa",name:"range-background"},{dark:"e26f80",light:"f4899d",name:"checkbox-background"}],c=document.getElementById("theme-toggle");c&&c.addEventListener("click",()=>{b()});document.addEventListener("keydown",e=>{e.altKey&&e.key==="l"&&b()});function b(){localStorage.setItem("theme",localStorage.getItem("theme")==="dark"?"light":"dark"),m()}let k="";function m(){let e=localStorage.getItem("theme")==="light"?"light":"dark";localStorage.setItem("theme",e),c&&(e==="dark"?c.innerHTML="switch to light theme 🌞":c.innerHTML="switch to dark theme 🌚");for(let t in s){let r=s[t].name,o=s[t][e];document.documentElement.style.setProperty(`--color-${r}`,`#${o}`)}k=e}m();setInterval(()=>{k!==localStorage.getItem("theme")&&m()},500);const y=document.getElementById("textarea0"),S=document.getElementById("textarea1"),O=document.getElementById("textarea2"),w=document.getElementById("textarea3"),E=document.getElementById("range0"),p=document.getElementById("range1"),v=document.getElementById("range2"),I=document.getElementById("range3"),B=document.getElementById("label0"),x=document.getElementById("label1"),L=document.getElementById("label2"),T=document.getElementById("label3"),M=document.getElementById("reset"),P=document.getElementById("clear"),l=[y,S,O,w],u=[E,p,v,I],$=[B,x,L,T];let d=0;function h(e,t,r){return Math.min(Math.max(e,t),r)}function A(e,t,r){if(t===r)return e;if(t===1){let o=0;for(let a=0;a<e.length&&e[a]==="1";a++)o++;return o.toString(r)}if(r===1){const o=parseInt(e,t);if(o>1e5)return"output is too long (> 100000)";if(isNaN(o))return"NaN";let a="";for(let n=0;n<o;n++)a+="1";return a}return t=h(t,2,36),r=h(r,2,36),parseInt(e,t).toString(r)}function g(e){const t=l[e].value,r=parseInt(u[e].value);l.forEach((o,a)=>{if(a===e)return;const n=parseInt(u[a].value);o.value=A(t,r,n)})}function f(e){l.forEach(t=>{t.classList.remove("active")}),l[e].classList.add("active")}u.forEach((e,t)=>{e.addEventListener("input",()=>{$[t].innerText=`base ${e.value}`,g(d)})});l.forEach((e,t)=>{e.addEventListener("input",()=>{g(t),f(t),d=t})});l.forEach((e,t)=>{e.addEventListener("focus",()=>{f(t),d=t})});function N(){y.value="69420",E.value="10",B.innerText="base 10",p.value="16",x.innerText="base 16",v.value="2",L.innerText="base 2",I.value="36",T.innerText="base 36",g(0),f(0),d=0}M.addEventListener("click",()=>N());P.addEventListener("click",()=>l.forEach(e=>e.value=""));N();
