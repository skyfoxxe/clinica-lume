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

## Cores (60/30/10, paleta do cliente)
Medido pela área de tela, sem contar fotos e texto: 55 % Ivory, 36 % Riviera e 10 % Terracotta no desktop; 59 %, 34 % e 7 % no celular.

| Papel | Cor | Onde |
|---|---|---|
| Principal, 60 % | Soft Ivory `#F3ECDE` (com `#FAF6EE` nos cartões) | Fundo da página, cartões e tabelas |
| Secundária, 30 % | Riviera Blue `#183451` | Texto, faixas "Como agendar" e "Dúvidas" e rodapé |
| Impacto, 10 % | Terracotta `#A9501C` | Botão principal, links "Agendar", números dos passos, faixa de informação e faixa de contato |
| Apoio | Sand Linen `#D4AF83` | Texto secundário e marcadores nas faixas Riviera |

Contraste: Riviera no Ivory 10,8:1; texto do corpo `#3A4656` 8,2:1; texto secundário `#4E5A68` 6,0:1; Ivory no Terracotta 4,6:1; Ivory no Riviera 10,8:1; Sand no Riviera 6,2:1.

O gênero corporate-trust pede fundo branco e um azul de acento. Aqui ele foi adaptado à paleta do cliente: o Ivory faz o papel do branco e o Terracotta faz o papel do acento, mantendo um acento só por tela.

## Tipografia
Fonte do sistema, como pede o gênero: títulos em 600, texto em 400 e rótulos em 500. Título principal com no máximo 2,75 rem. Números com algarismos tabulares. Nenhum arquivo de fonte é baixado.

## Movimento
Quase nenhum, como pedem o Básico e o gênero: troca de cor no hover (140 ms, só com mouse) e uma única entrada ao rolar (200 ms, 6 px, sem cascata). Com movimento reduzido, fica só a opacidade.

## Skills usadas
- Base e gênero: `design-taste` e `corporate-trust`.
- Estrutura e textos: `taste-landing-page` e `taste-ux-copy`.
- Identidade: `taste-typography` e `taste-color` (60/30/10 e contraste calculado).
- Desempenho: `taste-web-performance`.
- Revisão: `taste-design-review`, `taste-accessibility` e `taste-code-review`.

## Desempenho
Medido no celular em 4G lento com CPU 4x mais lenta: LCP 0,48 s (o título), CLS 0 e 33 KB de HTML, CSS e JS. Só uma foto, carregada sob demanda.

## Imagem (Unsplash, licença gratuita)
- Corpo clínico: `photo-1706565029539-d09af5896340`, retrato ilustrativo de médica de jaleco (uBb_ZDIrquc).

## Antes de usar para uma clínica real
Tudo o que está marcado com `data-placeholder` precisa ser trocado: nome da médica, CRM, RQE, CNES, título, residência, endereço, horário, duração da consulta, forma de atendimento, WhatsApp (também em `script.js`), e-mail, acessibilidade e os links de privacidade e termos. A foto deve ser a da médica. O site segue as regras do CFM: responsável técnica identificada com CRM e RQE, sem promessa de resultado, sem antes e depois e sem depoimentos.

## Técnico
HTML, CSS e JS puros, sem build.
