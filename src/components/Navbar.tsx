import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    if (solutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [solutionsOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-sm border-b border-border" : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Analytical Factor" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <a href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              ref={solutionsRef}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setSolutionsOpen((o) => !o)}
              >
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-card-hover border border-border py-2 z-50">
                  <a
                    href="/demand-planning-eer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Demand Planning EER
                  </a>
                  {[
                    "Trade Promotion Planning (TPP)",
                    "Forecast Health Review",
                  ].map((item) => (
                    <a
                      key={item}
                      href="/#solutions"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {["Resources", "Services", "Who We Are", "Webinars", "Contact"].map((link) => (
              <a
                key={link}
                href={`/#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="/#contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              Talk to Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-2">
          {["Home", "Resources", "Services", "Who We Are", "Webinars", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Home" ? "/" : `/#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="py-2 text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="text-sm font-medium text-muted-foreground pt-1 pb-0.5">Solutions</div>
          <a
            href="/demand-planning-eer"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 pl-3 text-sm text-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Demand Planning EER
          </a>
          {["Trade Promotion Planning (TPP)", "Forecast Health Review"].map((s) => (
            <a
              key={s}
              href="/#solutions"
              className="py-1.5 pl-3 text-sm text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {s}
            </a>
          ))}
          <a
            href="/#contact"
            className="mt-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Talk to Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
