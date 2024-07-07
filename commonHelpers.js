import{S as c,a as d,i as m}from"./assets/vendor-9vWwoWny.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{new c(".swiper-container",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});const a=document.querySelectorAll(".covers-list-item"),l="marqueeLine-style",p=new IntersectionObserver(e=>e[0].intersectionRatio<=0?v(a):f(a));p.observe(document.querySelector(".covers-section"));function v(e){for(let t=0;t<e.length;t++)e[t].classList.remove(l)}function f(e){for(let t=0;t<e.length;t++)e[t].classList.add(l)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".header-menu-btn"),t=document.querySelector(".header-list-navigation"),i=document.querySelector(".mobile-menu-btn");e&&e.addEventListener("click",function(){t.classList.toggle("visible")}),i&&i.addEventListener("click",function(){t.classList.toggle("visible")}),document.querySelectorAll(".nav-link").forEach(function(o){o.addEventListener("click",function(){t.classList.remove("visible")})});const n=document.querySelector(".header-link-btn");n&&n.addEventListener("click",function(){const o=document.querySelector("#work-together");o&&(o.scrollIntoView({behavior:"smooth"}),t.classList.remove("visible"))})});document.querySelector(".button-next");document.querySelector(".button-prev");new c(".swiper",{direction:"horizontal",speed:1e3,navigation:{nextEl:".button-next",prevEl:".button-prev"}});function b(){new c(".swiper-reviews",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},simulateTouch:"true",roundLengths:"true",keyboard:{enabled:!0},navigation:{nextEl:".next-button",prevEl:".prev-button"},on:{init:function(){e(this)},slideChange:function(){e(this)},reachEnd:function(){e(this)},reachBeginning:function(){e(this)}}});function e(t){const i=document.querySelector(".next-button"),r=document.querySelector(".prev-button");t.isBeginning?r.classList.add("button-inactive"):r.classList.remove("button-inactive"),t.isEnd?i.classList.add("button-inactive"):i.classList.remove("button-inactive")}}async function g(){return(await d.get("https://portfolio-js.b.goit.study/api/reviews")).data}function h(e){return`<li class="swiper-slide reviewers-card">
            <img src="${e.avatar_url}" alt="" class="reviews-image">
            <h3 class="reviewer-name">${e.author}</h3>
            <p class="reviewer-text">${e.review}</p>
          </li>`}function y(e){return e.map(h).join("")}const u=document.querySelector(".swiper-reviews .swiper-wrapper");document.querySelector(".next-button");document.querySelector(".prev-button");const w={message:"We're sorry, server error.",messageColor:"white",backgroundColor:"#3B3B3B33",maxWidth:"360px",position:"bottomRight",theme:"dark"};document.addEventListener("DOMContentLoaded",async()=>{try{const e=await g(),t=y(e);u.innerHTML=t,b()}catch{m.info(w),u.innerHTML='<p class = "alert">Not found</p>'}});
//# sourceMappingURL=commonHelpers.js.map
