import AddCategory from './add-category';
import { getCategories } from '@/actions/category-actions';

export default async function Category() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
        <AddCategory />
      </div>
    </section>
  );
}
