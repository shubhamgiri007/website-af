import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroSectionImage from "../assets/hero-section.png";

const slides = [
  {
    eyebrow: "Oracle Demand Management Cloud & Demantra",
    title: "Demand Management Cloud and Demantra Analytical Forecast Tuning & Setup Experts",
    body: "Now you can have it all. Introducing Analytical Factor, a service designed to meet the needs of companies using Oracle Demand Management Cloud or Demantra as an analytical solution. Analytical Factor delivers valuable forecast tuning and insights that enhance revenue and financial performance.",
  },
  {
    eyebrow: "Profit Optimization",
    title: "Maximize your profit by optimizing your Demand Management Cloud or Demantra Analytics.",
    body: "Do you want to use your Demand Management Cloud or Demantra analytics to improve quality of forecasted demand for supply planning to its best? Which will further reduce stock-outs, and inventory turns, without extra time and software investments…?",
  },
  {
    eyebrow: "Expert Implementation",
    title: "Analytical Forecasting Optimization",
    body: "A team with extensive knowledge and experience of translating business requirements, constraints, trends and business drivers into a comprehensive analytical solution.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const slide = slides[current];

  return (
    <section className="gradient-hero pt-24 pb-8 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Slider content */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
            >
              <div className="text-accent-brand text-sm font-semibold tracking-wide uppercase mb-4">
                {slide.eyebrow}
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-primary leading-tight">
                {slide.title}
              </h1>

              <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">
                {slide.body}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#solutions"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-md flex items-center gap-2"
              >
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="bg-card text-navy border border-border px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Slide controls */}
            <div className="flex items-center gap-4 pt-2">
              {/* Dots */}
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2.5 bg-primary"
                        : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-muted-foreground ml-auto">
                {current + 1} / {slides.length}
              </span>
            </div>
          </div>

          <div className="relative lg:pl-6 pb-8">
            <div className="relative w-full max-w-6xl ml-auto perspective-1000">
              <img 
                src={heroSectionImage} 
                alt="Modern Data Analytics Dashboard" 
                className="w-[140%] h-auto rounded-2xl shadow-[0_20px_60px_-10px_hsl(217_91%_50%/0.2),0_30px_90px_-20px_hsl(217_91%_30%/0.3),0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-300 ease-out"
                style={{ transform: 'perspective(1000px) rotateY(-2deg) rotateX(1deg) scale(1.15)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-border pt-10">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "$500M+", label: "Client Savings" },
            { value: "98%", label: "Forecast Accuracy" },
            { value: "Global", label: "Implementation" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
