import{_ as u,c as l,o as d,a as m}from"./index-CpCoYqIf.js";const v={mounted(){const t=document.getElementById("cursor-big"),s=document.getElementById("cursor-small"),o=document.getElementsByTagName("a"),c=document.getElementsByClassName("cursor-hover"),r=[...o,...c];document.addEventListener("mousemove",n),document.addEventListener("mousedown",a),document.addEventListener("mouseup",i),document.addEventListener("mouseenter",()=>{t.style.opacity=1,s.style.opacity=1}),document.addEventListener("mouseleave",()=>{t.style.opacity=0,s.style.opacity=0}),r.forEach(e=>{e.addEventListener("mouseover",a),e.addEventListener("mouseout",i)});function n(e){s.style.opacity=1,gsap.to(t,.4,{x:e.clientX-18,y:e.clientY-18}),gsap.to(s,.1,{x:e.clientX-4,y:e.clientY-4})}function a(){gsap.to(t,.3,{scale:3})}function i(){gsap.to(t,.3,{scale:1})}}},_={class:"cursor-preview"},p=m('<div class="cursor-preview__container"><h5 class="cursor-preview__title">On link</h5><a href="https://zelen-co.com/articles/custom-cursor-in-vuejs-with-gsap" target="blank" class="cursor-preview__link">Article</a><h5 class="cursor-preview__title">On hoverable element</h5><button class="cursor-preview__button cursor-hover">Hover me</button></div><div class="custom-cursor"><div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div><div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div></div>',2),h=[p];function y(t,s,o,c,r,n){return d(),l("div",_,h)}const b=u(v,[["render",y]]);export{b as default};
