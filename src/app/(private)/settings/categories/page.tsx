import { CategoryFrom } from '@/components/category/category-form';
import CategoryItem from '@/components/category/category-item';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export default function CategoryPage() {
  return (
    <section>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Categories
      </h4>
      <Separator className="my-2" />
      <ScrollArea className="md:h-[700px]">
        <div className="-mx-1 px-1.5 pt-4 lg:max-w-xl">
          <div className="flex justify-between items-center">
            <p className="font-medium">Expenses</p>
            <CategoryFrom />
          </div>
          <CategoryItem />

          <p className="font-medium">Income</p>
          <CategoryItem />
        </div>
      </ScrollArea>
    </section>
  );
}
