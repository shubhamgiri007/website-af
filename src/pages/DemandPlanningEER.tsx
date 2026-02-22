import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import demandSensingBanner from "@/assets/DemandSensingBanner.jpg";
import challengesImage from "@/assets/DemandSensing_ChallengesAndGaps.png";
import dashboardImage from "@/assets/DemandSensing_Dashboard.png";
import viewImage from "@/assets/DemandSensing_View.png";

const DemandPlanningEER = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${demandSensingBanner})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-5xl lg:text-6xl font-extrabold text-white z-10">
          Demand Sensing
        </h1>
      </section>

      {/* Demand Planning - Challenges and Gaps */}
      <section className="bg-card py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
            DEMAND PLANNING - CHALLENGES AND GAPS
          </h2>
          <div className="border-b-4 border-primary w-24 mb-8"></div>
          <ul className="space-y-4 text-muted-foreground text-base lg:text-lg">
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Planners are facing increased pressure from customers for shorter lead-time, better availability, and a more varied mix of products</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Achieving high customer service comes at the cost of high inventories</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Better short-term forecasting is necessary to react to rapidly changing market conditions proactively</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Demand Sensing vs. Statistical Forecasting */}
      <section className="bg-gradient-to-br from-[#2c4f5e] to-[#3d6577] py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            DEMAND SENSING VS. STATISTICAL FORECASTING
          </h2>
          <div className="border-b-4 border-white w-24 mb-10"></div>
          
          <ul className="space-y-4 text-base lg:text-lg mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Demand Sensing leverages multiple predictive demand signals, such as: <strong>open-orders, shipments, POS data, promotions, customer inventory, and any store related data</strong></span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Apply advanced learning pattern-recognition algorithms to identify recent trends and predictors of short-term demand</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Sensed demand can automatically be updated every day to take advantage of real-time updates to the predictive inputs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Demand sensing is <strong>augmenting</strong> statistical forecasting, <strong>not replacing</strong> it</span>
            </li>
          </ul>

          <img 
            src={challengesImage} 
            alt="Demand Sensing vs Statistical Forecasting Chart" 
            className="max-w-4xl mx-auto h-auto rounded-xl shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
          />
        </div>
      </section>

      {/* Demand Sensing Delivers Significant Improvements */}
      <section className="bg-card py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
            DEMAND SENSING DELIVERS SIGNIFICANT IMPROVEMENTS WITHIN CPG INDUSTRY
          </h2>
          <div className="border-b-4 border-primary w-24 mb-10"></div>
          
          <ul className="space-y-4 text-muted-foreground text-base lg:text-lg mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Improve short-term forecast accuracy by 30-40%</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Reduce inventory by 10-15%, freeing up cash and improving return on capital</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Improve customer service by ensuring that each product is on the shelf when and where it is needed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-navy rounded-full flex-shrink-0"></span>
              <span>Sense and respond to real-time market opportunities, improving promotional activity results</span>
            </li>
          </ul>

          <img 
            src={dashboardImage} 
            alt="Demand Sensing Dashboard" 
            className="max-w-4xl mx-auto h-auto rounded-xl shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
          />
        </div>
      </section>

      {/* Demand Sensing - Benefits */}
      <section className="bg-gradient-to-br from-[#2c4f5e] to-[#3d6577] py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            DEMAND SENSING - BENEFITS
          </h2>
          <div className="border-b-4 border-white w-24 mb-10"></div>
          
          <ul className="space-y-4 text-base lg:text-lg mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Demand Sensing allows companies to get closer to the consumer by creating a better understanding of consumer behavior and its implications for the supply chain</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Over the next few years, any company that wishes to maintain or expand its current market position will need to embrace a connected, <strong>real-time supply chain enabled through demand sensing</strong></span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Short-term forecast decisions are critical for being able to produce and distribute products with a <strong>high customer service level</strong>, without building stockout off the roof or risking obsolescence</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Demand Sensing provides higher short-term forecast accuracy</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
              <span>Demand Sensing <strong>frees up time for the planners</strong> not having to supervise the forecast for products where Demand Sensing performs well</span>
            </li>
          </ul>

          <img 
            src={viewImage} 
            alt="Demand Sensing View" 
            className="max-w-4xl mx-auto h-auto rounded-xl shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemandPlanningEER;
