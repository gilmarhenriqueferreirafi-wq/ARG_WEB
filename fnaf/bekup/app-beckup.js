/* ==========================================================================
   STATIC SLICE — ARG
   React (UMD) sem JSX e sem Babel: roda direto no navegador.

   CADEIA DE PUZZLES (tudo resolvido com toque e leitura, nada de view-source):
     1. Triângulo ▽ no rodapé  -> desktop de segurança -> abrir o arquivo corrompido
        (pistas: "03:1_", último acesso 03:17, câmera 3 sem sinal às 03:17)
     2. "Minhas redes" -> Portal do Funcionário -> código 0317 -> log de 14/09/1997
        (pista: a fita foi escondida "no lugar que o Sérgio consertava" = Squawk)
     3. Animatrônicos -> tocar no olho vazio do Squawk -> Fita K7 nº 3
        (a fita revela o código do cofre: quatro, sete, um, três)
     4. "Documentos" -> código 4713 -> mensagem da Lívia + último log (noite do jogador)
     5. BÔNUS: arquivo_340851 -> fragmentos 34+08+51 -> código 340851 -> doc confidencial
   
   CAPÍTULO 1 — Conteúdo GPT integrado:
     - E-mails (A1–A5, B1–B8, C1–C6) ✅
     - Jornal (6 artigos) ✅
     - Bloco de Notas (8 anotações) ✅
     - Fita K7 (transcrição) ✅
     - Arquivo Oculto (340851) ✅
     - Eventos (9 eventos) ✅
     - Sustos (E1–E5) ✅
   ========================================================================== */
