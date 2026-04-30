(function () {
  if (!navigator.modelContext || typeof navigator.modelContext.registerTool !== 'function') {
    return;
  }

  const controller = new AbortController();
  const signal = controller.signal;

  const services = [
    { name: 'MVP Development', description: 'Native Swift and SwiftUI MVPs from idea to App Store.' },
    { name: 'Full iOS App', description: 'Scalable native iOS app architecture and polished UX.' },
    { name: 'Backend & APIs', description: 'Supabase, Firebase, REST integrations, analytics and subscriptions.' },
    { name: 'App Store Launch', description: 'Submission, ASO, screenshots, metadata and release support.' },
    { name: 'Ongoing Support', description: 'Roadmap delivery, bug fixes and iOS version updates.' },
    { name: 'Tech Consulting', description: 'Architecture review, code audit and launch readiness.' }
  ];

  const projects = [
    { name: 'FitTrack Pro', category: 'Health & Fitness', url: '/cases/fittrack.html' },
    { name: 'Vaultly', category: 'Fintech', url: '/cases/vaultly.html' },
    { name: 'ShiftSync', category: 'SaaS', url: '/cases/shiftync.html' },
    { name: 'Days', category: 'Travel', url: '/#work' },
    { name: 'Koinly Mobile', category: 'Crypto Tax', url: '/#work' },
    { name: 'TaskHive', category: 'Productivity', url: '/#work' },
    { name: 'MenuFlow', category: 'Restaurants', url: '/#work' }
  ];

  navigator.modelContext.registerTool({
    name: 'get_services',
    description: 'Return olegotka iOS MVP Studio service offerings.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    execute: async () => ({ services })
  }, { signal });

  navigator.modelContext.registerTool({
    name: 'get_projects',
    description: 'Return selected olegotka portfolio projects and case study URLs.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    execute: async () => ({ projects })
  }, { signal });

  navigator.modelContext.registerTool({
    name: 'get_contact_options',
    description: 'Return contact and booking options for starting an iOS MVP project.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    execute: async () => ({
      bookingUrl: 'https://cal.com/olegotka/first-call',
      email: 'hello@olegotka.es',
      responseTime: 'Usually within 24 hours'
    })
  }, { signal });

  window.addEventListener('pagehide', () => controller.abort(), { once: true });
}());
