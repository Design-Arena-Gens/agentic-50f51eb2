type Slide = {
  number: number;
  tag: string;
  title: string;
  bullets?: string[];
  sections?: { heading: string; items: string[] }[];
  script: string;
};

const slides: Slide[] = [
  {
    number: 1,
    tag: "Direzione progettuale",
    title:
      "Governance globale della salute: progettare competenze per la quinta Biotecnologie sanitarie",
    bullets: [
      "Cornice disciplinare: disciplina sanitaria con focus sull'Organizzazione Mondiale della Sanità (OMS) e sulle agenzie sanitarie ONU (UNICEF, UNAIDS, FAO, ECDC, OIE) in ottica di governance integrata.",
      "Direzione progettuale: apprendimento significativo ancorato al Curricolo verticale dell'indirizzo, con ponti di interdisciplinarità verso microbiologia, diritto sanitario e inglese tecnico.",
      "Prodotto atteso: dossier multimediale e policy brief per la tutela della salute globale, coerenti con la Didattica per competenze e con il Profilo educativo, culturale e professionale del quinto anno.",
    ],
    script:
      "Avvio la simulazione presentando il titolo della lezione: voglio che la commissione percepisca da subito la coerenza con la traccia concorsuale e con l'indirizzo biotecnologico. Richiamo il concetto di governance internazionale per collegarlo al percorso pluridisciplinare già maturato dalla classe e sottolineo che il prodotto finale sarà un dossier operativo utile per la prova orale degli studenti.",
  },
  {
    number: 2,
    tag: "Analisi del contesto",
    title: "Classe quinta – profilo e bisogni formativi",
    bullets: [
      "23 studenti (15F, 8M); clima relazionale positivo, esperienza consolidata di cooperative learning e project work PCTO presso ASL locale.",
      "1 studente con DSA (dislessia, PDP attivo) e 1 studente con certificazione PEI per disabilità intellettiva lieve; presenza di 3 alunni con BES socio-linguistici rientrati da mobilità.",
      "Motivazione elevata per tematiche di salute globale; necessità di rafforzare pensiero critico sulle fonti e comunicazione tecnico-scientifica bilingue.",
      "Ambiente di apprendimento: laboratorio informatico con 12 postazioni, dispositivi personali consentiti (BYOD guidato), LIM e connessione stabile per attività sincrone con piattaforme OMS.",
    ],
    script:
      "Descrivo una classe reale: uso dati quantitativi e qualitativi per mostrare che so contestualizzare la progettazione. Evidenzio i bisogni formativi specifici – gestione delle fonti, comunicazione scientifica – anticipando le scelte metodologiche inclusive che metterò in campo.",
  },
  {
    number: 3,
    tag: "Riferimenti ordinamentali",
    title: "Collocazione normativa essenziale",
    sections: [
      {
        heading: "Quadro di riferimento",
        items: [
          "D.P.R. 88/2010 e Linee Guida dell'Istituto Tecnico settore tecnologico – indirizzo Biotecnologie sanitarie: area di indirizzo classe quinta, competenze su prevenzione, tutela della salute e sistemi sanitari.",
          "Linee Guida ministeriali 2010-2012 per le scienze integrate e discipline sanitarie: focus su organizzazione dei sistemi sanitari e prevenzione primaria.",
          "Competenze Chiave Europee 2018: competenza in materia di cittadinanza, competenza digitale, imparare a imparare, consapevolezza ed espressione culturale, competenza multilinguistica.",
          "Agenda 2030 Goal 3 (Salute e benessere) e Goal 17 (Partnership) collegati al Piano Nazionale della Prevenzione 2020-2025 per l'educazione alla salute globale.",
        ],
      },
      {
        heading: "Sistema scuola",
        items: [
          "Il modulo si inserisce nel PTOF d'istituto nell'asse Salute e Benessere, rafforzando il curricolo verticale di indirizzo con connessioni ai progetti PCTO presso l'ASL.",
          "Coerenza con la griglia di valutazione interna approvata dal Collegio: indicatori su analisi delle politiche sanitarie internazionali e uso consapevole delle TIC.",
        ],
      },
    ],
    script:
      "Rendo evidente la piena aderenza normativa: seleziono solo i riferimenti essenziali e li collego al PTOF, mostrando alla commissione che la mia lezione è incardinata nel sistema scuola e orientata alle Competenze Chiave europee 2018.",
  },
  {
    number: 4,
    tag: "Prerequisiti e attivazione",
    title: "Mappa delle conoscenze pregresse",
    sections: [
      {
        heading: "Prerequisiti disciplinari",
        items: [
          "Definizione OMS di salute e differenza fra prevenzione primaria, secondaria e terziaria.",
          "Conoscenza di base della struttura ONU e delle principali agenzie specializzate.",
          "Competenze digitali: utilizzo di Google Workspace e strumenti di collaborazione sincrona.",
        ],
      },
      {
        heading: "Brainstorming iniziale (5')",
        items: [
          'Question prompt: "Quali organizzazioni globali affrontano le pandemie?" raccolta su Padlet con parole chiave.',
          "Mappa rapida alla LIM per visualizzare connessioni già note e individuare i nodi da approfondire.",
          'Attivazione linguistica: restituzione di termini chiave in italiano e inglese (es. "health governance", "surveillance").',
        ],
      },
    ],
    script:
      "Il brainstorming iniziale mi consente di verificare i prerequisiti e di attivare la memoria episodica degli studenti. Presento subito l'uso di Padlet e della LIM per impostare un apprendimento significativo e condiviso.",
  },
  {
    number: 5,
    tag: "Obiettivi di apprendimento",
    title: "Sapere, saper fare, competenze",
    sections: [
      {
        heading: "Conoscenze (Sapere)",
        items: [
          "Struttura organizzativa dell'OMS (Assemblea, Consiglio Esecutivo, Segretariato) e ruolo del Regolamento Sanitario Internazionale.",
          "Mission e ambiti operativi delle agenzie sanitarie ONU e dell'ECDC.",
          "Indicatori globali di salute (DALY, sorveglianza epidemiologica, sistemi di allerta).",
        ],
      },
      {
        heading: "Abilità (Saper fare)",
        items: [
          "Analizzare criticamente fonti OMS e costruire infografiche collaborative in Canva/Genially.",
          "Confrontare modelli di governance e proporre raccomandazioni operative in italiano e inglese scientifico.",
          "Lavorare in gruppi eterogenei, applicando ruoli funzionali e monitorando il processo con logbook digitale.",
        ],
      },
      {
        heading: "Competenze (Traguardi)",
        items: [
          "Argomentare decisioni sanitarie in chiave di cittadinanza globale, collegando dati e politiche pubbliche.",
          "Utilizzare linguaggi specialistici e strumenti TIC per comunicare in modo efficace e inclusivo.",
          "Collaborare alla progettazione di interventi di promozione della salute nel rispetto di principi etici e di sostenibilità.",
        ],
      },
    ],
    script:
      "Esplicito alla classe obiettivi graduati: sapere, saper fare, saper essere. Metto in rilievo che la valutazione sarà coerente con questi traguardi di competenza e con la Didattica per competenze richiesta dal concorso.",
  },
  {
    number: 6,
    tag: "Metodologie attive",
    title: "Strategie didattiche e funzione nelle fasi",
    script:
      "Argomento la scelta di metodologie attive coerenti con gli obiettivi: Think-Pair-Share per l'attivazione, Jigsaw per l'approfondimento, debriefing dialogico per consolidare e valutazione autentica alla fine. Specifico come organizzo i gruppi, come monitoro e come sostengo gli studenti con osservazioni strutturate.",
  },
  {
    number: 7,
    tag: "Inclusione",
    title: "Personalizzazione e supporti mirati",
    sections: [
      {
        heading: "Studente con DSA (PDP)",
        items: [
          "Accesso a mappe concettuali digitali condivise e sintesi vocali dei documenti OMS.",
          "Dispensazione da lettura ad alta voce dei testi più lunghi; tempi distesi e uso di font ad alta leggibilità nella documentazione di gruppo.",
          "Valutazione privilegiando la chiarezza del contenuto rispetto alla forma scritta, con consegna orale supportata da slide inclusive.",
        ],
      },
      {
        heading: "Studente con PEI",
        items: [
          "Co-teaching con l'insegnante di sostegno: anticipazione dei concetti chiave tramite storyboard visivo e glossario semplificato.",
          'Assegnazione di ruolo "Quality Checker" nel gruppo (controllo checklist, gestione tempistiche) con supporto peer tutoring.',
          "Produzione di un elaborato multimediale personalizzato (scheda infografica) valutato con criteri ad hoc e riferito agli obiettivi del PEI.",
        ],
      },
      {
        heading: "Strategie inclusive di classe",
        items: [
          "Applicazione dei principi UDL: risorse multimodali, scelta guidata del prodotto finale, momenti di riflessione metacognitiva strutturata.",
          "Uso di learning analytics di Google Workspace per monitorare partecipazione e intervenire in tempo reale con feedback mirati.",
        ],
      },
    ],
    script:
      "Rendo evidente come PDP e PEI guidino azioni differenziate ma integrate: enfatizzo strumenti compensativi, misure dispensative e personalizzazione del compito, assicurando partecipazione attiva di tutti.",
  },
  {
    number: 8,
    tag: "Ambienti e mediazione",
    title: "TIC, mediazione e interdisciplinarità",
    sections: [
      {
        heading: "Ambienti di apprendimento",
        items: [
          "Google Workspace (Drive condiviso per dossier, Documenti per logbook, Fogli per analisi dati OMS).",
          "Canva e Genially per progettare infografiche; Padlet per brainstorming; OMS Global Health Observatory e dashboard ECDC per dati aggiornati.",
          "Simulatore WHO Outbreak Tool e video ufficiali OMS per input multimediali.",
        ],
      },
      {
        heading: "Mediazione didattica",
        items: [
          "Uso di mappe concettuali e organizer grafici per semplificare i concetti complessi di governance.",
          "Racconto di un caso studio (gestione Ebola) con artefatti pratici (timeline interattiva) per facilitare trasferimento teorico-operativo.",
          "Glossario visuale bilingue e supporti audio per allineare i livelli linguistici.",
        ],
      },
      {
        heading: "Interdisciplinarità e curricolo verticale",
        items: [
          "Connessioni con Scienze integrate (epidemiologia), Diritto (governance sanitaria internazionale), Inglese (CLIL su health policies).",
          "Valorizzazione del Curricolo verticale: ripresa di moduli del triennio su prevenzione e dispositivi sanitari per costruire competenze di cittadinanza scientifica.",
        ],
      },
    ],
    script:
      "Illustro ambienti e TIC specifici, spiegando come sostengono la mediazione dei concetti più complessi. Evidenzio la coerenza con l'interdisciplinarità dell'indirizzo e con il curricolo verticale d'istituto.",
  },
  {
    number: 9,
    tag: "Fase 1 – Engage",
    title: "Stimolo iniziale e aggancio (10 minuti)",
    sections: [
      {
        heading: "Stimolo",
        items: [
          "Proiezione di breve video OMS sull'allerta pandemica (2').",
          'Domanda sfidante: "Cosa rende efficace una risposta globale alle emergenze sanitarie?" raccolta in word cloud live (Mentimeter).',
        ],
      },
      {
        heading: "Organizzazione",
        items: [
          "Think-Pair-Share in coppie eterogenee per attivare conoscenze pregresse e introdurre concetto di governance multilivello.",
          "Docente monitora con checklist di osservazione focalizzata su partecipazione e linguaggio tecnico.",
        ],
      },
      {
        heading: "Esito atteso",
        items: [
          "Raccolta di keyword funzionali a impostare la mappa concettuale condivisa e ad anticipare i ruoli nei gruppi di lavoro.",
        ],
      },
    ],
    script:
      "Descrivo con precisione la fase di Engage: spiego come il video e la word cloud servano da stimolo emotivo e cognitivo, e come il Think-Pair-Share permetta di agganciare tutti gli studenti, compresi quelli con bisogni specifici.",
  },
  {
    number: 10,
    tag: "Fase 2-3 – Explore & Explain",
    title: "Laboratorio cooperativo e restituzione",
    script:
      "Mostro il cuore operativo della lezione: un Jigsaw cooperativo in cui ogni gruppo analizza una diversa agenzia sanitaria. Evidenzio i prodotti attesi, i tempi e il monitoraggio tramite logbook digitale e conferenze lampo. Sottolineo l'integrazione tra Explore e Explain per consolidare l'apprendimento significativo.",
  },
  {
    number: 11,
    tag: "Fase 4 – Evaluate",
    title: "Valutazione, metacognizione e follow-up",
    script:
      "Concludo con una valutazione coerente agli obiettivi: presento strumenti formativi e sommativi, la rubrica analitica, la checklist per l'autovalutazione studenti e docenti e anticipo domande possibili della commissione, anche in inglese, per mostrare la mia capacità di auto-riflessione professionale.",
  },
];

