(() => {
  const progress = document.querySelector('.reading-progress');
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false');
  }));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.section, .job, .skill-group, .signal-card, .contact-content').forEach(el => {
    el.classList.add('reveal'); observer.observe(el);
  });
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const activeObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => activeObserver.observe(section));
  document.querySelectorAll('.certificates summary').forEach(summary => summary.addEventListener('click', () => {
    const icon = summary.querySelector('span'); if (icon) icon.textContent = summary.parentElement.open ? '＋' : '−';
  }));
})();
