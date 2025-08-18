import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function CategoryPage() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Categories
        </h4>

        <Button size="icon" className="rounded-full">
          <Plus />
        </Button>
      </div>
    </section>
  );
}
