import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-card py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
              Let's Improve Forecast Accuracy Together
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Ready to see what your data is telling you? Contact us for a consultation or a demo of our diagnostic tools.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-accent-brand" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Email Us</div>
                  <a href="mailto:info@analyticalfactor.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@analyticalfactor.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent-brand" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Headquarters</div>
                  <div className="text-sm text-muted-foreground">New York, NY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">First Name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-foreground block mb-1.5">Work Email</label>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-foreground block mb-1.5">Topic</label>
              <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Demand Planning EER</option>
                <option>Trade Promotion Planning (TPP)</option>
                <option>Forecast Health Review</option>
                <option>Partnership</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your forecasting challenges..."
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background resize-none"
              />
            </div>

            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
