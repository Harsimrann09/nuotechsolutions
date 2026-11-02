"use client";
import {useEffect,useState,type KeyboardEvent} from "react";
import {stages} from "@/data/stages";
export default function ProcessLoop() {
const [current,setCurrent]=useState(0);const [paused,setPaused]=useState(false);const stage=stages[current];
useEffect(()=>{if(paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;let timer: ReturnType<typeof setInterval>|undefined;const el=document.getElementById('process')!;const observer=new IntersectionObserver(([e])=>{if(timer)clearInterval(timer);if(e.isIntersecting)timer=setInterval(()=>setCurrent(i=>(i+1)%4),4200)},{threshold:.2});observer.observe(el);return ()=>{observer.disconnect();if(timer)clearInterval(timer)}},[paused]);
function choose(i:number){setCurrent(i);setPaused(true)}
function handleKey(e:KeyboardEvent<HTMLButtonElement>){if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const i=Number(e.currentTarget.dataset.step);const next=e.key==='Home'?0:e.key==='End'?3:(i+(e.key==='ArrowRight'?1:3))%4;choose(next);document.querySelector<HTMLButtonElement>(`[data-step="${next}"]`)?.focus()}

return (<section className="process" id="process">
<div className="wrap">
<div className="process-head">
<span className="eyebrow reveal">{"The molding cycle, covered"}</span>
<h2 className="reveal d1">{"One partner for the "}<span className="grad">{"whole loop."}</span></h2>
<p className="lead reveal d2">{"From the pellet entering the barrel to the sprue going back into the hopper, our solutions cover every stage of injection molding. Tap a stage to see how."}</p>
</div>
<div className="loop reveal d2" role="tablist" aria-label="Molding process stages">
<div className="loop-line"><i id="loopFill" style={{transform: `scaleX(${current / 3})`}}></i></div>
<button className={current === 0 ? "step on" : "step"} role="tab" aria-selected={current === 0} data-step="0" tabIndex={current === 0 ? 0 : -1} onClick={() => choose(0)} onKeyDown={handleKey}>
<div className="step-dot"><span className="step-num">{"01"}</span>
<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="9" width="20" height="6" rx="2"></rect><path d="M6 9l2 6M10 9l2 6M14 9l2 6M18 9l2 6"></path></svg></div>
<h4>{"Plasticize"}</h4><p>{"Screw & barrel"}</p>
</button>
<button className={current === 1 ? "step on" : "step"} role="tab" aria-selected={current === 1} data-step="1" tabIndex={current === 1 ? 0 : -1} onClick={() => choose(1)} onKeyDown={handleKey}>
<div className="step-dot"><span className="step-num">{"02"}</span>
<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="4" width="5" height="16" rx="1"></rect><rect x="16" y="4" width="5" height="16" rx="1"></rect><path d="M8 12h3M13 12h3M10 9l-2 3 2 3M14 9l2 3-2 3"></path></svg></div>
<h4>{"Change mold"}</h4><p>{"QMCS"}</p>
</button>
<button className={current === 2 ? "step on" : "step"} role="tab" aria-selected={current === 2} data-step="2" tabIndex={current === 2 ? 0 : -1} onClick={() => choose(2)} onKeyDown={handleKey}>
<div className="step-dot"><span className="step-num">{"03"}</span>
<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18M7 4v6l5 4v4M9 22h6M12 18v4"></path><circle cx="7" cy="10" r="1.5"></circle></svg></div>
<h4>{"Pick parts"}</h4><p>{"Servo robots"}</p>
</button>
<button className={current === 3 ? "step on" : "step"} role="tab" aria-selected={current === 3} data-step="3" tabIndex={current === 3 ? 0 : -1} onClick={() => choose(3)} onKeyDown={handleKey}>
<div className="step-dot"><span className="step-num">{"04"}</span>
<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3"></path><path d="M18 3v4h-4M6 21v-4h4"></path></svg></div>
<h4>{"Regrind"}</h4><p>{"Granulators"}</p>
</button>
</div>
<div className="loop-detail reveal d3" id="loopDetail" role="tabpanel" aria-live="polite"><div key={stage.k} className="fade-swap"><span className="eyebrow">{stage.k}</span><h3>{stage.t}</h3><p>{stage.d}</p><a href="#partners" className="partner-pill" data-tab={stage.tab}>Powered by {stage.p} ?</a></div><div className="loop-media fade-swap"><div className="plate-img"><img className={'lowres' in stage ? 'lowres' : undefined} src={stage.img} alt={stage.alt} /></div><ul>{stage.b.map(item => <li key={item}>{item}</li>)}</ul></div></div>
</div>
</section>);
}
