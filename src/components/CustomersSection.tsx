import logoBall from "@/assets/logo-ball.png";
import logoHelenOfTroy from "@/assets/logo-helen-of-troy.png";
import logoMeadJohnson from "@/assets/logo-mead-johnson.png";
import logoKaiser from "@/assets/logo-kaiser.jpg";
import logoEA from "@/assets/logo-ea.png";

const companies: { name: string; domain?: string; logo?: string }[] = [
  { name: "Walgreens", domain: "walgreens.com" },
  { name: "Sony Interactive", domain: "sie.com" },
  { name: "Ricoh", domain: "ricoh.com" },
  { name: "McGraw-Hill", domain: "mheducation.com" },
  { name: "Kaiser Permanente", logo: logoKaiser },
  { name: "EA Sports", logo: logoEA },
  { name: "Overhead Door", domain: "overheaddoor.com" },
  { name: "Helen of Troy", logo: logoHelenOfTroy },
  { name: "Cisco Meraki", domain: "cisco.com" },
  { name: "Ball Corp", logo: logoBall },
  { name: "Ingersoll Rand", domain: "ingersollrand.com" },
  { name: "Rogers Corp", domain: "rogerscorp.com" },
  { name: "Ajinomoto", domain: "ajinomoto.com" },
  { name: "Allegion", domain: "allegion.com" },
  { name: "Canon", domain: "canon.com" },
  { name: "NetApp", domain: "netapp.com" },
  { name: "Juniper Networks", domain: "juniper.net" },
  { name: "Gerber", domain: "gerber.com" },
  { name: "Ciena", domain: "ciena.com" },
  { name: "Uponor", domain: "uponor.com" },
  { name: "Meritor", domain: "meritor.com" },
  { name: "Volvo Penta", domain: "volvopenta.com" },
  { name: "Donaldson", domain: "donaldson.com" },
  { name: "Clearwater Paper", domain: "clearwaterpaper.com" },
  { name: "Mead Johnson", logo: logoMeadJohnson },
  { name: "ClosetMaid", domain: "closetmaid.com" },
  { name: "Bob Evans", domain: "bobevans.com" },
  { name: "Wilton", domain: "wilton.com" },
  { name: "Beachbody", domain: "beachbody.com" },
  { name: "Vivo Energy", domain: "vivoenergy.com" },
  { name: "Chicken of the Sea", domain: "chickenofthesea.com" },
];

const getFaviconUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const LogoCard = ({ name, domain, logo }: { name: string; domain?: string; logo?: string }) => (
  <div className="flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3.5 mx-3 shrink-0 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-9 w-9 object-contain"
        />
      ) : domain ? (
        <>
          <img
            src={getFaviconUrl(domain)}
            alt={`${name} favicon`}
            className="h-8 w-8 object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <span
            className="hidden h-8 w-8 items-center justify-center text-sm font-bold text-primary"
            aria-hidden="true"
          >
            {name.charAt(0)}
          </span>
        </>
      ) : (
        <span className="h-8 w-8 flex items-center justify-center text-sm font-bold text-primary">
          {name.charAt(0)}
        </span>
      )}
    </div>
    <span className="text-sm font-semibold text-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300">
      {name}
    </span>
  </div>
);

const CustomersSection = () => {
  const row1 = companies.slice(0, Math.ceil(companies.length / 2));
  const row2 = companies.slice(Math.ceil(companies.length / 2));

  return (
    <section className="py-16 bg-card overflow-hidden border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest text-accent-brand uppercase mb-2">
          Trusted By
        </p>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-navy">
          Supply Chain Leaders Across Industries
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          From Fortune 500s to mid-market innovators — Analytical Factor has delivered measurable impact across sectors.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left w-max">
          {[...row1, ...row1].map((c, i) => (
            <LogoCard key={`r1-${i}`} name={c.name} domain={c.domain} logo={c.logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-right w-max">
          {[...row2, ...row2].map((c, i) => (
            <LogoCard key={`r2-${i}`} name={c.name} domain={c.domain} logo={c.logo} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
    </section>
  );
};

export default CustomersSection;
