import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleLayout({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button onClick={() => navigate('/')}>Back</button>
      </header>
      <main>{children}</main>
    </>
  );
}
