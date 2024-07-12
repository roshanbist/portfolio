import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import About from '@/pages/about';
import HomeBanner from '@/pages/home';

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className='pt-[8.1rem] md:pt-[9.1rem]'> */}
      <main>
        <HomeBanner />
        <About />
      </main>
      <Footer />
    </>
  );
}
