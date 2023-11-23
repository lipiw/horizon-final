import type { ReactNode } from 'react'
import './globals.css'

import { HeaderSection } from '../components/HeaderSection';

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  return (
    <>
      <HeaderSection />
      <main className="mx-auto max-w-7xl p-6 lg:px-8">{props.children}</main>
    </>
  );
}
