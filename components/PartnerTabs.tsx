"use client";
import {useEffect,useState,type KeyboardEvent} from "react";
export default function PartnerTabs() {
const ids=['t-forwell','t-himore','t-tria','t-nansheng'];const [active,setActive]=useState(ids[0]);
useEffect(()=>{function select(e: MouseEvent){const a=(e.target as Element).closest('[data-tab]') as HTMLElement|null;if(a && ids.includes(a.dataset.tab!))setActive(a.dataset.tab!)}document.addEventListener('click',select);return ()=>document.removeEventListener('click',select)},[]);
function handleKey(e: KeyboardEvent<HTMLButtonElement>){if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const i=ids.indexOf(e.currentTarget.id);const next=e.key==='Home'?0:e.key==='End'?3:(i+(e.key==='ArrowRight'?1:3))%4;setActive(ids[next]);document.getElementById(ids[next])?.focus()}

return (<section id="partners">
<div className="wrap">
<div className="partners-head">
<div>
<span className="eyebrow reveal">{"Our business associates"}</span>
<h2 className="reveal d1">{"Built by the best. "}<span className="grad">{"Brought here by us."}</span></h2>
</div>
<p className="lead reveal d2" style={{"maxWidth": "420px"}}>{"Every partner was chosen for proven engineering, international certification, and long track records with the world's biggest machine makers."}</p>
</div>
<div className="tabs reveal" role="tablist" aria-label="Partners">
<button className="tab" role="tab" aria-selected={active === "t-forwell"} aria-controls="p-forwell" id="t-forwell" tabIndex={active === "t-forwell" ? 0 : -1} onClick={() => setActive("t-forwell")} onKeyDown={handleKey}>{"Forwell"}<small>{"Taiwan · QMCS / QDCS"}</small></button>
<button className="tab" role="tab" aria-selected={active === "t-himore"} aria-controls="p-himore" id="t-himore" tabIndex={active === "t-himore" ? 0 : -1} onClick={() => setActive("t-himore")} onKeyDown={handleKey}>{"Hi-More"}<small>{"Taiwan · Robots"}</small></button>
<button className="tab" role="tab" aria-selected={active === "t-tria"} aria-controls="p-tria" id="t-tria" tabIndex={active === "t-tria" ? 0 : -1} onClick={() => setActive("t-tria")} onKeyDown={handleKey}>{"TRIA"}<small>{"Italy · Granulators"}</small></button>
<button className="tab" role="tab" aria-selected={active === "t-nansheng"} aria-controls="p-nansheng" id="t-nansheng" tabIndex={active === "t-nansheng" ? 0 : -1} onClick={() => setActive("t-nansheng")} onKeyDown={handleKey}>{"Nansheng"}<small>{"China · Screws"}</small></button>
</div>

<article className={active === "t-forwell" ? "panel active" : "panel"} id="p-forwell" role="tabpanel" aria-labelledby="t-forwell">
<div className="panel-main">
<div className="panel-meta"><span className="tag"><b>{"★ Flagship partner"}</b></span><span className="tag">{"Est. "}<b>{"1987"}</b></span><span className="tag">{"Taiwan"}</span><span className="tag">{"ISO · CE · Patented"}</span></div>
<h3>{"Forwell Precision Machinery"}</h3>
<span className="sub">{"// Quick Mold & Die Change Systems (QMCS · QDCS)"}</span>
<p>{"Forwell specializes in fully automatic quick change systems that deliver significant labor savings: QMCS for plastic injection molding machines, and QDCS for metal press and stamping machines. Molds and dies are changed quickly, with high speed, efficiency, accuracy and safety."}</p>
<p>{"The movable clamper reduces machine idle time and increases capacity, making production management more rational and automated."}</p>
<div className="chips"><span className="chip">{"Haitian"}</span><span className="chip">{"Chen Hsong"}</span><span className="chip">{"Toshiba"}</span><span className="chip">{"FCS Group"}</span></div>
<p className="flagline" style={{"marginTop": "12px"}}>{"↑ Injection molding machine makers Forwell works with"}</p>
<a className="ext-link" href="https://www.forwell.com/en/product/quick-mold-change-system.html" target="_blank" rel="noopener">{"Visit Forwell "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
</div>
<div className="panel-side">
<div className="gallery">
<figure className="plate"><div className="plate-img"><img src="/images/asset-03.jpg" alt="Forwell QMCS: mold clamps, control panel and pump unit" loading="lazy" /></div><figcaption>{"Clamps, control panel & pump"}</figcaption></figure>
<figure className="plate"><div className="plate-img"><img src="/images/asset-04.png" alt="Diagram of mold clamping with movable clampers" loading="lazy" /></div><figcaption>{"Movable clamper layout"}</figcaption></figure>
</div>
<h4>{"Benefits of QMCS"}</h4>
<div className="split-benefits">
<div><h5>{"Direct"}</h5><ul>
<li>{"Reduced die changing time"}</li><li>{"Diverse products in small batches"}</li><li>{"Reduced stock inventory"}</li><li>{"Improved productivity & quality"}</li><li>{"Reduced labor cost"}</li></ul></div>
<div className="ind"><h5>{"Indirect"}</h5><ul>
<li>{"Die standardization"}</li><li>{"Operation standardization"}</li><li>{"Improved operation safety"}</li><li>{"Shortened delivery time"}</li><li>{"Better working environment"}</li></ul></div>
</div>
</div>
<div className="panel-wide">
<div className="wide-head"><h4>{"Effects of introducing QMCS"}</h4><span>{"Manual vs. automated mold change"}</span></div>
<div className="cmp">
<div className="cmp-row"><div className="cmp-label">{"Changing the mold"}</div><div className="cmp-old">{"Every change means a long, labour-heavy job tightening clamps by hand."}</div><div className="cmp-new">{"Clamping and release happen at the touch of a button on the control panel."}</div></div>
<div className="cmp-row"><div className="cmp-label">{"Clamping force"}</div><div className="cmp-old">{"Tightening force varies from one operator to the next."}</div><div className="cmp-new">{"Identical clamping force every time, for consistently safer operation."}</div></div>
<div className="cmp-row"><div className="cmp-label">{"Operator safety"}</div><div className="cmp-old">{"Heavy manual work wastes manpower and raises the risk of injury."}</div><div className="cmp-new">{"Panel-controlled operation saves manpower and reduces injuries."}</div></div>
<div className="cmp-row"><div className="cmp-label">{"Monitoring"}</div><div className="cmp-old">{"No warning if clamping screws start to loosen."}</div><div className="cmp-new">{"A built-in alarm stops the machine immediately if anything is wrong."}</div></div>
</div>
<div className="parts"><b>{"System components"}</b><span className="chip">{"TY die clamp"}</span><span className="chip">{"Control panel"}</span><span className="chip">{"Pump unit"}</span><span className="chip">{"Die arm"}</span></div>
</div>
</article>

<article className={active === "t-himore" ? "panel active" : "panel"} id="p-himore" role="tabpanel" aria-labelledby="t-himore">
<div className="panel-main">
<div className="panel-meta"><span className="tag">{"Est. "}<b>{"1990"}</b></span><span className="tag">{"Taiwan"}</span><span className="tag">{"ODM partner"}</span></div>
<h3>{"Hi-More Robot"}</h3>
<span className="sub">{"// Automation robots for injection molding"}</span>
<p>{"Hi-More's robotics work began in 1980 with technology services for HARMO of Japan, and Hi-More Robot Co., Ltd. was formally established in 1990. Today they are the ODM partner behind some of the world's leading robot brands, exporting worldwide."}</p>
<p>{"Following strict Japanese-style management, they build with imported Japanese and German components, with robots covering injection molding machines from 50 to 3,000 tons."}</p>
<p>{"Their range covers every level of automation, from simple sprue pickers to full multi-axis servo cells and in-mold labeling."}</p>
<div className="chips"><span className="chip">{"1-axis sprue picker"}</span><span className="chip">{"2–3 axis all-servo"}</span><span className="chip">{"Hybrid-servo"}</span><span className="chip">{"3–5 axis servo"}</span><span className="chip">{"In-mold labeling (IML)"}</span></div>
<div className="chips"><span className="tag">{"ODM for "}<b>{"Conair"}</b></span><span className="tag"><b>{"Sepro"}</b></span><span className="tag"><b>{"Harmo"}</b></span><span className="tag"><b>{"Sailor"}</b></span></div>
<a className="ext-link" href="https://hi-more.com/en/about" target="_blank" rel="noopener">{"Visit Hi-More "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
</div>
<div className="panel-side">
<div className="gallery">
<figure className="plate"><div className="plate-img"><img src="/images/asset-05.jpg" alt="Hi-More GT 850/950W servo robot" loading="lazy" /></div><figcaption>{"GT 850/950W robot"}</figcaption></figure>
<figure className="plate"><div className="plate-img"><img src="/images/asset-06.jpg" alt="Hi-More AT 650/750W servo robot" loading="lazy" /></div><figcaption>{"AT 650/750W robot"}</figcaption></figure>
</div>
<h4>{"Benefits of robots"}</h4>
<div className="benefits">
<div className="benefit"><i>{"01"}</i><span>{"Consistent cycle time for better part quality"}</span></div>
<div className="benefit"><i>{"02"}</i><span>{"Shorter cycle time for higher production efficiency"}</span></div>
<div className="benefit"><i>{"03"}</i><span>{"Lower operating cost, more profit"}</span></div>
<div className="benefit"><i>{"04"}</i><span>{"Better surface finish for better pricing power"}</span></div>
<div className="benefit"><i>{"05"}</i><span>{"Separates sprue-runner from parts"}</span></div>
<div className="benefit"><i>{"06"}</i><span>{"Communicates with the molding machine"}</span></div>
<div className="benefit"><i>{"07"}</i><span>{"Prevents mold damage"}</span></div>
</div>
</div>
<div className="panel-wide">
<div className="wide-head"><h4>{"Features of machine development"}</h4><span>{"How Hi-More robots are engineered"}</span></div>
<div className="feat-grid">
<div className="feat"><i>{"01"}</i><h5>{"Durability"}</h5><p>{"Lightweight aluminium structure reduces load, built with branded European, American and Japanese components for long service life."}</p></div>
<div className="feat"><i>{"02"}</i><h5>{"Stability"}</h5><p>{"Open software system that can be expanded and custom-programmed for each customer's process."}</p></div>
<div className="feat"><i>{"03"}</i><h5>{"Convenience"}</h5><p>{"Safe, intelligent and easy to use: even new operators can program the robot quickly."}</p></div>
<div className="feat"><i>{"04"}</i><h5>{"Accuracy"}</h5><span className="big">{"0.05 mm"}</span><p>{"Positioning accuracy, ideal for insert molding and external processing."}</p></div>
<div className="feat"><i>{"05"}</i><h5>{"High efficiency"}</h5><p>{"Integrates vision systems, weighing scales and peripheral equipment: a step towards smart factories and Industry 4.0."}</p></div>
</div>
</div>
</article>

<article className={active === "t-tria" ? "panel active" : "panel"} id="p-tria" role="tabpanel" aria-labelledby="t-tria">
<div className="panel-main">
<div className="panel-meta"><span className="tag">{"Italy"}</span><span className="tag">{"Global manufacturing"}</span></div>
<h3>{"TRIA S.p.A."}</h3>
<span className="sub">{"// Complete regrinding solutions"}</span>
<p>{"TRIA offers complete regrinding solutions for plastics, with a strong international presence and manufacturing facilities across five countries."}</p>
<p>{"Their granulators cover virtually every plastics process. The JM series shown here grinds sprues, scrap and glass-filled engineering plastics right beside the injection molding machine, and opens for maintenance without tools."}</p>
<div className="chips"><span className="chip">{"Injection molding"}</span><span className="chip">{"Extrusion"}</span><span className="chip">{"Film"}</span><span className="chip">{"Recycling"}</span><span className="chip">{"Blow molding"}</span><span className="chip">{"Thermoforming"}</span></div>
<div className="chips"><span className="tag">{"🇮🇹 Italy"}</span><span className="tag">{"🇺🇸 USA"}</span><span className="tag">{"🇧🇷 Brazil"}</span><span className="tag">{"🇨🇳 China"}</span><span className="tag">{"🇩🇪 Germany"}</span></div>
<a className="ext-link" href="https://www.triaplastics.com/en/corporate-why-tria/?c=2" target="_blank" rel="noopener">{"Visit TRIA "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
</div>
<div className="panel-side">
<div className="gallery">
<figure className="plate"><div className="plate-img"><img src="/images/asset-07.jpg" alt="TRIA JM 4220 granulator" loading="lazy" /></div><figcaption>{"JM 4220 granulator"}</figcaption></figure>
<figure className="plate"><div className="plate-img"><img src="/images/asset-08.jpg" alt="TRIA JM 2018 granulator" loading="lazy" /></div><figcaption>{"JM 2018 granulator"}</figcaption></figure>
</div>
</div>
<div className="panel-wide">
<div className="wide-head"><h4>{"Why TRIA"}</h4><span>{"Four reasons processors choose TRIA"}</span></div>
<div className="feat-grid">
<div className="feat"><i>{"01"}</i><h5>{"Regrind quality"}</h5><ul><li>{"Plastic's mechanical and physical properties stay unchanged"}</li><li>{"Less dust, fines and angel hair"}</li><li>{"Uniform, homogeneous regrind, consistently"}</li></ul></div>
<div className="feat"><i>{"02"}</i><h5>{"Energy efficiency"}</h5><ul><li>{"Low running cost in kWh per kg"}</li><li>{"Uses only ~10% of installed power when idling"}</li><li>{"Reactive power kept to a minimum, cutting hourly energy cost"}</li></ul></div>
<div className="feat"><i>{"03"}</i><h5>{"Easy operation & maintenance"}</h5><ul><li>{"Advanced engineering design"}</li><li>{"Operator safety during use and maintenance"}</li><li>{"Less frequent maintenance and downtime"}</li></ul></div>
<div className="feat"><i>{"04"}</i><h5>{"Efficient solutions"}</h5><ul><li>{"Return on investment matched to each application"}</li><li>{"Reliability proven over running time"}</li><li>{"Maintenance planned around line downtime"}</li></ul></div>
</div>
</div>
</article>

<article className={active === "t-nansheng" ? "panel active" : "panel"} id="p-nansheng" role="tabpanel" aria-labelledby="t-nansheng">
<div className="panel-main">
<div className="panel-meta"><span className="tag"><b>{"20+"}</b>{" years"}</span><span className="tag">{"Zhoushan, China"}</span><span className="tag">{"Imported premium steel"}</span></div>
<h3>{"Zhoushan Nansheng Precision Screw"}</h3>
<span className="sub">{"// Barrels, screws & accessories"}</span>
<p>{"Nansheng manufactures all kinds of barrels, screws and accessories for injection molding machines, extruders and rubber machines, with technique and equipment matched to advanced European manufacturers."}</p>
<p>{"They use imported premium steel from Japan, the USA and Germany to ensure the best quality finished product."}</p>
<div className="chips"><span className="chip">{"Nitrided"}</span><span className="chip">{"Chrome plated"}</span><span className="chip">{"Bi-metallic"}</span></div>
<div className="chips"><span className="tag">{"For injection molding"}</span><span className="tag">{"Extruders"}</span><span className="tag">{"Rubber machines"}</span></div>
<a className="ext-link" href="https://www.nansheng-pm.com/en/products/info_106.html" target="_blank" rel="noopener">{"Visit Nansheng "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
</div>
<div className="panel-side">
<div className="gallery">
<figure className="plate"><div className="plate-img"><img className="lowres" src="/images/asset-09.jpg" alt="Nansheng injection molding screws" /></div><figcaption>{"Injection screws"}</figcaption></figure>
<figure className="plate"><div className="plate-img"><img className="lowres" src="/images/asset-10.jpg" alt="Nansheng extruder screws" /></div><figcaption>{"Screw & barrel range"}</figcaption></figure>
</div>
<h4>{"Benefits of Nansheng"}</h4>
<div className="benefits">
<div className="benefit"><i>{"01"}</i><span>{"Nitrided, chrome-plated and bi-metallic screw & barrel options"}</span></div>
<div className="benefit"><i>{"02"}</i><span>{"Alloy chosen to suit your specific raw material"}</span></div>
<div className="benefit"><i>{"03"}</i><span>{"High-temperature centrifugal casting, with welding matched to each screw function"}</span></div>
<div className="benefit"><i>{"04"}</i><span>{"2–3 mm bimetallic inner barrel layer: corrosion, wear & heat resistant"}</span></div>
</div>
</div>
<div className="panel-wide">
<div className="wide-head"><h4>{"Technical specification: Bimetallic screw barrel"}</h4><span>{"Nansheng Machinery India Pvt. Ltd."}</span></div>
<div className="specs">
<div className="spec">
<span className="code">{"C TYPE · NPT1"}</span>
<h5>{"Bimetallic Screw Barrel"}</h5>
<div className="for">{"Screw & barrel base material"}</div>
<p><b>{"38CrMoAl-A"}</b></p>
<div className="for" style={{"marginTop": "14px"}}>{"Applicable scope"}</div>
<p>{"Production containing glass fiber up to 30%, recycled material."}</p>
<span className="warranty">{"Warranty: 12 months"}</span>
</div>
<div className="spec">
<span className="code">{"B TYPE · NPT2"}</span>
<h5>{"Full Hard High Speed Steel Screw Barrel"}</h5>
<div className="for">{"Screw base material"}</div>
<p><b>{"Premium alloy imported from Japan: DC53, SKD61"}</b></p>
<div className="for" style={{"marginTop": "14px"}}>{"Barrel base material"}</div>
<p><b>{"38CrMoAl-A"}</b></p>
<div className="for" style={{"marginTop": "14px"}}>{"Applicable scope"}</div>
<p>{"Production containing glass fiber up to 50%, PEEK, PPS."}</p>
<span className="warranty">{"Warranty: 24 months"}</span>
</div>
</div>
<div className="spec-table">
<div><span>{"Bimetallic process"}</span><b>{"Centrifugal casting"}</b></div>
<div><span>{"Bimetallic material"}</span><b>{"Tungsten carbide alloy"}</b></div>
<div><span>{"Bimetallic layer depth"}</span><b>{"2–3 mm"}</b></div>
<div><span>{"Bimetallic layer hardness"}</span><b>{"HRC 60–62"}</b></div>
</div>
</div>
</article>
</div>
</section>);
}
