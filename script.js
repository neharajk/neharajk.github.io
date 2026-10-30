const rail=document.querySelector('#projectRail');
document.querySelector('#next').addEventListener('click',()=>rail.scrollBy({left:rail.clientWidth*.82,behavior:'smooth'}));
document.querySelector('#prev').addEventListener('click',()=>rail.scrollBy({left:-rail.clientWidth*.82,behavior:'smooth'}));
let down=false,startX=0,scrollLeft=0;
rail.addEventListener('pointerdown',e=>{down=true;startX=e.clientX;scrollLeft=rail.scrollLeft;rail.setPointerCapture(e.pointerId)});
rail.addEventListener('pointermove',e=>{if(!down)return;rail.scrollLeft=scrollLeft-(e.clientX-startX)});
['pointerup','pointercancel','lostpointercapture'].forEach(evt=>rail.addEventListener(evt,()=>down=false));
const cursor=document.querySelector('#cursorNote');
if(matchMedia('(pointer:fine)').matches){rail.addEventListener('mouseenter',()=>cursor.classList.add('visible'));rail.addEventListener('mouseleave',()=>cursor.classList.remove('visible'));rail.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'})}
// Subtle reveal as sections enter the viewport.
const revealTargets=document.querySelectorAll('.project-card,.tool-group,.timeline-item,.credential-list a');
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(14px)';el.style.transition='opacity .6s ease, transform .6s ease';io.observe(el)})}
document.addEventListener('animationend',e=>{if(e.target.classList.contains('in-view')){e.target.style.opacity='1';e.target.style.transform='none'}});
const style=document.createElement('style');style.textContent='.in-view{opacity:1!important;transform:none!important}';document.head.append(style);
