
export default function Hero() {

return (<section className="hero">
<div className="gridbg"></div>
<div className="wrap">
<div>
<span className="eyebrow reveal">{"Plastics & metal forming"}</span>
<h1 className="reveal d1">{"Quick mold & die change, "}<span className="grad">{"delivered to India."}</span></h1>
<p className="lead reveal d2">{"We bring Forwell's fully automatic quick mold change (QMCS) and quick die change (QDCS) systems to plastics and metal-forming manufacturers across India, alongside injection molding robots, granulators and precision screws & barrels. Established in 2016, backed by a team with 20+ years in the industry."}</p>
<div className="hero-cta reveal d3">
<a href="#contact" className="btn btn-primary">{"Talk to an expert\n          "}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
<a href="#demo" className="btn btn-ghost"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l15 8-15 8z"></path></svg>{"Watch the demo"}</a>
</div>
<div className="hero-tags reveal d4">
<span className="tag"><b>{"TW"}</b>{" Forwell · QMCS & QDCS"}</span>
<span className="tag"><b>{"TW"}</b>{" Hi-More"}</span>
<span className="tag"><b>{"IT"}</b>{" TRIA"}</span>
<span className="tag"><b>{"CN"}</b>{" Nansheng"}</span>
<span className="tag">{"Est. "}<b>{"2016"}</b></span>
</div>
</div>

<div className="machine reveal d2" aria-hidden="true">
<div className="machine-head"><span>{"Injection cell · 01"}</span><span className="live"><i></i>{"Running"}</span></div>
<svg viewBox="0 0 520 300" width="100%">
<defs>
<linearGradient id="barrel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a3d63"></stop><stop offset=".5" stopColor="#1a2a4a"></stop><stop offset="1" stopColor="#0f1a30"></stop></linearGradient>
<linearGradient id="hot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ff8a1f" stopOpacity="0"></stop><stop offset="1" stopColor="#ff8a1f" stopOpacity=".55"></stop></linearGradient>
<clipPath id="bore"><rect x="60" y="136" width="250" height="28" rx="3"></rect></clipPath>
<pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#2a3d63"></circle></pattern>
</defs>
<rect x="0" y="0" width="520" height="300" fill="url(#dots)" opacity=".5"></rect>

<rect x="20" y="226" width="480" height="20" rx="4" fill="#13213c" stroke="#2a3d63"></rect>
<rect x="40" y="246" width="16" height="30" fill="#13213c"></rect><rect x="464" y="246" width="16" height="30" fill="#13213c"></rect>

<path d="M70 40h70l-20 60h-30z" fill="#1a2a4a" stroke="#3b5385"></path>
<rect x="90" y="100" width="30" height="34" fill="#1a2a4a" stroke="#3b5385"></rect>
<g fill="#3fd0ff">
<circle className="pellet" cx="98" cy="70" r="3.5" style={{"animationDelay": "0s"}}></circle>
<circle className="pellet" cx="112" cy="62" r="3.5" style={{"animationDelay": ".6s"}}></circle>
<circle className="pellet" cx="104" cy="56" r="3.5" style={{"animationDelay": "1.2s"}}></circle>
<circle className="pellet" cx="116" cy="74" r="3.5" style={{"animationDelay": "1.8s"}}></circle>
</g>
<text x="74" y="32" fill="#6f7f99" fontFamily="JetBrains Mono" fontSize="10">{"RESIN"}</text>

<rect x="56" y="128" width="262" height="44" rx="8" fill="url(#barrel)" stroke="#3b5385"></rect>
<rect x="60" y="136" width="250" height="28" fill="#0a1222"></rect>
<rect x="60" y="136" width="250" height="28" fill="url(#hot)" className="melt"></rect>
<g clipPath="url(#bore)">
<rect x="60" y="147" width="250" height="6" fill="#4a618f"></rect>
<g className="flights" fill="none" stroke="#9fb4dc" strokeWidth="3" strokeLinecap="round">
<path d="M60 138l14 24M96 138l14 24M132 138l14 24M168 138l14 24M204 138l14 24M240 138l14 24M276 138l14 24M312 138l14 24M348 138l14 24"></path>
</g>
</g>

<g fill="#ff8a1f" opacity=".85"><rect x="150" y="124" width="22" height="52" rx="3" opacity=".5"></rect><rect x="200" y="124" width="22" height="52" rx="3" opacity=".7"></rect><rect x="250" y="124" width="22" height="52" rx="3"></rect></g>
<text x="150" y="196" fill="#6f7f99" fontFamily="JetBrains Mono" fontSize="10">{"SCREW & BARREL"}</text>

<path d="M318 140h16l8 10-8 10h-16z" fill="#2a3d63" stroke="#3b5385"></path>

<rect x="342" y="84" width="20" height="142" rx="3" fill="#1f3156" stroke="#3b5385"></rect>
<rect x="362" y="112" width="26" height="76" fill="#ff8a1f" opacity=".9"></rect>

<g className="platen">
<rect x="388" y="112" width="26" height="76" fill="#ffb267" opacity=".9"></rect>
<rect x="414" y="84" width="20" height="142" rx="3" fill="#1f3156" stroke="#3b5385"></rect>
<rect x="434" y="140" width="56" height="20" fill="#13213c" stroke="#2a3d63"></rect>
</g>

<g stroke="#4a618f" strokeWidth="3"><path d="M362 96h128M362 204h128"></path></g>
<rect x="486" y="84" width="14" height="142" rx="3" fill="#1f3156" stroke="#3b5385"></rect>
<text x="352" y="72" fill="#6f7f99" fontFamily="JetBrains Mono" fontSize="10">{"QMCS CLAMP"}</text>

<rect className="part" x="378" y="176" width="20" height="14" rx="3" fill="#43e0a4"></rect>

<g stroke="#3fd0ff" strokeWidth="3" fill="none" opacity=".9">
<path d="M392 20v22"></path><rect x="372" y="10" width="110" height="10" rx="3" fill="#13213c"></rect><circle cx="392" cy="46" r="5" fill="#13213c"></circle>
</g>
<text x="420" y="36" fill="#6f7f99" fontFamily="JetBrains Mono" fontSize="10">{"ROBOT"}</text>
</svg>
<div className="readouts">
<div className="readout"><span>{"Barrel temp"}</span><b id="r-temp">{"228 °C"}</b></div>
<div className="readout"><span>{"Cycle"}</span><b id="r-cycle">{"4.4 s"}</b></div>
<div className="readout"><span>{"Shots"}</span><b id="r-shots">{"0"}</b></div>
</div>
</div>
</div>
<div className="scroll-cue">{"SCROLL"}<i></i></div>
</section>);
}
