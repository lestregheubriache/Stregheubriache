import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
// Cooking Class photos
import photo1 from '../../imports/f6442fe7-e7e6-43da-8cd6-8726ed9b8e62.jpeg';
import photo2 from '../../imports/ca393cba-2a16-4f0b-a20b-8c4433f3a554.jpeg';
import photo3 from '../../imports/a1aa605e-be8d-403d-81f3-4a9b37a5a50d.png';
import photo4 from '../../imports/5b0e2fb5-40cc-4217-a411-03a57add0a33.png';
import photo5 from '../../imports/d0a2a5b4-40a9-4937-9277-d465f1c7bfb4.png';
// Drinking Class photos
import drinkPhoto1 from '../../imports/bancone.jpg';
import drinkPhoto2 from '../../imports/foto-5.jpg';
import drinkPhoto3 from '../../imports/foto-6.jpg';
import drinkPhoto4 from '../../imports/foto-7.jpg';
import drinkPhoto5 from '../../imports/foto-9.jpg';
// Private events photos
import cantinaEvent1 from '../../imports/b0733d04-f189-43ea-b56b-3ebc9152af4f.jpeg';
import cantinaEvent2 from '../../imports/f2f106ed-6991-44b1-a50e-88fedc6cc92a.jpeg';
import cantinaEvent3 from '../../imports/ab38883e-926b-4f1c-a97f-1b9184daeb38.jpeg';
import cantinaEvent4 from '../../imports/6f66a16d-451a-4e44-8c80-8b1bf02b47d9-1.jpeg';

/* ── WhatsApp helper ─────────────────────────────────────── */
function WAButton({ text, label, variant = 'green' }: { text: string; label: string; variant?: 'green' | 'red' | 'outline' }) {
  const href = `https://wa.me/39069421645?text=${encodeURIComponent(text)}`;
  const styles: Record<string, React.CSSProperties> = {
    green: { background: '#25D366', color: '#fff', border: '1px solid #25D366' },
    red:   { background: '#c0392b', color: '#fff', border: '1px solid #c0392b' },
    outline: { background: 'transparent', color: 'var(--cream)', border: '1px solid var(--rule-strong)' },
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-[10px] px-[24px] py-[14px] rounded-full font-[var(--mono)] text-[12px] tracking-[0.22em] uppercase transition-all duration-[250ms] hover:opacity-85 hover:scale-[1.02]"
      style={styles[variant]}
    >
      {label}
    </a>
  );
}

/* ── Experience card used in the grid ───────────────────── */
interface ExpCard {
  tag: string;
  title: string;
  copy: string;
  price?: string;
  cta: string;
  waText: string;
  icon: string;
}

