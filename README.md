# Lume Dermatologia (faixa Básico)

Projeto conceitual de portfólio para uma clínica de dermatologia fictícia em Cuiabá, MT. Esta versão foi refeita do zero a partir da paleta enviada pelo cliente, sem aproveitar texto, estrutura ou composição das versões anteriores.

## Conceito
"Sua pele, explicada com calma." A Lume é a clínica para quem cansou de testar produto por conta própria. O site fala com as dúvidas reais do paciente e promete o que a avaliação entrega: diagnóstico, plano por escrito e data de revisão.

## Faixa
Básico: uma página, cinco blocos, sem formulário, agendamento pelo WhatsApp e movimento discreto.

## Skills usadas
- Base e direção: `design-taste`, `quiet-luxury`.
- Estrutura e textos: `taste-landing-page` (o topo responde o que é, para quem e o que fazer; uma ação principal com o mesmo nome do começo ao fim) e `taste-ux-copy` (a voz é direta e calorosa; nada que a página não sustente).
- Identidade: `taste-typography` (EB Garamond nos títulos e Instrument Sans no texto; 2 famílias e 3 estilos) e `taste-color` (papéis definidos para cada cor da paleta, contraste calculado).
- Desempenho: `taste-web-performance`.
- Movimento: `animate`, no nível Básico. `taste-motion`, `taste-gsap` e `cinematic-motion` ficaram de fora por serem do nível Estratégico.
- Revisão: `taste-design-review`, `taste-accessibility`, `taste-code-review` e `improve-animations` (a `review-animations` não estava disponível).

## Estrutura
1. **Promessa:** título, para quem é, botão "Agendar avaliação" e um cartão Chambray sobre a foto, no estilo da paleta.
2. **Dúvidas** (faixa Bisque): cinco perguntas na voz do paciente. Cada "Agendar" abre o WhatsApp com o assunto.
3. **A avaliação** (faixa Espresso): as três coisas que o paciente leva.
4. **Quem atende:** médica, CRM e RQE.
5. **Primeiro passo** (faixa Glacier): o mesmo botão do topo, a frase que tira a dúvida final e os dados de contato.

## Cores
| Cor | Hex | Papel |
|---|---|---|
| Espresso | `#3A2119` | Texto, botão principal e faixa escura |
| Glacier | `#D2E2EC` | Faixa final e títulos sobre o Espresso |
| Bisque | `#EBCDB7` | Faixa das dúvidas e texto sobre o Espresso |
| Chambray | `#79A3C3` | Cartão sobre a foto e rótulos na faixa escura |
| Clay | `#957662` | Itálicos dos títulos grandes e marcadores |
| Papel | `#FAF5F0` | Fundo, um tom derivado do Bisque |
| Texto secundário | `#6B5244` | Um tom derivado do Clay que passa no contraste |

Contraste: Espresso no papel 13,7:1; secundário 6,7:1 no papel, 5,4:1 no Glacier e 4,8:1 no Bisque; Glacier no Espresso 11,2:1. O Clay aparece só em título grande (3,8:1). Na faixa Bisque, onde ele não passa, o itálico fica em Espresso.

## Movimento
O título, o texto e a foto entram em dois tempos ao carregar (esmaecer e subir 10 px, 600 ms). As faixas entram uma vez ao rolar. Os botões têm um aperto leve ao toque e hover só com mouse. Com movimento reduzido, fica só a opacidade.

## Desempenho
Meta no celular: LCP abaixo de 2,5 s, CLS abaixo de 0,1, página abaixo de 500 KB sem as fotos. Medido em 4G lento com CPU 4x mais lenta: LCP 0,96 s, CLS 0 e 115 KB de HTML, CSS, JS e fontes. As fontes ficam no próprio site, com o subconjunto latino e licença SIL OFL. As fotos têm dimensões, tamanhos por largura de tela e formato automático. Só a foto do topo carrega com prioridade.

## Imagens (Unsplash, licença gratuita)
- Topo: `photo-1780764858260-f5c7db73bd9f`, mulher de suéter azul (UBZwpmGyP5M)
- A avaliação: `photo-1618546421236-3c6f5f78add2`, mãos sobre fundo azul-claro (xnOwim0TwUM)
- Quem atende: `photo-1758600587728-9bde755354ad`, retrato ilustrativo (NS3_cp6vSpI)
- Primeiro passo: `photo-1779033796260-7eeaf767c9dc`, mulher de casaco caramelo (28w5or563q4)

## Antes de usar para uma clínica real
Tudo o que está marcado com `data-placeholder` precisa ser trocado: nome da médica, CRM, RQE, endereço, horário, WhatsApp (também em `script.js`) e Instagram. A foto da médica deve ser a dela. As frases sobre dermatoscopia e atendimento particular precisam ser confirmadas com a clínica. O site segue as regras do CFM: médica responsável identificada, sem promessa de resultado, sem antes e depois e sem depoimentos.

## Técnico
HTML, CSS e JS puros, sem build.
