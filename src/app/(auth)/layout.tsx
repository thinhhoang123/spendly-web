export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <div className="flex flex justify-center items-center flex-col gap-8 pt-24">
        <div className="flex gap-2 justify-center">
          <h1 className="font-bold text-xl">Spendly.</h1>
        </div>
        {children}
      </div>
    </section>
  );
}
