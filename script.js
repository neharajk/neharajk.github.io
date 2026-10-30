const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-header nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){const nodes=document.querySelectorAll('.project-card,.timeline-entry,.skill');nodes.forEach(n=>n.classList.add('will-reveal'));const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}}),{threshold:.12});nodes.forEach(n=>io.observe(n));}
