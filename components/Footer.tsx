
export default function Footer() {

return (<footer>
<div className="wrap">
<div className="foot">
<div>
<a href="#top" className="logo"><span className="logo-mark"><img src="/images/asset-01.png" alt="" width="40" height="25" /></span><span>{"Nuotech"}<small>{"Solutions Pvt Ltd"}</small></span></a>
<p>{"Technology solutions for the plastics and metal-forming industries in India since 2016."}</p>
</div>
<div className="foot-links">
<div><h5>{"Solutions"}</h5><a href="#partners" data-tab="t-forwell">{"Quick mold change"}</a><a href="#qdcs">{"Quick die change"}</a><a href="#partners" data-tab="t-himore">{"Robots"}</a><a href="#partners" data-tab="t-tria">{"Granulators"}</a><a href="#partners" data-tab="t-nansheng">{"Screws & barrels"}</a></div>
<div><h5>{"Company"}</h5><a href="#about">{"About"}</a><a href="#demo">{"Demo videos"}</a><a href="#contact">{"Contact"}</a></div>
<div><h5>{"Reach us"}</h5><a href="mailto:amandeep@nuotechsolutions.com">{"amandeep@nuotechsolutions.com"}</a><a href="tel:+919999931662">{"+91 99999 31662"}</a><address>Regd. office:<br />J-139, Sector-25, Jalvayu Vihar,<br />Noida - 201301, U.P., India</address></div>
</div>
</div>
<div className="copy"><span>{"© "}<span id="yr">{new Date().getFullYear()}</span>{" Nuotech Solutions Pvt Ltd. All rights reserved."}</span><span>{"Partner names and trademarks belong to their respective owners."}</span></div>
</div>
</footer>);
}
