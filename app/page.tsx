import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import About from '@/pages/about';
import HomePage from '@/pages/homePage';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
        <About />
      </main>
      <Footer />
    </>
  );
}