(function () {
  "use strict";

  const h = React.createElement;
  const { useState, useEffect, useRef, Fragment } = React;

  const CHAVE_PROGRESSO = "staticslice:progresso:v1";

  function lerProgresso() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || {};
    } catch (e) {
      return {};
    }
  }

  function salvarProgresso(p) {
    try {
      localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(p));
    } catch (e) {}
  }

  /* CONFIGURAÇÃO DO RELÓGIO */
  const RELOGIO_INICIAR = "03:17";
  const RELOGIO_INTERVALO_MS = 1000;
  const CHAVE_RELOGIO = "staticslice:relogio:v1";

  function hashCodigo(texto) {
    const s = String(texto).toUpperCase().replace(/[^A-Z0-9]/g, "");
    let h1 = 0xdeadbeef;
    let h2 = 0x41c6ce57;
    for (let i = 0; i < s.length; i++) {
      const ch = s.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }

  const HASH_PORTAL        = "1mpyb51jo7y";
  const HASH_COFRE         = "1wfuc7euyss";
  const HASH_ARQ_OCULTO    = "1v0ct3gg6hq"; /* código 340851 */

  function confere(entrada, hashEsperado) {
    return hashCodigo(entrada) === hashEsperado;
  }

  /* ========== TEXTOS / LORE ========== */
  const LOG_22_05 = [
    "ARQUIVO: turno_noturno_log.txt",
    "OPERADOR: A. NOGUEIRA",
    "DATA: 22/05/1997",
    "",
    "23:41 - Tudo tranquilo. Fechamento normal.",
    "01:30 - Sérgio ficou no palco pra terminar a reforma do Squawk. Disse que era rápido.",
    "02:1_ - Câmera 3 fora do ar. Sem explicação técnica.",
    "02:47 - Ouvi passos no palco. Sérgio não respondeu no rádio.",
    "03:1_ - ERRO DE LEITURA — ARQUIVO DANIFICADO",
    "04:00 - O sr. Valadão chegou. Disse que foi falha do Squawk. Mandou eu assinar o relatório.",
    "04:0_ - Não foi falha. Eu vi ██████████",
    "",
    "[FIM DO REGISTRO RECUPERADO]",
  ].join("\n");

  const LOG_14_09 = [
    "ARQUIVO: turno_noturno_log.txt",
    "OPERADOR: A. NOGUEIRA",
    "DATA: 14/09/1997",
    "",
    "22:05 - Última noite. Valadão avisou que a casa fecha amanhã. Não é coincidência.",
    "23:10 - Gravei a conversa no escritório. Ele admite tudo. A reforma do Squawk foi pulada pra economizar. O Sérgio avisou duas vezes.",
    "00:40 - Escondi a fita onde ninguém procura: no lugar que o Sérgio consertava.",
    "02:1_ - Câmera 3 caiu de novo. Sempre nesse horário.",
    "02:47 - Passos no palco. O Squawk está virado pra sala.",
    "03:1_ - ERRO DE LEITURA — ARQUIVO DANIFICADO",
    "04:00 - Está tudo bem agora. Vou fechar o relatório.",
    "04:0_ - Ele está atrás de mim enquanto eu escrevo isso.",
    "",
    "[FIM DO REGISTRO RECUPERADO]",
    "",
    "[SISTEMA] 1 arquivo de áudio referenciado: fita nº 3 (localização desconhecida).",
  ].join("\n");

  const MENSAGEM_LIVIA = [
    "DE: livia.lacerda@webmail.net",
    "PARA: terminal de segurança",
    "ASSUNTO: não feche esta janela",
    "",
    "Oi. Você não me conhece, e o acesso que você recebeu não foi engano do sr. Valadão. Fui eu que liberei.",
    "",
    "Meu irmão se chamava Sérgio Lacerda. Era o técnico do Squawk. Morreu debaixo daquele palco no dia 22 de maio de 1997, e me disseram que foi \"falha do equipamento\".",
    "",
    "O Valadão reabriu a casa por um motivo só: apagar o que o Ademar deixou. Ele precisava de um segurança novo que não fizesse perguntas.",
    "",
    "Você acabou de fazer as perguntas.",
    "",
    "Guarde a fita. Não deixe ele chegar no servidor antes de você sair daí.",
    "E não olhe pra câmera 3 depois das três.",
    "",
    "— L.",
  ].join("\n");

  const LOG_FINAL = [
    "ARQUIVO: turno_noturno_log.txt",
    "OPERADOR: NOVO SEGURANÇA",
    "DATA: 09/03/2001",
    "",
    "23:41 - Tudo tranquilo. Fechamento normal.",
    "02:1_ - Câmera 3 fora do ar. Sem explicação técnica.",
    "02:47 - Ouvi passos no palco. Ninguém deveria estar aqui.",
    "03:17 - O Squawk está virado pra sala. Ele não estava assim ontem.",
    "04:00 - Está tudo bem agora. Vou fechar o relatório.",
    "04:0_ - Ele está atrás de mim enquanto eu escrevo isso.",
    "",
    "[FIM DO REGISTRO]",
    "",
    "CÂMERA 3: RESTAURANDO SINAL... 12%",
  ].join("\n");

  const FITA = [
    { som: "clique. ruído de fita." },
    { quem: "NOGUEIRA", texto: "Tá gravando? Ótimo. Sr. Valadão, repete o que o senhor me falou no escritório." },
    { quem: "VALADÃO",  texto: "Já falei. Adiei a reforma do Squawk três vezes. Cortei o orçamento. O Sérgio avisou que a articulação do palco ia ceder e eu mandei ele subir mesmo assim." },
    { quem: "NOGUEIRA", texto: "E o relatório do dia 22?" },
    { quem: "VALADÃO",  texto: "\"Falha do animatrônico.\" Você assinou. Assina de novo e ganha o mês em dobro." },
    { quem: "NOGUEIRA", texto: "O Sérgio morreu embaixo daquele palco, sr. Valadão." },
    { som: "estática. passos atrás do microfone." },
    { quem: "VALADÃO",  texto: "Desliga isso, Ademar." },
    { som: "três notas de caixinha de música, ao longe." },
    { quem: "NOGUEIRA", texto: "(sussurrando) Cópia no cofre do sistema, pasta Documentos. Combinação: quatro, sete, um, três. Se alguém ouvir isso, procure a Lívia. Ele está..." },
    { som: "fim da fita." },
  ];

  const CARDAPIO = [
    { nome: "Especial da Meia-Noite",  desc: "Pepperoni, azeitona preta e uma pontinha de arrependimento.",              preco: "R$ 42,90" },
    { nome: "Fatia Estática",           desc: "Quatro queijos derretidos até virar quase líquido, como tudo aqui dentro.", preco: "R$ 38,50" },
    { nome: "Coveiro Supreme",          desc: "Carnes variadas, cebola caramelizada e um cheiro que ninguém sabe explicar.", preco: "R$ 46,00" },
    { nome: "Havaiana Assombrada",      desc: "Presunto, abacaxi e um sussurro ao fundo que juramos que era o forno.",     preco: "R$ 39,90" },
    { nome: "Margherita do Palco",      desc: "Manjericão fresco, muçarela de búfala. A mais pedida pela banda.",          preco: "R$ 35,00" },
    { nome: "Combo Turno da Noite",     desc: "Uma fatia de cada. Recomendado para quem vai ficar até tarde.",             preco: "R$ 89,90" },
  ];

  const ELENCO = [
    { id: "chomper", nome: "Chomper", cargo: "Vocalista",      desc: "O lobo que abriu a casa em 1987. Sorriso largo demais para ser confortável. Diz-se que ainda ensaia depois do fechamento." },
    { id: "squawk",  nome: "Squawk",  cargo: "Mágico do Palco", desc: "O corvo do número de mágica. Um olho de vidro faltando desde uma reforma nunca terminada. Aparece onde menos se espera.", olhoVazio: true },
    { id: "grumble", nome: "Grumble", cargo: "Baterista",       desc: "O urso mais antigo da casa. Remendado, arranhado, sempre no mesmo canto — até você virar as costas." },
  ];

  /* ========== ÁUDIO DA FITA ========== */
  function criarSomFita(aoTerminar) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    const ctx = new Ctx();
    if (ctx.resume) ctx.resume();
    const dur = 9;

    const mestre = ctx.createGain();
    mestre.gain.value = 0.35;
    mestre.connect(ctx.destination);

    const buf    = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const dados  = buf.getChannelData(0);
    for (let i = 0; i < dados.length; i++) dados[i] = Math.random() * 2 - 1;
    const ruido  = ctx.createBufferSource();
    ruido.buffer = buf;

    const filtro = ctx.createBiquadFilter();
    filtro.type  = "bandpass";
    filtro.frequency.value = 1800;
    filtro.Q.value = 0.6;

    const ganhoRuido = ctx.createGain();
    ganhoRuido.gain.value = 0.25;

    const lfo      = ctx.createOscillator();
    lfo.frequency.value = 0.7;
    const lfoGanho = ctx.createGain();
    lfoGanho.gain.value = 0.12;
    lfo.connect(lfoGanho);
    lfoGanho.connect(ganhoRuido.gain);

    ruido.connect(filtro);
    filtro.connect(ganhoRuido);
    ganhoRuido.connect(mestre);

    const zumbido      = ctx.createOscillator();
    zumbido.frequency.value = 60;
    const ganhoZumbido = ctx.createGain();
    ganhoZumbido.gain.value = 0.03;
    zumbido.connect(ganhoZumbido);
    ganhoZumbido.connect(mestre);

    [[659.25, 5.2], [587.33, 5.9], [523.25, 6.6]].forEach(function (nota) {
      const o  = ctx.createOscillator();
      o.type   = "sine";
      o.frequency.value = nota[0];
      const g  = ctx.createGain();
      const t0 = ctx.currentTime + nota[1];
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.25, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);
      o.connect(g);
      g.connect(mestre);
      o.start(t0);
      o.stop(t0 + 1);
    });

    ruido.start(); lfo.start(); zumbido.start();

    let parado = false;
    function parar() {
      if (parado) return;
      parado = true;
      clearTimeout(fim);
      try { ruido.stop(); lfo.stop(); zumbido.stop(); } catch (e) {}
      try { ctx.close(); } catch (e) {}
    }
    const fim = setTimeout(function () { parar(); if (aoTerminar) aoTerminar(); }, dur * 1000);
    return { parar: parar };
  }

  /* ========== COMPONENTES — SITE PÚBLICO ========== */
  function TextoGlitch({ texto }) {
    return h("span", { className: "glitch", "data-text": texto }, texto);
  }

  function Nav({ rota }) {
    return h("nav", { className: "nav" },
      h("div", { className: "nav-logo" }, "STATIC SLICE"),
      h("div", { className: "nav-links" },
        ORDEM_MENU.map(function (id) {
          return h("a", {
            key: id,
            href: "#/" + id,
            className: "nav-link" + (rota === id ? " ativo" : ""),
            "aria-current": rota === id ? "page" : undefined,
          }, PAGINAS[id].rotulo);
        })
      )
    );
  }

  /* ========== CONTADOR DE VISITANTES ========== */
  function Contador() {
    var _c = useState(function () {
      var salvo = parseInt(localStorage.getItem("staticslice:contador:v1"), 10);
      return isNaN(salvo) ? 1997 : salvo;
    });

    var contador = _c[0];
    var setContador = _c[1];

    useEffect(function () {
      if (window.__staticSliceContadorContado) return;

      window.__staticSliceContadorContado = true;

      var atual = parseInt(localStorage.getItem("staticslice:contador:v1"), 10);
      var novoNumero = isNaN(atual) ? 1998 : atual + 1;

      localStorage.setItem("staticslice:contador:v1", String(novoNumero));
      setContador(novoNumero);
    }, []);

    var numeroFormatado = String(contador).padStart(6, "0");

    return h("div", { className: "contador" },
      "Você é o visitante nº ",
      numeroFormatado.split("").map(function (d, i) {
        return h("span", { key: i, className: "contador-digito" }, d);
      })
    );
  }

  function Triangulo() {
    return h("a", { href: "#/desktop", className: "triangulo", "aria-label": "Saída" },
      h("svg", { viewBox: "0 0 44 38", width: 44, height: 38, "aria-hidden": "true", focusable: "false" },
        h("polygon", { points: "3,3 41,3 22,35", fill: "none", stroke: "currentColor", strokeWidth: 2 })
      )
    );
  }

  function Rodape() {
    return h("footer", { className: "rodape" },
      h(Contador),
      h("p", { className: "rodape-selo" }, "Melhor visto no Internet Explorer 5.5 — 800x600 — 256 cores"),
      h("p", null,
        "© 1987–1997 Static Slice Pizzaria. Todos os direitos reservados (provavelmente).",
        h("span", { className: "led", "aria-hidden": "true" })
      ),
      h("p", { className: "rodape-atualizado" }, "Última atualização: 14/09/1997"),
      h(Triangulo)
    );
  }

  function PaginaInicio() {
    return h("div", null,
      h("div", { className: "marquee" },
        h("span", null, "*** NOVIDADE: a Static Slice reabriu as portas! Venha comemorar seu aniversário com a banda! ***")
      ),
      h("section", { className: "hero" },
        h("h1", { className: "hero-titulo" }, h(TextoGlitch, { texto: "STATIC SLICE" })),
        h("p", { className: "hero-sub" }, "Fechada desde 1997. Reaberta por engano. A massa ainda assa. As luzes ainda piscam. Eles ainda estão no palco."),
        h("div", { className: "hero-aviso" }, "AVISO: os animatrônicos permanecem ativos após o horário de funcionamento. A gerência não se responsabiliza."),
        h("a", { href: "#/cardapio", className: "botao-2001 hero-botao" }, "Ver Cardápio")
      )
    );
  }

  function PaginaCardapio() {
    return h("section", { className: "secao" },
      h("h2", { className: "secao-titulo" }, "Cardápio"),
      h("div", { className: "cardapio-grade" },
        CARDAPIO.map(function (item) {
          return h("div", { className: "item-cardapio", key: item.nome },
            h("h3", null, item.nome),
            h("p", null, item.desc),
            h("span", { className: "item-preco" }, item.preco)
          );
        })
      )
    );
  }

  function FitaK7({ aoFechar, onTerminar }) {
    const som = useRef(null);
    const [tocando, setTocando] = useState(false);
    const [indisponivel, setIndisponivel] = useState(false);

    useEffect(function () {
      return function () { if (som.current) som.current.parar(); };
    }, []);

    function alternar() {
      if (tocando) {
        if (som.current) som.current.parar();
        som.current = null;
        setTocando(false);
        return;
      }
      try {
        som.current = criarSomFita(function () {
          som.current = null;
          setTocando(false);
          if (onTerminar) onTerminar();
        });
      } catch (e) { som.current = null; }
      if (som.current) setTocando(true);
      else setIndisponivel(true);
    }

    return h("div", {
      className: "modal-fundo",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Fita K7 número 3",
      onClick: function (e) { if (e.target === e.currentTarget) aoFechar(); },
    },
      h("div", { className: "modal" },
        h("div", { className: "modal-topo" },
          h("span", null, "FITA K7 Nº 3 — 14/09/1997"),
          h("button", { className: "modal-fechar", onClick: aoFechar, "aria-label": "Fechar" }, "×")
        ),
        h("p", { className: "fita-etiqueta" }, "\u201cNÃO OUVIR\u201d — letra do Nogueira"),
        h("button", { className: "botao-2001", onClick: alternar }, tocando ? "■ Parar" : "▶ Reproduzir"),
        indisponivel ? h("p", { className: "fita-aviso" }, "Áudio indisponível neste navegador. Leia a transcrição abaixo.") : null,
        h("div", { className: "fita-transcricao" },
          FITA.map(function (linha, i) {
            return linha.som
              ? h("p", { key: i, className: "fita-som" }, "[" + linha.som + "]")
              : h("p", { key: i }, h("strong", null, linha.quem + ": "), linha.texto);
          })
        )
      )
    );
  }

  function PaginaAnimatronicos({ prog, marcar, adicionarEmailConclusao }) {
    const [aviso, setAviso] = useState("");
    const [fitaAberta, setFitaAberta] = useState(false);

    function tocarOlho() {
      if (prog.portal) { setAviso(""); setFitaAberta(true); }
      else setAviso("Só um buraco escuro. Nada aqui.");
    }

    return h("section", { className: "secao" },
      h("h2", { className: "secao-titulo" }, "Animatrônicos"),
      h("div", { className: "animatronicos-grade" },
        ELENCO.map(function (a) {
          const olho = a.olhoVazio
            ? h("button", { className: "olho olho-vazio" + (prog.portal ? " dica" : ""), onClick: tocarOlho, "aria-label": "Olho de " + a.nome })
            : h("div", { className: "olho", "aria-hidden": "true" });
          return h("div", { className: "card-animatronico", key: a.id },
            olho,
            h("h3", null, a.nome),
            h("div", { className: "cargo" }, a.cargo),
            h("p", null, a.desc),
            a.olhoVazio && aviso ? h("p", { className: "aviso-olho", role: "status" }, aviso) : null
          );
        })
      ),
      fitaAberta ? h(FitaK7, {
        aoFechar: function () { setFitaAberta(false); },
        onTerminar: function () {
          if (marcar) marcar("fita");
          if (adicionarEmailConclusao) adicionarEmailConclusao("fita");
        }
      }) : null
    );
  }

  function PaginaSobre() {
    return h("section", { className: "secao" },
      h("h2", { className: "secao-titulo" }, "Sobre"),
      h("div", { className: "sobre-conteudo" },
        h("p", null, h("strong", null, "Static Slice"), " abriu as portas em 1987 como o point favorito da cidade para aniversários e shows de fim de semana. Fechou abruptamente dez anos depois, em 1997, sem explicação oficial."),
        h("p", null, "Reabrimos recentemente sob nova administração. A maior parte do equipamento original — incluindo o elenco do palco — permanece intacta. Pedimos que os clientes não se aproximem do palco fora do horário de shows."),
        h("p", null, "Alguns funcionários antigos deixaram registros. A maioria se perdeu. Alguns não."),
        h("div", { className: "endereco-box" },
          "Rua das Fábricas Antigas, 1997", h("br"),
          "Aberto todos os dias, 11h às 22h", h("br"),
          "Administração: R. Valadão", h("br"),
          "\"Não ficamos responsáveis pelo que acontece depois disso.\""
        )
      )
    );
  }

  /* ========== COMPONENTES — DESKTOP ========== */
  function EstaticaCanvas({ rotulo, semSinal }) {
    const ref = useRef(null);
    useEffect(function () {
      const c = ref.current;
      if (!c) return undefined;
      const g = c.getContext && c.getContext("2d");
      if (!g) return undefined;
      const L = 120; const A = 68;
      c.width = L; c.height = A;
      const img    = g.createImageData(L, A);
      const reduzir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const nivel  = semSinal ? 255 : 90;
      let raf = 0; let ultimo = 0; let vivo = true;
      function quadro(t) {
        if (!vivo) return;
        if (t - ultimo > 90) {
          ultimo = t;
          const d = img.data;
          for (let i = 0; i < d.length; i += 4) { const v = Math.random() * nivel; d[i] = v; d[i+1] = v; d[i+2] = v; d[i+3] = 255; }
          g.putImageData(img, 0, 0);
        }
        if (!reduzir) raf = requestAnimationFrame(quadro);
      }
      raf = requestAnimationFrame(quadro);
      return function () { vivo = false; cancelAnimationFrame(raf); };
    }, [semSinal]);
    return h("canvas", { ref: ref, className: "cam-canvas", role: "img", "aria-label": rotulo });
  }

  function JanelaComputador() {
    const cams = [
      { id: 1, nome: "CAM 1 — PALCO",    selo: "22/05/1997 03:17",              semSinal: false },
      { id: 2, nome: "CAM 2 — SALÃO",    selo: "22/05/1997 03:17",              semSinal: false },
      { id: 3, nome: "CAM 3 — SEM SINAL", selo: "ÚLTIMO QUADRO 22/05/1997 03:17", semSinal: true  },
    ];
    return h("div", null,
      h("p", { className: "os-nota" }, "Monitor de câmeras — o sistema parou de gravar em 22/05/1997."),
      h("div", { className: "cams" },
        cams.map(function (c) {
          return h("figure", { className: "cam", key: c.id },
            h(EstaticaCanvas, { rotulo: c.nome, semSinal: c.semSinal }),
            h("figcaption", null, h("strong", null, c.nome), h("span", null, c.selo))
          );
        })
      )
    );
  }

  function JanelaArquivo({ prog, marcar }) {
    if (prog.arquivo) return h("pre", { className: "os-bloco" }, LOG_22_05);
    return h("div", { className: "os-arquivo" },
      h("h2", { className: "os-titulo-arquivo" }, "STATIC SLICE"),
      h("p",  { className: "os-subtitulo" }, "FALHA DE SINAL • SISTEMA OFFLINE"),
      h("div", { className: "os-info-caixa" },
        h("p",   { className: "os-info-cabecalho" }, "INTEGRIDADE DO ARQUIVO: COMPROMETIDA"),
        h("div", { className: "os-info-linha" }, h("span", null, "ORIGEM"),        h("span", null, "DESCONHECIDA")),
        h("div", { className: "os-info-linha" }, h("span", null, "ÚLTIMO ACESSO"), h("span", null, "22/05/1997 03:17")),
        h("div", { className: "os-info-linha" }, h("span", null, "STATUS"),        h("span", null, "CORROMPIDO")),
        h("div", { className: "os-info-linha" }, h("span", null, "RECUPERÁVEL"),   h("span", null, "DESCONHECIDO"))
      ),
      h("div", { className: "os-alerta-caixa" },
        h("span", { className: "os-alerta-icone", "aria-hidden": "true" }, "⚠"),
        h("div", null,
          h("p", { className: "os-alerta-titulo" }, "ALERTA"),
          h("p", null, "Este arquivo apresenta falhas críticas. A abertura pode comprometer o sistema.")
        )
      ),
      h("button", { className: "botao-os", onClick: function () { marcar("arquivo"); } }, "ABRIR ARQUIVO")
    );
  }

  function FormCodigo({ id, rotulo, botao, hashEsperado, aoAcertar }) {
    const [valor, setValor] = useState("");
    const [erro,  setErro]  = useState("");
    function tentar(e) {
      e.preventDefault();
      if (confere(valor, hashEsperado)) { setErro(""); aoAcertar(); }
      else setErro("Acesso negado. Código inválido.");
    }
    return h("form", { className: "os-form", onSubmit: tentar },
      h("label", { htmlFor: id }, rotulo),
      h("input", { id: id, type: "text", inputMode: "numeric", autoComplete: "off", autoCapitalize: "off", spellCheck: false, maxLength: 12, value: valor, onChange: function (e) { setValor(e.target.value); } }),
      h("button", { type: "submit", className: "botao-os" }, botao),
      h("div", { className: "os-erro", role: "alert" }, erro)
    );
  }

  /* Histórico do navegador — páginas disponíveis no IE simulado */
  var HISTORICO_NAVEGADOR = [
    { id: "portal",  url: "http://www.intranet.staticslice/portal",               titulo: "Intranet — Portal do Funcionário" },
    { id: "A5",      url: "http://www.diariodacidade.com.br/noticias/A5",          titulo: "Diário da Cidade — Locadora reabre" },
    { id: "A4",      url: "http://www.diariodacidade.com.br/noticias/A4",          titulo: "Diário da Cidade — Valadão compra Static Slice" },
    { id: "A3",      url: "http://www.diariodacidade.com.br/noticias/A3",          titulo: "Diário da Cidade — Investigação encerrada" },
    { id: "A2",      url: "http://www.diariodacidade.com.br/noticias/A2",          titulo: "Diário da Cidade — Técnico morto em acidente" },
    { id: "A1",      url: "http://www.diariodacidade.com.br/noticias/A1",          titulo: "Diário da Cidade — Static Slice abre" },
    { id: "A6",      url: "http://www.diariodacidade.com.br/noticias/A6",          titulo: "Diário da Cidade — Rumores" },
  ];

  function JanelaRede({ prog, marcar, adicionarEmailConclusao }) {
    var _pag  = useState("portal"); var pagina = _pag[0]; var setPagina = _pag[1];
    var _hist = useState(false);    var histAberto = _hist[0]; var setHistAberto = _hist[1];

    var db       = (typeof JORNAL_DATABASE !== "undefined") ? JORNAL_DATABASE : [];
    var itemAtual = HISTORICO_NAVEGADOR.find(function(i) { return i.id === pagina; });
    var urlAtual  = itemAtual ? itemAtual.url : "about:blank";

    /* ---- conteúdo da página atual ---- */
    function renderPagina() {
      /* Portal do funcionário */
      if (pagina === "portal") {
        if (prog.portal) {
          return h("div", { className: "ie-site-intranet" },
            h("div", { className: "ie-site-header" }, "INTRANET STATIC SLICE"),
            h("p", { className: "ie-site-nota" }, "Portal do Funcionário › Registro recuperado"),
            h("pre", { className: "os-bloco" }, LOG_14_09)
          );
        }
        return h("div", { className: "ie-site-intranet" },
          h("div", { className: "ie-site-header" }, "INTRANET STATIC SLICE"),
          h("p", { className: "ie-site-nota" }, "Portal do Funcionário › Acesso Restrito"),
          h("p", { style: { marginBottom: "8px" } }, "Insira seu código de acesso (4 dígitos)."),
          h(FormCodigo, {
            id: "codigo-portal", rotulo: "CÓDIGO", botao: "ENTRAR",
            hashEsperado: HASH_PORTAL,
            aoAcertar: function() { marcar("portal"); if (adicionarEmailConclusao) adicionarEmailConclusao("portal"); },
          })
        );
      }

      /* Artigo do jornal */
      var artigo = db.find(function(a) { return a.id === pagina; });
      if (artigo) {
        return h("div", { className: "ie-site-jornal" },
          h("div", { className: "ie-jornal-cabecalho" },
            h("div", { className: "ie-jornal-nome" }, "Diário da Cidade"),
            h("div", { className: "ie-jornal-slogan" }, "Informação com responsabilidade desde 1952"),
            h("div", { className: "ie-jornal-data" }, artigo.data)
          ),
          h("div", { className: "ie-jornal-linha" }),
          h("div", { className: "ie-jornal-corpo" },
            h("h2", { className: "ie-jornal-titulo" }, artigo.titulo),
            h("p",  { className: "ie-jornal-autor" }, "Redação — " + artigo.fonte),
            h("div", { className: "ie-jornal-texto" },
              artigo.conteudo.split("\n\n").map(function(par, i) {
                return h("p", { key: i }, par);
              })
            )
          )
        );
      }

      return h("p", null, "Página não encontrada.");
    }

    /* ---- render do IE ---- */
    return h("div", { className: "ie-wrapper" },

      /* barra de ferramentas */
      h("div", { className: "ie-toolbar" },
        h("button", { className: "ie-btn", onClick: function() { setPagina("portal"); setHistAberto(false); } }, "◄"),
        h("div",    { className: "ie-urlbar" }, urlAtual),
        h("button", { className: "ie-btn" + (histAberto ? " ie-btn-ativo" : ""),
          onClick: function() { setHistAberto(function(v){ return !v; }); } }, "Histórico")
      ),

      /* corpo: histórico ou página */
      h("div", { className: "ie-corpo" },

        /* painel lateral de histórico */
        histAberto ? h("div", { className: "ie-historico-painel" },
          h("div", { className: "ie-historico-titulo" }, "Histórico"),
          HISTORICO_NAVEGADOR.map(function(item) {
            /* artigos do jornal só após desbloquear portal */
            if (item.id !== "portal" && !prog.portal) return null;
            return h("div", {
              key: item.id,
              className: "ie-historico-item" + (pagina === item.id ? " ie-historico-item-ativo" : ""),
              onClick: function() { setPagina(item.id); setHistAberto(false); }
            },
              h("span", { className: "ie-historico-icone" }, "🌐"),
              item.titulo
            );
          })
        ) : null,

        /* área de conteúdo */
        h("div", { className: "ie-conteudo" }, renderPagina())
      )
    );
  }

  function JanelaDocumentos({ prog, marcar, adicionarEmailConclusao }) {
    if (prog.docs) {
      return h("div", null,
        h("p", { className: "os-nota" }, "Documentos › cofre aberto (2 arquivos)"),
        h("p", { className: "os-arquivo-nome" }, "📄 mensagem_nao_lida.txt"),
        h("pre", { className: "os-bloco" }, MENSAGEM_LIVIA),
        h("p", { className: "os-arquivo-nome" }, "📄 turno_noturno_log.txt"),
        h("pre", { className: "os-bloco os-bloco-final" }, LOG_FINAL)
      );
    }
    return h("div", null,
      h("p", { className: "os-nota" }, "Documentos › 🔒 cofre do sistema"),
      h("p", null, "Pasta protegida. Informe a combinação do cofre."),
      h(FormCodigo, {
        id: "codigo-cofre", rotulo: "COMBINAÇÃO DO COFRE", botao: "ABRIR",
        hashEsperado: HASH_COFRE,
        aoAcertar: function () { marcar("docs"); if (adicionarEmailConclusao) adicionarEmailConclusao("cofre"); },
      })
    );
  }

  const RESETAR_CONTADOR_NA_LIXEIRA = true;

  function JanelaLixeira() {
    function reiniciar() {
      if (!window.confirm("Esvaziar a lixeira e reiniciar todo o progresso deste arquivo?")) return;

      try { localStorage.removeItem(CHAVE_PROGRESSO); } catch (e) {}
      try { localStorage.removeItem("staticslice:emails:v1"); } catch (e) {}
      try { localStorage.removeItem("staticslice:emails:aleatorios:v1"); } catch (e) {}
      try { localStorage.removeItem(CHAVE_RELOGIO); } catch (e) {}
      try { localStorage.removeItem("staticSlice_ultimaJanela"); } catch (e) {}

      if (RESETAR_CONTADOR_NA_LIXEIRA) {
        try { localStorage.removeItem("staticslice:contador:v1"); } catch (e) {}
        try { delete window.__staticSliceContadorContado; } catch (e) {}
      }

      window.location.hash = "#/inicio";
      window.location.reload();
    }

    return h("div", null,
      h("p", { className: "os-nota" }, "Lixeira (3 itens)"),
      h("ul", { className: "os-lista" },
        h("li", null, "📄 relatorio_22-05.doc — apagado em 15/09/1997 por R.VALADAO"),
        h("li", null, "🎵 fita_nogueira.wav — nunca digitalizada. Continua onde ele a deixou."),
        h("li", null, "📄 aviso_reforma_squawk (3x).txt — apagado em 15/09/1997 por R.VALADAO")
      ),
      h("button", {
        className: "botao-os botao-os-discreto",
        onClick: reiniciar
      }, "Esvaziar lixeira (reiniciar progresso)")
    );
  }

  /* ===== JANELA: ARQUIVO OCULTO ===== */
  var CONTEUDO_ARQ_OCULTO = [
    "[DOCUMENTO FRAGMENTADO — RECUPERADO DO ARQUIVO CONFIDENCIAL]",
    "",
    "Relatório Técnico — Static Slice — 22/05/1997",
    "Investigação Preliminar: Incidente Fatal — Sérgio Lacerda, Técnico de Manutenção",
    "",
    "RESUMO:",
    "O funcionário Sérgio Lacerda, 34 anos, foi encontrado óbito sob o palco da área de",
    "apresentações. Causa aparente: falha estrutural.",
    "",
    "Laudo técnico: A articulação do palco apresentava sinais visíveis de corrosão e desgaste.",
    "Documentos de manutenção indicam que reformas programadas foram adiadas em três",
    "ocasiões durante 1997.",
    "",
    "COMUNICAÇÃO INTERNA (14/09/1997):",
    "Testemunho de Ademar Nogueira, 41 anos, segurança noturno:",
    "\"O sr. Valadão mandou o Sérgio subir naquele palco sabendo dos problemas.",
    "Quando o Sérgio avisou sobre o risco, Valadão disse 'trabalha mesmo assim'.\"",
    "",
    "PRESSÃO ADMINISTRATIVA:",
    "Nogueira assinou relatório falsificado em 22/05 sob coerção. Admitiu verbalmente",
    "em 14/09 que havia sido ameaçado de demissão caso não assinasse.",
    "",
    "ANEXOS LOCALIZADOS:",
    "— Anotações pessoais de Ademar (Armário 51)",
    "— Registro de compra da peça nº 08 (autorizada por R. Valadão, 10/05/1997)",
    "— Comunicação interna: \"adiar reforma para reduzir custos\"",
    "",
    "CONCLUSÃO:",
    "Não há dúvida de que a morte de Sérgio Lacerda resultou de negligência administrativa",
    "com conhecimento prévio do risco estrutural.",
    "",
    "Roberto Valadão ordenou a continuidade das atividades e pressionou funcionários",
    "para encobrir o incidente. O documento de morte foi falsificado.",
    "",
    "[FIM DO DOCUMENTO]",
    "",
    "Timestamp do arquivo: 03:17",
    "Última modificação: 2001",
  ].join("\n");

  function JanelaArquivoOculto({ prog, marcar, adicionarEmailConclusao }) {
    var _s = useState(""); var codigo = _s[0]; var setCodigo = _s[1];
    var _e = useState(""); var erro    = _e[0]; var setErro   = _e[1];

    /* se já desbloqueado, mostra direto */
    if (prog.arquivoOculto) {
      return h("div", null,
        h("p", { className: "os-nota" }, "Arquivo confidencial — 340851 — desbloqueado"),
        h("pre", { className: "os-bloco" }, CONTEUDO_ARQ_OCULTO)
      );
    }

    /* bloqueado: mas só aparece o campo após cofre desbloqueado */
    if (!prog.docs) {
      return h("div", null,
        h("p", { className: "os-nota" }, "Arquivo criptografado."),
        h("p", null, "Nenhum acesso disponível no momento.")
      );
    }

    function tentar(e) {
      e.preventDefault();
      if (confere(codigo, HASH_ARQ_OCULTO)) {
        setErro("");
        marcar("arquivoOculto");
        if (adicionarEmailConclusao) adicionarEmailConclusao("arquivoOculto");
      } else {
        setErro("Código inválido.");
      }
    }

    return h("div", null,
      h("p", { className: "os-nota" }, "Arquivo criptografado — código de 6 dígitos"),
      h("p", null, "Os fragmentos estão espalhados. Junte-os."),
      h("form", { className: "os-form", onSubmit: tentar },
        h("label", { htmlFor: "codigo-oculto" }, "CÓDIGO DO ARQUIVO"),
        h("input", { id: "codigo-oculto", type: "text", inputMode: "numeric", autoComplete: "off", maxLength: 6, value: codigo, onChange: function (e) { setCodigo(e.target.value); } }),
        h("button", { type: "submit", className: "botao-os" }, "DECRIPTAR"),
        h("div", { className: "os-erro", role: "alert" }, erro)
      )
    );
  }

  /* ===== JANELA: INBOX ===== */
  function JanelaInbox({ emails, emailSelecionado, setEmailSelecionado, marcarEmailComoLido }) {
    var lista    = emails || [];
    var naoLidos = lista.filter(function (e) { return !e.lido; }).length;

    if (emailSelecionado) {
      return h("div", null,
        h("button", { className: "botao-os", onClick: function () { setEmailSelecionado(null); } }, "◀ Voltar"),
        h("p", { className: "os-nota" }, "De: " + emailSelecionado.de),
        h("p", { className: "os-nota" }, "Assunto: " + emailSelecionado.assunto),
        emailSelecionado.data ? h("p", { className: "os-nota" }, "Data: " + emailSelecionado.data) : null,
        h("hr"),
        h("pre", { className: "os-bloco" }, emailSelecionado.corpo)
      );
    }

    return h("div", null,
      h("p", { className: "os-nota" }, "Caixa de Entrada — " + naoLidos + " não lida(s)"),
      lista.length === 0
        ? h("p", null, "Nenhuma mensagem.")
        : h("ul", { className: "os-lista" },
            lista.map(function (email) {
              return h("li", {
                key: email.id + email.recebidoEm,
                style: { fontWeight: email.lido ? "normal" : "bold", cursor: "pointer", padding: "4px 0", borderBottom: "1px solid #aaa" },
                onClick: function () { marcarEmailComoLido(email.id); setEmailSelecionado(email); },
              },
                h("span", { style: { marginRight: "6px" } }, email.lido ? "✉" : "📧"),
                email.assunto
              );
            })
          )
    );
  }

  /* ===== JANELA: BLOCO DE NOTAS ===== */
  function JanelaBloco({ blocoNotas }) {
    var notas = blocoNotas || [];
    var _s    = useState(null);
    var notaSel    = _s[0];
    var setNotaSel = _s[1];

    if (notaSel) {
      return h("div", null,
        h("button", { className: "botao-os", onClick: function () { setNotaSel(null); } }, "◀ Voltar"),
        h("p", { className: "os-nota" }, "Data: " + notaSel.data + (notaSel.importante ? " ⚠ IMPORTANTE" : "")),
        h("pre", { className: "os-bloco" }, notaSel.conteudo)
      );
    }

    return h("div", null,
      h("p", { className: "os-nota" }, "Bloco de Notas — A. Nogueira"),
      h("ul", { className: "os-lista" },
        notas.map(function (nota) {
          return h("li", {
            key: nota.id,
            style: { fontWeight: nota.importante ? "bold" : "normal", cursor: "pointer", padding: "4px 0", borderBottom: "1px solid #aaa" },
            onClick: function () { setNotaSel(nota); },
          },
            h("span", { style: { marginRight: "6px" } }, nota.importante ? "⚠" : "○"),
            nota.data
          );
        })
      )
    );
  }

  /* ========== ÍCONES E JANELAS ========== */
  const ICONES = [
    { id: "arquivo",        simbolo: "📄", rotulo: "turno_noturno_log.txt" },
    { id: "computador",    simbolo: "🖥",  rotulo: "Meu computador"        },
    { id: "documentos",    simbolo: "📁", rotulo: "Documentos"             },
    { id: "rede",          simbolo: "🌐", rotulo: "Minhas redes"           },
    { id: "bloco",         simbolo: "📝", rotulo: "Bloco de Notas"         },
    { id: "inbox",         simbolo: "📧", rotulo: "Inbox"                  },
    { id: "arquivoOculto", simbolo: "🔐", rotulo: "arquivo_340851"         },
    { id: "lixeira",       simbolo: "🗑",  rotulo: "Lixeira"               },
  ];

  const POSICOES_ICONES_DESKTOP = {
    arquivo:        { left: 40,  top: 30,  width: 80, height: 70 },
    computador:     { left: 40,  top: 130, width: 80, height: 70 },
    documentos:     { left: 40,  top: 230, width: 80, height: 70 },
    rede:           { left: 933, top: 252, width: 80, height: 70 },
    bloco:          { left: 40,  top: 330, width: 80, height: 70 },
    inbox:          { left: 40,  top: 430, width: 80, height: 70 },
    arquivoOculto:  { left: 150, top: 30, width: 80, height: 70 },
    lixeira:        { left: 150, top: 130, width: 80, height: 70 },
  };

  const POSICOES_ICONES_MOBILE = {
    arquivo:        { left: 20,  top: 25,  width: 80, height: 70 },
    computador:     { left: 110, top: 25,  width: 80, height: 70 },
    documentos:     { left: 200, top: 25,  width: 80, height: 70 },
    rede:           { left: 290, top: 25,  width: 80, height: 70 },
    bloco:          { left: 20,  top: 120, width: 80, height: 70 },
    inbox:          { left: 110, top: 120, width: 80, height: 70 },
    arquivoOculto:  { left: 200, top: 120, width: 80, height: 70 },
    lixeira:        { left: 290, top: 120, width: 80, height: 70 },
  };

  function getPosicaoIcone(id) {
    if (window.innerWidth <= 640) return POSICOES_ICONES_MOBILE[id];
    return POSICOES_ICONES_DESKTOP[id];
  }

  const JANELAS = {
    arquivo:        { titulo: "SEGURANÇA // ARQUIVO CORROMPIDO",      Corpo: JanelaArquivo        },
    computador:     { titulo: "Meu computador — Monitor de câmeras",  Corpo: JanelaComputador     },
    documentos:     { titulo: "Documentos",                           Corpo: JanelaDocumentos     },
    rede:           { titulo: "Minhas redes — Internet Explorer",     Corpo: JanelaRede           },
    bloco:          { titulo: "Bloco de Notas — A. Nogueira",         Corpo: JanelaBloco          },
    inbox:          { titulo: "Inbox",                                Corpo: JanelaInbox          },
    arquivoOculto:  { titulo: "arquivo_340851 [CRIPTOGRAFADO]",       Corpo: JanelaArquivoOculto  },
    lixeira:        { titulo: "Lixeira",                              Corpo: JanelaLixeira        },
  };

  function PaginaDesktop({ prog, marcar, adicionarEmailConclusao, emails, emailSelecionado, setEmailSelecionado, marcarEmailComoLido, blocoNotas, relogio }) {
    var _ab = useState(function () {
      return localStorage.getItem("staticSlice_ultimaJanela") || null;
    });
    var aberta = _ab[0];
    var setAberta = _ab[1];

    var _pos = useState({ x: 0, y: 0 });
    var posJanela = _pos[0];
    var setPosJanela = _pos[1];

    var _arr = useState(false);
    var arrastando = _arr[0];
    var setArrastando = _arr[1];

    var _inicio = useState({ x: 0, y: 0 });
    var inicioArrasto = _inicio[0];
    var setInicioArrasto = _inicio[1];

    var janela = aberta ? JANELAS[aberta] : null;

    useEffect(function () {
      document.body.classList.add("desktop-aberto");
      return function () { document.body.classList.remove("desktop-aberto"); };
    }, []);

    useEffect(function () {
      if (aberta) localStorage.setItem("staticSlice_ultimaJanela", aberta);
      else localStorage.removeItem("staticSlice_ultimaJanela");
    }, [aberta]);

    useEffect(function () {
      function mover(e) {
        if (!arrastando) return;
        setPosJanela(function (posAtual) {
          return {
            x: posAtual.x + (e.clientX - inicioArrasto.x),
            y: posAtual.y + (e.clientY - inicioArrasto.y)
          };
        });
        setInicioArrasto({ x: e.clientX, y: e.clientY });
      }

      function soltar() {
        setArrastando(false);
      }

      document.addEventListener("mousemove", mover);
      document.addEventListener("mouseup", soltar);

      return function () {
        document.removeEventListener("mousemove", mover);
        document.removeEventListener("mouseup", soltar);
      };
    }, [arrastando, inicioArrasto]);

    function iniciarArrasto(e) {
      if (e.button !== 0) return;
      setInicioArrasto({ x: e.clientX, y: e.clientY });
      setArrastando(true);
    }

    function abrirJanela(id) {
      setAberta(id);
      setPosJanela({ x: 0, y: 0 });
    }

    var propsJanela = {
      key: aberta,
      prog: prog,
      marcar: marcar,
      adicionarEmailConclusao: adicionarEmailConclusao,
      emails: emails,
      emailSelecionado: emailSelecionado,
      setEmailSelecionado: setEmailSelecionado,
      marcarEmailComoLido: marcarEmailComoLido,
      blocoNotas: blocoNotas,
    };

    return h("div", { className: "tela-os" },
      h("div", { className: "os-area" },
        h("div", { className: "os-icones" },
          ICONES.map(function (ic) {
            var naoLidos = ic.id === "inbox"
              ? (emails || []).filter(function (e) { return !e.lido; }).length
              : 0;

            var posIcone = getPosicaoIcone(ic.id);

            return h("button", {
              key: ic.id,
              className: "os-icone" + (aberta === ic.id ? " ativo" : ""),
              style: {
                position: "absolute",
                left: posIcone.left + "px",
                top: posIcone.top + "px",
                width: posIcone.width + "px",
                height: posIcone.height + "px"
              },
              onClick: function () { abrirJanela(ic.id); },
            },
              h("span", { className: "os-icone-simbolo", "aria-hidden": "true" },
                ic.simbolo,
                naoLidos > 0
                  ? h("sup", { style: { background: "red", color: "#fff", borderRadius: "50%", padding: "0 3px", fontSize: "9px", marginLeft: "2px" } }, naoLidos)
                  : null
              ),
              h("span", { className: "os-icone-rotulo" }, ic.rotulo)
            );
          })
        ),

        h("div", { className: "os-palco" },
          janela
            ? h("div", {
                className: "os-janela",
                role: "dialog",
                "aria-label": janela.titulo,
                style: {
                  transform: "translate(" + posJanela.x + "px, " + posJanela.y + "px)"
                }
              },
                h("div", {
                  className: "os-titulo",
                  onMouseDown: iniciarArrasto,
                  style: { cursor: arrastando ? "grabbing" : "grab" }
                },
                  h("span", { className: "os-titulo-texto" }, janela.titulo),
                  h("div", { className: "os-botoes" },
                    h("span", { className: "os-botao os-botao-deco", "aria-hidden": "true" }, "_"),
                    h("span", { className: "os-botao os-botao-deco", "aria-hidden": "true" }, "□"),
                    h("button", {
                      className: "os-botao os-fechar",
                      "aria-label": "Fechar janela",
                      onMouseDown: function (e) { e.stopPropagation(); },
                      onClick: function () { setAberta(null); }
                    }, "×")
                  )
                ),
                h("div", { className: "os-corpo" }, h(janela.Corpo, propsJanela))
              )
            : null
        )
      ),

      h("div", { className: "os-taskbar" },
        h("a", { href: "#/inicio", className: "os-iniciar" }, "▶ Iniciar"),
        janela ? h("span", { className: "os-tarefa" }, janela.titulo) : null,
        h("div", { className: "os-relogio" }, "🔊 " + (relogio || RELOGIO_INICIAR))
      )
    );
  }

  /* ========== ROTAS ========== */
  const PAGINAS = {
    inicio:        { rotulo: "Início",        titulo: "Static Slice - Pizzaria",            publica: true,  Componente: PaginaInicio        },
    cardapio:      { rotulo: "Cardápio",      titulo: "Cardápio - Static Slice",            publica: true,  Componente: PaginaCardapio      },
    animatronicos: { rotulo: "Animatrônicos", titulo: "Animatrônicos - Static Slice",       publica: true,  Componente: PaginaAnimatronicos },
    sobre:         { rotulo: "Sobre",         titulo: "Sobre - Static Slice",               publica: true,  Componente: PaginaSobre         },
    desktop:       { rotulo: "",              titulo: "SEGURANÇA // ARQUIVO CORROMPIDO",    publica: false, Componente: PaginaDesktop       },
  };
  const ORDEM_MENU = ["inicio", "cardapio", "animatronicos", "sobre"];

  function lerRota() {
    var id = window.location.hash.replace(/^#\/?/, "");
    return Object.prototype.hasOwnProperty.call(PAGINAS, id) ? id : "inicio";
  }

  /* ========== APP ========== */
  function App() {
    var _r = useState(lerRota);
    var rota = _r[0];
    var setRota = _r[1];

    var _p = useState(lerProgresso);
    var prog = _p[0];
    var setProg = _p[1];

    var _em = useState([]);
    var emails = _em[0];
    var setEmails = _em[1];

    var _es = useState(null);
    var emailSelecionado = _es[0];
    var setEmailSelecionado = _es[1];

    var _bn = useState([]);
    var blocoNotas = _bn[0];
    var setBlocoNotas = _bn[1];

    /* evita agendar o mesmo e-mail de conclusão mais de uma vez */
    var emailsConclusaoAgendados = useRef({});

    /* ===== RELÓGIO DO JOGO ===== */
    var _rel = useState(function () {
      var salvo = localStorage.getItem(CHAVE_RELOGIO);
      return salvo || RELOGIO_INICIAR;
    });
    var relogio = _rel[0];
    var setRelogio = _rel[1];

    /* o relógio corre durante o turno no desktop */
    useEffect(function () {
      if (rota !== "desktop") return;

      function avancarRelogio() {
        setRelogio(function (atual) {
          var partes = atual.split(":");
          var horas = parseInt(partes[0], 10);
          var minutos = parseInt(partes[1], 10);

          if (isNaN(horas) || isNaN(minutos)) {
            horas = 3;
            minutos = 17;
          }

          minutos++;

          if (minutos >= 60) {
            minutos = 0;
            horas++;
          }

          if (horas >= 24) horas = 0;

          var novoHorario =
            String(horas).padStart(2, "0") + ":" +
            String(minutos).padStart(2, "0");

          localStorage.setItem(CHAVE_RELOGIO, novoHorario);
          return novoHorario;
        });
      }

      var intervalo = setInterval(avancarRelogio, RELOGIO_INTERVALO_MS);

      return function () {
        clearInterval(intervalo);
      };
    }, [rota]);

    /* escutar mudança de rota */
    useEffect(function () {
      function aoMudar() {
        setRota(lerRota());
        try { window.scrollTo(0, 0); } catch (e) {}
      }

      window.addEventListener("hashchange", aoMudar);
      return function () { window.removeEventListener("hashchange", aoMudar); };
    }, []);

    useEffect(function () {
      document.title = PAGINAS[rota].titulo;
    }, [rota]);

    /* carregar dados ao iniciar */
    useEffect(function () {
      var emailsSalvos = localStorage.getItem("staticslice:emails:v1");

      if (emailsSalvos) {
        try {
          var lista = JSON.parse(emailsSalvos);
          var vistos = {};

          lista = lista.filter(function (e) {
            if (vistos[e.id]) return false;
            vistos[e.id] = true;
            return true;
          });

          setEmails(lista);
          salvarEmails(lista);
        } catch (e) {
          carregarEmailsInicio();
        }
      } else {
        carregarEmailsInicio();
      }

      if (typeof BLOCO_NOTAS_DATABASE !== "undefined") {
        setBlocoNotas(BLOCO_NOTAS_DATABASE);
      }
    }, []);

    useEffect(function () {
      salvarProgresso(prog);
    }, [prog]);

    function marcar(chave) {
      setProg(function (p) {
        var n = Object.assign({}, p);
        n[chave] = true;
        return n;
      });
    }

    /* =========================================================
       A1-A5 — E-MAILS INICIAIS POR HORÁRIO
       ========================================================= */
    useEffect(function () {
      if (rota !== "desktop" || !relogio) return;
      if (typeof EMAIL_DATABASE === "undefined" || !EMAIL_DATABASE.inicio) return;

      var horarios = {
        A1: "03:17",
        A2: "03:35",
        A3: "03:55",
        A4: "04:20",
        A5: "04:45"
      };

      var paraLiberar = EMAIL_DATABASE.inicio.filter(function (email) {
        var horario = horarios[email.id];
        if (!horario) return false;
        if (relogio < horario) return false;

        return !emails.some(function (e) {
          return e.id === email.id;
        });
      });

      if (paraLiberar.length === 0) return;

      setEmails(function (atual) {
        var nova = atual.slice();

        paraLiberar.forEach(function (email) {
          var jaExiste = nova.some(function (e) {
            return e.id === email.id;
          });

          if (!jaExiste) {
            nova.push(Object.assign({}, email, {
              lido: false,
              recebidoEm: Date.now()
            }));
          }
        });

        salvarEmails(nova);
        return nova;
      });
    }, [relogio, emails, rota]);

    /* =========================================================
       B1-B8 — 1 A 4 E-MAILS ALEATÓRIOS DURANTE O TURNO
       ========================================================= */
    useEffect(function () {
      if (rota !== "desktop" || !relogio) return;
      if (typeof EMAIL_DATABASE === "undefined" || !EMAIL_DATABASE.aleatorios) return;
      if (typeof sortearEmailsAleatorios === "undefined") return;

      var CHAVE_B = "staticslice:emails:aleatorios:v1";
      var agenda = null;
      var agendaSalva = localStorage.getItem(CHAVE_B);

      if (agendaSalva) {
        try {
          agenda = JSON.parse(agendaSalva);
        } catch (e) {
          agenda = null;
        }
      }

      /* criar uma única agenda por turno: 1 a 4 e-mails */
      if (!agenda) {
        var quantidade = 1 + Math.floor(Math.random() * 4);
        var sorteados = sortearEmailsAleatorios(quantidade);

        var horarios = [
          "05:00",
          "05:20",
          "05:40",
          "05:55"
        ].slice(0, quantidade);

        agenda = sorteados.map(function (email, i) {
          return {
            id: email.id,
            horario: horarios[i]
          };
        });

        localStorage.setItem(CHAVE_B, JSON.stringify(agenda));
      }

      var paraLiberar = agenda.filter(function (agendado) {
        if (relogio < agendado.horario) return false;

        return !emails.some(function (email) {
          return email.id === agendado.id;
        });
      });

      if (paraLiberar.length === 0) return;

      setEmails(function (atual) {
        var nova = atual.slice();

        paraLiberar.forEach(function (agendado) {
          var emailOriginal = EMAIL_DATABASE.aleatorios.find(function (email) {
            return email.id === agendado.id;
          });

          if (!emailOriginal) return;

          var jaExiste = nova.some(function (email) {
            return email.id === emailOriginal.id;
          });

          if (!jaExiste) {
            nova.push(Object.assign({}, emailOriginal, {
              lido: false,
              recebidoEm: Date.now()
            }));
          }
        });

        salvarEmails(nova);
        return nova;
      });
    }, [relogio, emails, rota]);

    /* =========================================================
       C5 — TODOS OS PUZZLES PRINCIPAIS CONCLUÍDOS
       ========================================================= */
    useEffect(function () {
      if (rota !== "desktop") return;

      var tudoConcluido =
        !!prog.arquivo &&
        !!prog.portal &&
        !!prog.fita &&
        !!prog.docs &&
        !!prog.arquivoOculto;

      if (!tudoConcluido) return;

      adicionarEmailConclusao("todosConcluido");
    }, [prog, rota]);

    /* =========================================================
       C6 — FIM DO TURNO
       ========================================================= */
    useEffect(function () {
      if (rota !== "desktop" || !relogio) return;
      if (relogio < "06:00") return;

      adicionarEmailConclusao("final");
    }, [relogio, rota]);

    /* funções de e-mail */
    function carregarEmailsInicio() {
      setEmails([]);
      salvarEmails([]);
    }

    function adicionarEmailConclusao(tipo) {
      if (typeof EMAIL_DATABASE === "undefined" || !EMAIL_DATABASE.conclusao) return;

      var tmpl = EMAIL_DATABASE.conclusao[tipo];
      if (!tmpl) return;

      if (emailsConclusaoAgendados.current[tmpl.id]) return;

      setEmails(function (atual) {
        var jaExiste = atual.some(function (e) { return e.id === tmpl.id; });
        if (jaExiste) {
          emailsConclusaoAgendados.current[tmpl.id] = true;
          return atual;
        }

        emailsConclusaoAgendados.current[tmpl.id] = true;

        var delay = (7 + Math.floor(Math.random() * 14)) * 1000;

        setTimeout(function () {
          var novoEmail = Object.assign({}, tmpl, {
            lido: false,
            recebidoEm: Date.now()
          });

          setEmails(function (cur) {
            var jaExiste2 = cur.some(function (e) { return e.id === tmpl.id; });
            if (jaExiste2) return cur;

            var nova = cur.concat([novoEmail]);
            salvarEmails(nova);
            return nova;
          });
        }, delay);

        return atual;
      });
    }

    function salvarEmails(lista) {
      try {
        localStorage.setItem("staticslice:emails:v1", JSON.stringify(lista));
      } catch (e) {}
    }

    function marcarEmailComoLido(emailId) {
      setEmails(function (atual) {
        var nova = atual.map(function (e) {
          return e.id === emailId
            ? Object.assign({}, e, { lido: true })
            : e;
        });

        salvarEmails(nova);
        return nova;
      });
    }

    var pagina = PAGINAS[rota];

    var propsComEmail = {
      prog: prog,
      marcar: marcar,
      adicionarEmailConclusao: adicionarEmailConclusao,
      emails: emails,
      emailSelecionado: emailSelecionado,
      setEmailSelecionado: setEmailSelecionado,
      marcarEmailComoLido: marcarEmailComoLido,
      blocoNotas: blocoNotas,
      relogio: relogio,
    };

    var usaPropsEmail = rota === "desktop" || rota === "animatronicos";

    return h(Fragment, null,
      pagina.publica ? h(Nav, { rota: rota }) : null,
      h(pagina.Componente, usaPropsEmail
        ? propsComEmail
        : { prog: prog, marcar: marcar }),
      pagina.publica ? h(Rodape) : null
    );
  }

  ReactDOM.createRoot(document.getElementById("app")).render(h(App));
})();
