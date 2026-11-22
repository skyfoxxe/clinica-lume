# Lume Dermatologia (faixa Básico)

Projeto conceitual de portfólio para uma clínica de dermatologia fictícia em Cuiabá — MT. Versão refeita do zero, sem aproveitar texto, estrutura ou composição das versões anteriores.

## Faixa
Básico (R$ 497 no portfólio, 3 a 5 dias úteis, 1 rodada de ajustes). Uma página com cinco blocos, sem formulário e com pouca interação. O capricho fica na fotografia, na tipografia e no texto.

## Skills usadas
- Direção: `design-taste`, `quiet-luxury` e `taste-landing-page` (o topo responde em segundos o que é, para quem e o que fazer; um botão cheio por tela; o botão final repete o do topo).
- Movimento: `animate` (pouco e discreto, como pede o Básico).
- Revisão: `taste-design-review`, `taste-accessibility`, `taste-code-review` e `improve-animations`.

## Estrutura
1. Abertura: promessa ("Pele saudável, cuidada com naturalidade."), retrato com luz natural e uma faixa com três fatos do atendimento
2. Tratamentos: seis assuntos; cada "Conversar" abre o WhatsApp com a mensagem já no assunto
3. A primeira consulta: conversa, exame e plano
4. A médica: nome, CRM, RQE e uma frase
5. Contato: botão de agendamento, endereço, horário, WhatsApp e Instagram

## Direção visual
Quiet luxury: marfim `#F7F2EA`, tinta quente `#17130F`, texto secundário `#6E655A` e um único acento latão `#9A7B4F` (itálicos dos títulos, numerais e o ponto do logo). Playfair Display nos títulos, Jost no texto. Filetes no lugar de cartões, cantos de 2 px.

## Movimento
- Abertura: esmaecer com subida de 12 px em três tempos (0, 120 e 240 ms), 700 ms, animação CSS.
- Seções: entram uma vez ao rolar (opacidade e 12 px, 640 ms).
- Botões: leve aperto ao clicar (escala 0,97, 140 ms). Mudança de cor no hover só com mouse.
- Movimento reduzido: só opacidade.

## Antes de usar para uma clínica real
Tudo que está marcado com `data-placeholder` no `index.html` é fictício: `nome`, `crm`, `rqe`, `telefone` (também na constante `WHATSAPP` do `script.js`), `endereco`, `horario`, `instagram`. A frase da médica também é ilustrativa e precisa ser substituída por uma dela. O texto evita promessa de resultado, antes e depois e depoimentos (publicidade médica do CFM).

## Imagens
Fotos gratuitas da Unsplash (licença Unsplash), carregadas do CDN com `srcset`:
- abertura: `w4Dj3MshHQ0` (rosto com luz natural)
- tratamentos: `7m_jsxQRqoI` (ombro com sardas)
- a consulta: `fvOTX0MKB40` (recepção clara)
- contato: `WRtH3AH0b3Y` (gesto de cuidado)

Se uma imagem falhar, a moldura mantém a proporção e mostra "Lume".

## Técnico
HTML, CSS e JS puros, sem build.
