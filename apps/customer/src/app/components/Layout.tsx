import React from 'react';
import Head from 'next/head';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My E-commerce</title>
        <meta name="description" content="Best e-commerce site" />
      </Head>
      <header>
        <nav>
          <h1>My E-commerce</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My E-commerce</p>
      </footer>
    </div>
  );
};

export default Layout;
