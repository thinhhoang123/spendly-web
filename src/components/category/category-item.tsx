interface CategoryItemProps {
  name: string;
  color: string;
  icon: string;
  className?: string;
}
export default function CategoryItem({
  name,
  icon,
  color,
  className,
}: CategoryItemProps) {
  return (
    <div
      className={`space-y-2 flex flex-row items-center rounded-lg border p-3 cursor-pointer hover:bg-neutral-50 ${className}`}
    >
      <div className="flex gap-2">
        <span
          className="w-12 h-12 flex justify-center items-center rounded-full text-shadow-sm"
          style={{ backgroundColor: color }}
        >
          {icon}
        </span>
        <div className="flex flex-col">
          <p>{name}</p>
          <p className="text-muted-foreground text-sm">0 transactions</p>
        </div>
      </div>
    </div>
  );
}
