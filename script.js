// Lume · faixa Básico · corporate-trust
// 1) Os links de agendamento abrem o WhatsApp com a área de atendimento já escrita.
// 2) Sombra no cabeçalho ao rolar e entrada única de cada bloco ao rolar (sem cascata).

(() => {
  const PHONE = '5565999999999'; // a confirmar com a clínica
  const HELLO = 'Olá! Vim pelo site da Lume Dermatologia e gostaria de agendar';

  const TOPICS = {
    geral: `${HELLO} uma consulta.`,
    clinica: `${HELLO} uma consulta de dermatologia clínica.`,
    prevencao: `${HELLO} uma avaliação de pintas (prevenção).`,
    cabelo: `${HELLO} uma consulta sobre cabelos e unhas.`,
    cirurgia: `${HELLO} uma avaliação para pequena cirurgia.`,
    estetica: `${HELLO} uma avaliação de dermatologia estética.`
  };

  document.querySelectorAll('[data-wa]').forEach((a) => {
    const text = TOPICS[a.dataset.wa] || TOPICS.geral;
    a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  });

  // Foto que não carregar: a moldura mantém o formato e indica o que falta.
  document.querySelectorAll('.doctor-photo img').forEach((img) => {
    const empty = () => { img.parentElement.classList.add('is-empty'); img.remove(); };
    if (img.complete && img.naturalWidth === 0) empty();
    else img.addEventListener('error', empty, { once: true });
  });

  // Cabeçalho ganha uma sombra leve quando a página sai do topo.
  const head = document.querySelector('.site-head');
  const onScroll = () => head.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
