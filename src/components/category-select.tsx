'use client';
import { getCategories } from '@/actions/category-actions';
import KINDS from '@/constants/kinds';
import Category from '@/models/Category';
import { Select, SelectItem, SelectSection } from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import { DynamicIcon } from 'lucide-react/dynamic';

interface CategorySelectProps {
  name?: string;
  label?: string;
}
export default function CategorySelect({ name }: CategorySelectProps) {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  const headingClasses =
    'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small';

  return (
    <Select label="Category" name={name} isRequired>
      <SelectSection
        classNames={{
          heading: headingClasses,
        }}
        title="Expense"
      >
        {data && data?.length > 0
          ? data
              .filter((category) => category.kind === KINDS.EXPENSE)
              .map((category: Category) => (
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
      </SelectSection>
      <SelectSection
        classNames={{
          heading: headingClasses,
        }}
        title="Income"
      >
        {data && data?.length > 0
          ? data
              .filter((category) => category.kind === KINDS.INCOME)
              .map((category: Category) => (
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
      </SelectSection>
    </Select>
  );
}
