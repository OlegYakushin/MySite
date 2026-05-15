(function () {
  var GA_ID = 'G-75T821TKQY';
  var STORAGE_KEY = 'olegotka_cookie_consent_v1';
  var SCRIPT_ID = 'google-analytics-consent-script';
  var STYLE_ID = 'cookie-consent-style';
  var BANNER_ID = 'cookie-consent-banner';
  var PANEL_ID = 'cookie-consent-panel';

  var copy = {
    en: {
      title: 'Analytics cookies',
      body: 'We use Google Analytics to understand page visits and improve the site. Analytics is off until you accept.',
      accept: 'Accept analytics',
      reject: 'Reject',
      settings: 'Cookie settings',
      save: 'Save settings',
      policy: 'Cookie policy',
      analytics: 'Google Analytics',
      analyticsBody: 'Page views, device/browser data, approximate location, and referral source.',
      saved: 'Cookie preferences saved.'
    },
    es: {
      title: 'Cookies de analítica',
      body: 'Usamos Google Analytics para entender visitas y mejorar el sitio. La analítica está desactivada hasta que aceptes.',
      accept: 'Aceptar analítica',
      reject: 'Rechazar',
      settings: 'Configurar cookies',
      save: 'Guardar ajustes',
      policy: 'Política de cookies',
      analytics: 'Google Analytics',
      analyticsBody: 'Vistas de página, datos del dispositivo/navegador, ubicación aproximada y fuente de referencia.',
      saved: 'Preferencias de cookies guardadas.'
    },
    ru: {
      title: 'Аналитические cookies',
      body: 'Мы используем Google Analytics, чтобы понимать посещения страниц и улучшать сайт. Аналитика выключена, пока вы не согласитесь.',
      accept: 'Разрешить аналитику',
      reject: 'Отклонить',
      settings: 'Настройки cookies',
      save: 'Сохранить',
      policy: 'Политика cookies',
      analytics: 'Google Analytics',
      analyticsBody: 'Просмотры страниц, данные устройства/браузера, примерная геолокация и источник перехода.',
      saved: 'Настройки cookies сохранены.'
    }
  };

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  function getLang() {
    var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
    return copy[lang] ? lang : 'en';
  }

  function t(key) {
    return copy[getLang()][key] || copy.en[key];
  }

  function getChoice() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch (e) {
      return null;
    }
  }

  function setChoice(value) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: value, updatedAt: new Date().toISOString() }));
    } catch (e) {}
  }

  function updateConsent(analytics) {
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  function loadAnalytics() {
    if (document.getElementById(SCRIPT_ID)) return;
    var script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-75T821TKQY';
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  function deleteCookie(name) {
    var host = location.hostname;
    var domains = [host, '.' + host.replace(/^www\./, '')];
    domains.forEach(function (domain) {
      document.cookie = name + '=; Max-Age=0; path=/; domain=' + domain;
    });
    document.cookie = name + '=; Max-Age=0; path=/';
  }

  function clearAnalyticsCookies() {
    ['_ga', '_ga_75T821TKQY', '_gid', '_gat', '_gat_gtag_G_75T821TKQY'].forEach(deleteCookie);
  }

  function applyChoice(analytics) {
    setChoice(analytics);
    updateConsent(analytics);
    if (analytics) {
      loadAnalytics();
    } else {
      clearAnalyticsCookies();
    }
    removePanel();
  }

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '.cc-banner{position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;margin:auto;max-width:760px;background:#0b1020;color:#f8fafc;border:1px solid rgba(148,163,184,.28);box-shadow:0 18px 70px rgba(0,0,0,.42);border-radius:8px;padding:18px;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',
      '.cc-banner h2{margin:0 0 6px;font-size:18px;line-height:1.2;letter-spacing:0}',
      '.cc-banner p{margin:0;color:#cbd5e1;font-size:14px;line-height:1.45}',
      '.cc-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between}',
      '.cc-copy{max-width:470px}',
      '.cc-actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:flex-end}',
      '.cc-btn{border:1px solid rgba(148,163,184,.35);background:transparent;color:#f8fafc;border-radius:6px;padding:9px 12px;font:600 13px/1 Inter,system-ui,sans-serif;cursor:pointer}',
      '.cc-btn:hover{border-color:rgba(248,250,252,.7)}',
      '.cc-btn-primary{background:#f8fafc;color:#0b1020;border-color:#f8fafc}',
      '.cc-link{color:#93c5fd;text-decoration:none;font-size:13px}',
      '.cc-link:hover{text-decoration:underline}',
      '.cc-panel{display:grid;gap:14px}',
      '.cc-toggle{display:flex;gap:12px;align-items:flex-start;padding:12px;border:1px solid rgba(148,163,184,.24);border-radius:8px;background:rgba(255,255,255,.04)}',
      '.cc-toggle input{width:18px;height:18px;margin-top:1px;accent-color:#93c5fd}',
      '.cc-footer-button{font:inherit;font-size:.875rem;color:rgba(203,213,225,.78);background:transparent;border:0;padding:0;text-decoration:none;cursor:pointer;transition:color 200ms ease}',
      '.cc-footer-button:hover{color:#f8fafc}',
      '@media (max-width:640px){.cc-row{display:grid}.cc-actions{justify-content:stretch}.cc-btn{flex:1}.cc-copy{max-width:none}}'
    ].join('');
    document.head.appendChild(style);
  }

  function removePanel() {
    var el = document.getElementById(BANNER_ID);
    if (el) el.remove();
  }

  function showPanel(settingsMode) {
    injectStyle();
    removePanel();
    var choice = getChoice();
    var enabled = choice ? !!choice.analytics : false;
    var panel = document.createElement('div');
    panel.id = BANNER_ID;
    panel.className = 'cc-banner';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-labelledby', PANEL_ID + '-title');
    panel.innerHTML = settingsMode
      ? '<div class="cc-panel" id="' + PANEL_ID + '">' +
        '<div><h2 id="' + PANEL_ID + '-title">' + t('settings') + '</h2><p>' + t('body') + ' <a class="cc-link" href="/cookie-policy.html">' + t('policy') + '</a></p></div>' +
        '<label class="cc-toggle"><input type="checkbox" data-cc-analytics ' + (enabled ? 'checked' : '') + '><span><strong>' + t('analytics') + '</strong><br><span>' + t('analyticsBody') + '</span></span></label>' +
        '<div class="cc-actions"><button class="cc-btn" data-cc-reject>' + t('reject') + '</button><button class="cc-btn cc-btn-primary" data-cc-save>' + t('save') + '</button></div>' +
        '</div>'
      : '<div class="cc-row"><div class="cc-copy"><h2 id="' + PANEL_ID + '-title">' + t('title') + '</h2><p>' + t('body') + ' <a class="cc-link" href="/cookie-policy.html">' + t('policy') + '</a></p></div>' +
        '<div class="cc-actions"><button class="cc-btn" data-cc-settings>' + t('settings') + '</button><button class="cc-btn" data-cc-reject>' + t('reject') + '</button><button class="cc-btn cc-btn-primary" data-cc-accept>' + t('accept') + '</button></div></div>';
    document.body.appendChild(panel);
    panel.querySelector('[data-cc-accept]')?.addEventListener('click', function () { applyChoice(true); });
    panel.querySelector('[data-cc-reject]')?.addEventListener('click', function () { applyChoice(false); });
    panel.querySelector('[data-cc-settings]')?.addEventListener('click', function () { showPanel(true); });
    panel.querySelector('[data-cc-save]')?.addEventListener('click', function () {
      applyChoice(!!panel.querySelector('[data-cc-analytics]')?.checked);
    });
  }

  function addSettingsLink() {
    if (document.querySelector('[data-cookie-settings-button]')) return;
    var host = document.querySelector('[data-cookie-settings-host], .f-links, .footer-links, footer .footer-inner, footer');
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'cc-footer-button';
    button.setAttribute('data-cookie-settings-button', '');
    button.textContent = t('settings');
    button.addEventListener('click', function () { showPanel(true); });
    if (host) {
      host.appendChild(button);
    } else {
      button.style.position = 'fixed';
      button.style.left = '12px';
      button.style.bottom = '12px';
      button.style.zIndex = '2147482999';
      button.style.color = 'inherit';
      document.body.appendChild(button);
    }
  }

  function bindSettingsTriggers() {
    document.querySelectorAll('[data-cookie-settings-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () { showPanel(true); });
    });
  }

  function init() {
    injectStyle();
    var choice = getChoice();
    if (choice && choice.analytics === true) {
      updateConsent(true);
      loadAnalytics();
    } else if (choice && choice.analytics === false) {
      updateConsent(false);
      clearAnalyticsCookies();
    } else {
      showPanel(false);
    }
    bindSettingsTriggers();
    addSettingsLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
