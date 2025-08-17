import { Card, CardBody } from '@heroui/card';
import { Skeleton } from '@heroui/skeleton';

export default function LoadingList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }, (_, index) => (
        <CategoryCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <Card>
      <CardBody className="flex flex-row items-center gap-3">
        <Skeleton className="flex rounded-full w-12 h-12" />
        <Skeleton className="h-3 w-24 rounded-lg" />
      </CardBody>
    </Card>
  );
}
