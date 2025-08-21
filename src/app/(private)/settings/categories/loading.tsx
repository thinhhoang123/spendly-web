import { CategoryListSkeleton } from '@/components/category/category-list';
import SearchInput from '@/components/search-input';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Separator } from '@radix-ui/react-separator';

export default function Loading() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Categories
        </h4>
      </div>
      <Separator className="my-2" />
      <ScrollArea className="md:h-[700px]">
        <div className="-mx-1 px-1.5 pt-4 flex flex-col gap-4">
          <SearchInput />
          <CategoryListSkeleton />
        </div>
      </ScrollArea>
    </section>
  );
}
