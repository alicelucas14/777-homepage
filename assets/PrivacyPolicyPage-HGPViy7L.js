import{f as e,u as t}from"./chunk-EVOBXE3Y-Cd-9FhKK.js";import{t as n}from"./index-HLdghiY6.js";import{n as r,r as i,t as a}from"./LiveChatWidget-DiYxfAKR.js";var o=e(t(),1),s=n();function c(){let[e,t]=(0,o.useState)(!1),[n,c]=(0,o.useState)(l),d=(0,o.useMemo)(()=>`/api`,[]),f=[{id:`about-us`,label:`About`,href:`/#about-us`},{id:`contact`,label:`Contact`,href:`/contact`},{id:`faq`,label:`FAQ`,href:`/#faq`},{id:`blog`,label:`Blog`,href:`/#blog`},{id:`reviews`,label:`Reviews`,href:`/#reviews`}];(0,o.useEffect)(()=>{let e=!0;return(async()=>{try{let t=await fetch(`${d}/site-settings`);if(!t.ok)return;let n=await t.json();e&&n?.privacyPage&&c({...l,...n.privacyPage})}catch{}})(),()=>{e=!1}},[d]);let p=String(n.body||``).split(/\n\n+/).map(e=>e.trim()).filter(Boolean),m=p[0]||``,h=p.slice(1).map((e,t)=>{let[n,...r]=e.split(`
`),i=/^\d+\./.test(n.trim());return{id:`privacy-section-${t}`,heading:i?n.trim():``,body:i?r.join(`
`).trim():e}});return(0,s.jsxs)(`div`,{className:`site-shell`,children:[(0,s.jsx)(i,{menuItems:f,menuOpen:e,setMenuOpen:t,variant:`public`,actionButton:{href:`https://stars777.in/apk/3fe0463502524ffea0f673dda587370e.apk`,label:`Download App`}}),(0,s.jsx)(`main`,{children:(0,s.jsxs)(`section`,{className:`section-block legal-page-section`,children:[u(n),(0,s.jsx)(`p`,{className:`legal-page-intro`,children:m}),(0,s.jsx)(`div`,{className:`legal-page-grid`,children:h.map(e=>(0,s.jsxs)(`article`,{className:`legal-page-card`,children:[e.heading?(0,s.jsx)(`h3`,{children:e.heading}):null,(0,s.jsx)(`p`,{children:e.body})]},e.id))})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a,{})]})}var l={title:`Privacy Policy`,headingTag:`h1`,body:[`This Privacy Policy explains how Stars777 handles information you share with us when you browse the website, contact support, submit forms, or use platform features.`,`1. Information We Collect

We may collect contact details, messages you send through forms, support conversations, device and browser information, and general usage data needed to operate, secure, and improve the platform.`,`2. How We Use Information

Stars777 uses this information to respond to support requests, maintain the website, analyze performance, prevent abuse, deliver service updates, and improve the overall player experience.`,`3. Cookies And Analytics

The website may use cookies or similar technologies to remember preferences, understand traffic patterns, and measure feature usage. These tools help us keep the service stable and easier to use.`,`4. Sharing And Disclosure

We do not sell personal information. Data may be shared only with service providers, hosting partners, analytics providers, or legal authorities when operationally necessary or legally required.`,`5. Data Security

We use reasonable administrative and technical safeguards to protect stored information, but no online system can guarantee absolute security. You should also protect your own devices and credentials.`,`6. Your Choices

You can limit what information you submit, request updates to incorrect details, or contact support if you want information removed where applicable. Operational or legal retention requirements may still apply.`,`7. Policy Updates

This policy may be updated from time to time. Continued use of the website after changes are published means the revised policy applies from the posted effective date.`].join(`

`)};function u(e){return(0,s.jsx)([`h1`,`h2`,`h3`,`h4`,`h5`].includes(String(e?.headingTag||``).trim().toLowerCase())?String(e.headingTag).trim().toLowerCase():`h1`,{children:e?.title||l.title})}export{c as default};