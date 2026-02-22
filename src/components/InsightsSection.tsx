import servicesImg from "../assets/services.jpeg";

const InsightsSection = () => {
  return (
    <section id="services" className="bg-card py-12 lg:py-14 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="text-sm font-bold text-navy mb-4">Services</div>
            <div className="text-muted-foreground text-base leading-relaxed space-y-4">
              <p>
                Analytical Factor services are compatible with Demand Management Cloud and the majority of Demantra versions and developed to integrate with it seamlessly. The result is pre-configured, ready-to-use software that can be quickly deployed to drive revenue and efficiency across your enterprise.
              </p>
              <p>
                Analytical Factor has a variety of features that help make forecasting result more accurate, Planners more effective and executives better armed for timely and informed decision-making. Automated forecast analysis and tuning will traverse the possible configurations of the engine and converge on an improved solution. Analytical Factor Services includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The solution will analyze: Data quality, intermittency and trending, Causal configuration and significance, Forecast tree settings and load balance and Existing accuracy measured at where it matters the most.</li>
                <li>For the historical data used to drive, the analytical engine reports will include: Demand Variability, Data Intermittency and Demand Driver Validity.</li>
                <li>Forecast analysis will report on: WMAPE, BIAS, Forecasting Level and Significance of Demand Drivers.</li>
              </ul>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={servicesImg} 
              alt="Analytics Services" 
              className="w-full max-w-md rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
