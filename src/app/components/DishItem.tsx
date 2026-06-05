interface DishItemProps {
  name: string;
  description?: string;
  price: string;
  fullWidth?: boolean;
}

export default function DishItem({ name, description, price, fullWidth = false }: DishItemProps) {
  return (
    <div
      className={`flex justify-between items-baseline gap-[16px] pb-[24px] border-b border-dashed border-[var(--rule)] ${
        fullWidth ? 'col-span-full' : ''
      }`}
    >
      <div className="font-[var(--serif)] text-[24px] leading-[1.2] max-[860px]:text-[20px]">
        {name}
        {description && (
          <span className="block font-[var(--sans)] text-[13px] text-[var(--cream-mute)] mt-[4px] leading-[1.5]">
            {description}
          </span>
        )}
      </div>
      <div className="font-[var(--mono)] text-[13px] tracking-[0.05em] text-[var(--ember)] whitespace-nowrap">
        {price}
      </div>
    </div>
  );
}
