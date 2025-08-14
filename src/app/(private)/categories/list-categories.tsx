'use client';
import Category from '@/models/Category';
import { hexToRgba } from '@/utils';
import { Card, CardBody, Skeleton } from '@heroui/react';
import { DynamicIcon } from 'lucide-react/dynamic';
interface ListCategoriesProps {
  categories?: Category[];
}
export default function ListCategories({ categories }: ListCategoriesProps) {
  const skeleton = (
    <Card className="w-52">
      <CardBody className="flex flex-row items-center gap-3">
        <Skeleton className="flex rounded-full w-12 h-12" />
        <Skeleton className="h-3 w-24 rounded-lg" />
      </CardBody>
    </Card>
  );

  const loadingState = Array.from({ length: 10 }, () => skeleton);
  return (
    <div className="flex gap-4 flex-wrap">
      {categories
        ? categories?.map((category) => {
            return (
              <Card key={category.id} className="w-full sm:w-52 ">
                <CardBody className="flex flex-row items-center gap-3">
                  <div
                    className="bg-neutral-200 rounded-full w-12 h-12 flex justify-center items-center"
                    style={{
                      backgroundColor: hexToRgba(category.color, '0.2'),
                    }}
                  >
                    <DynamicIcon
                      size={24}
                      name={category.icon}
                      color={category.color}
                    />
                  </div>
                  <p className="text-xl">{category.name}</p>
                </CardBody>
              </Card>
            );
          })
        : loadingState}
    </div>
  );
}
