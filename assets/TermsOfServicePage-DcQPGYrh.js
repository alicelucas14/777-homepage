import{f as e,u as t}from"./chunk-EVOBXE3Y-Cd-9FhKK.js";import{t as n}from"./index-HLdghiY6.js";import{n as r,r as i,t as a}from"./LiveChatWidget-DiYxfAKR.js";var o=e(t(),1),s=n();function c(){let[e,t]=(0,o.useState)(!1),[n,c]=(0,o.useState)(l),d=(0,o.useMemo)(()=>`/api`,[]),f=[{id:`about-us`,label:`About`,href:`/#about-us`},{id:`contact`,label:`Contact`,href:`/contact`},{id:`faq`,label:`FAQ`,href:`/#faq`},{id:`blog`,label:`Blog`,href:`/#blog`},{id:`reviews`,label:`Reviews`,href:`/#reviews`}];(0,o.useEffect)(()=>{let e=!0;return(async()=>{try{let t=await fetch(`${d}/site-settings`);if(!t.ok)return;let n=await t.json();e&&n?.termsPage&&c({...l,...n.termsPage})}catch{}})(),()=>{e=!1}},[d]);let p=String(n.body||``).split(/\n\n+/).map(e=>e.trim()).filter(Boolean),m=p[0]||``,h=p.slice(1).map((e,t)=>{let[n,...r]=e.split(`
`),i=/^\d+\./.test(n.trim());return{id:`terms-section-${t}`,heading:i?n.trim():``,body:i?r.join(`
`).trim():e}});return(0,s.jsxs)(`div`,{className:`site-shell`,children:[(0,s.jsx)(i,{menuItems:f,menuOpen:e,setMenuOpen:t,variant:`public`,actionButton:{href:`https://stars777.in/apk/3fe0463502524ffea0f673dda587370e.apk`,label:`Download App`}}),(0,s.jsx)(`main`,{children:(0,s.jsxs)(`section`,{className:`section-block legal-page-section`,children:[u(n),(0,s.jsx)(`p`,{className:`legal-page-intro`,children:m}),(0,s.jsx)(`div`,{className:`legal-page-grid`,children:h.map(e=>(0,s.jsxs)(`article`,{className:`legal-page-card`,children:[e.heading?(0,s.jsx)(`h3`,{children:e.heading}):null,(0,s.jsx)(`p`,{children:e.body})]},e.id))})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a,{})]})}var l={title:`Terms of Service For Stars777`,headingTag:`h1`,body:[`Welcome to Stars777! These Terms of Service ("Terms") govern your use of the Stars777 mobile application ("Application") and the services provided therein ("Services"), operated by Stars777 ("we", "us", "our").`,`1. Acceptance of Terms

By downloading, installing, accessing, or using the Application or Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms or our Privacy Policy, please do not use the Application or Services.`,`2. License

Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Application solely for your personal, non-commercial purposes. You may not modify, distribute, reproduce, or create derivative works based on the Application.`,`3. User Accounts

You may need to create an account to access certain features of the Application. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`,`4. Prohibited Conduct

You agree not to:
- Use the Application or Services for any illegal or unauthorized purpose.
- Modify, adapt, or hack the Application or modify another website so as to falsely imply that it is associated with the Application.
- Attempt to gain unauthorized access to our servers or networks.
- Interfere with or disrupt the integrity or performance of the Application or Services.`,`5. Intellectual Property

The Application and all content and materials therein are owned by us or our licensors and are protected by intellectual property laws. You may not use our trademarks, logos, or other proprietary information without our express written permission.`,`6. Stars777 Privacy

Your use of the Application and Services is subject to our Privacy Policy. By using the Application or Services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.`,`7. Termination

We may terminate or suspend your access to the Application or Services at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.`,`8. Disclaimer of Warranties

The Application and Services are provided on an "as is" and "as available" basis. We do not warrant that the Application will be uninterrupted, error-free, secure, or that any defects will be corrected.`,`9. Limitation of Liability

In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of the Application or Services.`,`10. Stars777 Governing Law

These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.`,`11. Changes to Terms

We reserve the right to update or modify these Terms at any time without prior notice. We will post the updated Terms on the Application. Your continued use of the Application or Services after any such changes constitutes your acceptance of the new Terms.`,`12. Contact Us

If you have any questions about these Terms, please contact us`].join(`

`)};function u(e){return(0,s.jsx)([`h1`,`h2`,`h3`,`h4`,`h5`].includes(String(e?.headingTag||``).trim().toLowerCase())?String(e.headingTag).trim().toLowerCase():`h1`,{children:e?.title||l.title})}export{c as default};