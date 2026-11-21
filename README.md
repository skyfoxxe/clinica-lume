# Clínica Lume · v4 quiet luxury (faixa Básico)

Projeto conceitual de portfólio para uma clínica de dermatologia fictícia em Cuiabá — MT.

## Faixa
Básico (R$ 497 no portfólio, 3 a 5 dias úteis, 1 rodada de ajustes). Uma página, quatro seções, sem formulário nem ferramentas interativas. O capricho fica na tipografia, no espaço e no texto, não na quantidade de recursos.

## Direção
Quiet luxury: marfim `#F7F2EA`, tinta quente `#17130F`, texto secundário `#6E655A` e um único acento latão `#9A7B4F` (só em filetes, numerais e na palavra em itálico de cada título). Bodoni Moda nos títulos, Hanken Grotesk no texto. Filetes no lugar de cartões, cantos de 2 px, um botão cheio por tela. "Lume" é luz, e as fotos são de luz natural e textura, sem rostos de banco de imagem.

## Estrutura
1. Abertura, com coluna-índice e imagem em letterbox
2. 01 Abordagem: escutar, avaliar, orientar
3. 02 Áreas de atuação: clínica, prevenção, estética (lista com filetes)
4. 03 A médica, com CRM e RQE
5. 04 Contato e rodapé com a responsável técnica

## Antes de usar para uma clínica real
Tudo que está marcado com `data-placeholder` no `index.html` é fictício e precisa ser trocado:
- `nome`, `crm`, `rqe`: médica responsável técnica (o rodapé repete os mesmos dados, como pede a publicidade médica do CFM);
- `telefone`: número do WhatsApp, que também fica na constante `WHATSAPP` do `script.js`;
- `endereco`, `instagram`, `horario`.

O retrato da médica entra no lugar da foto de luz da seção 03 quando a clínica enviar. O texto evita promessa de resultado, antes e depois e depoimentos.

## Imagens
Fotos gratuitas da Unsplash (licença Unsplash), carregadas do CDN da Unsplash com `srcset`:
- abertura: `IaBGc8xtCr8` (luz sobre parede e banco)
- áreas: `kD9qprR6HBI` (creme sobre fundo bege)
- médica: `TmxUTyL3pvg` (luz de persiana)

Se uma imagem falhar, a moldura mantém a proporção e mostra "Lume".

## Técnico
HTML, CSS e JS puros, sem build. `script.js` monta os links de WhatsApp com mensagem, controla o menu do celular (Esc fecha) e faz a entrada suave das seções, desligada com `prefers-reduced-motion`.
