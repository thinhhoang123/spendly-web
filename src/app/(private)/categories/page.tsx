import { Button } from '@heroui/button';
import { Plus } from 'lucide-react';
import AddCategory from './add-category';

export default function Category() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Categories</p>
        </div>
        <AddCategory />
      </div>
    </section>
  );
}
