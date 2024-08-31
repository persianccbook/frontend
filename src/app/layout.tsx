import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'PersianCCBook',
  description: 'CC Books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
