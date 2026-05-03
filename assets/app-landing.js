(function(){
  const config = window.APP_LANDING_CONFIG;
  const root = document.getElementById('app-root');
  if (!config || !root) return;

  function escapeText(value){
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  }

  function getLangData(lang){
    if (config.locales && config.locales[lang]) return config.locales[lang];
    return config;
  }

  function splitTagline(value){
    const parts = String(value || '').split(' ');
    if (parts.length < 4) return [value, ''];
    return [parts.slice(0, -2).join(' '), parts.slice(-2).join(' ')];
  }

  function imgOrPlaceholder(image, alt, className=''){
    if (!image) return `<div class="phone-placeholder ${className}"><span class="placeholder-line"></span><span class="placeholder-block"></span><span class="placeholder-card"></span></div>`;
    return `<img src="${escapeText(image)}" alt="${escapeText(alt)}" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'phone-placeholder'}))">`;
  }

  function renderChrome(data, lang){
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = 'dark';
    document.title = `${data.appName} - ${data.tagline}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', data.metaDescription || data.description);
    document.querySelectorAll('[data-app-name]').forEach(el => { el.textContent = data.appName; });
    document.querySelectorAll('[data-app-footer]').forEach(el => { el.textContent = data.footerDescription || data.description; });
    document.querySelectorAll('[data-app-copy]').forEach(el => { el.textContent = data.copyright || `(c) 2026 ${data.appName}. All rights reserved.`; });
    document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  }

  function renderNav(data){
    const nav = data.nav || {};
    return `
      <a href="#features" class="nav-a">${escapeText(nav.features || 'Features')}</a>
      <a href="#preview" class="nav-a">${escapeText(nav.preview || 'Preview')}</a>
      <a href="#how-it-works" class="nav-a">${escapeText(nav.how || 'How it works')}</a>
      <a href="#faq" class="nav-a">${escapeText(nav.faq || 'FAQ')}</a>
    `;
  }

  function renderCtas(data, includeSecondary = true){
    const ctas = data.ctas && data.ctas.length
      ? data.ctas.filter(cta => includeSecondary || (cta.external !== false && !String(cta.href || '').startsWith('#')))
      : [
        { label: data.primaryCta, href: data.appStoreUrl, variant: 'primary', external: true },
        ...(includeSecondary ? [{ label: data.secondaryCta, href: '#features', variant: 'ghost', external: false }] : [])
      ];
    return ctas.map(cta => {
      if (!cta || !cta.label || !cta.href) return '';
      const variant = cta.variant === 'ghost' ? 'btn-ghost' : 'btn-primary';
      const target = cta.external === false || String(cta.href).startsWith('#') ? '' : ' target="_blank" rel="noopener"';
      return `<a href="${escapeText(cta.href)}" class="btn ${variant}"${target}>${escapeText(cta.label)}</a>`;
    }).join('');
  }

  function renderPage(lang){
    const data = getLangData(lang);
    const [headline, highlight] = splitTagline(data.tagline);
    const heroActionClass = data.ctas && data.ctas.length > 2 ? ' hero-actions-many' : '';
    renderChrome(data, lang);
    const navLinks = document.querySelector('[data-nav-links]');
    if (navLinks) navLinks.innerHTML = renderNav(data);

    root.innerHTML = `
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <div class="app-kicker reveal">
              <div class="app-icon" aria-hidden="true">${data.icon ? `<img src="${escapeText(data.icon)}" alt="">` : '<span class="app-icon-fallback"></span>'}</div>
              <div><span class="badge-pill"><span class="dot"></span>${escapeText(data.badge)}</span><p class="app-label">${escapeText(data.appName)}</p></div>
            </div>
            <h1 class="hero-h1 reveal">${escapeText(headline)}${highlight ? `<br><span class="grad-text">${escapeText(highlight)}</span>` : ''}</h1>
            <p class="hero-sub reveal">${escapeText(data.description)}</p>
            <div class="hero-actions${heroActionClass} reveal">
              ${renderCtas(data, true)}
            </div>
            <div class="hero-points reveal">${(data.heroTags || []).map(tag => `<span class="tag">${escapeText(tag)}</span>`).join('')}</div>
          </div>
          <div class="device-wrap reveal" aria-label="${escapeText(data.appName)} app preview">
            <div class="device-halo"></div>
            <div class="phone"><div class="phone-screen">${imgOrPlaceholder(data.heroImage, `${data.appName} main screen`)}</div></div>
          </div>
        </div>
      </section>
      <section id="features"><div class="container"><div class="sec-head reveal"><span class="sec-pre">// ${escapeText(data.labels?.features || 'Features')}</span><h2 class="sec-h2">${escapeText(data.featuresTitle)}</h2><p class="sec-sub">${escapeText(data.featuresSubtitle)}</p></div><div class="features-grid">${(data.features || []).map(item => `<article class="card reveal"><div class="feature-icon">${escapeText(item.icon)}</div><h3 class="card-title">${escapeText(item.title)}</h3><p class="card-text">${escapeText(item.text)}</p></article>`).join('')}</div></div></section>
      <section id="preview"><div class="container"><div class="sec-head reveal"><span class="sec-pre">// ${escapeText(data.labels?.preview || 'Preview')}</span><h2 class="sec-h2">${escapeText(data.previewTitle)}</h2><p class="sec-sub">${escapeText(data.previewSubtitle)}</p></div><div class="shots-grid">${(data.screenshots || []).map(item => `<article class="shot-card reveal"><div class="shot-phone">${imgOrPlaceholder(item.image, item.title)}</div><p class="shot-caption">${escapeText(item.title)}</p></article>`).join('')}</div></div></section>
      <section id="how-it-works"><div class="container"><div class="sec-head reveal"><span class="sec-pre">// ${escapeText(data.labels?.how || 'Flow')}</span><h2 class="sec-h2">${escapeText(data.stepsTitle)}</h2><p class="sec-sub">${escapeText(data.stepsSubtitle)}</p></div><div class="steps-grid">${(data.steps || []).map((step,index) => `<article class="card reveal"><div class="step-num">${String(index + 1).padStart(2,'0')}</div><h3 class="card-title">${escapeText(step.title)}</h3><p class="card-text">${escapeText(step.text)}</p></article>`).join('')}</div></div></section>
      ${data.useCases ? `<section id="use-cases"><div class="container"><div class="sec-head reveal"><span class="sec-pre">// ${escapeText(data.labels?.useCases || 'Use cases')}</span><h2 class="sec-h2">${escapeText(data.useCasesTitle)}</h2><p class="sec-sub">${escapeText(data.useCasesSubtitle)}</p></div><div class="use-grid">${data.useCases.map(item => `<article class="card reveal"><h3 class="card-title">${escapeText(item.title)}</h3><p class="card-text">${escapeText(item.text)}</p></article>`).join('')}</div></div></section>` : ''}
      <section id="faq"><div class="container"><div class="sec-head reveal"><span class="sec-pre">// FAQ</span><h2 class="sec-h2">${escapeText(data.faqTitle)}</h2><p class="sec-sub">${escapeText(data.faqSubtitle)}</p>${data.disclaimer ? `<p class="disclaimer">${escapeText(data.disclaimer)}</p>` : ''}</div><div class="faq-list">${(data.faq || []).map((item,index) => `<details class="reveal" ${index === 0 ? 'open' : ''}><summary>${escapeText(item.q)}</summary><p>${escapeText(item.a)}</p></details>`).join('')}</div></div></section>
      <section class="final-cta" id="download"><div class="cta-inner"><span class="badge-pill reveal"><span class="dot"></span>${escapeText(data.badge)}</span><h2 class="cta-h2 reveal">${escapeText(data.finalTitle)}</h2><p class="sec-sub reveal" style="text-align:center">${escapeText(data.finalText)}</p><div class="cta-btns reveal">${renderCtas(data, false)}</div></div></section>
    `;
    reveal();
  }

  function reveal(){
    const items = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches){items.forEach(item => item.classList.add('in'));return;}
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(!entry.isIntersecting)return; entry.target.classList.add('in'); observer.unobserve(entry.target); }); }, {threshold:.08});
    items.forEach(item => observer.observe(item));
  }

  const available = config.locales ? Object.keys(config.locales) : [config.lang || 'en'];
  let current = config.defaultLang || config.lang || available[0] || 'en';
  try {
    const saved = localStorage.getItem(`${config.storageKey || config.slug || 'app'}-lang`);
    if (saved && available.includes(saved)) current = saved;
  } catch(e) {}
  document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
    current = btn.dataset.lang;
    try { localStorage.setItem(`${config.storageKey || config.slug || 'app'}-lang`, current); } catch(e) {}
    renderPage(current);
  }));
  try { localStorage.setItem('theme','dark'); localStorage.setItem('app-template-theme','dark'); } catch(e) {}
  renderPage(current);
})();
