export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      {children}
    </section>
  );
}
