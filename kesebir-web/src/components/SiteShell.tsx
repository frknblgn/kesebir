import Providers from './Providers';
import Nav from './Nav';
import Footer from './Footer';
import Cart from './Cart';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Nav />
      {children}
      <Footer />
      <Cart />
    </Providers>
  );
}
