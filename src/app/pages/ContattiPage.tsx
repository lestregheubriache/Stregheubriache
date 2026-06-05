import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function ContattiPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#prenota') {
      // Delay to let ScrollToTop reset position first, then scroll to section
      setTimeout(() => {
        const element = document.getElementById('prenota');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  }, [location]);

  return (
    <div>
      <Navigation solid />

      {/* Page Hero */}
      <section className="px-[var(--gutter)] pt-[160px] pb-[80px] text-center border-b border-[var(--rule)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,165,116,.25), transparent 60%),
                         radial-gradient(ellipse 45% 35% at 75% 15%, rgba(85,107,47,.1), transparent 50%)`
          }}
        />
        <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)] block mb-[24px]">
          Vienici a trovare
        </span>
        <h1 className="italic text-[clamp(64px,11vw,160px)] leading-[0.95]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>
          Riserva<br />il tuo tavolo.
        </h1>
        <p className="mt-[32px] mx-auto text-[var(--cream-mute)] text-[17px] max-w-[60ch]">
          Scrivici su WhatsApp per prenotare. Rispondiamo entro la giornata.
        </p>
      </section>

      {/* Contact Info + Map */}
      <section className="grid grid-cols-[1fr_1.2fr] gap-[80px] px-[var(--gutter)] py-[clamp(60px,10vh,120px)] max-w-[var(--maxw)] mx-auto max-[860px]:grid-cols-1">
        <div>
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
            Le coordinate
          </span>
          <h2 className="font-[var(--serif)] mt-[18px] text-[clamp(40px,5vw,72px)] leading-[1.02]">
            In <span className="italic">centro</span><br />a Frascati.
          </h2>

          <dl className="grid grid-cols-[100px_1fr] gap-x-[16px] gap-y-[20px] mt-[32px]">
            <dt className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] pt-[6px]">
              Dove
            </dt>
            <dd className="font-[var(--serif)] text-[22px] italic">
              Centro storico<br />
              <span className="text-[16px] font-[var(--sans)] not-italic text-[var(--cream-mute)]">
                00044 Frascati (RM) · Italia
              </span>
            </dd>

            <dt className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] pt-[6px]">
              Telefono
            </dt>
            <dd>
              <a href="tel:+390694921645" className="font-[var(--serif)] text-[22px] italic hover:text-[var(--ember)] transition-colors">
                +39 06 94921645
              </a>
              <span className="block mt-[6px] font-[var(--mono)] text-[10px] tracking-[0.18em] uppercase text-[var(--ember)]">
                Anche su WhatsApp · puoi chiamarci o scriverci
              </span>
              <a
                href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[6px] mt-[8px] font-[var(--mono)] text-[10px] tracking-[0.18em] uppercase text-[var(--cream-mute)] hover:text-[var(--cream)] transition-colors"
              >
                <span className="w-[8px] h-[8px] rounded-full bg-[#25D366] flex-shrink-0" />
                Apri WhatsApp →
              </a>
            </dd>

            <dt className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] pt-[6px]">
              Email
            </dt>
            <dd className="font-[var(--serif)] text-[18px] italic">
              <a href="mailto:lestregheubriachesince2003@gmail.com" className="hover:text-[var(--ember)] transition-colors break-all">
                lestregheubriachesince2003@gmail.com
              </a>
            </dd>

            <dt className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] pt-[6px]">
              Orari
            </dt>
            <dd className="font-[var(--serif)] text-[18px] italic">
              Mer — Dom · 19:00 → 00:30<br />
              <span className="text-[14px] font-[var(--sans)] not-italic text-[var(--cream-mute)]">
                Lunedì e martedì chiuso
              </span>
            </dd>

            <dt className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] pt-[6px]">
              Social
            </dt>
            <dd className="font-[var(--serif)] text-[18px] italic">
              <a
                href="https://www.instagram.com/lestregheubriache"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ember)] transition-colors"
              >
                Instagram
              </a>
              {' · '}
              <a
                href="https://www.facebook.com/lestregheubriache"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ember)] transition-colors"
              >
                Facebook
              </a>
            </dd>
          </dl>
        </div>

        {/* Map Block */}
        <iframe
          className="aspect-[4/5] w-full border border-[var(--rule)]"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Le+Streghe+Ubriache,Frascati+Italy&zoom=17"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Google - Le Streghe Ubriache, Frascati"
        />
      </section>

      {/* WhatsApp Booking */}
      <section
        id="prenota"
        className="px-[var(--gutter)] py-[clamp(60px,10vh,120px)] border-t border-[var(--rule)] bg-[var(--wine-deep)]"
      >
        <div className="max-w-[var(--maxw)] mx-auto text-center">
          <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
            Prenota un tavolo
          </span>
          <h2 className="font-[var(--serif)] italic mt-[18px] text-[clamp(40px,6.5vw,96px)] leading-[1.02] tracking-[-0.01em]">
            Quando<br />ti aspettiamo?
          </h2>
          <p className="mt-[24px] mx-auto text-[var(--cream-mute)] max-w-[50ch] text-[17px]">
            Scrivici su WhatsApp: ti risponderemo il prima possibile per confermare il tuo tavolo.
            Per gruppi oltre 6 persone o eventi privati, descrivici la serata che hai in mente.
          </p>
          <div className="mt-[44px]">
            <a
              href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[14px] px-[32px] py-[18px] rounded-full font-[var(--mono)] text-[13px] tracking-[0.22em] uppercase transition-all duration-[300ms] hover:opacity-90 hover:scale-[1.02]"
              style={{ background: '#25D366', color: '#fff', border: '1px solid #25D366' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Scrivici su WhatsApp
            </a>
          </div>
          <p className="mt-[20px] font-[var(--mono)] text-[11px] tracking-[0.18em] text-[var(--cream-mute)]">
            Il messaggio verrà inviato con testo precompilato — puoi modificarlo come preferisci
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
