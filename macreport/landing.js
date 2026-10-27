(() => {
  const appearance = document.getElementById('appearance');
  const modes = ['system', 'light', 'dark'];
  let stored = 'system';
  try { const value = localStorage.getItem('macreport-appearance'); if (modes.includes(value)) stored = value; } catch {}
  function setAppearance(mode) {
    if (mode === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = mode;
    appearance.value = mode;
  }
  setAppearance(stored);
  appearance.addEventListener('change', () => {
    setAppearance(appearance.value);
    try { localStorage.setItem('macreport-appearance', appearance.value); } catch {}
  });
  const form = document.getElementById('early-access');
  const status = document.getElementById('signup-status');
  const button = form.querySelector('button[type=submit]');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (button.disabled || !form.reportValidity()) return;
    status.textContent = ''; status.className = 'signup-status';
    button.disabled = true; button.textContent = 'Joining…'; form.setAttribute('aria-busy', 'true');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: new URLSearchParams(new FormData(form)), signal: controller.signal, credentials: 'omit' });
      const result = await response.json();
      if (!response.ok || result.saved !== true) throw new Error(result.message || 'We couldn’t save your email. Please try again.');
      status.classList.add('success'); status.textContent = 'You’re on the list. We’ll email you when an invitation is available.';
      form.reset(); button.textContent = 'Joined'; status.focus();
    } catch (error) {
      status.classList.add('error'); status.textContent = error.name === 'AbortError' || error instanceof TypeError ? 'We couldn’t confirm your signup. Check your connection and try again.' : error.message;
      button.textContent = 'Join the waitlist'; status.focus();
    } finally {
      clearTimeout(timer); button.disabled = false; form.removeAttribute('aria-busy');
    }
  });
})();
