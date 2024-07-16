import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import About from '@/pages/about';
import HomePage from '@/pages/homePage';

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <main>
        <HomePage />
        <About />
      </main>
      <Footer />
    </div>
  );
}
