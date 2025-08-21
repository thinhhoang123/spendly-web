import Category from '@/interfaces/responses/Category';
import CategoryItem, { CategoryItemSkeleton } from './category-item';
import CategoryListEmpty from './category-list-empty';
import { getCategories } from '@/actions/category-actions';

export default async function CategoryList({ query }: { query: string }) {
  const categories = await getCategories(query);

  if (categories == undefined) return <CategoryListSkeleton />;
  if (categories.length === 0) return <CategoryListEmpty />;

  const groupByType = Object.groupBy(categories, ({ transactionType }) =>
    transactionType === 1 ? 'expense' : 'income'
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p>Expenses</p>
        <ListItem categories={groupByType.expense} />
      </div>
      <div className="flex flex-col gap-2">
        <p>Income</p>
        <ListItem categories={groupByType.income} />
      </div>
    </div>
  );
}

function ListItem({ categories }: { categories?: Category[] }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      {categories?.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          icon={category.icon}
          color={category.color}
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
        />
      ))}
    </div>
  );
}

export function CategoryListSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-2">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => {
        return (
          <CategoryItemSkeleton
            key={i}
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
          />
        );
      })}
    </div>
  );
}
