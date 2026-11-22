// Lume · Básico
// Mensagens de WhatsApp, a linha de sol da abertura e a entrada suave das seções.

(() => {
  const WHATSAPP = '5565999999999'; // a confirmar com a clínica

  const MESSAGES = {
    default: 'Olá, vim pelo site da Lume e gostaria de marcar uma consulta.',
    agenda: 'Olá, vim pelo site da Lume e gostaria de saber os horários disponíveis para consulta.'
  };

  document.querySelectorAll('[data-wa]').forEach((link) => {
    const text = MESSAGES[link.dataset.wa] || MESSAGES.default;
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  });

  // Linha de sol: hora atual em Cuiabá e um lembrete de fotoproteção conforme o horário.
  const timeEl = document.querySelector('[data-sun-time]');
  const noteEl = document.querySelector('[data-sun-note]');

  if (timeEl && noteEl) {
    const NOTES = {
      peak: 'Entre 10h e 16h o sol é mais intenso. Sombra e reaplicação do protetor.',
      day: 'Fora do pico de sol. O protetor continua valendo durante o dia.',
      night: 'Noite. Uma boa hora para a rotina de cuidado indicada na consulta.'
    };

    let formatter;
    try {
      formatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Cuiaba', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      });
    } catch (error) {
      formatter = null;
    }

    const update = () => {
      if (!formatter) return;
      const parts = formatter.formatToParts(new Date());
      const hour = Number(parts.find((p) => p.type === 'hour')?.value);
      const minute = parts.find((p) => p.type === 'minute')?.value;
      if (Number.isNaN(hour) || !minute) return;

      const period = hour >= 10 && hour < 16 ? 'peak' : hour >= 6 && hour < 18 ? 'day' : 'night';
      const timeText = `Agora em Cuiabá, ${hour}h${minute}`;
      if (timeEl.textContent !== timeText) timeEl.textContent = timeText;
      if (noteEl.textContent !== NOTES[period]) noteEl.textContent = NOTES[period];
    };

    update();
    setInterval(update, 30000);
  }

  // Imagem externa que falhar: a moldura mantém a proporção e mostra a marca.
  document.querySelectorAll('.frame img').forEach((img) => {
    const fail = () => img.closest('.frame').classList.add('is-empty');
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail, { once: true });
  });

  // Entrada das seções: uma vez só.
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Com movimento reduzido o CSS mantém só a opacidade.
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
