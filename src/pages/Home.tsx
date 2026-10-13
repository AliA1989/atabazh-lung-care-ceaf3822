import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Gauge,
  ClipboardList,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { eyeopenerFeature } from "@/data/mediaCoverage";
import { publicAsset } from "@/lib/publicAsset";
import { developmentFacts, developmentPriorities } from "@/data/development";
import { CompanyCTA } from "@/components/CompanyCTA";
import marsLogo from "@/assets/support/mars.svg";
import ibzLogo from "@/assets/support/ibz.svg";
import innovationFactoryLogo from "@/assets/support/innovation-factory.svg";
import lab2MarketLogo from "@/assets/support/lab2market-validate.webp";
import mitacsLogo from "@/assets/support/mitacs.svg";
import baycrestLogo from "@/assets/support/baycrest.png";

const Home = () => (
  <div className="company-page">
    <section className="bg-[#0b1b2f] pt-[4.5rem] text-white">
      <div className="company-container grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-12">
        <div>
          <p className="company-eyebrow !text-sky-300">
            Atabazh Medical · Toronto, Canada
          </p>
          <h1 className="mt-6 max-w-xl text-[2.6rem] leading-[1.07] tracking-[-0.045em] sm:text-5xl xl:text-[3.65rem]">
            Engineering more measurable airway clearance.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            <strong className="font-semibold text-white">
              Smart Lung Physio™
            </strong>{" "}
            is our handheld airway-clearance technology. Its development brings
            localized mechanical chest percussion together with contact sensing,
            orientation feedback, and a connected caregiver interface.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/device"
              className="company-button bg-sky-300 text-slate-950 hover:bg-sky-200"
            >
              Explore the technology{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </NavLink>
            <NavLink
              to="/clinical-evidence"
              className="company-button border border-white/25 text-white hover:bg-white/10"
            >
              Review our progress
            </NavLink>
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-400">
            Physical prototype · Integrated sensing · Engineering-led development
          </p>
        </div>
        <figure className="mx-auto w-full max-w-[25rem] overflow-hidden rounded-xl border border-white/15 bg-white/5">
          <img
            src={publicAsset("media/founder-prototype-focused.webp")}
            alt="Atabazh founder Ali Abedinpour holding the Smart Lung Physio prototype"
            width={1122}
            height={1402}
            loading="eager"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-300">
              Ali Abedinpour · Founder
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Smart Lung Physio™ · Physical prototype
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Adapted from photo: Daniel Opasinis / The Eyeopener.
            </p>
          </figcaption>
        </figure>
      </div>
      <a
        href={eyeopenerFeature.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-white/15 bg-white/5 transition-colors hover:bg-white/10"
      >
        <div className="company-container flex items-center gap-4 py-4">
          <img
            src={publicAsset("media/eyeopener-ali-smart-lung.jpg")}
            alt=""
            width={64}
            height={44}
            className="h-11 w-16 shrink-0 rounded object-cover"
          />
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-sky-300">
              In the news · The Eyeopener
            </span>
            <span className="mt-1 block text-sm text-white sm:mt-0">
              The story behind Smart Lung Physio™
            </span>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-sky-300"
            aria-hidden="true"
          />
          <span className="sr-only">Read the article (opens in a new tab)</span>
        </div>
      </a>
    </section>

    <section
      aria-label="Development at a glance"
      className="border-b border-slate-200 bg-white"
    >
      <div className="company-container grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {developmentFacts.map((fact) => (
          <div key={fact.label} className="py-7 sm:px-7 sm:first:pl-0">
            <p className="text-3xl font-semibold tracking-tight text-[#164d69]">
              {fact.value}
            </p>
            <h2 className="mt-1 text-sm font-semibold tracking-normal">
              {fact.label}
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              {fact.context}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="company-section bg-white">
      <div className="company-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="relative h-[340px] sm:h-[400px] overflow-hidden bg-white">
            <img
              src={publicAsset("media/smart-lung-physio-device-hero.webp")}
              alt="Illustrative design of the Smart Lung Physio handheld device"
              width={896}
              height={1173}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-0 inset-x-0 bg-[#0b1b2f] px-5 py-3 text-xs font-semibold text-white">
              Smart Lung Physio™ · Design concept
            </div>
          </div>
          <figcaption className="p-5 text-xs leading-5 text-slate-500">
            Design concept based on our physical prototype. Interface shown with sample values.
          </figcaption>
        </figure>
        <div>
          <p className="company-eyebrow">The technology</p>
          <h2 className="company-heading mt-4">
            Physical delivery.
            <br />
            Measurable feedback.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We are developing a connected approach to localized chest
            percussion: a physical device, integrated sensing, and a guided
            session interface.
          </p>
          <div className="mt-7 divide-y divide-slate-200">
            {[
              {
                icon: Activity,
                title: "Localized mechanical percussion",
                text: "A handheld form factor for delivery to a selected chest region by a trained caregiver.",
              },
              {
                icon: Gauge,
                title: "Force, motion & orientation sensing",
                text: "Prototype sensing to characterize how a session is delivered and inform caregiver feedback.",
              },
              {
                icon: ClipboardList,
                title: "Guidance & session records",
                text: "A companion interface for sensor feedback, with persistent session records on the development roadmap.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 py-5">
                <Icon
                  className="mt-1 h-5 w-5 shrink-0 text-[#164d69]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <NavLink to="/device" className="company-text-link mt-4">
            Explore the device and intended workflow{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </section>

    <section className="border-t border-slate-200 bg-white pb-14 pt-10">
      <div className="company-container">
        <h2 className="text-xl font-semibold">
          How Smart Lung Physio is being designed to work
        </h2>
        <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Position", "Select the intended chest region."],
            ["Deliver", "Apply localized mechanical percussion."],
            ["Measure", "Capture force, motion, and session parameters."],
            ["Guide", "Provide feedback to the trained caregiver."],
            ["Document", "Organize a structured session record."],
          ].map(([title, detail], index) => (
            <li key={title} className="border-t-2 border-slate-200 pt-4">
              <span className="text-xs font-semibold text-[#164d69]">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-slate-500">
          Intended workflow under development; not instructions for clinical
          use.
        </p>
      </div>
    </section>

    <section className="company-section border-y border-slate-200 bg-[#f3f6f8]">
      <div className="company-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="company-eyebrow">Development program</p>
            <h2 className="company-heading mt-4">
              A defined path from prototype to evaluation.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600 lg:pt-8">
            Three prototype generations and stakeholder discovery have informed
            the design. The next phase focuses on technical performance,
            usability, and preparation for structured evaluation.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {developmentPriorities.map((item, i) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <p className="text-xs font-semibold tracking-widest text-[#164d69]">
                0{i + 1} / DEVELOPMENT PRIORITY
              </p>
              <h3 className="mt-5 text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm text-slate-500">
            Explore the engineering record, evaluation priorities, and current
            development status in one place.
          </p>
          <NavLink
            to="/clinical-evidence"
            className="company-text-link shrink-0"
          >
            Evidence & development{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </section>

    <section className="company-section bg-white">
      <div className="company-container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="company-eyebrow">Initial care-setting focus</p>
          <h2 className="company-heading mt-4">
            Built around the realities of long-term care.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Care teams need practical setup, clear training, and documentation
            that fits their routines. Our development work connects those needs
            to device design and evaluation planning.
          </p>
          <NavLink to="/long-term-care" className="company-text-link mt-6">
            Explore LTC evaluation priorities{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
        <div className="rounded-2xl bg-[#0b1b2f] p-8 text-white sm:p-10">
          <p className="company-eyebrow !text-sky-300">Company & team</p>
          <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
            Engineering, clinical input, and commercialization.
          </h2>
          <p className="mt-5 leading-7 text-slate-300">
            Led by biomedical engineer Ali Abedinpour, Atabazh brings together
            technical contributors and advisors across mechanical design,
            electronics, embedded systems, respiratory care, and market
            development.
          </p>
          <NavLink to="/about" className="company-text-link mt-6 !text-sky-300">
            Meet the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </section>

    <section className="border-t border-slate-200 bg-[#f8fafc] py-12">
      <div className="company-container">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          <h2 className="text-base font-semibold tracking-normal">
            Innovation & development ecosystem
          </h2>
          <NavLink to="/about" className="company-text-link text-sm">
            View company background{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
        <div className="mt-8 grid grid-cols-3 items-center gap-7 md:grid-cols-6">
          {[
            { name: "MaRS", src: marsLogo },
            { name: "Innovation Boost Zone", src: ibzLogo },
            { name: "Innovation Factory", src: innovationFactoryLogo },
            { name: "Lab2Market Validate", src: lab2MarketLogo },
            { name: "Mitacs", src: mitacsLogo },
            { name: "Baycrest", src: baycrestLogo },
          ].map((item) => (
            <div className="flex h-16 justify-center" key={item.name}>
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                className="max-h-14 max-w-[110px] object-contain grayscale"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-5 text-slate-500">
          Organizations shown reflect development, mentorship, or program
          connections. Their inclusion does not imply product endorsement or
          clinical validation.
        </p>
      </div>
    </section>
    <CompanyCTA />
  </div>
);
export default Home;
