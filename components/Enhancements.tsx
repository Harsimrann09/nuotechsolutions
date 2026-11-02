"use client";
import {useEffect} from 'react';
export default function Enhancements(){useEffect(()=>{
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;let shots=0;const timers:ReturnType<typeof setInterval>[]=[];let reset:ReturnType<typeof setTimeout>|undefined;
 if(!reduced){timers.push(setInterval(()=>{const el=document.getElementById('r-shots');if(el)el.textContent=(++shots).toLocaleString('en-IN')},4400));timers.push(setInterval(()=>{const el=document.getElementById('r-temp');if(el)el.textContent=(226+Math.round(Math.random()*5))+' ?C'},1600))}
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 const button=document.getElementById('copyEmail');async function copy(){if(!button)return;try{await navigator.clipboard.writeText('amandeep@nuotechsolutions.com');button.textContent='Copied'}catch{const range=document.createRange();range.selectNodeContents(button.previousElementSibling!);const selection=window.getSelection();selection?.removeAllRanges();selection?.addRange(range);button.textContent='Selected'}reset=setTimeout(()=>{button.textContent='Copy email'},1800)}button?.addEventListener('click',copy);
 return ()=>{observer.disconnect();timers.forEach(clearInterval);if(reset)clearTimeout(reset);button?.removeEventListener('click',copy)}
},[]);return null}
