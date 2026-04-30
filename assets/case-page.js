const CASES = {
  fittrack: {
    en: {
      back:'All work', cta:'Build something similar →', backWork:'← Back to work',
      cat:'Health & Fitness · iOS App · 2024', sub:'Workout tracking platform for personal trainers and their clients — from zero to 10,000 users in three months.',
      metrics:['Users in 3 months','To first version','App Store rating','Paid acquisition'],
      screens:['Dashboard','Workout Builder','Progress'],
      labels:['// the challenge','// the brief','// the solution','// results'],
      headings:["A tool that didn't exist",'Scope','What was built','Business impact'],
      body:[
        'Mikhail ran a personal training business with 30+ clients. He was managing workouts in spreadsheets, sending PDFs for programs, and tracking progress with photos via WhatsApp. Every week he spent 8-10 hours on administrative work that could be automated.',
        'Existing apps were either too generic or too expensive for a solo trainer. He needed something purpose-built, fast.',
        'A native SwiftUI app with trainer dashboard, workout builder, client progress, HealthKit charts and RevenueCat subscriptions.',
        'The launch gave the trainer a paid product instead of an internal tool: less admin, better retention, and a clear upgrade path.'
      ],
      loading:'Loading language'
    },
    es: {
      back:'Trabajos', cta:'Crear algo similar →', backWork:'← Volver a trabajos',
      cat:'Salud y fitness · App iOS · 2024', sub:'Plataforma de seguimiento de entrenamientos para entrenadores personales y clientes: de cero a 10.000 usuarios en tres meses.',
      metrics:['Usuarios en 3 meses','Hasta primera versión','Valoración App Store','Adquisición pagada'],
      screens:['Panel','Constructor de entrenos','Progreso'],
      labels:['// el reto','// el alcance','// la solución','// resultados'],
      headings:['Una herramienta que no existía','Alcance','Qué se construyó','Impacto de negocio'],
      body:[
        'Mikhail gestionaba un negocio de entrenamiento con más de 30 clientes. Usaba hojas de cálculo, PDFs y fotos por WhatsApp. Cada semana perdía 8-10 horas en tareas administrativas automatizables.',
        'Las apps existentes eran demasiado genéricas o caras para un entrenador independiente. Necesitaba algo específico y rápido.',
        'Una app nativa SwiftUI con panel de entrenador, constructor de rutinas, progreso del cliente, gráficos HealthKit y suscripciones con RevenueCat.',
        'El lanzamiento convirtió una herramienta interna en un producto de pago: menos administración, más retención y una ruta clara de crecimiento.'
      ],
      loading:'Cargando idioma'
    },
    ru: {
      back:'Все работы', cta:'Сделать похожее →', backWork:'← Назад к работам',
      cat:'Health & Fitness · iOS-приложение · 2024', sub:'Платформа тренировок для персональных тренеров и клиентов: от нуля до 10 000 пользователей за три месяца.',
      metrics:['Пользователей за 3 месяца','До первой версии','Рейтинг App Store','Платное привлечение'],
      screens:['Дашборд','Конструктор тренировок','Прогресс'],
      labels:['// задача','// объём','// решение','// результаты'],
      headings:['Инструмент, которого не было','Объём','Что было сделано','Бизнес-эффект'],
      body:[
        'Михаил вёл персональные тренировки для 30+ клиентов: таблицы, PDF-программы и фотоотчёты в WhatsApp. Каждую неделю 8-10 часов уходило на ручную работу.',
        'Готовые приложения были либо слишком общими, либо слишком дорогими для solo-тренера. Нужно было быстрое специализированное решение.',
        'Нативное SwiftUI-приложение с дашбордом тренера, конструктором тренировок, прогрессом клиента, графиками HealthKit и подписками RevenueCat.',
        'Запуск превратил внутренний инструмент в платный продукт: меньше админки, выше удержание и понятный путь развития.'
      ],
      loading:'Загружаю язык'
    }
  },
  vaultly: {
    en: {
      back:'All work', cta:'Build something similar →', backWork:'← Back to work',
      cat:'Fintech · iOS App · 2024', sub:'Personal finance app with real bank synchronisation — because manual entry is where good intentions go to die.',
      metrics:['Users, month 1','App Store rating','Build to launch','Churn, 90 days'],
      screens:['Accounts','Transactions','Analytics'],
      labels:['// the problem','// the brief','// solution','// results'],
      headings:['The data was always wrong','Scope','Bank sync without the mess','What changed'],
      body:[
        'Manual expense tracking broke down quickly: missed transactions, wrong categories, and monthly summaries that did not match reality.',
        'The product needed European bank sync, smart categorisation, budget alerts and a weekly digest in Spanish.',
        'A SwiftUI fintech app with Plaid OAuth, Core Data caching, secure transaction views and lightweight spending analytics.',
        'Users got accurate finances without manual entry, and the founder had a polished MVP ready for investor demos.'
      ],
      loading:'Loading language'
    },
    es: {
      back:'Trabajos', cta:'Crear algo similar →', backWork:'← Volver a trabajos',
      cat:'Fintech · App iOS · 2024', sub:'App de finanzas personales con sincronización bancaria real, porque introducir datos a mano acaba rompiendo el hábito.',
      metrics:['Usuarios, mes 1','Valoración App Store','De build a launch','Churn, 90 días'],
      screens:['Cuentas','Transacciones','Analítica'],
      labels:['// el problema','// el alcance','// solución','// resultados'],
      headings:['Los datos siempre fallaban','Alcance','Sincronización bancaria sin caos','Qué cambió'],
      body:[
        'El control manual de gastos fallaba rápido: transacciones olvidadas, categorías incorrectas y resúmenes mensuales irreales.',
        'El producto necesitaba sincronización con bancos europeos, categorización inteligente, alertas de presupuesto y resumen semanal en español.',
        'Una app fintech SwiftUI con OAuth de Plaid, caché Core Data, vistas seguras de transacciones y analítica ligera de gasto.',
        'Los usuarios obtuvieron finanzas precisas sin entrada manual, y la fundadora un MVP pulido para demos con inversores.'
      ],
      loading:'Cargando idioma'
    },
    ru: {
      back:'Все работы', cta:'Сделать похожее →', backWork:'← Назад к работам',
      cat:'Fintech · iOS-приложение · 2024', sub:'Приложение для личных финансов с реальной синхронизацией банков: без ручного ввода, где обычно всё ломается.',
      metrics:['Пользователей за 1 месяц','Рейтинг App Store','От сборки до запуска','Отток за 90 дней'],
      screens:['Счета','Транзакции','Аналитика'],
      labels:['// проблема','// объём','// решение','// результаты'],
      headings:['Данные всегда были неточными','Объём','Банковская синхронизация без хаоса','Что изменилось'],
      body:[
        'Ручной учёт расходов быстро ломался: пропущенные транзакции, неверные категории и месячные отчёты, не похожие на реальность.',
        'Нужны были синхронизация с европейскими банками, умная категоризация, бюджетные уведомления и еженедельный дайджест на испанском.',
        'SwiftUI fintech-приложение с Plaid OAuth, Core Data кешем, безопасными экранами транзакций и лёгкой аналитикой расходов.',
        'Пользователи получили точные финансы без ручного ввода, а основательница — аккуратный MVP для инвесторских демо.'
      ],
      loading:'Загружаю язык'
    }
  },
  shiftync: {
    en: {
      back:'All work', cta:'Build something similar →', backWork:'← Back to work',
      cat:'SaaS · iOS App · 2024', sub:'Team scheduling for shift workers with realtime updates and clean manager workflows.',
      metrics:['Sync latency','Teams onboarded','Build sprint','Schedule conflicts'],
      screens:['Schedule','Team','Realtime'],
      labels:['// the problem','// the brief','// solution','// results'],
      headings:['Scheduling was too fragile','Scope','Realtime by default','Operational impact'],
      body:[
        'Managers were editing schedules in spreadsheets and sending screenshots to staff. Every change created confusion.',
        'The app needed role-based schedules, swaps, push notifications and realtime updates that felt instant.',
        'A SwiftUI app backed by Supabase Realtime with manager tools, employee views and conflict detection.',
        'The team reduced schedule disputes, saw updates instantly and removed manual screenshot workflows.'
      ],
      loading:'Loading language'
    },
    es: {
      back:'Trabajos', cta:'Crear algo similar →', backWork:'← Volver a trabajos',
      cat:'SaaS · App iOS · 2024', sub:'Planificación de turnos para equipos con actualizaciones en tiempo real y flujos limpios para managers.',
      metrics:['Latencia de sync','Equipos activos','Sprint de build','Conflictos de turnos'],
      screens:['Horario','Equipo','Tiempo real'],
      labels:['// el problema','// el alcance','// solución','// resultados'],
      headings:['La planificación era frágil','Alcance','Tiempo real por defecto','Impacto operativo'],
      body:[
        'Los managers editaban horarios en hojas de cálculo y enviaban capturas al equipo. Cada cambio generaba confusión.',
        'La app necesitaba horarios por rol, cambios de turno, push notifications y actualizaciones instantáneas.',
        'Una app SwiftUI con Supabase Realtime, herramientas para managers, vistas para empleados y detección de conflictos.',
        'El equipo redujo disputas de horario, recibió cambios al instante y eliminó el flujo manual de capturas.'
      ],
      loading:'Cargando idioma'
    },
    ru: {
      back:'Все работы', cta:'Сделать похожее →', backWork:'← Назад к работам',
      cat:'SaaS · iOS-приложение · 2024', sub:'Планирование смен для команд: обновления в реальном времени и удобные процессы для менеджеров.',
      metrics:['Задержка синхронизации','Подключённых команд','Спринт разработки','Конфликты смен'],
      screens:['Расписание','Команда','Realtime'],
      labels:['// проблема','// объём','// решение','// результаты'],
      headings:['Расписание было слишком хрупким','Объём','Realtime по умолчанию','Операционный эффект'],
      body:[
        'Менеджеры правили расписание в таблицах и отправляли скриншоты сотрудникам. Любое изменение создавало путаницу.',
        'Нужны были расписания по ролям, обмен сменами, push-уведомления и мгновенные обновления.',
        'SwiftUI-приложение на Supabase Realtime с инструментами менеджера, экранами сотрудников и проверкой конфликтов.',
        'Команда сократила споры по расписанию, стала видеть изменения сразу и убрала ручные скриншоты.'
      ],
      loading:'Загружаю язык'
    }
  }
};

