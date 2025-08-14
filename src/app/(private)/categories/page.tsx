import { getCategories } from '@/actions/category-actions';
import ListCategories from './_components/list-categories';
import AddCategory from './_components/add-category';
export default async function CategoryPage() {
  const categories = await getCategories();
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
        <AddCategory />
      </div>
      <ListCategories categories={categories} />
    </section>
  );
}
