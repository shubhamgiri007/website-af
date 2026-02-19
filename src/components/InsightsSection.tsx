import { Calendar, FileText } from "lucide-react";

const posts = [
  {
    tag: "Whitepaper",
    title: "Overcoming Bias in Sales Forecasts",
    excerpt:
      "Strategies to align sales targets with operational reality using statistical baseline corrections.",
    date: "Oct 12, 2023",
    hasPdf: true,
  },
  {
    tag: "Article",
    title: "5 Key Metrics for Supply Chain Health",
    excerpt:
      "Beyond MAPE: Why you need to be tracking bias, fill rate stability, and inventory turns together.",
    date: "Sep 28, 2023",
    readTime: "5 min read",
    hasPdf: false,
  },
  {
    tag: "Case Study",
    title: "The Impact of AI on Demand Planning Roles",
    excerpt:
      "How the planner's role is shifting from data entry to exception management and strategic oversight.",
    date: "Sep 15, 2023",
    hasPdf: true,
  },
];

const InsightsSection = () => {
  return (
    <>
      <section id="resources" className="bg-card py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-xl font-bold text-navy mb-1">Latest Insights</h2>
              <p className="text-sm text-muted-foreground">Trends, strategies, and technical deep-dives.</p>
            </div>
            <a
              href="#"
              className="self-start sm:self-auto border border-border bg-card text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors"
            >
              Browse All Resources
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.title} className="group">
                <span className="inline-block bg-secondary text-navy text-xs font-semibold px-3 py-1 rounded-full border border-border mb-4">
                  {post.tag}
                </span>
                <h3 className="text-base font-bold text-navy mb-3 leading-snug group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  {post.hasPdf && (
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <FileText className="w-3.5 h-3.5" />
                      PDF Available
                    </span>
                  )}
                  {post.readTime && <span>{post.readTime}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-section-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-sm font-bold text-navy mb-4">Dedicated to Forecasting Excellence</div>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Analytical Factor was founded with a single mission: to bring enterprise-grade analytics to supply chain teams. We bridge the gap between complex data science and practical operational needs.
          </p>
          <a
            href="#who-we-are"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Who We Are
          </a>
        </div>
      </section>
    </>
  );
};

export default InsightsSection;
