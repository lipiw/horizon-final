"use client";

import ProgressBar from 'nextjs-progressbar';
import { AppProps as NextAppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: NextAppProps) {
  return (
    <div>
      <DefaultSeo
        defaultTitle="Event Horizon"
        titleTemplate="%s • Event Horizon"
        description="🛍 Alimentando sua Imaginação, Transformando Festas em Realidade: Bem-vindo ao Event Horizon, onde suas ideias de eventos se tornam festas inesquecíveis."
      />
        <ProgressBar color="purple" />
        <Component {...pageProps} />
    </div>
  );
}
