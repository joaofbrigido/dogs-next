export default function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <h1>Menu</h1>
      {children}
    </div>
  );
}
