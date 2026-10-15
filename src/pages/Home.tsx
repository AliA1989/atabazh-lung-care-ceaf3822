import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { eyeopenerFeature } from "@/data/mediaCoverage";
import { publicAsset } from "@/lib/publicAsset";
import { developmentFacts, developmentPriorities } from "@/data/development";
import HeroFilm from "@/components/HeroFilm";
import LungTechnologyExplainer from "@/components/LungTechnologyExplainer";
import { CompanyCTA } from "@/components/CompanyCTA";
import marsLogo from "@/assets/support/mars.svg";
import ibzLogo from "@/assets/support/ibz.svg";
import innovationFactoryLogo from "@/assets/support/innovation-factory.svg";
import lab2MarketLogo from "@/assets/support/lab2market-validate.webp";
import mitacsLogo from "@/assets/support/mitacs.svg";
import baycrestLogo from "@/assets/support/baycrest.png";

const Home = () => {
  const [storyOpen, setStoryOpen] = useState(false);
  return (
  <Dialog open={storyOpen} onOpenChange={setStoryOpen}>
  <div className="company-page">
    <section className="bg-gradient-to-br from-[#f8fafc] via-white to-[#eaf2f7] pt-[4.5rem] text-slate-950">
      <div className="company-container grid items-center gap-10 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-12">
        <div>
          <p className="company-eyebrow !text-[#164d69]">
            Atabazh Medical · Toronto, Canada
          </p>
          <h1 className="mt-5 max-w-xl text-[2.6rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl sm:leading-[1.1] xl:text-[3.65rem]">
            Human-centred engineering for respiratory care
          </h1>
          <p className="company-lead mt-5 text-slate-600">
            <strong className="font-semibold text-slate-950">
              Smart Lung Physio™
            </strong>{" "}
            is an airway-clearance technology in development at Atabazh Medical,
            shaped by conversations with caregivers and care teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <NavLink
              to="/device"
              className="company-button bg-[#164d69] text-white hover:bg-[#103d56]"
            >
              Explore the Technology{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </NavLink>
            <DialogTrigger className="company-button border border-slate-300 bg-white text-[#164d69] hover:bg-[#edf4f8]">
              Watch Our Story <span className="text-xs text-slate-500">· 39s</span>
            </DialogTrigger>
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Smart Lung Physio™ · Toronto, Canada
          </p>
        </div>
        <HeroFilm open={storyOpen} />
      </div>
      <a
        href={eyeopenerFeature.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-slate-200 bg-white/90 transition-colors hover:bg-[#eaf2f7]"
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
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#164d69]">
              In the news · The Eyeopener
            </span>
            <span className="mt-1 block text-sm text-slate-900 sm:mt-0">
              The story behind Smart Lung Physio™
            </span>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-[#164d69]"
            aria-hidden="true"
          />
          <span className="sr-only">Read the article (opens in a new tab)</span>
        </div>
      </a>
    </section>
    <div className="company-container py-5"><NavLink to="/clinical-evidence" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#164d69] underline underline-offset-4">Review Our Progress <ArrowRight size={16} aria-hidden="true" /></NavLink></div>

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

    <LungTechnologyExplainer layout="compact" />

    <section className="company-section border-y border-slate-200 bg-[#f3f6f8]">
      <div className="company-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="company-eyebrow">Development program</p>
            <h2 className="company-heading mt-4">
              From prototype to structured evaluation
            </h2>
          </div>
          <p className="company-lead text-slate-600 lg:pt-8">
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
              <p className="mt-3 text-sm leading-6 text-slate-600">
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
            Designing around long-term care workflows
          </h2>
          <p className="company-lead mt-5 text-slate-600">
            Care teams need practical setup, clear training, and documentation
            that fits their routines. Our development work connects those needs
            to device design and evaluation planning.
          </p>
          <NavLink to="/long-term-care" className="company-text-link mt-6">
            Explore LTC evaluation priorities{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
        <div className="rounded-2xl border border-[#d2e4ea] bg-[#eaf2f7] p-8 text-slate-950 sm:p-10">
          <p className="company-eyebrow !text-[#164d69]">Company & team</p>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.2] tracking-tight sm:text-3xl">
            Engineering, clinical input and commercialization
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Led by biomedical engineer Ali Abedinpour, Atabazh brings together
            technical contributors and advisors across mechanical design,
            electronics, embedded systems, respiratory care, and market
            development.
          </p>
          <NavLink to="/about" className="company-text-link mt-6 !text-[#164d69]">
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
  </Dialog>
);
};
export default Home;
