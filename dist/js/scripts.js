(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".header__burger"),t=document.querySelector(".header__nav-mobile");e.addEventListener("click",(()=>{t.classList.toggle("header__nav-mobile--active")}))}));const e=document.getElementById("start");e.addEventListener("click",(()=>{e.showPicker()})),function(){const e=document.querySelectorAll('a[href*="#"]');if(e.length<=0)return;let t=100;window.innerWidth<=768&&(t=80),window.addEventListener("resize",(()=>{window.innerWidth<=768&&(t=80)})),e.forEach((e=>{e.addEventListener("click",(n=>{const o=e.getAttribute("href").substr(1);if(o&&""!==o){const e=document.querySelector(`#${o}`);e&&(n.preventDefault(),window.scrollBy({top:e.getBoundingClientRect().top-t,left:0,behavior:"smooth"}))}}))}))}()})();