function ExperienceCard({ card }: { card: ExpCard }) {
  return (
    <article className="border border-[var(--rule-strong)] p-[clamp(24px,3vw,40px)] flex flex-col gap-[20px] h-full">
      <span className="text-[32px]">{card.icon}</span>
      <div>
        <span className="font-[var(--mono)] text-[10px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
          {card.tag}
        </span>
        <h3 className="font-[var(--serif)] mt-[8px] text-[clamp(22px,2.5vw,32px)] leading-[1.1]">
          {card.title}
        </h3>
      </div>
      <p className="text-[var(--cream-mute)] text-[14px] leading-[1.65] flex-1">
        {card.copy}
      </p>
      {card.price && (
        <p className="font-[var(--serif)] text-[clamp(22px,2.5vw,30px)]" style={{ color: '#c0392b' }}>
          {card.price}
        </p>
      )}
      <WAButton text={card.waText} label={card.cta} variant="outline" />
    </article>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function EsperienzePage() {

  const drinkingSteps = [
    {
      num: '01',
      title: 'Tagliere & Frascati',
      body: 'Breve introduzione alla regione vinicola dei Castelli Romani. Degustazione di prodotti locali — pecorini, salumi, porchetta e pinsa romana — abbinati a due calici di Frascati DOCG.'
    },
    {
      num: '02',
      title: 'Dietro il bancone',
      body: 'Metti alla prova la tua creatività creando il tuo cocktail personale, usando il Frascati come base per il City Spritz — il cocktail locale della casa.'
    },
    {
      num: '03',
      title: 'Il tuo secondo drink',
      body: 'Passo dopo passo, prepari un secondo cocktail a tua scelta dalla nostra selezione curata, imparando ad usare gli strumenti professionali da bar.'
    }
  ];

  const cookingSteps = [
    {
      num: '01',
      title: 'Benvenuto in cucina',
      body: 'Incontri Gianluca, il nostro chef, e scopri gli ingredienti locali che userai: farine biologiche, porchetta artigianale, verdure fresche dei Castelli Romani.'
    },
    {
      num: '02',
      title: 'Mani in pasta',
      body: 'Impasti, stendi e prepari la tua pinsa romana da zero seguendo la ricetta tradizionale. Gianluca ti guida passo dopo passo.'
    },
    {
      num: '03',
      title: 'Farcisci e assaggia',
      body: 'Scegli i tuoi condimenti preferiti, inforna la tua creazione e poi... gustala insieme a un buon calice di vino dei Castelli.'
    }
  ];

  const moreCards: ExpCard[] = [
    {
      icon: "🎁",
      tag: "Idea regalo",
      title: "Regalala a chi ami.",
      copy: "La Drinking Class o cooking class è il regalo perfetto per chi ama scoprire cose nuove: un'esperienza da vivere, non un oggetto da mettere in un cassetto. Prenota un posto e ricevi una conferma da stampare o inviare digitalmente. Valida quando vuole il destinatario.",
      cta: "Regala l'esperienza →",
      waText: "Salve, vorrei acquistare una Drinking Class o Cooking Class come regalo per qualcuno. Come posso fare?"
    },
    {
      icon: "🎂",
      tag: "Feste di compleanno",
      title: "Il compleanno più alternativo di sempre.",
      copy: "Perfetto per adulti e — con formula adattata — anche per i più piccoli. Un pomeriggio che non dimenticheranno. Contattaci per sapere come personalizziamo la serata in base all'età e al gruppo.",
      cta: "Organizza la festa →",
      waText: "Salve, vorrei organizzare una festa di compleanno con la Drinking Class. Potete dirmi come funziona?",
    },
    {
      icon: "🤝",
      tag: "Team building",
      title: "L'attività che unisce davvero il team.",
      copy: "Dimentica le presentazioni PowerPoint. La Drinking Class o cooking class è un'attività di team building che mette tutti sullo stesso piano — dietro il bancone o con le mani in pasta. Competizione amichevole, collaborazione, risate vere. Disponibile per gruppi aziendali con formula personalizzata su misura.",
      cta: "Scopri per le aziende →",
      waText: "Salve, siamo interessati alla Drinking Class / Cooking Class come attività di team building aziendale. Avete pacchetti dedicati?",
    },
  ];

  return (
    <div>
      <Navigation solid />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="px-[var(--gutter)] pt-[160px] pb-[clamp(60px,10vh,120px)] border-b border-[var(--rule)] relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(192,57,43,.18), transparent 60%),
                       radial-gradient(ellipse 40% 40% at 80% 10%, rgba(139,111,71,.15), transparent 50%),
                       var(--ink-2)`
        }}
      >
        <div className="max-w-[var(--maxw)] mx-auto text-center">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)] block mb-[24px]">
            Esperienze · Le Streghe Ubriache
          </span>
          <h1 className="text-[clamp(48px,9vw,120px)] leading-[1.0] tracking-[-0.01em]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>
            Le nostre esperienze
          </h1>
          <p className="font-[var(--serif)] text-[clamp(20px,3vw,40px)] leading-[1.1] mt-[16px]" style={{ color: '#c0392b' }}>
            Drinking Class & Cooking Class
          </p>
          <p className="mt-[24px] mx-auto text-[var(--cream-mute)] text-[17px] max-w-[60ch]">
            Solo su prenotazione. Scegli la tua avventura: dietro il bancone a mixare cocktail,
            o in cucina con Gianluca a preparare pinse romane.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* DRINKING CLASS SECTION                                   */}
      {/* ──────────────────────────────────────────────────────── */}

      {/* ── Drinking Class: Title band ───────────────────────── */}
      <section className="px-[var(--gutter)] py-[28px] border-b border-[var(--rule)]" style={{ background: '#c0392b' }}>
        <div className="max-w-[var(--maxw)] mx-auto flex items-center justify-between gap-[24px] flex-wrap">
          <div>
            <p className="font-[var(--serif)] text-[clamp(28px,4vw,48px)] leading-[1.0] text-white">
              Drinking Class
            </p>
          </div>
        </div>
      </section>

      {/* ── Drinking Class: Description + images ─────────────── */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-b border-[var(--rule)]">
        <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-[1fr_1fr] gap-[clamp(40px,7vw,100px)] items-start max-[860px]:grid-cols-1">
          <div>
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
              L'esperienza nel dettaglio
            </span>
            <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(32px,4.5vw,60px)] leading-[1.02]">
              Un'esperienza indimenticabile<br />nei Castelli Romani.
            </h2>
            <p className="mt-[24px] text-[var(--cream-mute)] text-[16px] leading-[1.7]">
              Goditi una deliziosa esperienza enogastronomica nei Castelli Romani presso Le Streghe Ubriache! Questa esperienza si svolge in una cantina del 1750 splendidamente restaurata a Frascati, ora adibita a ristorante e wine bar. Inizierai con una breve introduzione alla regione vinicola dei Castelli Romani. In seguito, assaporerai una degustazione di prodotti locali come pecorino, salumi, porchetta e pinsa, abbinati a due calici di vino Frascati DOCG.
            </p>
            <p className="mt-[16px] text-[var(--cream-mute)] text-[16px] leading-[1.7]">
              Inoltre, avrai l'opportunità di mettere alla prova la tua creatività creando il tuo cocktail personale, utilizzando il rinomato vino Frascati come base per il City Spritz, un rinfrescante cocktail locale. Per completare l'esperienza, avrai anche la possibilità di miscelare un secondo drink. L'esperto barman di Le Streghe Ubriache ti guiderà passo dopo passo nella preparazione di un altro cocktail a tua scelta dalla nostra selezione curata, dimostrandoti come utilizzare gli strumenti professionali da bar.
            </p>
            <blockquote
              className="mt-[32px] px-[24px] py-[20px] border-l-[3px] rounded-r"
              style={{ borderColor: '#c0392b', background: 'rgba(192,57,43,.07)' }}
            >
              <p className="font-[var(--serif)] italic text-[clamp(16px,2vw,20px)] text-[var(--cream)] leading-[1.5]">
                "questa esperienza può causare sorrisi, brindisi e un improvviso amore per i cocktail."
              </p>
              <footer className="mt-[10px] font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)]">
                — Le Streghe Ubriache
              </footer>
            </blockquote>

            <div className="mt-[40px] space-y-[24px]">
              {drinkingSteps.map((s) => (
                <div key={s.num} className="flex gap-[20px] items-start pt-[24px] border-t border-[var(--rule)]">
                  <span className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase flex-shrink-0 mt-[4px]" style={{ color: '#c0392b' }}>
                    {s.num}
                  </span>
                  <div>
                    <p className="font-[var(--serif)] text-[18px] mb-[6px]">{s.title}</p>
                    <p className="text-[var(--cream-mute)] text-[14px] leading-[1.6]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price at the end */}
            <div className="mt-[48px] pt-[32px] border-t-[2px] border-[var(--rule-strong)] flex items-end justify-between gap-[24px] flex-wrap">
              <div>
                <span className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)]">
                  Prezzo a persona
                </span>
                <p className="font-[var(--serif)] text-[clamp(40px,5vw,72px)] leading-[1.0] mt-[8px]" style={{ color: '#c0392b' }}>
                  € 39,00
                </p>
              </div>
              <WAButton text="Salve, vorrei prenotare la Drinking Class. Potete darmi informazioni?" label="Prenota Drinking Class →" variant="red" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[10px]">
            <ImageWithFallback
              src={drinkPhoto1}
              alt="Drinking Class - Il bancone de Le Streghe Ubriache"
              className="w-full aspect-[3/4] object-cover col-span-2"
            />
            <ImageWithFallback
              src={drinkPhoto2}
              alt="Cocktail e tagliere"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={drinkPhoto3}
              alt="Preparazione cocktail"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={drinkPhoto4}
              alt="Degustazione vini e aperitivo"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={drinkPhoto5}
              alt="Cocktail class a Le Streghe Ubriache"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* COOKING CLASS SECTION                                    */}
      {/* ──────────────────────────────────────────────────────── */}

      {/* ── Cooking Class: Title band ───────────────────────── */}
      <section className="px-[var(--gutter)] py-[28px] border-b border-[var(--rule)]" style={{ background: '#8b6f47' }}>
        <div className="max-w-[var(--maxw)] mx-auto flex items-center justify-between gap-[24px] flex-wrap">
          <div>
            <p className="font-[var(--serif)] text-[clamp(28px,4vw,48px)] leading-[1.0] text-white">
              Cooking Class
            </p>
          </div>
        </div>
      </section>

      {/* ── Cooking Class: Description + images ─────────────── */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-b border-[var(--rule)]">
        <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-[1fr_1fr] gap-[clamp(40px,7vw,100px)] items-start max-[860px]:grid-cols-1">
          <div>
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
              L'esperienza in cucina
            </span>
            <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(32px,4.5vw,60px)] leading-[1.02]">
              Mani in pasta,<br />come tradizione.
            </h2>
            <p className="mt-[24px] text-[var(--cream-mute)] text-[16px] leading-[1.7]">
              Entra nella cucina de Le Streghe Ubriache e lavora fianco a fianco con Gianluca,
              il nostro chef. Imparerai a preparare la vera pinsa romana da zero — dall'impasto
              alla farcitura — usando ingredienti locali e biologici dei Castelli Romani.
            </p>
            <blockquote
              className="mt-[32px] px-[24px] py-[20px] border-l-[3px] rounded-r"
              style={{ borderColor: '#8b6f47', background: 'rgba(139,111,71,.1)' }}
            >
              <p className="font-[var(--serif)] italic text-[clamp(16px,2vw,20px)] text-[var(--cream)] leading-[1.5]">
                "Cucinare insieme è condividere storie, tradizioni e amore per il buon cibo."
              </p>
              <footer className="mt-[10px] font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)]">
                — Gianluca, Chef
              </footer>
            </blockquote>

            <div className="mt-[40px] space-y-[24px]">
              {cookingSteps.map((s) => (
                <div key={s.num} className="flex gap-[20px] items-start pt-[24px] border-t border-[var(--rule)]">
                  <span className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase flex-shrink-0 mt-[4px]" style={{ color: '#8b6f47' }}>
                    {s.num}
                  </span>
                  <div>
                    <p className="font-[var(--serif)] text-[18px] mb-[6px]">{s.title}</p>
                    <p className="text-[var(--cream-mute)] text-[14px] leading-[1.6]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price at the end */}
            <div className="mt-[48px] pt-[32px] border-t-[2px] border-[var(--rule-strong)] flex items-end justify-between gap-[24px] flex-wrap">
              <div>
                <span className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)]">
                  Prezzo a persona
                </span>
                <p className="font-[var(--serif)] text-[clamp(40px,5vw,72px)] leading-[1.0] mt-[8px]" style={{ color: '#8b6f47' }}>
                  € 45,00
                </p>
              </div>
              <WAButton text="Salve, vorrei prenotare la Cooking Class. Potete darmi informazioni?" label="Prenota Cooking Class →" variant="red" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[10px]">
            <ImageWithFallback
              src={photo1}
              alt="Cooking Class - Preparazione pinsa romana"
              className="w-full aspect-[3/4] object-cover col-span-2"
            />
            <ImageWithFallback
              src={photo2}
              alt="In cucina con Gianluca"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={photo3}
              alt="Mani in pasta"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={photo4}
              alt="Ingredienti freschi e locali"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={photo5}
              alt="Pinsa cotta e farcita"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── More ways to live it ─────────────────────────── */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-b border-[var(--rule)]" style={{ background: 'var(--wine-deep)' }}>
        <div className="max-w-[var(--maxw)] mx-auto">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
            Tanti modi di viverla
          </span>
          <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(32px,5vw,72px)] leading-[1.02] mb-[56px]">
            Non solo un'esperienza.<br />Un'occasione.
          </h2>

          <div className="grid grid-cols-3 gap-[clamp(16px,2.5vw,32px)] max-[860px]:grid-cols-1">
            {moreCards.map((card, i) => (
              <ExperienceCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate events & private venue ─────────────── */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-b border-[var(--rule)]">
        <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-[1fr_1fr] gap-[clamp(40px,7vw,100px)] items-center max-[860px]:grid-cols-1">
          <div>
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
              Cene aziendali & eventi privati
            </span>
            <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(32px,5vw,72px)] leading-[1.02]">
              La cantina,<br />tutta per voi.
            </h2>
            <p className="mt-[24px] text-[var(--cream-mute)] text-[16px] leading-[1.7]">
              Le Streghe Ubriache sono disponibili per <strong className="text-[var(--cream)]">cene aziendali ed eventi privati</strong> con menù dedicati costruiti insieme a voi. Dalla scelta dei vini alla struttura del pasto, tutto viene pensato su misura per il vostro gruppo e la vostra occasione.
            </p>
            <p className="mt-[20px] text-[var(--cream-mute)] text-[16px] leading-[1.7]">
              Avete la possibilità di <strong className="text-[var(--cream)]">riservare il locale in esclusiva</strong>: la cantina diventa interamente vostra, per una serata che i vostri ospiti ricorderanno.
            </p>

            <ul className="mt-[36px] space-y-[12px]">
              {[
                'Menù dedicati e personalizzati',
                'Selezione vini dei Castelli Romani',
                'Possibilità di Drinking Class aziendale',
                'Prenotazione esclusiva dell\'intero locale',
                'Disponibile per compleanni, addii al celibato/nubilato, lauree, anniversari aziendali',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-[12px] text-[var(--cream-mute)] text-[15px]">
                  <span className="mt-[4px] w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: '#c0392b', marginTop: '7px' }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-[40px] flex gap-[12px] flex-wrap">
              <WAButton
                text="Salve, vorrei organizzare una cena aziendale / evento privato a Le Streghe Ubriache. Potete darmi informazioni?"
                label="Chiedi disponibilità →"
                variant="red"
              />
              <WAButton
                text="Salve, vorrei sapere se è possibile riservare il locale in esclusiva per un evento privato."
                label="Riservate locale"
                variant="outline"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <ImageWithFallback
              src={cantinaEvent1}
              alt="La cantina allestita per eventi privati"
              className="w-full aspect-[4/3] object-cover col-span-2"
            />
            <ImageWithFallback
              src={cantinaEvent2}
              alt="Tavola per cena aziendale"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={cantinaEvent3}
              alt="Dettaglio tavola eventi"
              className="w-full aspect-square object-cover"
            />
            <ImageWithFallback
              src={cantinaEvent4}
              alt="Atmosfera cantina per eventi"
              className="w-full aspect-[4/3] object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      {/* ── Practical info ───────────────────────────────── */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-b border-[var(--rule)]" style={{ background: 'var(--wine-deep)' }}>
        <div className="max-w-[var(--maxw)] mx-auto">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)] block text-center mb-[24px]">
            Informazioni pratiche
          </span>
          <h2 className="font-[var(--serif)] text-[clamp(32px,5vw,64px)] leading-[1.02] text-center mb-[64px]">
            Cosa sapere prima di venire.
          </h2>

          <div className="grid grid-cols-[1fr_1fr] gap-[clamp(40px,7vw,100px)] max-[860px]:grid-cols-1">
            {/* Drinking class info */}
            <div>
              <h3 className="font-[var(--serif)] text-[clamp(24px,3vw,40px)] leading-[1.1] mb-[32px]">
                Drinking Class
              </h3>
              <dl className="space-y-[0px]">
                {[
                  { dt: 'Prezzo', dd: '€ 39,00 a persona · tutto incluso' },
                  { dt: 'Quando', dd: 'Solo su prenotazione' },
                  { dt: 'Orario', dd: 'Ore 18:30' },
                  { dt: 'Durata', dd: 'Circa 2 ore' },
                  { dt: 'Gruppo', dd: 'Piccoli gruppi · atmosfera intima' },
                  { dt: 'Lingua', dd: 'Italiano · English' },
                  { dt: 'Prenotazione', dd: 'Solo su WhatsApp' },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[120px_1fr] gap-[12px] border-b border-[var(--rule)] py-[16px]">
                    <dt className="font-[var(--mono)] text-[10px] tracking-[0.24em] uppercase text-[var(--cream-mute)] pt-[4px]">{item.dt}</dt>
                    <dd className="font-[var(--serif)] text-[17px]">{item.dd}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-[32px] flex gap-[10px] flex-wrap">
                <WAButton text="Salve, vorrei prenotare la Drinking Class. Potete darmi informazioni?" label="Prenota Drinking →" variant="red" />
              </div>
            </div>

            {/* Cooking class info */}
            <div>
              <h3 className="font-[var(--serif)] text-[clamp(24px,3vw,40px)] leading-[1.1] mb-[32px]">
                Cooking Class
              </h3>
              <dl className="space-y-[0px]">
                {[
                  { dt: 'Prezzo', dd: '€ 45,00 a persona · tutto incluso' },
                  { dt: 'Quando', dd: 'Solo su prenotazione' },
                  { dt: 'Orario', dd: 'Ore 18:00' },
                  { dt: 'Durata', dd: 'Circa 2,5 ore' },
                  { dt: 'Gruppo', dd: 'Piccoli gruppi · atmosfera familiare' },
                  { dt: 'Lingua', dd: 'Italiano · English' },
                  { dt: 'Prenotazione', dd: 'Solo su WhatsApp' },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[120px_1fr] gap-[12px] border-b border-[var(--rule)] py-[16px]">
                    <dt className="font-[var(--mono)] text-[10px] tracking-[0.24em] uppercase text-[var(--cream-mute)] pt-[4px]">{item.dt}</dt>
                    <dd className="font-[var(--serif)] text-[17px]">{item.dd}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-[32px] flex gap-[10px] flex-wrap">
                <WAButton text="Salve, vorrei prenotare la Cooking Class. Potete darmi informazioni?" label="Prenota Cooking →" variant="red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included boxes ──────────────────────────── */}
      <section className="px-[var(--gutter)] py-[clamp(60px,10vh,100px)] border-b border-[var(--rule)]">
        <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-[1fr_1fr] gap-[clamp(24px,4vw,48px)] max-[860px]:grid-cols-1">

          {/* Drinking Class - What's included */}
          <div
            className="border border-[var(--rule-strong)] p-[clamp(24px,3vw,40px)] h-fit"
            style={{ background: 'rgba(192,57,43,.06)' }}
          >
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase" style={{ color: '#c0392b' }}>
              Drinking Class · Incluso
            </span>
            <ul className="mt-[24px] space-y-[18px] list-none">
              {[
                { icon: '🍷', text: 'Degustazione di 2 calici di vino Frascati DOCG' },
                { icon: '🧀', text: 'Degustazione di prodotti tipici locali: pecorino, salumi, porchetta e pinsa romana' },
                { icon: '🍹', text: 'Creazione di due drink a scelta' },
                { icon: '🎓', text: 'Guida passo per passo con strumenti professionali da bar' },
                { icon: '✨', text: 'Esperienza in una cantina del 1750 splendidamente restaurata' },
              ].map((item, i) => (
                <li key={i} className="flex gap-[12px] items-start">
                  <span className="text-[18px] flex-shrink-0">{item.icon}</span>
                  <span className="text-[var(--cream-mute)] text-[14px] leading-[1.55]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-[32px] pt-[24px] border-t border-[var(--rule)] flex items-end justify-between gap-[16px]">
              <div>
                <p className="font-[var(--serif)] text-[clamp(28px,3.5vw,40px)]" style={{ color: '#c0392b' }}>€ 39,00</p>
                <span className="font-[var(--mono)] text-[10px] tracking-[0.18em] text-[var(--cream-mute)]">a persona · tutto incluso</span>
              </div>
              <WAButton text="Salve, vorrei prenotare la Drinking Class." label="Prenota →" variant="red" />
            </div>
          </div>

          {/* Cooking Class - What's included */}
          <div
            className="border border-[var(--rule-strong)] p-[clamp(24px,3vw,40px)] h-fit"
            style={{ background: 'rgba(139,111,71,.1)' }}
          >
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase" style={{ color: '#8b6f47' }}>
              Cooking Class · Incluso
            </span>
            <ul className="mt-[24px] space-y-[18px] list-none">
              {[
                { icon: '👨‍🍳', text: 'Lezione con Gianluca, lo chef de Le Streghe Ubriache' },
                { icon: '🍞', text: 'Impasto e preparazione della pinsa romana da zero' },
                { icon: '🥬', text: 'Ingredienti biologici e locali dei Castelli Romani' },
                { icon: '🔥', text: 'Cottura nel forno e farcitura personalizzata' },
                { icon: '🍷', text: 'Degustazione della tua pinsa con calice di vino incluso' },
                { icon: '✨', text: 'Esperienza in una cucina del 1750 — ricette e tradizione' },
              ].map((item, i) => (
                <li key={i} className="flex gap-[12px] items-start">
                  <span className="text-[18px] flex-shrink-0">{item.icon}</span>
                  <span className="text-[var(--cream-mute)] text-[14px] leading-[1.55]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-[32px] pt-[24px] border-t border-[var(--rule)] flex items-end justify-between gap-[16px]">
              <div>
                <p className="font-[var(--serif)] text-[clamp(28px,3.5vw,40px)]" style={{ color: '#8b6f47' }}>€ 45,00</p>
                <span className="font-[var(--mono)] text-[10px] tracking-[0.18em] text-[var(--cream-mute)]">a persona · tutto incluso</span>
              </div>
              <WAButton text="Salve, vorrei prenotare la Cooking Class." label="Prenota →" variant="red" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section
        className="px-[var(--gutter)] py-[clamp(100px,15vh,200px)] text-center"
        style={{
          background: `radial-gradient(ellipse 60% 80% at 50% 100%, rgba(192,57,43,.15), transparent 65%),
                       radial-gradient(ellipse 40% 50% at 30% 20%, rgba(139,111,71,.1), transparent 55%),
                       var(--ink)`
        }}
      >
        <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
          Solo su prenotazione · ogni occasione
        </span>
        <h2 className="font-[var(--serif)] mt-[24px] text-[clamp(44px,8vw,120px)] leading-[1.0] tracking-[-0.01em]">
          Vieni a bere<br /><span>con noi.</span>
        </h2>
        <p className="mt-[24px] mx-auto text-[var(--cream-mute)] max-w-[48ch] text-[16px] leading-[1.65]">
          Un regalo, una festa, una serata di team building o una cena aziendale esclusiva.
          Scrivi su WhatsApp e costruiamo insieme la vostra esperienza.
        </p>
        <div className="mt-[44px] flex gap-[14px] justify-center flex-wrap">
          <WAButton
            text="Salve, vorrei prenotare un'esperienza (Drinking Class o Cooking Class) a Le Streghe Ubriache."
            label="Prenota su WhatsApp →"
            variant="red"
          />
          <WAButton
            text="Salve, vorrei informazioni sulle esperienze a Le Streghe Ubriache."
            label="Scrivici per info"
            variant="green"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
