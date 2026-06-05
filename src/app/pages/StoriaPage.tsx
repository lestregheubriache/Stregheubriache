import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PlaceholderImage from '../components/PlaceholderImage';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import volteImg from '../../imports/6f66a16d-451a-4e44-8c80-8b1bf02b47d9.jpeg';
import dolceImg from '../../imports/IMG20260426145419-1.jpg';

export default function StoriaPage() {
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
      <Navigation solid />

      {/* Page Hero */}
      <section className="px-[var(--gutter)] pt-[160px] pb-[80px] text-center border-b border-[var(--rule)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,165,116,.25), transparent 60%),
                         radial-gradient(ellipse 50% 40% at 20% 10%, rgba(85,107,47,.1), transparent 50%)`
          }}
        />
        <h1 className="italic text-[clamp(64px,11vw,160px)] leading-[0.95]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>
          Sotto le volte<br />di una cantina.
        </h1>
        <p className="mt-[32px] mx-auto text-[var(--cream-mute)] text-[17px] max-w-[60ch]">
          Le Streghe Ubriache nascono nel 2003 ed ora sono un ristorante e cocktail bar,
          avvolte in una cantina del 1750.
        </p>
      </section>

      {/* Long-form Story */}
      <section className="px-[var(--gutter)] py-[clamp(60px,10vh,120px)] max-w-[1100px] mx-auto">

        {/* Cap I */}
        <div className="reveal grid grid-cols-[200px_1fr] gap-[64px] items-start mb-[80px] max-[860px]:grid-cols-1 max-[860px]:gap-[24px]">
          <div className="pt-[12px] border-t border-[var(--rule-strong)]">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)]">Cap. I · Il luogo</span>
          </div>
          <div>
            <h3 className="font-[var(--serif)] italic text-[32px]">Una cantina del Settecento.</h3>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-[var(--cream-mute)]">
              Tufo, calce e legno. Le volte basse hanno custodito botti per quasi tre secoli,
              nel cuore di una città che con il vino ha un rapporto antico — Frascati,
              capitale dei Castelli Romani. Quando l'abbiamo trovata, era addormentata.
              Restaurarla è stato il primo gesto: pulire, illuminare con misura, lasciar parlare la pietra.
            </p>
          </div>
        </div>

        <ImageWithFallback
          src={volteImg}
          alt="Volte in tufo, vista lunga della cantina"
          className="reveal aspect-[16/9] my-[60px] w-full object-cover"
        />

        {/* Cap II */}
        <div className="reveal grid grid-cols-[200px_1fr] gap-[64px] items-start mb-[80px] max-[860px]:grid-cols-1 max-[860px]:gap-[24px]">
          <div className="pt-[12px] border-t border-[var(--rule-strong)]">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)]">Cap. II · La cucina</span>
          </div>
          <div>
            <h3 className="font-[var(--serif)] italic text-[32px]">Gianluca, e il suo tocco.</h3>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-[var(--cream-mute)]">
              Da noi tutto ha una marcia in più. Il merito è di Gianluca,
              il nostro cuciniere, che alla tradizione romana aggiunge sempre
              qualcosa di suo — una spezia, una cottura, un guizzo. Carbonara
              e amatriciana le facciamo come si deve; ma il pane e la pasta fatti in casa,
              il brasato cotto lentamente nel Cesanese e tanto altro ancora
              raccontano dove vogliono andare.
            </p>
          </div>
        </div>

        {/* Cap III */}
        <div className="reveal grid grid-cols-[200px_1fr] gap-[64px] items-start mb-[80px] max-[860px]:grid-cols-1 max-[860px]:gap-[24px]">
          <div className="pt-[12px] border-t border-[var(--rule-strong)]">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)]">Cap. III · I dolci</span>
          </div>
          <div>
            <h3 className="font-[var(--serif)] italic text-[32px]">Rigorosamente fatti in casa.</h3>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-[var(--cream-mute)]">
              I dolci nascono in cucina, ogni giorno seguendo la stagione e l'idea della sera.
              È il modo più dolce per dirvi: prendetevi ancora un attimo e restate,
              e fatevi cambiare umore dal nostro tiramisù.
            </p>
          </div>
        </div>

        <ImageWithFallback
          src={dolceImg}
          alt="Dolce della casa, dettaglio"
          className="reveal aspect-[16/9] my-[60px] w-full object-cover"
        />

        {/* Cap IV */}
        <div className="reveal grid grid-cols-[200px_1fr] gap-[64px] items-start mb-[80px] max-[860px]:grid-cols-1 max-[860px]:gap-[24px]">
          <div className="pt-[12px] border-t border-[var(--rule-strong)]">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)]">Cap. IV · Il bere</span>
          </div>
          <div>
            <h3 className="font-[var(--serif)] italic text-[32px]">Aperitivo, calice, dopocena.</h3>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-[var(--cream-mute)]">
              Si può venire da noi per un aperitivo — proposte alcoliche e analcoliche,
              accompagnate da taglieri di porchetta home made, affettati e pecorini a chilometro zero
              e opzioni vegetariane, o soltanto per un calice di vino, un drink
              o un distillato dopo la cena. La nostra drink list saprà accontentarti e dissetarti.
            </p>
          </div>
        </div>

        {/* Cap V */}
        <div className="reveal grid grid-cols-[200px_1fr] gap-[64px] items-start mb-[80px] max-[860px]:grid-cols-1 max-[860px]:gap-[24px]">
          <div className="pt-[12px] border-t border-[var(--rule-strong)]">
            <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)]">Cap. V · L'idea</span>
          </div>
          <div>
            <h3 className="font-[var(--serif)] italic text-[32px]">Più di un ristorante.</h3>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-[var(--cream-mute)]">
              Le Streghe Ubriache, col tempo, sono diventate qualcosa di più. Un luogo dove
              si torna anche solo per un saluto. Una cantina che la sera diventa salotto,
              e che ogni volta sa farsi raccontare un po' diversa. Vi aspettiamo —
              portate sete, fame e tempo da perdere.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="px-[var(--gutter)] py-[clamp(80px,12vh,160px)] border-t border-[var(--rule)]">
        <div className="max-w-[var(--maxw)] mx-auto">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
            Il nostro mondo, in poche cifre
          </span>
          <div className="grid grid-cols-4 gap-[clamp(24px,4vw,64px)] mt-[48px] max-[860px]:grid-cols-1">
            <div className="reveal pt-[32px] border-t border-[var(--rule-strong)]">
              <div className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)] mb-[24px]">Anno</div>
              <h3 className="font-[var(--serif)] italic text-[clamp(56px,7vw,96px)] leading-[1.02]">1750</h3>
              <p className="mt-[16px] text-[var(--cream-mute)] text-[15px]">
                L'anno della cantina che ci ospita, scolpita nel tufo delle volte.
              </p>
            </div>
            <div className="reveal pt-[32px] border-t border-[var(--rule-strong)]">
              <div className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)] mb-[24px]">Nascita</div>
              <h3 className="font-[var(--serif)] italic text-[clamp(56px,7vw,96px)] leading-[1.02]">2003</h3>
              <p className="mt-[16px] text-[var(--cream-mute)] text-[15px]">
                La nascita delle Streghe Ubriache
              </p>
            </div>
            <div className="reveal pt-[32px] border-t border-[var(--rule-strong)]">
              <div className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)] mb-[24px]">Km 0</div>
              <h3 className="font-[var(--serif)] italic text-[clamp(56px,7vw,96px)] leading-[1.02]">∞</h3>
              <p className="mt-[16px] text-[var(--cream-mute)] text-[15px]">
                Porchetta home made, affettati e pecorini dei Castelli Romani.
              </p>
            </div>
            <div className="reveal pt-[32px] border-t border-[var(--rule-strong)]">
              <div className="font-[var(--mono)] text-[11px] tracking-[0.32em] text-[var(--ember)] mb-[24px]">Dolci</div>
              <h3 className="font-[var(--serif)] italic text-[clamp(56px,7vw,96px)] leading-[1.02]">
                100<span className="text-[0.5em]">%</span>
              </h3>
              <p className="mt-[16px] text-[var(--cream-mute)] text-[15px]">
                fatti in casa ogni giorno
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-[var(--gutter)] py-[clamp(80px,15vh,180px)] text-center border-t border-[var(--rule)]"
        style={{
          background: `radial-gradient(ellipse 50% 80% at 50% 100%, rgba(139,111,71,.2), transparent 70%),
                       radial-gradient(ellipse 45% 60% at 25% 30%, rgba(85,107,47,.08), transparent 60%),
                       var(--ink)`
        }}
      >
        <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
          Vienici a trovare
        </span>
        <h2 className="font-[var(--serif)] italic mt-[24px] text-[clamp(56px,9vw,144px)] leading-[1.02] tracking-[-0.01em]">
          Le Streghe Ubriache<br /><span className="italic">ti aspettano in cantina.</span>
        </h2>
        <div className="flex gap-[16px] justify-center flex-wrap mt-[32px]">
          <a
            href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] px-[24px] py-[14px] rounded-full font-[var(--mono)] text-[12px] tracking-[0.22em] uppercase transition-all"
            style={{ background: '#c0392b', color: '#fff', border: '1px solid #c0392b' }}
          >
            Prenota un tavolo →
          </a>
          <Button to="/menu">Sfoglia il menù</Button>
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
