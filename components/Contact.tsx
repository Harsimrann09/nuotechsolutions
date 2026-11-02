import ContactForm from "./ContactForm";
export default function Contact() {

return (<section className="contact" id="contact">
<div className="wrap">
<div>
<span className="eyebrow reveal">{"Let's talk"}</span>
<h2 className="reveal d1">{"Ready to make your plant "}<span className="grad">{"faster?"}</span></h2>
<p className="lead reveal d2">{"Tell us about your machines and what you'd like to improve. We'll come back with the right solution and a quote."}</p>
<div className="contact-card reveal d3">
<div className="person"><div className="avatar">{"AS"}</div><div><b>{"Mr. Amandeep Singh"}</b><small>{"Nuotech Solutions Pvt Ltd"}</small></div></div>
<div className="cline-row"><a className="cline" href="mailto:amandeep@nuotechsolutions.com"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>{"amandeep@nuotechsolutions.com"}</a><button className="copy-btn" type="button" id="copyEmail">{"Copy email"}</button></div>
<a className="cline" href="tel:+919999931662"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path></svg>{"+91 99999 31662"}</a>
<p className="contact-address"><b>Regd. office</b><br />J-139, Sector-25, Jalvayu Vihar,<br />Noida - 201301, U.P., India</p>
</div>
</div>
<ContactForm />
</div>
</section>);
}
