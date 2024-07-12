import{A as v,S as d,a as m,i as b}from"./assets/vendor-CBq3KAmY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();new v(".about-accordion-container",{duration:500,openOnInit:[0]});new d(".swiper-container",{breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,speed:500,navigation:{nextEl:".swiper-button-next"}});const p=document.querySelectorAll(".covers-list-item"),y="marqueeLine-style",L=new IntersectionObserver(e=>e[0].intersectionRatio<=0?g(p):w(p));L.observe(document.querySelector(".covers-section"));function g(e){for(let t=0;t<e.length;t++)e[t].classList.remove(y)}function w(e){for(let t=0;t<e.length;t++)e[t].classList.add(y)}new v(".accordion-container",{duration:300,showMultiple:!0});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header-menu-btn"),t=document.querySelector(".header-list-navigation"),s=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".mobile-menu"),n=document.querySelector(".mobile-menu-close");document.querySelectorAll(".mobile-menu-list");const r=document.querySelectorAll(".header-link-btn, .mobile-menu-order-btn"),l=document.querySelector("body");function h(c){const u=document.querySelector(c);u?(console.log(`Scrolling to ${c}`),u.scrollIntoView({behavior:"smooth"})):console.error(`Element not found: ${c}`)}e&&t&&e.addEventListener("click",()=>{t.classList.toggle("visually-hidden"),t.classList.toggle("is-hidden")}),s&&o&&s.addEventListener("click",()=>{o.classList.add("open"),l.classList.add("no-scroll")}),n&&o&&n.addEventListener("click",()=>{o.classList.remove("open"),l.classList.remove("no-scroll")}),o&&o.addEventListener("click",c=>{c.target.tagName==="A"&&(o.classList.remove("open"),l.classList.remove("no-scroll"))}),r&&r.forEach(c=>{c.addEventListener("click",u=>{u.preventDefault(),h("#work-together"),c.classList.contains("mobile-menu-order-btn")&&o&&(o.classList.remove("open"),o.setAttribute("aria-hidden","true"))})})});const a={backdrop:document.querySelector(".work-together-backdrop"),successTitle:document.querySelector(".success-title"),successText:document.querySelector(".success-message")};function S(e,t){a.successTitle.textContent=e,a.successText.textContent=t}function q(e,t){a.backdrop.classList.remove("hidden"),S(e,t)}function E(){const e=document.querySelector(".close-btn");function t(){a.backdrop.classList.add("hidden")}e.addEventListener("click",t),a.backdrop.addEventListener("click",s=>{s.target===a.backdrop&&t()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&t()})}E();document.querySelector(".button-next");document.querySelector(".button-prev");new d(".swiper",{direction:"horizontal",speed:1e3,navigation:{nextEl:".button-next",prevEl:".button-prev"}});function k(){new d(".swiper-reviews",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},simulateTouch:"true",roundLengths:"true",keyboard:{enabled:!0},navigation:{nextEl:".next-button",prevEl:".prev-button"},on:{init:function(){e(this)},slideChange:function(){e(this)},reachEnd:function(){e(this)},reachBeginning:function(){e(this)}}});function e(t){const s=document.querySelector(".next-button"),o=document.querySelector(".prev-button");t.isBeginning?o.classList.add("button-inactive"):o.classList.remove("button-inactive"),t.isEnd?s.classList.add("button-inactive"):s.classList.remove("button-inactive")}}async function C(){return(await m.get("https://portfolio-js.b.goit.study/api/reviews")).data}function x(e){return`<li class="swiper-slide reviewers-card">
            <img src="${e.avatar_url}" alt="" class="reviews-image">
            <h3 class="reviewer-name">${e.author}</h3>
            <p class="reviewer-text">${e.review}</p>
          </li>`}function M(e){return e.map(x).join("")}const f=document.querySelector(".swiper-reviews .swiper-wrapper");document.querySelector(".next-button");document.querySelector(".prev-button");document.addEventListener("DOMContentLoaded",async()=>{try{const e=await C(),t=M(e);f.innerHTML=t,document.querySelectorAll(".swiper-slide.reviewers-card").forEach(o=>{o.scrollHeight>o.clientHeight&&o.classList.add("scrollable")}),k()}catch(e){b.error({icon:!1,theme:"dark",color:"#ED3B44",position:"topCenter",message:e.message,closeOnEscape:!0,closeOnClick:!0}),f.innerHTML='<p class = "alert-reviews">Not found</p>',document.querySelectorAll(".reviews-button").forEach(s=>s.style.display="none")}});m.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function O(e,t){const s="/requests",o={email:e,comment:t};return(await m.post(s,o)).data}const i={form:document.querySelector("#work-together-form"),emailContainer:document.querySelector("#email-container"),email:document.querySelector("#email")};i.form.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value,s=e.target.elements.comment.value;try{const o=await O(t,s);i.form.reset(),q(o.title,o.message),i.emailContainer.classList.remove("success")}catch(o){b.error({icon:!1,theme:"dark",color:"#ED3B44",position:"topCenter",message:o.message,closeOnEscape:!0,closeOnClick:!0})}});i.email.addEventListener("blur",()=>{i.email.value.trim()!==""?i.email.checkValidity()?(i.emailContainer.classList.add("success"),i.emailContainer.classList.remove("invalid")):(i.emailContainer.classList.add("invalid"),i.emailContainer.classList.remove("success")):(i.emailContainer.classList.remove("success"),i.emailContainer.classList.remove("invalid"))});const B=document.querySelector(".benefits-order-btn"),A=document.querySelector("#work-together");B.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:A.offsetTop,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
