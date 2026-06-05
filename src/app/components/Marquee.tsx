export default function Marquee() {
  const content = (
    <>
      Aperitivo <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--ember)]" /> Cena{' '}
      <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--ember)]" /> Dopocena{' '}
      <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--ember)]" /> Drink List{' '}
      <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--ember)]" /> Cantina 1750{' '}
      <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--ember)]" /> Frascati{' '}
      <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--ember)]" />{' '}
    </>
  );

  return (
    <div
      className="overflow-hidden py-[28px] border-t border-b border-[var(--rule)] bg-[var(--ink-2)]"
      aria-hidden="true"
    >
      <div
        className="flex gap-[60px] whitespace-nowrap font-[var(--serif)] italic text-[clamp(48px,7vw,96px)] text-[var(--cream)]"
        style={{
          animation: 'scroll 38s linear infinite'
        }}
      >
        <span className="inline-flex items-center gap-[60px]">{content}</span>
        <span className="inline-flex items-center gap-[60px]">{content}</span>
      </div>
    </div>
  );
}