const strategyRows = [
  {
    phase: "Engage (10')",
    strategy: "Video trigger OMS + Think-Pair-Share",
    function:
      "Attivare conoscenze pregresse, motivare emotivamente e collegare al vissuto PCTO.",
    monitoring:
      "Checklist osservativa su partecipazione, uso di lessico tecnico, interventi di scaffolding mirato per studenti con PDP/PEI.",
  },
  {
    phase: "Explore (25')",
    strategy:
      "Cooperative Learning Jigsaw in gruppi da 4 (ruoli: facilitatore, analista dati, comunicatore, quality checker).",
    function:
      "Approfondire agenzie sanitarie con responsabilità condivise; sviluppare pensiero critico e competenze digitali.",
    monitoring:
      "Logbook digitale su Google Documenti, tutoraggio a rotazione del docente, notifiche su Padlet per richieste di supporto.",
  },
  {
    phase: "Explain (15')",
    strategy:
      "Presentazioni lampo (3') per agenzia + debriefing dialogico con mappa concettuale alla LIM.",
    function:
      "Rendere esplicite connessioni tra OMS e agenzie partner; promuovere costruzione condivisa di significato.",
    monitoring:
      "Rubrica rapida su chiarezza, uso dati, collegamenti; feedback immediato del docente e dei pari tramite emoji padlet.",
  },
  {
    phase: "Evaluate (10')",
    strategy:
      "Ticket di uscita digitale + rubrica analitica + autovalutazione metacognitiva.",
    function:
      "Verificare raggiungimento obiettivi, favorire riflessione e pianificare follow-up interdisciplinare.",
    monitoring:
      "Analisi ticket su Fogli Google, confronto docente-sostegno per aggiornare PDP/PEI e pianificare rinforzi mirati.",
  },
];

