import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import About from '@/pages/about';
import HomePage from '@/pages/homePage';
import Projects from '@/pages/projects';
import Skills from '@/pages/skills';

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <main>
        <HomePage />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
