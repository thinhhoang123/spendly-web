export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex justify-center  w-full">
      <div className="flex flex-col gap-8 pt-24">
        <div className="flex gap-2 justify-center">
          <h1 className="font-bold text-xl">Spendly.</h1>
        </div>
        {children}
      </div>
    </section>
  );
}
