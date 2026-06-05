import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Section {
  title: string;
  body: string[];
}

const sections: Section[] = [
  {
    title: "Chi siamo",
    body: [
      "Il presente sito web è gestito da Le Streghe Ubriache, ristorante e cocktail bar con sede nel centro storico di Frascati (RM), P.IVA 06247021006.",
      "Per qualsiasi informazione relativa al trattamento dei tuoi dati personali puoi contattarci all’indirizzo: lestregheubriachesince2003@gmail.com oppure al numero +39 06 94921645 (anche WhatsApp).",
    ]
  },
  {
    title: "Dati raccolti e finalità",
    body: [
      "Raccogliamo esclusivamente i dati strettamente necessari al funzionamento del sito e all’erogazione dei nostri servizi:",
      "— Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, orario di accesso. Questi dati sono raccolti automaticamente dal server e utilizzati esclusivamente per finalità statistiche aggregate (es. conteggio dei visitatori, pagine più visitate) e per garantire la sicurezza del sito.",
      "— Dati di contatto: qualora tu ci contatti tramite WhatsApp o email, trattiamo il tuo nome e recapito unicamente per risponderti e, se richiesto, per gestire la tua prenotazione.",
      "Non raccogliamo dati sensibili, non profilammo gli utenti, non utilizziamo sistemi di retargeting e non conduciamo attività di marketing diretto senza esplicito consenso.",
    ]
  },
  {
    title: "Base giuridica del trattamento",
    body: [
      "Il trattamento dei dati avviene nel rispetto del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.",
      "Le basi giuridiche su cui fondiamo il trattamento sono: (a) il legittimo interesse del titolare per i dati di navigazione a fini statistici e di sicurezza; (b) l’esecuzione di un contratto o misure precontrattuali per i dati di prenotazione; (c) il consenso esplicito dell’utente per eventuali comunicazioni promozionali.",
    ]
  },
  {
    title: "Condivisione dei dati",
    body: [
      "I tuoi dati non vengono venduti, ceduti né condivisi con terze parti per finalità commerciali o pubblicitarie.",
      "L’unica condivisione prevista riguarda i fornitori tecnici strettamente necessari al funzionamento del sito (es. servizio di hosting, provider di analytics). Tali soggetti operano come responsabili del trattamento e sono contrattualmente vincolati a trattare i dati esclusivamente per le finalità indicate, nel rispetto del GDPR.",
      "I dati analitici che utilizziamo per monitorare il traffico del sito sono aggregati e anonimi: non è possibile risalire all’identità del singolo utente.",
    ]
  },
  {
    title: "Cookie",
    body: [
      "Il sito utilizza esclusivamente cookie tecnici, indispensabili per il corretto funzionamento delle pagine. Non utilizziamo cookie di profilazione, cookie pubblicitari di terze parti né pixel di tracciamento social.",
      "Cookie tecnici: sessione e preferenze di navigazione (es. lingua selezionata). Non richiedono consenso ai sensi della normativa vigente.",
      "Cookie analitici: utilizziamo uno strumento di analisi del traffico web in modalità anonimizzata (indirizzo IP troncato) per comprendere come i visitatori interagiscono con il sito. I dati sono aggregati e non consentono l’identificazione personale.",
      "Puoi gestire o disabilitare i cookie nelle impostazioni del tuo browser in qualsiasi momento. La disabilitazione dei cookie tecnici potrebbe pregiudicare la fruibilità di alcune funzionalità del sito.",
    ]
  },
  {
    title: "Conservazione dei dati",
    body: [
      "I dati di navigazione sono conservati per un periodo non superiore a 12 mesi, dopodiché vengono eliminati o definitivamente anonimizzati.",
      "I dati di contatto (prenotazioni, messaggi) sono conservati per il tempo necessario a evadere la richiesta e, in ogni caso, non oltre 24 mesi dall’ultimo contatto.",
    ]
  },
  {
    title: "I tuoi diritti",
    body: [
      "In qualità di interessato, hai diritto a: accedere ai tuoi dati personali; richiederne la rettifica o la cancellazione; opporti al trattamento o chiederne la limitazione; richiedere la portabilità dei dati; revocare il consenso in qualsiasi momento, senza pregiudizio per la liceità del trattamento precedente alla revoca.",
      "Per esercitare i tuoi diritti è sufficiente contattarci via email a lestregheubriachesince2003@gmail.com. Risponderemo entro 30 giorni dalla ricezione della richiesta.",
      "Hai inoltre il diritto di proporre reclamo all’Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).",
    ]
  },
  {
    title: "Modifiche alla presente informativa",
    body: [
      "Ci riserviamo il diritto di aggiornare la presente informativa per adeguarla a modifiche normative o a nuove funzionalità del sito. La versione aggiornata sarà sempre disponibile a questa pagina con indicazione della data di ultimo aggiornamento.",
      "Ultimo aggiornamento: maggio 2026.",
    ]
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <Navigation solid />

      {/* Hero */}
      <section className="px-[var(--gutter)] pt-[160px] pb-[64px] border-b border-[var(--rule)]">
        <div className="max-w-[860px] mx-auto">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--ember)] block mb-[20px]">
            Documento legale
          </span>
          <h1 className="italic text-[clamp(48px,8vw,96px)] leading-[0.95]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>
            Privacy &amp;<br />Cookie Policy
          </h1>
          <p className="mt-[28px] text-[var(--cream-mute)] text-[16px] leading-[1.7] max-w-[60ch]">
            Il trattamento dei tuoi dati personali è conforme al Regolamento Europeo GDPR (UE) 2016/679.
            I tuoi dati non vengono condivisi con nessuno al di fuori di quanto strettamente necessario
            al funzionamento del sito e all&apos;analisi anonima del traffico.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-[var(--gutter)] py-[clamp(60px,10vh,120px)]">
        <div className="max-w-[860px] mx-auto space-y-[64px]">
          {sections.map((s, i) => (
            <div key={i} className="grid grid-cols-[200px_1fr] gap-[48px] items-start max-[700px]:grid-cols-1 max-[700px]:gap-[16px]">
              <div className="pt-[10px] border-t border-[var(--rule-strong)]">
                <span className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--ember)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-[var(--serif)] italic text-[17px] mt-[6px] leading-[1.3]">{s.title}</p>
              </div>
              <div className="space-y-[14px]">
                {s.body.map((para, j) => (
                  <p key={j} className="text-[var(--cream-mute)] text-[15px] leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="px-[var(--gutter)] py-[48px] border-t border-[var(--rule)]">
        <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row gap-[16px] items-start sm:items-center justify-between">
          <p className="font-[var(--serif)] italic text-[18px] text-[var(--cream-mute)]">
            Hai domande sulla tua privacy?
          </p>
          <a
            href="mailto:lestregheubriachesince2003@gmail.com"
            className="inline-flex items-center gap-[10px] px-[22px] py-[12px] rounded-full font-[var(--mono)] text-[11px] tracking-[0.22em] uppercase transition-all hover:opacity-85 flex-shrink-0"
            style={{ border: '1px solid var(--rule-strong)', color: 'var(--cream)' }}
          >
            Scrivici &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
