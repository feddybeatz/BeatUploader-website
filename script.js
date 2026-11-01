(() => {
  const config = window.BeatUploaderSite || {};
  const downloadUrl = config.downloadUrl || 'https://github.com/feddybeatz/BeatUploaderVST/releases';

  document.querySelectorAll('[data-download-link]').forEach((link) => {
    link.href = downloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }));
  }
})();
