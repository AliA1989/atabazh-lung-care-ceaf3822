import { ArrowUpRight } from "lucide-react";
import { eyeopenerFeature as feature } from "@/data/mediaCoverage";
import { publicAsset } from "@/lib/publicAsset";

export default function MediaFeature({ expanded = false }: { expanded?: boolean }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-[0.65fr_1.35fr]">
        <div className="relative bg-slate-950">
          <img
            src={publicAsset("media/founder-ali-abedinpour.jpg")}
            alt="Ali Abedinpour, founder of Atabazh Medical"
            width={800}
            height={800}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-[center_30%] md:absolute md:inset-0 md:h-full md:aspect-auto"
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <span className="font-bold uppercase tracking-[0.18em] text-blue-700">In the Media</span>
            <time dateTime={feature.dateTime} className="text-slate-500">{feature.date}</time>
          </div>
          <p className="mt-5 text-sm font-semibold text-slate-600">{feature.publication}</p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-3xl">
            {expanded ? feature.title : "The story behind Smart Lung Physio™"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{feature.summary}</p>
          {expanded && (
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The feature explores how his grandfather’s experience shaped his focus on airway clearance,
              and how engineering, customer discovery, and entrepreneurship have informed the project.
              Smart Lung Physio™ remains under development and is not yet commercially available.
            </p>
          )}
          <p className="mt-4 text-xs leading-5 text-slate-500">
            By {feature.author} · TMU’s independent student newspaper
          </p>
          <a
            href={feature.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Read the Story on {feature.publication}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