const exploreExplainTimeline = [
  {
    title: "Explore – Fase esperti (12')",
    description:
      'Gruppi esperti analizzano un\'agenzia (OMS, FAO, UNICEF, ECDC, UNAIDS). Ogni studente compila la scheda "Mission-Tools-Impatti" su Drive con fonti ufficiali.',
  },
  {
    title: "Explore – Fase intergruppo (13')",
    description:
      "Ricomposizione in gruppi eterogenei: gli esperti condividono insight, confrontano indicatori e co-progettano una matrice di risposta integrata a un'emergenza (es. epidemia Zika).",
  },
  {
    title: "Explain – Conferenze lampo (8')",
    description:
      "Ogni gruppo presenta in 3 minuti la propria strategia di governance multilivello con supporto infografico su Canva/Genially.",
  },
  {
    title: "Explain – Sintesi docente (7')",
    description:
      "Docente e studenti co-costruiscono mappa concettuale alla LIM, evidenziando catena di comando OMS, partenariati e indicatori di monitoraggio.",
  },
];

const evaluationRubric = [
  {
    level: "Avanzato (10-9)",
    descriptors: [
      "Analizza fonti OMS con rigore, integrando indicatori quantitativi e valutazioni etiche.",
      "Prodotto multimediale altamente efficace: struttura logica, grafica funzionale, linguaggio bilingue appropriato.",
      "Leadership collaborativa documentata nel logbook e supporto ai compagni in difficoltà.",
    ],
  },
  {
    level: "Intermedio (8-7)",
    descriptors: [
      "Individua correttamente il ruolo delle agenzie, seppur con limitati approfondimenti critici.",
      "Prodotto chiaro ma con marginali imprecisioni nei dati o nella comunicazione bilingue.",
      "Collabora in modo costante, richiede talvolta guida per rispettare tempi e ruoli.",
    ],
  },
  {
    level: "Base (6-5)",
    descriptors: [
      "Ricostruisce informazioni essenziali ma con scarsa capacità di collegamento o citazione delle fonti.",
      "Prodotto incompleto o poco leggibile; necessita di revisione guidata per essere comprensibile.",
      "Partecipazione discontinua; fatica a utilizzare strumenti digitali senza supporto diretto.",
    ],
  },
];

