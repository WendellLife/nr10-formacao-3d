# NR 10 • Formação (jogo educativo 3D)

Jogo educativo da série de jogos de segurança do trabalho, correspondente à **curso básico de 40 h (Anexo III, item 1)**.

Você conclui o curso básico e vai a campo: troca do contator da bomba de recalque no CCM-2 com a **sequência completa de desenergização do item 10.5.1**, um **choque elétrico** de um colega no galpão (corte de energia, RCP e DEA) e a **reenergização pelo item 10.5.2**.

Os outros jogos da NR 10 da série usam a mesma fábrica e a mesma equipe: [NR 10 • Reciclagem](https://github.com/WendellLife/nr10-reciclagem-3d) • [NR 10 • SEP](https://github.com/WendellLife/nr10-sep-3d).

> **Conteúdo educativo.** Não substitui o treinamento com carga horária, prática e avaliação, nem a autorização formal da empresa. Leia o [SAFETY-NOTES.md](SAFETY-NOTES.md).

## Como abrir

Requer Node.js 18 ou superior (ou Python 3).

- **Windows:** dê dois cliques em `INICIAR.cmd` e abra http://127.0.0.1:8765
- **Qualquer sistema:** `npm start` (ou `node server.mjs`) e abra http://127.0.0.1:8765
- **Hospedagem estática:** publique a pasta `dist/` como está. Não há build nem dependências npm. O Three.js 0.170.0 está em `dist/`.

## Controles

| Ação | Teclado | Celular |
|---|---|---|
| Mover | WASD ou setas | botões de seta na tela |
| Correr | Shift | — |
| Interagir | E | botão AÇÃO |
| Fontes e origem do conteúdo | botão **Fontes** | botão **Fontes** |
| Pausar | Esc ou botão Ⅱ | botão Ⅱ |

O losango verde é você. O losango azul, o alvo luminoso e as setas no chão marcam o destino.

**Painel elétrico** (canto superior direito): horário, tensão e nome do circuito em trabalho, o **estado** dele e a **zona em que você está** — livre, controlada ou de risco — em relação à parte energizada mais crítica, com a distância e os raios do Anexo II.

**Zonas no cenário:** em volta das partes energizadas, o disco vermelho é a zona de risco (Rr) e o anel amarelo, a zona controlada (Rc). Na rede de 13,8 kV, as zonas aparecem como tubos em volta dos condutores; no poste, como esferas. Quando uma parte é desenergizada e a ausência de tensão é constatada, a zona dela some.

## Origem do conteúdo (muito importante)

A **nova NR 10** foi aprovada pela **Portaria MTE 737/2026** (DOU de 01/06/2026), mas **só entra em vigor em 01/06/2027**. Até lá vale o texto atual. Cada etapa mostra:

| Etiqueta | Significa |
|---|---|
| **Em vigor** | NR 10 aprovada pela Portaria MTE 598/2004, alterada pelas Portarias MTPS 508/2016 e SEPRT 915/2019. No texto em vigor, as zonas estão no **Anexo II** e os cursos no **Anexo III**. Também NR 1, NR 6, NR 7, NR 23 e NR 35 quando citadas. |
| **Nova NR 10 publicada — vigora em 01/06/2027** | Mudanças já divulgadas da Portaria MTE 737/2026, citadas sem número de item. |
| **Boa prática — não é item de NR** | Procedimento técnico útil, que não é exigência de NR. |

## Sequência das 16 etapas

| # | Etapa | Origem |
|---|---|---|
| 1 | Entenda quem pode intervir | 10.8.1 • 10.8.2 • 10.8.3 • 10.8.4 |
| 2 | Confira a sua autorização | 10.8.5 • 10.8.6 • 10.8.7 • 10.8.8.1 |
| 3 | Reconheça os riscos da eletricidade | NR 10 • Anexo III (treinamento) — item 1, tópico 2 (choque, arco e campos) • efeitos da corrente no corpo humano (IEC 60479) (boa prática) |
| 4 | Vista-se para o serviço | 10.2.9.1 • 10.2.9.2 • 10.2.9.3 • NR 6 — EPI adequado ao risco |
| 5 | Inspecione luvas e ferramentas | 10.4.3.1 • teste de ar da luva isolante antes de cada uso (boa prática) |
| 6 | Consulte o diagrama e o prontuário | 10.2.3 • 10.2.4 |
| 7 | Pegue a ordem de serviço | 10.11.1 • 10.11.2 • NR 10 • Anexo III (treinamento) — item 1, tópico 3 (técnicas de análise de risco) |
| 8 | Seccione o circuito | 10.5.1 a) seccionamento • 10.2.8.2 |
| 9 | Impeça a reenergização | 10.5.1 b) impedimento de reenergização • 10.10.1 b) |
| 10 | Constate a ausência de tensão | 10.5.1 c) constatação da ausência de tensão • testar o instrumento antes e depois da medição (boa prática) • instrumento de categoria adequada (IEC 61010) (boa prática) |
| 11 | Instale o aterramento temporário | 10.5.1 d) aterramento temporário e equipotencialização • NR 10 • Glossário — aterramento elétrico temporário • 10.5.3 |
| 12 | Proteja o que segue energizado | 10.5.1 e) proteção dos elementos energizados • NR 10 • Anexo II (zonas) — até 1 kV: Rr 0,20 m • Rc 0,70 m • 10.6.2 |
| 13 | Sinalize o impedimento (ação no cenário) | 10.5.1 f) sinalização de impedimento de reenergização • 10.10.1 f) e g) |
| 14 | Socorra o Jair | 10.12.1 • 10.12.2 • não tocar na vítima antes de cortar a energia (boa prática) |
| 15 | Faça a reanimação | 10.12.2 • RCP: 100 a 120 compressões por minuto e DEA o quanto antes (boa prática) |
| 16 | Reenergize o circuito | 10.5.2 a) a e) |

