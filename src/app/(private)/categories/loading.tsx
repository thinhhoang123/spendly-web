import KINDS from '@/constants/kinds';
import TabCategory from './_components/tab-category';

export default function Loading() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
      </div>
      <TabCategory value={KINDS.EXPENSE.toString()} />
    </section>
  );
}

