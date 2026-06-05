interface PlaceholderImageProps {
  label: string;
  className?: string;
  ember?: boolean;
}

export default function PlaceholderImage({ label, className = '', ember = false }: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden border border-[var(--rule)] flex items-center justify-center ${className}`}
      style={{
        background: ember
          ? `repeating-linear-gradient(135deg, rgba(139,111,71,.25) 0 8px, rgba(139,111,71,.35) 8px 16px), var(--wine)`
          : `repeating-linear-gradient(135deg, rgba(245,237,224,.04) 0 8px, rgba(245,237,224,.07) 8px 16px), var(--wine-deep)`
      }}
    >
      <span
        className="font-[var(--mono)] text-[11px] tracking-[0.22em] uppercase px-[12px] py-[6px] border border-[var(--rule-strong)]"
        style={{
          background: 'rgba(13,7,8,.7)',
          backdropFilter: 'blur(6px)',
          color: 'var(--cream-mute)'
        }}
      >
        {label}
      </span>
    </div>
  );
}
