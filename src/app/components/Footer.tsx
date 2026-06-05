import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="pt-[64px] pb-[28px] px-[var(--gutter)] bg-[var(--ink)] border-t border-[var(--rule)] overflow-hidden">
      <div className="max-w-[var(--maxw)] mx-auto">

        {/* Main grid: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[40px] sm:grid-cols-4 sm:gap-x-[40px]">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-1">
            <div className="font-[var(--serif)] italic text-[28px] leading-[1.1] mb-[12px]">
              Le Streghe<br />Ubriache
            </div>
            <p className="text-[13px] text-[var(--cream-mute)] leading-[1.55]">
              Cucina &amp; Cocktail Bar
            </p>
          </div>

          {/* Naviga */}
          <div>
            <h4 className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] mb-[16px]">
              Naviga
            </h4>
            <ul className="flex flex-col gap-[10px] text-[13px] list-none">
              <li><Link to="/" className="hover:text-[var(--ember)] transition-colors">Home</Link></li>
              <li><Link to="/storia" className="hover:text-[var(--ember)] transition-colors">Storia</Link></li>
              <li><Link to="/menu" className="hover:text-[var(--ember)] transition-colors">Menù</Link></li>
              <li><Link to="/esperienze" className="hover:text-[var(--ember)] transition-colors">Esperienze</Link></li>
              <li><Link to="/contatti" className="hover:text-[var(--ember)] transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Trovaci */}
          <div>
            <h4 className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] mb-[16px]">
              Trovaci
            </h4>
            <ul className="flex flex-col gap-[10px] text-[13px] list-none">
              <li className="text-[var(--cream-mute)]">Centro storico</li>
              <li className="text-[var(--cream-mute)]">00044 Frascati (RM)</li>
              <li>
                <a href="tel:+390694921645" className="hover:text-[var(--ember)] transition-colors">
                  +39 06 94921645
                </a>
              </li>
              <li className="break-all">
                <a href="mailto:lestregheubriachesince2003@gmail.com" className="hover:text-[var(--ember)] transition-colors text-[11px]">
                  lestregheubriachesince2003@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Seguici */}
          <div>
            <h4 className="font-[var(--mono)] text-[10px] tracking-[0.28em] uppercase text-[var(--cream-mute)] mb-[16px]">
              Seguici
            </h4>
            <ul className="flex flex-col gap-[10px] text-[13px] list-none">
              <li>
                <a
                  href="https://www.instagram.com/lestregheubriache"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ember)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/lestregheubriache"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ember)] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ember)] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[48px] pt-[20px] border-t border-[var(--rule)] flex flex-col gap-[8px] sm:flex-row sm:justify-between sm:items-center font-[var(--mono)] text-[10px] tracking-[0.18em] uppercase text-[var(--cream-mute)]">
          <span>© {year} Le Streghe Ubriache · P.IVA 06247021006</span>
          <span>
            <Link to="/privacy" className="hover:text-[var(--cream)] transition-colors">Privacy & Cookie Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
