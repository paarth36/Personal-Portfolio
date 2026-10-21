(() => {
  const body = document.body;
  const menu = document.querySelector('.menu-overlay');
  const toggle = document.querySelector('.menu-toggle');
  const close = document.querySelector('.menu-close');
  const setMenu = (open) => {
    body.classList.toggle('menu-open', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('b').textContent = open ? '×' : '＋';
  };
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  close.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  const revealItems = document.querySelectorAll('.reveal-up, .practice-row, .project-card, .feature-project, .section-kicker');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item, index) => {
      if (!item.classList.contains('reveal-up')) item.classList.add('reveal-up');
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 75}ms`;
      observer.observe(item);
    });
  } else revealItems.forEach(item => item.classList.add('is-visible'));

  const glow = document.querySelector('.cursor-glow');
  const finePointer = window.matchMedia('(pointer:fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (finePointer && !reducedMotion && glow) {
    window.addEventListener('pointermove', e => {
      glow.style.opacity = '1';
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }, { passive: true });
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * .12;
        const y = (e.clientY - r.top - r.height / 2) * .16;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  const heroVisual = document.querySelector('.hero-visual');
  if (finePointer && !reducedMotion && heroVisual) {
    heroVisual.addEventListener('pointermove', e => {
      const r = heroVisual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      const portrait = heroVisual.querySelector('.portrait-frame');
      portrait.style.transform = `translate(${x * 8}px, ${8 + y * 8}px)`;
    });
    heroVisual.addEventListener('pointerleave', () => {
      heroVisual.querySelector('.portrait-frame').style.transform = '';
    });
  }

  const nav = document.querySelector('.site-header');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 24);
    lastY = y;
  }, { passive: true });
})();
