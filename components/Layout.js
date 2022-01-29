import { Nav, Footer } from './components';
import { children } from 'react';
export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
