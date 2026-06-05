import { Link } from 'react-router';

interface ButtonProps {
  href?: string;
  to?: string;
  children: React.ReactNode;
  solid?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({ href, to, children, solid, onClick, type = 'button', className = '', style }: ButtonProps) {
  const classes = `inline-flex items-center gap-[12px] px-[22px] py-[14px] rounded-full font-[var(--mono)] text-[11px] tracking-[0.28em] uppercase border border-[var(--cream)] transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:bg-[var(--cream)] hover:text-[var(--ink)] ${
    solid ? 'bg-[var(--cream)] text-[var(--ink)] hover:bg-[var(--ember)] hover:border-[var(--ember)]' : ''
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}
