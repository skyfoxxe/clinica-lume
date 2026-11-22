# Lume · Dermatologia (faixa Básico)

Projeto conceitual de portfólio para uma clínica de dermatologia fictícia em Cuiabá — MT. Esta versão é um conceito novo, escrito do zero: nada do texto, da estrutura ou da composição da versão anterior foi mantido.

## Faixa
Básico (R$ 497 no portfólio, 3 a 5 dias úteis, 1 rodada de ajustes). Uma página, sem formulário, sem menu, interação mínima.

## Conceito
"Lume" é luz. A clínica é apresentada como dermatologia para a pele que vive sob o sol do Centro-Oeste. A página se lê como um pequeno impresso: a marca como título, uma carta assinada pela médica, um índice de assuntos e um guia prático para a primeira consulta.

## Estrutura
1. Abertura: a palavra "Lume" em tamanho de capa, a frase da clínica, a foto de luz e a "linha de sol", que mostra a hora em Cuiabá e um lembrete de fotoproteção conforme o horário
2. Carta: "Por que Lume", em primeira pessoa, assinada com nome, CRM e RQE
3. Índice: assuntos de consultório em ordem alfabética (acne, cabelo, fotoproteção, manchas, pintas, procedimentos, rosácea, unhas)
4. Antes de vir: três orientações práticas para a primeira consulta
5. Agenda (o único bloco escuro) e rodapé com a responsável técnica

## Direção visual
Quiet luxury: marfim `#F7F2EA`, tinta quente `#17130F`, texto secundário `#6E655A` e um único acento latão `#9A7B4F` (clareado para `#C2A57A` no fundo escuro). Bodoni Moda nos títulos e na carta, Hanken Grotesk no texto. Filetes no lugar de cartões, cantos de 2 px, um botão cheio por tela.

## Antes de usar para uma clínica real
Tudo que está marcado com `data-placeholder` no `index.html` é fictício: `nome`, `crm`, `rqe`, `telefone` (também na constante `WHATSAPP` do `script.js`), `endereco`, `horario`, `instagram`. A carta precisa ser reescrita ou aprovada pela médica, já que fala em primeira pessoa. O texto evita promessa de resultado, antes e depois e depoimentos (publicidade médica do CFM).

## Imagens
Fotos gratuitas da Unsplash (licença Unsplash), carregadas do CDN com `srcset`:
- abertura: `TmxUTyL3pvg` (luz de persiana)
- antes de vir: `kD9qprR6HBI` (creme sobre fundo bege)

Se uma imagem falhar, a moldura mantém a proporção e mostra "Lume".

## Movimento (faixa Básico: pouco e discreto)
Criado com a skill animate e revisado com a improve-animations.
- Abertura: um esmaecer com subida de 12 px em três tempos (0, 120 e 240 ms), 700 ms, animação CSS.
- Seções: entram uma vez ao rolar (opacidade e 12 px, 640 ms). As listas entram como um bloco, sem cascata.
- Botões: leve aperto ao clicar (escala 0,97, 140 ms). Mudança de cor no hover só em mouse.
- Movimento reduzido: só opacidade, sem deslocamento.
As faixas Estratégico (Aura, Refúgio, Valença) é que levam animações mais elaboradas.

## Técnico
HTML, CSS e JS puros, sem build. `script.js` monta os links de WhatsApp com mensagem, atualiza a linha de sol (fuso `America/Cuiaba`) e faz a entrada suave das seções, desligada com `prefers-reduced-motion`.
