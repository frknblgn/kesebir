import Providers from '@/components/Providers';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';

export default function Page() {
  return (
    <Providers>
      <Nav />
      <Hero />
      <Story />
      <Footer />
      <Cart />
    </Providers>
  );
}
