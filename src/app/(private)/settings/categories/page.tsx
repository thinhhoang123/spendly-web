import { getCategories } from '@/actions/category-actions';
import CategoryFrom from '@/components/category/category-form';
import CategoryList from '@/components/category/category-list';
import SearchInput from '@/components/search-input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export default async function CategoryPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const categories = await getCategories(query);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Categories
        </h4>
        <CategoryFrom />
      </div>
      <Separator className="my-2" />
      <ScrollArea className="md:h-[700px]">
        <div className="-mx-1 px-1.5 pt-4 flex flex-col gap-4">
          <SearchInput />
          <CategoryList categories={categories ?? []} />
        </div>
      </ScrollArea>
    </section>
  );
}
