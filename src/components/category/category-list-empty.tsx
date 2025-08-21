export default function CategoryListEmpty() {
  return (
    <div className="w-full h-[500px] flex flex-col justify-center items-center gap-2 text-center">
      <h2 className="text-foreground text-lg font-semibold md:text-xl">
        Sorry, no results found
      </h2>
      <p className="text-muted-foreground text-sm leading-5">
        Try a different keyword
      </p>
    </div>
  );
}
