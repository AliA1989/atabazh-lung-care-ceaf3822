import MediaFeature from "@/components/MediaFeature";
import { CompanyCTA } from "@/components/CompanyCTA";

const updates = [
  {
    date: "June 2026",
    category: "Research dissemination",
    title: "NACFC 2026 abstract accepted for presentation",
    summary:
      "Smart Lung Physio™-related research on airway-clearance variability and workflow inefficiencies has been accepted for presentation at NACFC 2026.",
  },
  {
    date: "June 2026",
    category: "Technology translation",
    title: "World Congress of Biomechanics TTPC poster competition invitation",
    summary:
      "Smart Lung Physio™ was invited for presentation in the Poster Competition section of the World Congress of Biomechanics Translational Technology Pitch Competition.",
  },
];
const News = () => (
  <div className="company-page">
    <header className="border-b border-slate-200 bg-[#f3f6f8] pb-14 pt-32 lg:pb-16 lg:pt-36">
      <div className="company-container">
        <p className="company-eyebrow">Company updates</p>
        <h1 className="mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
          News & milestones
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Media coverage and research updates from the Smart Lung Physio™
          development program.
        </p>
      </div>
    </header>
    <section className="company-section" aria-label="Featured media coverage">
      <div className="company-container">
        <MediaFeature expanded />
      </div>
    </section>
    <section className="company-section border-t border-slate-200 bg-slate-50">
      <div className="company-container">
        <h2 className="company-heading">Research & technology updates</h2>
        <div className="mt-8 divide-y divide-slate-200">
          {updates.map((item) => (
            <article
              key={item.title}
              className="grid gap-4 py-8 md:grid-cols-[0.4fr_1fr]"
            >
              <div>
                <p className="text-sm font-semibold text-[#164d69]">
                  {item.date}
                </p>
                <p className="mt-2 text-xs text-slate-500">{item.category}</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
          Presentation acceptance and invitations are dissemination milestones.
          They do not establish clinical efficacy or regulatory approval of the
          device.
        </p>
      </div>
    </section>
    <CompanyCTA />
  </div>
);
export default News;
