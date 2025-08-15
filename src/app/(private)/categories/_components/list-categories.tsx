'use client';
import Category from '@/models/Category';
import { hexToRgba } from '@/utils';
import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import EmptyCategories from './empty-state';
import { BACKGROUND_OPACITY } from '@/constants';
import { EllipsisVertical, Pen, Trash } from 'lucide-react';

interface ListCategoriesProps {
  categories?: Category[];
}

export default function ListCategories({ categories }: ListCategoriesProps) {
  if (!categories || categories?.length == 0) return <EmptyCategories />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories?.map((category) => {
        return (
          <Card key={category.id}>
            <CardBody className="flex flex-row items-center gap-3 justify-between">
              <div className="flex gap-3 flex-row items-center">
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
                <p className="text-lg font-medium">{category.name}</p>
              </div>

              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <Button isIconOnly variant="light" radius="full">
                    <EllipsisVertical color="gray" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="edit" startContent={<Pen size={16} />}>
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    color="danger"
                    className="text-danger"
                    startContent={<Trash size={16} />}
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

