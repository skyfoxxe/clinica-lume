// Lume · Básico
// Dois comportamentos: links de WhatsApp com mensagem por assunto e entrada suave das seções.

(() => {
  const WHATSAPP = '5565999999999'; // a confirmar com a clínica
  const INTRO = 'Olá, vim pelo site da Lume Dermatologia';

  const MESSAGES = {
    geral: `${INTRO} e gostaria de agendar uma consulta.`,
    acne: `${INTRO} e gostaria de agendar uma consulta sobre acne e oleosidade.`,
    manchas: `${INTRO} e gostaria de agendar uma consulta sobre manchas e melasma.`,
    pintas: `${INTRO} e gostaria de agendar uma avaliação de pintas e sinais.`,
    cabelo: `${INTRO} e gostaria de agendar uma consulta sobre queda de cabelo.`,
    rosacea: `${INTRO} e gostaria de agendar uma consulta sobre rosácea e pele sensível.`,
    estetica: `${INTRO} e gostaria de agendar uma consulta sobre rejuvenescimento.`
  };

  document.querySelectorAll('[data-wa]').forEach((link) => {
    const text = MESSAGES[link.dataset.wa] || MESSAGES.geral;
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  });

  // Imagem externa que falhar: a moldura mantém a proporção e mostra a marca.
  document.querySelectorAll('.frame img').forEach((img) => {
    const fail = () => img.closest('.frame').classList.add('is-empty');
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail, { once: true });
  });

  // Entrada das seções: uma vez só. Com movimento reduzido, o CSS mantém só a opacidade.
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) return;

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
