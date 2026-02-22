import { Users, Award } from "lucide-react";

const WhitepaperCallout = () => {
  return (
    <section id="who-we-are" className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="text-primary-foreground/70 text-sm font-semibold mb-3">Who We Are</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground leading-tight mb-4">
              Leading Supply Chain Analytics Experts
            </h2>
            <div className="text-primary-foreground/80 text-base leading-normal space-y-4">
              <p>
                Analytical Factor is a leading provider of Supply Chain Analytical services, specializing in the maintenance and implementation of the analytical aspects of Oracle Demand Management Cloud and Demantra application. Analytical Factor provides a variety of services to help clients achieve their goals in the above areas. We deliver cost-effective, easy to deploy and easy to use solutions that help customers achieve rapid ROI thru analytics and forecasting optimization. We offer a rare combination of in-depth industry knowledge of best practices coupled with superior application and technical expertise. Our singular focus on achieving real business results is evident in our methodology, our solution design, and our follow through practices. We want to be your partner in these efforts and will measure success by the same standard that you do: your business results.
              </p>
              <p>
                Analytical Factor was founded by former Oracle Demantra Product Development Senior Managers with the intent of leveraging their deep product and industry expertise in delivering exceptionally successful product implementations. We continue to stay abreast of the latest changes in the applications, technology, and best practices through our formal partnership with Oracle and through participating in Oracle Demand Management Cloud and Demantra Development activities. The leadership and engineering team at Analytical Factor bring a combined 50+ years of enterprise-level Supply Chain analytics and forecasting experience to our customers. Our domain expertise, combined with our singular focus on maximizing profit through optimal analytics and forecasting solutions, make us an ideal partner to meet your business needs.
              </p>
            </div>
          </div>

          {/* Right - Company card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-card rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] p-8 w-64 text-center rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-base font-bold text-navy">50+ Years</div>
              <div className="text-xs text-muted-foreground mt-1">Combined Experience</div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground">Oracle Certified Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperCallout;
