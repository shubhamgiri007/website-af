import casePharma from "@/assets/case-pharma.jpg";
import caseWarehouse from "@/assets/case-warehouse.jpg";
import caseAutomotive from "@/assets/case-automotive.jpg";

const cases = [
  {
    image: casePharma,
    industry: "Pharmaceuticals",
    title: "Optimizing Global Inventory for Pharma Giant",
    outcome:
      "Reduced inventory holding costs by 18% while maintaining 99.5% service levels across 40 markets.",
  },
  {
    image: caseWarehouse,
    industry: "Retail Logistics",
    title: "Demand Sensing for Seasonal Peaks",
    outcome:
      "Implemented advanced ML models to predict holiday demand spikes with 94% accuracy.",
  },
  {
    image: caseAutomotive,
    industry: "Automotive",
    title: "Just-In-Time Component Forecasting",
    outcome:
      "Streamlined component ordering process, reducing lead times by 2 weeks.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-sm font-bold text-navy mb-1">Proven Results</div>
            <p className="text-muted-foreground text-sm">Real world impact across industries.</p>
          </div>
          <a
            href="#contact"
            className="self-start sm:self-auto border border-border bg-card text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors"
          >
            View All Case Studies
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-accent-brand mb-2">{c.industry}</div>
                <h3 className="text-base font-bold text-navy mb-3 leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.outcome}</p>
                <a
                  href="#contact"
                  className="w-full border border-border text-navy text-sm font-medium py-2.5 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
