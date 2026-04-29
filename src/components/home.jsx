import { useState, useEffect } from 'react';
import '../assets/styles/home.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import About from './about';

export default function Home() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop',
      title: 'Drilling of Boreholes',
      text: 'IDF helps communities access clean water through borehole drilling projects.'
    },
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
      title: 'Ramadhan Iftaar Program',
      text: 'Supporting vulnerable Muslim families with iftaar food packages during the holy month of Ramadhan.'
    },
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
      title: 'Qurbaan Distribution',
      text: 'Partnering with local and international organizations to reach the needy in the remotest parts of Malawi.'
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="hero-slider-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">

            <div className="col-lg-6">
              <div className="hero-text-content">
                <h1>{slides[current].title}</h1>
                <p>{slides[current].text}</p>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <button className="slider-arrow left-arrow" onClick={prevSlide}>
                <ChevronLeft size={28} />
              </button>

              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="hero-main-image"
              />

              <button className="slider-arrow right-arrow" onClick={nextSlide}>
                <ChevronRight size={28} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="container py-5">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center">Reach out to support our mission.</p>
      </section>
    </>
  );
}