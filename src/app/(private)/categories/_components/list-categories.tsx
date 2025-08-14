'use client';
import Category from '@/models/Category';
import { hexToRgba } from '@/utils';
import { Card, CardBody } from '@heroui/react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import EmptyCategories from './empty-state';
import { BACKGROUND_OPACITY } from '@/constants';

interface ListCategoriesProps {
  categories?: Category[];
}

export default function ListCategories({ categories }: ListCategoriesProps) {
  if (!categories || categories?.length > 0) return <EmptyCategories />;

  return (
    <div className="flex gap-4 flex-wrap">
      {categories?.map((category) => {
        return (
          <Card key={category.id} className="w-full sm:w-52 ">
            <CardBody className="flex flex-row items-center gap-3">
              <div
                className="bg-neutral-200 rounded-full w-12 h-12 flex justify-center items-center"
                style={{
                  backgroundColor: hexToRgba(
                    category.color,
                    BACKGROUND_OPACITY
                  ),
                }}
              >
                <DynamicIcon
                  size={24}
                  name={category.icon as IconName}
                  color={category.color}
                />
              </div>
              <p className="text-xl">{category.name}</p>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
