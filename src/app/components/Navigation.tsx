import { Link, useLocation } from 'react-router';
import logoImg from '../../imports/IMG_0464_2.png';

interface NavigationProps {
  solid?: boolean;
}

export default function Navigation({ solid = false }: NavigationProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[var(--gutter)] py-[22px] ${
        solid
          ? 'sticky bg-[var(--ink)] border-b border-[var(--rule)]'
          : 'mix-blend-difference'
      }`}
      style={{ color: 'var(--cream)' }}
    >
      <Link
        to="/"
        className="flex items-center gap-[12px] font-[var(--serif)] text-[22px] tracking-[0.01em]"
        aria-label="Le Streghe Ubriache home"
      >
        <span>Le Streghe Ubriache</span>
      </Link>

      <nav aria-label="Menu principale">
        <ul className="flex gap-[36px] list-none font-[var(--mono)] text-[11px] tracking-[0.28em] uppercase max-[860px]:hidden">
          <li>
            <Link
              to="/"
              className="relative py-[6px]"
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
              {isActive('/') && (
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[var(--cream)]" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/storia"
              className="relative py-[6px]"
              aria-current={isActive('/storia') ? 'page' : undefined}
            >
              Storia
              {isActive('/storia') && (
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[var(--cream)]" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="relative py-[6px]"
              aria-current={isActive('/menu') ? 'page' : undefined}
            >
              Menù
              {isActive('/menu') && (
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[var(--cream)]" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/esperienze"
              className="relative py-[6px]"
              aria-current={isActive('/esperienze') ? 'page' : undefined}
            >
              Esperienze
              {isActive('/esperienze') && (
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[var(--cream)]" />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/contatti"
              className="relative py-[6px]"
              aria-current={isActive('/contatti') ? 'page' : undefined}
            >
              Contatti
              {isActive('/contatti') && (
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[var(--cream)]" />
              )}
            </Link>
          </li>
        </ul>
      </nav>

      <a
        href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[var(--rule-strong)] px-[18px] py-[10px] rounded-full font-[var(--mono)] text-[11px] tracking-[0.28em] uppercase transition-all duration-[250ms] ease-in-out hover:bg-[var(--cream)] hover:text-[var(--ink)] hover:border-[var(--cream)] max-[860px]:px-[14px] max-[860px]:py-[8px]"
      >
        Prenota
      </a>
    </header>
  );
}