const currentCase = document.body.dataset.case;
const pageT = CASES[currentCase] || CASES.fittrack;

function setCaseText(lang){
  const t = pageT[lang] || pageT.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.querySelector('.nav-back-text') && (document.querySelector('.nav-back-text').textContent = t.back);
  document.querySelector('[data-case-cta]') && (document.querySelector('[data-case-cta]').textContent = t.cta);
  document.querySelector('[data-case-back]') && (document.querySelector('[data-case-back]').textContent = t.backWork);
  document.querySelector('.cat-tag') && (document.querySelector('.cat-tag').textContent = t.cat);
  document.querySelector('.case-sub') && (document.querySelector('.case-sub').textContent = t.sub);
  document.querySelectorAll('.cm-l').forEach((el, i) => { if (t.metrics[i]) el.textContent = t.metrics[i]; });
  document.querySelectorAll('.screen-label').forEach((el, i) => { if (t.screens[i]) el.textContent = t.screens[i]; });
  document.querySelectorAll('.sec-label').forEach((el, i) => { if (t.labels[i]) el.textContent = t.labels[i]; });
  document.querySelectorAll('.sec-h2').forEach((el, i) => { if (t.headings[i]) el.textContent = t.headings[i]; });
  document.querySelectorAll('.sec-body').forEach((el, i) => { if (t.body[i]) el.textContent = t.body[i]; });
  document.querySelector('[data-loading-text]') && (document.querySelector('[data-loading-text]').textContent = t.loading);
  try{localStorage.setItem('concept-lang', lang);}catch(e){}
}

function applyCaseLang(lang, animated=false){
  const loader = document.querySelector('.lang-loader');
  if (!animated) { setCaseText(lang); return; }
  loader?.classList.add('active');
  document.body.classList.add('lang-loading');
  window.setTimeout(() => {
    setCaseText(lang);
    document.querySelectorAll('.reveal.in').forEach((el, idx) => {
      el.classList.remove('in');
      window.setTimeout(() => el.classList.add('in'), Math.min(idx, 8) * 30);
    });
    window.setTimeout(() => {
      document.body.classList.remove('lang-loading');
      loader?.classList.remove('active');
    }, 180);
  }, 220);
}

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.innerHTML = theme === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });
  try{localStorage.setItem('site-theme', theme);}catch(e){}
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => applyCaseLang(btn.dataset.lang, true)));
document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')));

let initialLang = 'en';
let initialTheme = 'dark';
try{initialLang = localStorage.getItem('concept-lang') || 'en'; initialTheme = localStorage.getItem('site-theme') || 'dark';}catch(e){}
applyTheme(initialTheme);
applyCaseLang(pageT[initialLang] ? initialLang : 'en');

const mo = window.matchMedia('(prefers-reduced-motion:reduce)');
if(!mo.matches){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