const studentChecklist = [
  "Ho contribuito con almeno un dato verificato da fonte OMS o agenzia partner.",
  "Ho rispettato il ruolo assegnato e documento l'avanzamento nel logbook di gruppo.",
  "La mia infografica/policy brief è comprensibile anche a un pubblico non specialistico.",
  "Indico una azione personale o di classe per promuovere la salute globale (Goal 3).",
];

const teacherChecklist = [
  "Gli strumenti inclusivi previsti da PDP/PEI sono stati utilizzati efficacemente?",
  "Gli obiettivi di conoscenza, abilità e competenza hanno indicatori osservabili nella rubrica?",
  "Quali evidenze raccolte (ticket, logbook, mappe) mostrano apprendimento significativo?",
  "Quali connessioni interdisciplinari approfondire nel prossimo modulo (CLIL, microbiologia, diritto)?",
];

const commissionQuestions = {
  it: [
    "In che modo questa lezione si inserisce nel curricolo verticale dell'istituto tecnico biotecnologico?",
    "Come garantirebbe la trasferibilità del progetto in contesti con risorse digitali limitate?",
    "Quali indicatori utilizzerebbe per valutare l'impatto sul comportamento degli studenti fuori dall'aula?",
  ],
  en: [
    "How does your cooperative strategy ensure full inclusion of the student with an individualized education plan?",
    "Which World Health Organization data sets would you prioritize to justify the selected policy recommendations?",
  ],
};

