import type { PropsWithChildren } from 'react';
import Header from '@/components/header/Header';

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="height-header">{children}</main>
    </>
  );
}
