
export default function Demo() {

return (<section className="spot" id="demo">
<div className="wrap">
<div className="spot-head">
<div>
<span className="eyebrow reveal">{"Flagship partner · Forwell, Taiwan"}</span>
<h2 className="reveal d1">{"See quick change "}<span className="grad">{"in action."}</span></h2>
<p className="lead reveal d2">{"Our core business is Forwell's fully automatic quick change technology, for plastic injection molding and for metal press & stamping. Watch how it works."}</p>
</div>
<div className="apps">
<div className="app reveal d2"><span className="kicker">{"Plastics · QMCS"}</span><h3>{"Quick Mold Change"}</h3><p>{"For injection molding machines: automatic clamping and mold change with speed, accuracy and safety."}</p></div>
<div className="app metal reveal d3"><span className="kicker">{"Metal · QDCS"}</span><h3>{"Quick Die Change"}</h3><p>{"For press and stamping machines: the same quick-change principle applied to metal forming dies. "}<a href="#qdcs" style={{"color": "var(--cyan)", "fontWeight": "600"}}>{"See QDCS ↓"}</a></p></div>
</div>
</div>
<div className="player reveal d2" id="player">
<img src="/images/asset-02.jpg" alt="Forwell quick mold change system in operation" />
<div className="player-shade"></div>
<div className="player-cap"><small>{"Demo video · Forwell QMCS"}</small><b>{"Quick mold change on an injection molding machine"}</b></div>
<a className="sound-btn" id="soundBtn" href="https://www.youtube.com/watch?v=8y33-TqATr4" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14"></path></svg>{"Watch on YouTube"}</a>
</div>
<p className="spot-note">{"Video courtesy of Forwell."}</p>
<div className="more-vids"><span>{"More videos"}</span>
<a className="ext-link" href="https://www.youtube.com/watch?v=LqTdMBBdwuQ" target="_blank" rel="noopener">{"Quick die change for press & stamping (5:34) "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
<a className="ext-link" href="https://www.youtube.com/watch?v=A3ohr1fujKk" target="_blank" rel="noopener">{"Forwell QMCS on an injection molding machine (3:03) "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
</div>
</div>
</section>);
}
