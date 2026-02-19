import whyMeeting from "@/assets/why-meeting.jpg";
import { Database, Cpu, Focus, BarChart } from "lucide-react";

const reasons = [
  {
    icon: Database,
    title: "Data-Driven Decisions",
    description: "Move from gut-feel to statistical certainty.",
  },
  {
    icon: Cpu,
    title: "Deep Expertise",
    description: "Built by veteran demand planners & data scientists.",
  },
  {
    icon: Focus,
    title: "Practical Focus",
    description: "Strategies that work in the real world, not just theory.",
  },
  {
    icon: BarChart,
    title: "Measurable ROI",
    description: "Clear impact on bottom-line profitability.",
  },
];

const WhySection = () => {
  return (
    <section id="who-we-are" className="bg-card py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-4">
              Why Analytical Factor?
            </h2>
            <p className="text-muted-foreground text-base mb-10 leading-relaxed max-w-md">
              We don't just provide software; we provide the analytical framework and expertise to transform your supply chain decision-making.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title}>
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-navy text-sm mb-1">{r.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Image */}
          <div>
            <img
              src={whyMeeting}
              alt="Analytics consulting team"
              className="rounded-2xl shadow-card-hover w-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
