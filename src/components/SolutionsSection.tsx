import { TrendingUp, Activity, Shield, ArrowRight, Check } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Demand Planning EER",
    description:
      "End-to-End Resolution for demand volatility. Streamline your planning process with automated insights.",
    bullets: ["Reduce stockouts by 30%", "Optimize safety stock levels"],
  },
  {
    icon: Activity,
    title: "Advanced Diagnostics",
    description:
      "Deep-dive analytics to identify root causes of forecast error and supply chain inefficiency.",
    bullets: ["Identify bias patterns", "Statistical error decomposition"],
  },
  {
    icon: Shield,
    title: "Forecast Health Review",
    description:
      "A rapid, comprehensive audit of your current forecasting processes and tool capabilities.",
    bullets: ["Process maturity scoring", "Actionable roadmap"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="bg-section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">Intelligent Solutions</h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Comprehensive tools to diagnose, plan, and optimize your supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group hover:-translate-y-1"
              >
                <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent-brand" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{sol.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sol.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-accent-brand flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-brand hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
