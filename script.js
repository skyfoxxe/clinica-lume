// Clínica Lume · Básico
// Três comportamentos: mensagens de WhatsApp, menu no celular e entrada suave das seções.

(() => {
  const WHATSAPP = '5565999999999'; // a confirmar com a clínica

  const MESSAGES = {
    header: 'Olá, vim pelo site da Clínica Lume e gostaria de agendar uma consulta.',
    hero: 'Olá, vim pelo site da Clínica Lume e gostaria de agendar uma consulta.',
    contato: 'Olá, vim pelo site da Clínica Lume e gostaria de saber os horários disponíveis para consulta.',
    lista: 'Olá, vim pelo site da Clínica Lume e gostaria de agendar uma consulta.'
  };

  document.querySelectorAll('[data-wa]').forEach((link) => {
    const text = MESSAGES[link.dataset.wa] || MESSAGES.hero;
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  });

  // Menu (celular)
  const button = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');

  if (button && menu) {
    const label = button.querySelector('.menu-btn-label');
    const setOpen = (open) => {
      button.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      if (label) label.textContent = open ? 'Fechar' : 'Menu';
    };

    button.addEventListener('click', () => {
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });

    window.matchMedia('(min-width: 900px)').addEventListener('change', (event) => {
      if (event.matches) setOpen(false);
    });
  }

  // Imagem externa que falhar: a moldura mantém a proporção e mostra a marca.
  document.querySelectorAll('.frame img').forEach((img) => {
    const fail = () => img.closest('.frame').classList.add('is-empty');
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail, { once: true });
  });

  // Entrada das seções
  const items = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('has-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  items.forEach((el) => observer.observe(el));
})();
