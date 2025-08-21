import { Skeleton } from '../ui/skeleton';

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
      <div className="flex items-center gap-2">
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

export function CategoryItemSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`space-y-2 flex flex-row items-center rounded-lg border p-3 cursor-pointer hover:bg-neutral-50 ${className}`}
    >
      <div className="flex gap-2 items-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32 " />
          <Skeleton className="h-4 w-32 " />
        </div>
      </div>
    </div>
  );
}
