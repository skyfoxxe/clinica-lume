// Lume · faixa Básico
// 1) Cada botão de agendar abre o WhatsApp com a mensagem já no assunto.
// 2) As faixas entram uma única vez ao rolar (sem efeito se o navegador não tiver suporte).

(() => {
  const PHONE = '5565999999999'; // a confirmar com a clínica
  const START = 'Olá! Vim pelo site da Lume e gostaria de agendar uma avaliação';

  const TOPICS = {
    geral: `${START}.`,
    acne: `${START} sobre acne adulta.`,
    pinta: `${START} de pintas e sinais.`,
    melasma: `${START} sobre melasma.`,
    cabelo: `${START} sobre queda de cabelo.`,
    rejuvenescer: `${START} sobre rejuvenescimento.`
  };

  document.querySelectorAll('[data-wa]').forEach((a) => {
    const text = TOPICS[a.dataset.wa] || TOPICS.geral;
    a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  });

  // Foto que não carregar: o cartão mantém o formato e mostra a marca.
  document.querySelectorAll('.card-img img').forEach((img) => {
    const empty = () => img.parentElement.classList.add('is-empty');
    if (img.complete && img.naturalWidth === 0) empty();
    else img.addEventListener('error', empty, { once: true });
  });

  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
