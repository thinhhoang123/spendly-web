import Category from '@/interfaces/responses/Category';
import CategoryItem from './category-item';

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  const groupByType = Object.groupBy(categories, ({ transactionType }) =>
    transactionType === 1 ? 'expense' : 'income'
  );
  return (
    <div className="flex flex-col gap-4">
      {groupByType.expense && groupByType.expense?.length > 0 ? (
        <div className="flex flex-col gap-2">
          <p>Expenses</p>
          <ListItem categories={groupByType.expense} />
        </div>
      ) : null}

      {groupByType.income && groupByType.income?.length > 0 ? (
        <div className="flex flex-col gap-2">
          <p>Income</p>
          <ListItem categories={groupByType.income} />
        </div>
      ) : null}
    </div>
  );
}

const ListItem = ({ categories }: { categories?: Category[] }) => {
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
};
