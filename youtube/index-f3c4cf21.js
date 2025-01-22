(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const d=[{dark:"eaeaea",light:"2a2a2a",name:"text"},{dark:"bababa",light:"5a5a5a",name:"text-secondary"},{dark:"cd435c",light:"e86880",name:"selection"},{dark:"eaeaea",light:"2a2a2a",name:"selection-text"},{dark:"1a1a1a",light:"eaeaea",name:"background"},{dark:"222222",light:"dedede",name:"background-accent"},{dark:"3a3a3a",light:"d2d2d2",name:"shadow"},{dark:"8a8a8a",light:"8a8a8a",name:"hr"},{dark:"2a2a2a",light:"d8d8d8",name:"button"},{dark:"bababa",light:"5a5a5a",name:"button-border"},{dark:"3a3a3a",light:"eaeaea",name:"button-hover"},{dark:"5a5a5a",light:"fafafa",name:"button-active"},{dark:"8a8a8a",light:"fafafa",name:"button-disabled"},{dark:"2a2a2a",light:"d8d8d8",name:"input"},{dark:"5a5a5a",light:"8a8a8a",name:"input-border"},{dark:"eaeaea",light:"5a5a5a",name:"scrollbar-thumb"},{dark:"1a1a1a",light:"eaeaea",name:"scrollbar-track"},{dark:"bababa",light:"eaeaea",name:"range"},{dark:"3a3a3a",light:"aaaaaa",name:"range-border"},{dark:"3a3a3a",light:"aaaaaa",name:"range-background"},{dark:"e26f80",light:"f4899d",name:"checkbox-background"}],o=document.getElementById("theme-toggle");o&&o.addEventListener("click",()=>{b()});document.addEventListener("keydown",e=>{e.altKey&&e.key==="l"&&b()});function b(){localStorage.setItem("theme",localStorage.getItem("theme")==="dark"?"light":"dark"),u()}let p="";function u(){let e=localStorage.getItem("theme")==="light"?"light":"dark";localStorage.setItem("theme",e),o&&(e==="dark"?o.innerHTML="switch to light theme 🌞":o.innerHTML="switch to dark theme 🌚");for(let t in d){let n=d[t].name,l=d[t][e];document.documentElement.style.setProperty(`--color-${n}`,`#${l}`)}p=e}u();setInterval(()=>{p!==localStorage.getItem("theme")&&u()},500);const s=document.getElementById("input-url"),m=document.getElementById("output");let g="",c=null;const k=new RegExp("(?<=[=\\/&])[a-zA-Z0-9_\\-]{11}(?=[=\\/&?#\\n\\r]|$)");function y(e){return`https://www.youtube.com/watch?v=${e}`}function I(e){return`https://img.youtube.com/vi/${e}/maxresdefault.jpg`}function L(e){const t=e.match(k);return t?t[0]:null}function h(){m.innerHTML=""}function f(e,t){const n=document.createElement("a");n.href=y(e),n.target="_blank",n.appendChild(t),m.appendChild(n)}function v(e){const t=L(e);if(!t)return h();if(t===g&&c)return f(t,c);g=t,h();const n=new Image;n.src=I(t),n.onload=()=>{f(t,n)},n.onerror=()=>{m.innerHTML="Image not found :("},c=n}s.addEventListener("input",()=>{v(s.value)});
