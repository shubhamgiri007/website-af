import { Download, FileText } from "lucide-react";

const WhitepaperCallout = () => {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="text-primary-foreground/70 text-sm font-semibold mb-3">Featured Insight</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground leading-tight mb-4">
              The Future of Demand Planning 2025
            </h2>
            <p className="text-primary-foreground/80 text-base leading-relaxed mb-8 max-w-md">
              How AI and Machine Learning are reshaping the supply chain landscape. Download our comprehensive guide to staying ahead of the curve.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-card text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Whitepaper (PDF)
            </a>
          </div>

          {/* Right - Document card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-card rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] p-8 w-64 text-center rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-base font-bold text-navy">2025 Industry Report</div>
              <div className="text-xs text-muted-foreground mt-1">Analytical Factor Research</div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground">PDF · 42 pages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperCallout;
