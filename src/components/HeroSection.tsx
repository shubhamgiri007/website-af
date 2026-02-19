import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

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

const DashboardMockup = () => (
  <div className="relative w-full max-w-xl ml-auto">
    <div className="bg-card rounded-2xl shadow-[0_20px_60px_-10px_hsl(217_91%_50%/0.2)] border border-border overflow-hidden">
      <div className="bg-navy px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-navy-mid rounded-md px-3 py-1 text-xs text-muted-foreground">
          Modern Data Analytics
        </div>
      </div>

      <div className="p-4 flex gap-3">
        <div className="w-28 flex-shrink-0 space-y-1">
          <div className="bg-primary/10 rounded-md px-2 py-1.5 text-xs font-medium text-primary">Predictive</div>
          {["Forecast", "Inventory", "Sales", "Demand", "Anomaly"].map((item) => (
            <div key={item} className="px-2 py-1.5 text-xs text-muted-foreground">
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-3">
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="text-xs font-semibold text-foreground mb-2">Bias Prediction</div>
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-primary/50" : "bg-primary/30"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Forecast Acc.", value: "94.2%", up: true },
              { label: "Bias Score", value: "−1.3%", up: true },
              { label: "MAPE", value: "5.8%", up: false },
              { label: "Service Lvl", value: "98.5%", up: true },
            ].map((m) => (
              <div key={m.label} className="bg-secondary/40 rounded-lg p-2">
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <div className={`text-sm font-bold ${m.up ? "text-primary" : "text-accent-brand"}`}>{m.value}</div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="text-xs font-semibold text-foreground mb-2">Demand Trend</div>
            <svg viewBox="0 0 200 50" className="w-full h-10">
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217, 91%, 50%)" />
                  <stop offset="100%" stopColor="hsl(217, 91%, 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points="0,40 20,32 40,35 60,20 80,25 100,15 120,18 140,10 160,14 180,8 200,5"
                fill="none"
                stroke="hsl(217, 91%, 50%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card-hover border border-border px-4 py-3 flex items-center gap-3">
      <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div>
        <div className="text-xs text-muted-foreground">Accuracy Improved</div>
        <div className="text-sm font-bold text-navy">+18.4%</div>
      </div>
    </div>
  </div>
);

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
            <DashboardMockup />
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
