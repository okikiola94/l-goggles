import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Loader from './components/Molecules/Loader/Loader';
import { Home } from './components/Pages/Home';
import { Works } from './components/Pages/Works';
import { Contact } from './components/Pages/About';
import Header from './components/Molecules/Header/Header';
import Lenis from '@studio-freight/lenis';
import { Footer } from './components/Pages/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const lenisRef = useRef<Lenis | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App px-[3%] lg:px-[10%]">
      {isLoading && <Loader />}
      {!isLoading && (
        <div >
          <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
          <header className={`main-content App-header lg:px-[15%] ${isMobileMenuOpen ? 'blur-bg' : ''} `}>
            <div className="animate-on-scroll lg:my-[5rem]" id="home">
              <Home />
            </div>
            <div className="animate-on-scroll " id="works">
              <Works />
            </div>
            <div className="animate-on-scroll lg:my-[5rem]" id="contact">
              <Contact />
            </div>
          </header>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default App;
