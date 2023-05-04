import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-ecommmerce' : 'ecommerce'}</title>
        <meta name="description" content="Ecommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header className='flex'>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