export default function Home() {
  return (
    <div className="content-wrapper">
      <header className="mb-10 text-center">
        <span className="tag">Lezione simulata A015</span>
        <h1 className="section-title mt-4">
          Organizzazione Sanitaria Internazionale: OMS e Agenzie sanitarie
        </h1>
        <p className="mx-auto max-w-4xl text-lg text-slate-600">
          Progettazione didattica inclusiva per classe quinta
          dell&apos;indirizzo Biotecnologie sanitarie: dalla governance globale
          alla produzione di un dossier operativo orientato alla cittadinanza
          scientifica.
        </p>
      </header>

      <div className="grid gap-8">
        {slides.map((slide) => (
          <section key={slide.number} className="slide-card">
            <div className="slide-number">Slide {slide.number}</div>
            <h2 className="slide-title">{slide.title}</h2>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              {slide.tag}
            </p>

            {slide.bullets && (
              <ul className="mt-4 list-styled list-disc pl-6 text-slate-700">
                {slide.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {slide.sections && (
              <div className="mt-4 space-y-5">
                {slide.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-base font-semibold uppercase tracking-wide text-slate-500">
                      {section.heading}
                    </h3>
                    <ul className="mt-2 list-styled list-disc pl-6 text-slate-700">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {slide.number === 6 && (
              <div className="mt-5 overflow-x-auto">
                <table className="grid-table">
                  <thead>
                    <tr>
                      <th>Fase</th>
                      <th>Strategia didattica</th>
                      <th>Funzione</th>
                      <th>Monitoraggio &amp; supporto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {strategyRows.map((row) => (
                      <tr key={row.phase}>
                        <td>{row.phase}</td>
                        <td>{row.strategy}</td>
                        <td>{row.function}</td>
                        <td>{row.monitoring}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {slide.number === 10 && (
              <div className="timeline mt-5">
                {exploreExplainTimeline.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <h3 className="text-base font-semibold text-slate-600">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {slide.number === 11 && (
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wide text-slate-500">
                    Valutazione formativa
                  </h3>
                  <ul className="mt-2 list-styled list-disc pl-6 text-slate-700">
                    <li>
                      Osservazione strutturata durante le fasi cooperative con
                      feedback immediati (feedforward) inseriti nel logbook.
                    </li>
                    <li>
                      Questionario rapido su Google Moduli per monitorare
                      comprensione di indicatori OMS e regolamento sanitario.
                    </li>
                    <li>
                      Debriefing metacognitivo guidato: cosa funziona, cosa va
                      migliorato, quali connessioni con altre discipline.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wide text-slate-500">
                    Valutazione sommativa (Rubrica)
                  </h3>
                  <div className="rubric mt-3">
                    {evaluationRubric.map((rubric) => (
                      <div key={rubric.level} className="rubric-level">
                        <h4>{rubric.level}</h4>
                        <ul className="list-styled list-disc pl-6 text-slate-700">
                          {rubric.descriptors.map((descriptor) => (
                            <li key={descriptor}>{descriptor}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wide text-slate-500">
                    Autovalutazione studenti
                  </h3>
                  <div className="checklist">
                    {studentChecklist.map((item) => (
                      <div key={item} className="checklist-item">
                        <div className="checklist-bullet">✓</div>
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wide text-slate-500">
                    Autovalutazione docente
                  </h3>
                  <div className="checklist">
                    {teacherChecklist.map((item) => (
                      <div key={item} className="checklist-item">
                        <div className="checklist-bullet">□</div>
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="questions-box">
                  <h3>Domande della commissione</h3>
                  <p className="text-sm uppercase tracking-widest text-slate-200">
                    Italiano
                  </p>
                  <ul className="mt-2 list-disc pl-6">
                    {commissionQuestions.it.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm uppercase tracking-widest text-slate-200">
                    English follow-up
                  </p>
                  <ul className="mt-2 list-disc pl-6">
                    {commissionQuestions.en.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="script-box mt-6">
              <p className="script-title">Teacher script</p>
              <p>{slide.script}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
