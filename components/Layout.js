import { Nav, Footer } from './components';
import { children } from 'react';
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
