import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PlaceholderImage from '../components/PlaceholderImage';
import DishItem from '../components/DishItem';
import Marquee from '../components/Marquee';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import pastaImg from '../../imports/IMG20260426145419.jpg';
import porchettaImg from '../../imports/IMG-20250913-WA0000.jpg';
import dolciImg1 from '../../imports/677adf1d-ad30-4369-b9ad-16f21ada643f.jpeg';
import dolciImg2 from '../../imports/62b58866-da86-4b87-a40c-f9109c78f04b.jpeg';
import cantinaImg from '../../imports/fc666f90-5247-4de2-9807-6c8601342a10.jpeg';
import logoImg from '../../imports/IMG_0464_2.png';

type Lang = 'it' | 'en';

const GMAPS = 'https://maps.google.com/?q=Le+Streghe+Ubriache+Frascati';

const T = {
  it: {
    heroSub: 'La Cantina delle Streghe',
    heroCopy: 'Ristorante & cocktail bar in una cantina del 1750 nel cuore di Frascati. Aperitivi, cucina del territorio con creatività, dolci fatti in casa e una drink list che racconta i Castelli Romani.',
    heroMenu: 'Esplora il menù',
    heroBook: 'Prenota su WhatsApp',
    infoStrip: [
      { label: 'Dove', value: 'Via Vincenzo Gioberti, 6\nFrascati (RM)', link: GMAPS },
      { label: 'Quando', value: 'Mer — Dom · dalle 18', link: 'https://share.google/z1JEYaXGlAt39EFDd' },
      { label: 'Specialità', value: 'Pane, pasta, porchetta\ne dolci fatti in casa · prodotti km 0' },
      { label: 'Formule', value: 'Aperitivo · cena\ndopocena' },
    ],
    storyTag: 'La nostra storia',
    storyTitle: 'Una cantina\ndel 1750.',
    storyP1: 'Volte in tufo, pareti che ricordano storie di vino e di mosto. Le Streghe Ubriache nascono qui: in una cantina settecentesca restaurata, nel cuore di Frascati.',
    storyP2: '"Molti anni fa, quando ero piccino, venivo in questa cantina a giocare mano nella mano con mio padre. Era ancora un posto buio che profumava di vino. Le grotte avevano qualcosa di misterioso: ombre, silenzi, racconti sussurrati. Mi dicevano che qui dentro allignavano le Streghe. È proprio da quei ricordi, sospesi tra fantasia e profumo di cantina, che nasce il nome Le Streghe Ubriache." — Gianluca',
    storyP3: 'Col tempo è diventato qualcosa di più di un ristorante; un luogo dove ogni piatto e ogni calice raccontano la nostra storia di ospitalità.',
    storyCta: 'Entra in cantina',
    menuTag: 'Selezione dello chef',
    menuTitle: 'Dalla nostra cucina,\ncon un tocco di creatività.',
    dishes: [
      { name: 'Tartare di Scottona', description: 'Cipolla caramellata e cremoso di pecorino', price: '11 €' },
      { name: 'Carpaccio di Black Angus', description: 'Leggermente affumicato agli agrumi', price: '11 €' },
      { name: 'Fettuccine al ragù di Scottona', description: 'Pasta fatta in casa, 100% grano italiano', price: '14 €' },
      { name: 'Maccheroni alla Gricia', description: 'Tradizione romana anche con creatività', price: '14 €' },
      { name: 'Brasato di guancia al Cesanese', description: 'Patate e verdure al burro', price: '20 €' },
      { name: 'Tagliata di controfiletto', description: 'Rosmarino, sale Maldon, olio EVO', price: '24 €' },
    ],
    menuCta: 'Tutto il menù',
    pillarsTag: 'Tre momenti, un solo luogo',
    pillars: [
      {
        num: '01 / Aperitivo',
        title: 'Calici\nal tramonto.',
        desc: 'Vini del territorio e non solo, bollicine e taglieri con porchetta home made, affettati e pecorini a chilometro zero. Si comincia da qui, anche con proposte vegetariane.'
      },
      {
        num: '02 / Cena',
        title: 'Tradizione,\ncon creatività.',
        desc: 'Gricia e le sue varianti di stagione, Tonnarello cacio e pepe, brasato di guancia al Cesanese. La cucina di Gianluca cammina sul confine tra gioco e rispetto.'
      },
      {
        num: '03 / Dopocena',
        title: 'Un ultimo\nsorso.',
        desc: 'Drink list firmata, vini autoctoni, distillati da meditazione e i nostri dolci. Rigorosamente fatti in casa. Per finire o per restare.'
      },
    ],
    ctaTag: 'Prenota il tuo tavolo',
    ctaTitle: 'Ci vediamo\nin cantina.',
    ctaCopy: 'Le Streghe Ubriache aprono il mercoledì, giovedì, venerdì, sabato e la domenica. Per gruppi ed eventi privati scriviamo insieme la vostra serata.',
    ctaBook: 'Prenota su WhatsApp →',
    ctaFind: 'Trovaci',
    metaRight1: 'Cucina & Cocktail Bar',
    metaRight2: 'Frascati · Dal 1750',
    storyDiscover: 'Scopri la storia →',
  },
  en: {
    heroSub: 'the Witches\' Cellar',
    heroCopy: 'Restaurant & cocktail bar in an 1750 cellar in the heart of Frascati. Aperitifs, Roman cuisine with a creative twist, homemade desserts and a drink list that tells the story of the Castelli Romani.',
    heroMenu: 'Explore the menu',
    heroBook: 'Book via WhatsApp',
    infoStrip: [
      { label: 'Where', value: 'Via Vincenzo Gioberti, 6\nFrascati (RM)', link: GMAPS },
      { label: 'When', value: 'Wed — Sun · from 18:00\nSun also lunch 12:30–15' },
      { label: 'Speciality', value: 'Bread, pasta, porchetta\n& homemade desserts · km 0' },
      { label: 'Formule', value: 'Aperitivo · dinner\nafter dinner · Sunday lunch' },
    ],
    storyTag: 'Our story',
    storyTitle: 'A cellar\nfrom 1750.',
    storyP1: 'Tufa vaults, walls that hold memories of wine and must. Le Streghe Ubriache was born here: in a beautifully restored 18th-century cellar, in the heart of Frascati.',
    storyP2: '"Many years ago, when I was a child, I used to come to this cellar to play, hand in hand with my father. It was still a dark place that smelled of wine. The caves had something mysterious: shadows, silences, whispered tales. They told me that Witches dwelt inside. It is from those memories, suspended between fantasy and the scent of cellar, that the name Le Streghe Ubriache was born." — Gianluca',
    storyP3: 'Over time, it has become more than a restaurant; a place where every dish and every glass tells our story of hospitality.',
    storyCta: 'Enter the cellar',
    menuTag: 'Chef\'s selection',
    menuTitle: 'From our kitchen,\nwith a touch of creativity.',
    dishes: [
      { name: 'Scottona Tartare', description: 'Caramelised onion & pecorino cream', price: '11 €' },
      { name: 'Black Angus Carpaccio', description: 'Lightly smoked with citrus', price: '11 €' },
      { name: 'Fettuccine with Scottona ragù', description: 'Home-made pasta, 100% Italian wheat', price: '14 €' },
      { name: 'Tonnarello Cacio e Pepe', description: 'Pure Roman tradition', price: '13 €' },
      { name: 'Braised veal cheek in Cesanese', description: 'Buttered potatoes & vegetables', price: '20 €' },
      { name: 'Sirloin tagliata', description: 'Rosemary, Maldon salt, EVO oil', price: '24 €' },
    ],
    menuCta: 'Full menu',
    pillarsTag: 'Three moments, one place',
    pillars: [
      {
        num: '01 / Aperitivo',
        title: 'Glasses\nat sunset.',
        desc: 'Local and international wines, bubbles and boards with homemade porchetta, cured meats and zero-km pecorino. It starts here, with vegetarian options too.'
      },
      {
        num: '02 / Dinner',
        title: 'Tradition,\nwith flair.',
        desc: 'Gricia and its seasonal variations, Tonnarello cacio e pepe, braised cheek in Cesanese. Gianluca\'s kitchen walks the line between respect and play.'
      },
      {
        num: '03 / After dinner',
        title: 'One last\nsip.',
        desc: 'Signed drink list, autochthonous wines, spirits for meditation and our desserts. Strictly homemade. To end the evening or stay a little longer.'
      },
    ],
    ctaTag: 'Reserve your table',
    ctaTitle: 'See you\nin the cellar.',
    ctaCopy: 'Le Streghe Ubriache opens Wednesday through Sunday from 18:00, and on Sundays also for lunch. For groups and private events, let\'s write the evening together.',
    ctaBook: 'Book via WhatsApp →',
    ctaFind: 'Find us',
    metaRight1: 'Kitchen & Cocktail Bar',
    metaRight2: 'Frascati · Since 1750',
    storyDiscover: 'Discover the story →',
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('it');
  const t = T[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end px-[var(--gutter)] pt-[120px] pb-[56px] isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,111,71,.35), transparent 60%),
                         radial-gradient(ellipse 60% 40% at 90% 10%, rgba(212,165,116,.2), transparent 60%),
                         radial-gradient(ellipse 50% 50% at 20% 20%, rgba(85,107,47,.15), transparent 50%),
                         var(--ink-2)`
          }}
        />
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.018) 0 1px, transparent 1px 4px)' }}
        />

        {/* Top-right meta + IT/EN toggle */}
        <div className="absolute top-[120px] right-[var(--gutter)] flex flex-col gap-[8px] items-end max-[860px]:static max-[860px]:flex-row max-[860px]:items-center max-[860px]:justify-between max-[860px]:mb-[24px]">
          <div className="flex flex-col gap-[6px] items-end font-[var(--mono)] text-[11px] tracking-[0.22em] uppercase text-[var(--cream-mute)] max-[860px]:flex-row max-[860px]:gap-[12px]">
            <span>{t.metaRight1}</span>
          </div>
          <div className="flex items-center gap-[2px] border border-[var(--rule-strong)] rounded-full p-[3px] mt-[10px] max-[860px]:mt-0">
            <button
              onClick={() => setLang('it')}
              className="px-[12px] py-[5px] rounded-full font-[var(--mono)] text-[10px] tracking-[0.24em] uppercase transition-all duration-[200ms]"
              style={{ background: lang === 'it' ? 'var(--cream)' : 'transparent', color: lang === 'it' ? 'var(--ink)' : 'var(--cream-mute)' }}
            >IT</button>
            <button
              onClick={() => setLang('en')}
              className="px-[12px] py-[5px] rounded-full font-[var(--mono)] text-[10px] tracking-[0.24em] uppercase transition-all duration-[200ms]"
              style={{ background: lang === 'en' ? 'var(--cream)' : 'transparent', color: lang === 'en' ? 'var(--ink)' : 'var(--cream-mute)' }}
            >EN</button>
          </div>
        </div>

        <div className="relative">
          {/* Logo watermark behind titles only */}
          <img
            src={logoImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain object-left-bottom pointer-events-none select-none"
            style={{ opacity: 0.15, zIndex: 0 }}
          />
          <h1 className="relative text-[clamp(70px,14vw,220px)] leading-[0.86] tracking-[-0.02em] max-w-[14ch]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500, zIndex: 1 }}>
            <span className="text-[var(--cream)]">Le</span>{' '}
            <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--cream)' }}>Streghe</span>
            <br />
            <span className="text-[var(--cream)]">Ubriache</span>
          </h1>
          <p className="relative font-[var(--serif)] text-[clamp(32px,5.5vw,90px)] tracking-[0.02em] mt-[14px] leading-[0.95] whitespace-nowrap max-[860px]:whitespace-normal max-w-full overflow-hidden" style={{ color: '#c0392b', zIndex: 1 }}>
            {t.heroSub}
          </p>
        </div>

        <div className="flex justify-between items-end gap-[40px] mt-[48px] flex-wrap">
          <p className="max-w-[42ch] text-[17px] text-[var(--cream-mute)] leading-[1.55]">{t.heroCopy}</p>
          <div className="flex gap-[16px] flex-wrap">
            <Button to="/menu" solid style={{ background: '#c0392b', borderColor: '#c0392b', color: '#fff' }}>
              {t.heroMenu} <span className="font-[var(--serif)] text-[14px] tracking-normal normal-case">→</span>
            </Button>
            <a
              href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] border border-[var(--rule-strong)] px-[22px] py-[13px] rounded-full font-[var(--mono)] text-[12px] tracking-[0.22em] uppercase text-[var(--cream)] transition-all duration-[250ms] hover:bg-[var(--cream)] hover:text-[var(--ink)] hover:border-[var(--cream)]"
            >
              {t.heroBook}
            </a>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="grid grid-cols-4 border-t border-b border-[var(--rule)] max-[860px]:grid-cols-2" aria-label="Quick info">
        {t.infoStrip.map((info, i) => (
          <div
            key={i}
            className={`px-[var(--gutter)] py-[32px] border-r border-[var(--rule)] ${i === 3 ? 'border-r-0' : ''} ${i === 1 ? 'max-[860px]:border-r-0' : ''}`}
          >
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)] block mb-[12px]">
              {info.label}
            </span>
            {'link' in info ? (
              <a
                href={(info as any).link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--serif)] text-[20px] leading-[1.25] hover:text-[var(--ember)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)]"
              >
                {info.value.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </a>
            ) : (
              <p className="font-[var(--serif)] text-[20px] leading-[1.25]">
                {info.value.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Specialità Section */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-t border-[var(--rule)]" id="specialita">
        <div className="max-w-[var(--maxw)] mx-auto">
          <div className="text-center mb-[64px]">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
              Le nostre specialità
            </span>
            <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(36px,5.5vw,80px)] leading-[1.02] tracking-[-0.01em]">
              Fatto in casa,<br />con amore.
            </h2>
            <p className="mt-[24px] mx-auto text-[var(--cream-mute)] text-[17px] max-w-[60ch]">
              Pane, pasta e dolci preparati ogni giorno nella nostra cucina. Porchetta artigianale e prodotti a chilometro zero dai Castelli Romani.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-[860px]:grid-cols-1">
            <ImageWithFallback
              src={pastaImg}
              alt="Pasta fatta in casa"
              className="w-full aspect-[4/3] object-cover reveal"
            />
            <ImageWithFallback
              src={porchettaImg}
              alt="Porchetta artigianale"
              className="w-full aspect-[4/3] object-cover reveal"
            />
            <ImageWithFallback
              src={dolciImg1}
              alt="Dolci fatti in casa"
              className="w-full aspect-[4/3] object-cover reveal"
            />
            <ImageWithFallback
              src={dolciImg2}
              alt="Dolci della tradizione"
              className="w-full aspect-[4/3] object-cover reveal"
            />
          </div>

          <div className="text-center mt-[48px]">
            <Button to="/menu">
              Scopri il menù completo <span className="font-[var(--serif)] text-[14px] tracking-normal normal-case">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] relative border-t border-[var(--rule)]" id="storia">
        <div className="grid grid-cols-[1fr_1.1fr] gap-[clamp(40px,7vw,120px)] items-center max-w-[var(--maxw)] mx-auto max-[860px]:grid-cols-1">
          <ImageWithFallback
            src={cantinaImg}
            alt="Interno cantina del 1750"
            className="reveal aspect-[4/5] w-full object-cover"
          />
          <div className="reveal">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">{t.storyTag}</span>
            <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(40px,6.5vw,96px)] leading-[1.02] tracking-[-0.01em]">
              {t.storyTitle.split('\n').map((line, j) => (<span key={j}>{line}{j === 0 && <br />}</span>))}
            </h2>
            <p className="mt-[28px] text-[18px] leading-[1.65] text-[var(--cream-mute)]">{t.storyP1}</p>
            {/* Gianluca's childhood memory */}
            <blockquote className="mt-[28px] pl-[20px] border-l-[2px] border-[var(--rule-strong)] text-[16px] leading-[1.7] text-[var(--cream-mute)] italic">
              {t.storyP2}
            </blockquote>
            <p className="mt-[28px] text-[17px] leading-[1.65] text-[var(--cream-mute)]">{t.storyP3}</p>
            <div className="mt-[36px] flex items-center gap-[16px] font-[var(--mono)] text-[11px] tracking-[0.28em] uppercase text-[var(--cream-mute)]">
              <span className="w-[40px] h-[1px] bg-[var(--cream-mute)]" />
              {t.storyDiscover}
            </div>
            <div className="mt-[24px]">
              <Button to="/storia">{t.storyCta}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-t border-[var(--rule)] relative overflow-hidden" style={{ background: 'var(--wine-deep)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 20% 30%, rgba(212,165,116,.25), transparent 65%),
                         radial-gradient(ellipse 40% 60% at 80% 70%, rgba(85,107,47,.12), transparent 60%)`
          }}
        />
        <div className="max-w-[var(--maxw)] mx-auto relative">
          <div className="flex justify-between items-end gap-[40px] mb-[clamp(40px,6vh,80px)] flex-wrap">
            <div>
              <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">{t.menuTag}</span>
              <h2 className="font-[var(--serif)] mt-[16px] text-[clamp(36px,5.5vw,80px)] leading-[1.02] tracking-[-0.01em] max-w-[14ch]">
                {t.menuTitle.split('\n').map((line, j) => (<span key={j}>{line}{j === 0 && <br />}</span>))}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-[80px] gap-y-[36px] max-[860px]:grid-cols-1">
            {t.dishes.map((dish, i) => (
              <DishItem key={i} name={dish.name} description={dish.description} price={dish.price} />
            ))}
          </div>

          <div className="text-center mt-[64px]">
            <Button to="/menu">
              {t.menuCta} <span className="font-[var(--serif)] text-[14px] tracking-normal normal-case">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Pillars */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-t border-[var(--rule)]">
        <div className="max-w-[var(--maxw)] mx-auto">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">{t.pillarsTag}</span>
          <div className="grid grid-cols-3 gap-[clamp(24px,4vw,64px)] mt-[48px] max-[860px]:grid-cols-1">
            {t.pillars.map((pillar, i) => (
              <div key={i} className="reveal pt-[32px] border-t border-[var(--rule-strong)]">
                <div className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)] mb-[24px]">{pillar.num}</div>
                <h3 className="font-[var(--serif)] text-[clamp(28px,3vw,40px)] leading-[1.02]">
                  {pillar.title.split('\n').map((line, j) => (<span key={j}>{line}{j === 0 && <br />}</span>))}
                </h3>
                <p className="mt-[16px] text-[var(--cream-mute)] text-[15px]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-[var(--gutter)] py-[clamp(80px,15vh,180px)] text-center border-t border-[var(--rule)]"
        style={{
          background: `radial-gradient(ellipse 50% 80% at 50% 100%, rgba(139,111,71,.2), transparent 70%),
                       radial-gradient(ellipse 40% 50% at 30% 30%, rgba(85,107,47,.08), transparent 60%),
                       var(--ink)`
        }}
      >
        <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">{t.ctaTag}</span>
        <h2 className="font-[var(--serif)] mt-[24px] text-[clamp(56px,9vw,144px)] leading-[1.02] tracking-[-0.01em]">
          {t.ctaTitle.split('\n').map((line, j) => (<span key={j}>{line}{j === 0 && <br />}</span>))}
        </h2>
        <p className="mt-[28px] mx-auto mb-[36px] text-[var(--cream-mute)] max-w-[52ch]">{t.ctaCopy}</p>
        <div className="flex gap-[16px] justify-center flex-wrap">
          <a
            href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] px-[24px] py-[14px] rounded-full font-[var(--mono)] text-[12px] tracking-[0.22em] uppercase transition-all duration-[250ms]"
            style={{ background: '#c0392b', color: '#fff', border: '1px solid #c0392b' }}
          >
            {t.ctaBook}
          </a>
          <Button to="/contatti">{t.ctaFind}</Button>
        </div>
      </section>

      <Footer />

      <style>{`
        .reveal { opacity:0; transform:translateY(24px); transition:0.9s cubic-bezier(0.2,0.7,0.2,1); }
        .reveal.revealed { opacity:1; transform:none; }
      `}</style>
    </div>
  );
}
