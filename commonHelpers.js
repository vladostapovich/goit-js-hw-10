import"./assets/styles-d52e8722.js";import{f as C,i as b}from"./assets/vendor-77e16229.js";const e=document.querySelector("button"),d=document.querySelector("input#datetime-picker"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");let s,c;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<Date.now()?(b.error({message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):e.disabled=!1}};function N(){c=setInterval(S,1e3,s)}function S(t){const r=t-new Date,{days:i,hours:u,minutes:n,seconds:o}=v(r);!isNaN(i)&&!isNaN(u)&&!isNaN(n)&&!isNaN(o)&&(l.textContent=a(i),m.textContent=a(u),f.textContent=a(n),h.textContent=a(o)),r<=0&&q()}function q(){clearInterval(c),l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",c=null,d.disabled=!1,e.disabled=!0}function a(t){return String(t).padStart(2,"0")}function v(t){const n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:p,seconds:D}}C(d,x);e.addEventListener("click",()=>{s&&(N(),d.disabled=!0),e.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map
