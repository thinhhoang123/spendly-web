import { Card, CardBody } from '@heroui/card';
import { Skeleton } from '@heroui/skeleton';

export default function CategoryCardSkeleton() {
  return (
    <Card className="w-full sm:w-52">
      <CardBody className="flex flex-row items-center gap-3">
        <Skeleton className="flex rounded-full w-12 h-12" />
        <Skeleton className="h-3 w-24 rounded-lg" />
      </CardBody>
    </Card>
  );
}
