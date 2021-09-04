import { Nav, Post, Footer } from './components';
import { NextLayout } from 'next/layout';
import { Children } from 'react';
export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
