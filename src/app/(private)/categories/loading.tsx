import CategoryCardSkeleton from './_components/card-skeleton';

export default function Loading() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {Array.from({ length: 10 }, (_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
