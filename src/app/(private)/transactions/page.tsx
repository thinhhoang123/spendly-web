import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Transactions
        </h3>
        <Button size="icon" className="rounded-full">
          <Plus />
        </Button>
      </div>
    </section>
  );
}
