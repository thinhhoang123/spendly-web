'use client';
import { getCategories } from '@/actions/category-actions';
import Category from '@/models/Category';
import { Select, SelectItem } from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import { DynamicIcon } from 'lucide-react/dynamic';

export const animals = [
  { key: 'cat', label: 'Cat' },
  { key: 'dog', label: 'Dog' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' },
  { key: 'giraffe', label: 'Giraffe' },
  { key: 'dolphin', label: 'Dolphin' },
  { key: 'penguin', label: 'Penguin' },
  { key: 'zebra', label: 'Zebra' },
  { key: 'shark', label: 'Shark' },
  { key: 'whale', label: 'Whale' },
  { key: 'otter', label: 'Otter' },
  { key: 'crocodile', label: 'Crocodile' },
];
export default function CategorySelect() {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  return (
    <Select
      label="Category"
      labelPlacement="outside"
      placeholder="Select category"
      radius="full"
      name="category"
      isRequired
    >
      {data && data?.length > 0
        ? data.map((category: Category) => (
            <SelectItem key={category.id} textValue={category.name}>
              <div className="flex items-center gap-2">
                <DynamicIcon
                  name={category.icon}
                  size={14}
                  color={category.color}
                />{' '}
                {category.name}
              </div>
            </SelectItem>
          ))
        : null}
    </Select>
  );
}
