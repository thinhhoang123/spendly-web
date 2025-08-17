import ListCategories from './_components/list-categories';
import AddCategory from './_components/add-category';
import TabCategory from './_components/tab-category';
import KINDS from '@/constants/kinds';
import { Suspense } from 'react';
import LoadingList from './_components/loading-list';

export default async function CategoryPage(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const tab = searchParams?.tab || KINDS.EXPENSE.toString();
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
        <AddCategory />
      </div>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<LoadingList />}>
          <TabCategory value={tab} />
          <ListCategories kind={tab} />
        </Suspense>
      </div>
    </section>
  );
}
