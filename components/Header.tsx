"use client";
import {useEffect,useState} from "react";
export default function Header() {
const [open,setOpen]=useState(false); const [theme,setTheme]=useState('light'); const [scrolled,setScrolled]=useState(false);
useEffect(()=>{setTheme(document.documentElement.dataset.theme || 'light');const update=()=>setScrolled(window.scrollY>20);update();window.addEventListener('scroll',update,{passive:true});return ()=>window.removeEventListener('scroll',update)},[]);
function toggleTheme(){const next=theme==='light'?'dark':'light';setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem('nuotech-theme',next)}catch{}}

return (<header className={scrolled ? "nav scrolled" : "nav"} id="nav">
<div className="wrap">
<a href="#top" className="logo" aria-label="Nuotech Solutions Pvt Ltd home">
<span className="logo-mark"><img src="/images/asset-01.png" alt="" width="40" height="25" /></span>
<span>{"Nuotech"}<small>{"Solutions Pvt Ltd"}</small></span>
</a>
<ul id="menu" className={open ? "open" : ""} onClick={() => setOpen(false)}>
<li><a href="#about">{"About"}</a></li>
<li><a href="#demo">{"Demo"}</a></li>
<li><a href="#qdcs">{"Metal (QDCS)"}</a></li>
<li><a href="#process">{"Process"}</a></li>
<li><a href="#partners">{"Partners"}</a></li>
<li><a href="#contact" className="btn btn-primary">{"Get a quote"}</a></li>
</ul>
<div className="nav-right">
<button className="theme-toggle" id="themeToggle" aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"} title="Toggle light / dark theme" onClick={toggleTheme}>
<svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"></path></svg>
<svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.5"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>
</button>
<button className="burger" id="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
</div>
</div>
</header>);
}