Cada decisão tem três opções, uma única correta, e cada opção tem um feedback didático.

## Personagens

| Nome | Função | Papel no jogo |
|---|---|---|
| **Você** | Eletricista em formação | Jogador |
| **Helena** | Engenheira eletricista | Responsável técnica: confere a sua autorização |
| **Rogério** | Eletricista sênior | Põe o próprio cadeado no CCM-2 |
| **Lúcia** | Eletricista | Troca o contator depois da liberação |
| **Bruno** | Eletricista | Chama o 192 e a brigada |
| **Paula** | Técnica de segurança | Instrutora; traz o DEA |
| **Jair** | Operador de produção | Leva o choque na furadeira |

## Cenário

Fábrica com **sala elétrica de baixa tensão** (QGBT, CCM-2, banco de capacitores, prontuário com o diagrama unifilar, caixa de bloqueio e extintor de CO₂), **galpão** aberto com a furadeira, **estacionamento com geração fotovoltaica**, área de treinamento, bancada de EPI, ferramentas isoladas e escadas, **cabine primária de 13,8 kV com a medição**, **poste de entrada** com para-raios, **rede da distribuidora** na via e **caminhão com cesto aéreo**.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `dist/index.html`, `dist/style.css` | Interface (mesma da série, com painel elétrico e etiquetas de origem) |
| `dist/rules.mjs` | Regras puras e testáveis: etapas, decisões, referências, tabela do Anexo II, estado do circuito, partes energizadas e clima |
| `dist/crew.mjs` | Fases de cada pessoa da equipe e busca de rotas |
| `dist/layout.mjs` | Planta da fábrica, posições da equipe e pontos energizados |
| `dist/scenery.mjs` | Cenário 3D |
| `dist/game.mjs` | Jogo: câmera, equipe, zonas, painel elétrico, clima e diálogos |
| `dist/graphics.mjs` | Qualidade, pós-processamento, texturas, chuva e raio |
| `dist/characters.mjs` | Personagens com esqueleto, animações e poses de ação |
| `dist/models/` | Modelos GLB dos personagens |
| `server.mjs`, `INICIAR.cmd` | Servidor local (127.0.0.1:8765) |
| `manifest.mjs` | Gera o `MANIFESTO-SHA256.json` (`npm run manifest`) |
| `test.mjs` | Testes em Node puro (`npm test`) |

## Testes

```
npm test
```

Cobrem: ordem das etapas; uma única resposta certa por decisão, com feedback; todo item da NR 10 citado existe no texto em vigor; zonas citadas como Anexo II e treinamento como Anexo III; a nova NR 10 sempre identificada pela Portaria 737/2026; tabela do Anexo II; estado do circuito e partes energizadas em cada etapa; fases da equipe; e acessibilidade de todos os destinos.
