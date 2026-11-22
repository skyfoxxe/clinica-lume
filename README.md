# Lume Dermatologia (faixa Básico)

Projeto conceitual de portfólio para uma clínica de dermatologia fictícia em Cuiabá, MT. Esta versão foi refeita do zero no gênero **corporate-trust** do pacote design-taste, escolhido pelo cliente para posicionar a Lume como clínica médica séria. Nada das versões anteriores foi aproveitado.

## Ideia
A identidade é a contenção. O site parece a escolha segura, porque para quem vai escolher uma médica é isso que importa: registros visíveis, informação organizada em tabelas, passos claros e nenhum enfeite.

## Estrutura
1. **Faixa de informação** (Terracotta): tipo de atendimento, horário e cidade.
2. **Abertura:** título, para quem é, "Agendar consulta" e "Ver atendimentos". Selos com CRM, RQE, CNES e a resolução do CFM sobre publicidade médica. Ao lado, um painel "A clínica em resumo" em tabela.
3. **Atendimentos:** tabela com cinco áreas (clínica, prevenção, cabelos e unhas, pequenas cirurgias, estética), exemplos de queixas e como é feito. Cada "Agendar" abre o WhatsApp com a área escrita. No celular a tabela vira lista.
4. **Como agendar** (faixa Riviera): três passos e o que levar no dia.
5. **Corpo clínico:** cartão da médica com registro, título, residência e áreas de atuação.
6. **Dúvidas** (faixa Riviera): convênio, duração, encaminhamento e procedimentos, em perguntas que abrem e fecham.
7. **Contato** (faixa Terracotta): botão de agendar e tabela com endereço, horário, WhatsApp, e-mail e acessibilidade.
8. **Rodapé completo:** clínica, registros e links legais (LGPD e termos).

## Cores (paleta própria do gênero)
A paleta do cliente foi deixada de lado a pedido dele, junto com a regra 60/30/10. No lugar entrou uma paleta pensada para clínica médica no gênero corporate-trust: muito branco, cinzas-azulados e um único acento. Passa a sensação de consultório limpo e organizado.

| Papel | Cor | Onde |
|---|---|---|
| Fundo | Branco `#FFFFFF` | Página, cartões e tabelas |
| Painéis | `#F8FAFC` e `#F1F5F9` | Faixa de informação, "Como agendar", contato, rodapé e cabeçalho de tabela |
| Texto | Tinta `#0F1722`, corpo `#3B4657`, secundário `#5B6777` | Títulos, texto e legendas |
| Acento único | Petróleo `#0B6B77` (hover `#0A5C66`, fundo suave `#E8F1F2`) | Botão principal, links "Agendar", números dos passos, marcadores e logo |
| Linhas | `#E1E7EF` e `#C7D0DC` | Bordas de tabelas, cartões e botões secundários |

Contraste no branco: tinta 18:1, corpo 9,6:1, secundário 5,8:1, petróleo 6,2:1. Texto branco no botão petróleo 6,2:1. Tudo passa o nível AA.

## Tipografia
Fonte do sistema, como pede o gênero: títulos em 600, texto em 400 e rótulos em 500. Título principal com no máximo 2,75 rem. Números com algarismos tabulares. Nenhum arquivo de fonte é baixado.

## Acabamento e movimento
Para o site não ficar cru sem sair do Básico, entraram detalhes que dão corpo sem enfeitar: um véu petróleo bem leve na abertura e no contato, sombra baixa nos cartões, ícones de traço em cada área de atendimento, um tique nos selos de registro e uma linha tracejada ligando os passos.

Movimento pouco e discreto, todo com a mesma curva de saída suave:
- Abertura entra uma vez ao carregar (420 ms, 8 px), com o painel 80 ms depois.
- Blocos aparecem uma vez ao rolar, sem cascata.
- Botões afundam de leve ao toque (escala 0,98 em 120 ms).
- A seta do "Agendar" anda 3 px quando o mouse passa na linha.
- As dúvidas abrem com altura suave onde o navegador permite.
- O cabeçalho ganha uma sombra leve ao sair do topo.

Hover só com mouse. Com movimento reduzido, fica só a opacidade.

## Skills usadas
- Base e gênero: `design-taste` e `corporate-trust`.
- Estrutura e textos: `taste-landing-page` e `taste-ux-copy`.
- Identidade: `taste-typography` e `taste-color` (60/30/10 e contraste calculado).
- Desempenho: `taste-web-performance`.
- Movimento: `animate`.
- Revisão: `taste-design-review`, `taste-accessibility` e `taste-code-review`.

## Desempenho
Medido no celular em 4G lento com CPU 4x mais lenta: LCP 0,53 s (o título), CLS 0 e 37 KB de HTML, CSS e JS. Só uma foto, carregada sob demanda.

## Imagem (Unsplash, licença gratuita)
- Corpo clínico: `photo-1706565029539-d09af5896340`, retrato ilustrativo de médica de jaleco (uBb_ZDIrquc).

## Antes de usar para uma clínica real
Tudo o que está marcado com `data-placeholder` precisa ser trocado: nome da médica, CRM, RQE, CNES, título, residência, endereço, horário, duração da consulta, forma de atendimento, WhatsApp (também em `script.js`), e-mail, acessibilidade e os links de privacidade e termos. A foto deve ser a da médica. O site segue as regras do CFM: responsável técnica identificada com CRM e RQE, sem promessa de resultado, sem antes e depois e sem depoimentos.

## Técnico
HTML, CSS e JS puros, sem build.
