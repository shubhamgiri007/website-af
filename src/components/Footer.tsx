import { BarChart2, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-light border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-navy font-bold text-lg mb-3">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <BarChart2 className="w-4 h-4 text-primary-foreground" />
              </div>
              Analytical Factor
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering supply chain leaders with precision analytics and forecasting excellence.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-sm font-bold text-navy mb-4">Solutions</div>
            <ul className="space-y-2.5">
              {["Demand Planning EER", "Forecast Diagnostics", "Health Reviews", "Consulting Services"].map((link) => (
                <li key={link}>
                  <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-bold text-navy mb-4">Company</div>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#who-we-are" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Resources & Blog", href: "#resources" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">
            © 2024 Analytical Factor. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">Terms of Service</a>
            <div className="flex items-center gap-2 ml-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
