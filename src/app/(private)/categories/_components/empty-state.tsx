export default function EmptyCategories() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-96">
      <p className="font-medium text-xl ">No Categories</p>
      <p className="text-foreground-600">
        Get started by creating a new category.
      </p>
    </div>
  );
}
