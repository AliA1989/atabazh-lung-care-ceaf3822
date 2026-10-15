import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import "./LungTechnologyExplainer.css";

const stages = [
  {
    label: "The challenge",
    title: "When mucus becomes difficult to clear.",
    description:
      "Mucus accumulation can make airway clearance challenging for people living with certain respiratory conditions. Understanding the challenge comes first.",
    status: "01 · AIRWAYS",
    caption: "Understand the problem",
  },
  {
    label: "Our design intent",
    title: "Technology being developed to support airway clearance.",
    description:
      "Smart Lung Physio™ is a handheld airway-clearance technology in development. This illustration communicates the design intent—not a demonstration of its mechanism or clinical efficacy.",
    status: "02 · DESIGN CONCEPT",
    caption: "Explore the design intent",
  },
  {
    label: "Sensing & feedback",
    title: "Exploring a more informed care experience.",
    description:
      "Prototype development includes sensing and connected caregiver feedback. The illustrated signal is a visual concept, not a patient measurement or validated clinical result.",
    status: "03 · FEEDBACK CONCEPT",
    caption: "Consider feedback pathways",
  },
] as const;

export default function LungTechnologyExplainer() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const current = stages[active];

  useEffect(() => {
    const chapters = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-lung-chapter]") ?? [],
    );
    if (!("IntersectionObserver" in window)) return;
    const desktop = window.matchMedia("(min-width: 981px)");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!desktop.matches) return;
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (intersecting) {
          const index = Number(
            (intersecting.target as HTMLElement).dataset.lungChapter,
          );
          if (Number.isInteger(index) && index >= 0 && index < stages.length) {
            setActive(index);
          }
        }
      },
      { rootMargin: "-20% 0px -20% 0px", threshold: [0.25, 0.5, 0.75] },
    );
    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  function goToStep(index: number) {
    const next = Math.max(0, Math.min(stages.length - 1, index));
    setActive(next);
    if (window.matchMedia("(min-width: 981px)").matches) {
      const chapter = sectionRef.current?.querySelector<HTMLElement>(
        `[data-lung-chapter="${next}"]`,
      );
      chapter?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
    }
  }

  return (
    <section
      ref={sectionRef}
      className="lung-explainer"
      aria-labelledby="lung-explainer-heading"
    >
      <div className="lung-explainer__sticky">
        <div className="company-container">
          <div className="lung-explainer__topline">
            <span className="lung-explainer__brand">ATABAZH MEDICAL <span> / SMART LUNG PHYSIO™</span></span>
            <span className="lung-explainer__badge"><span aria-hidden="true" /> INTERACTIVE CONCEPT</span>
          </div>

          <div className="lung-explainer__grid">
            <div className="lung-explainer__content">
              <p className="lung-explainer__eyebrow">EXPLORE THE TECHNOLOGY</p>
              <h2 id="lung-explainer-heading" className="lung-explainer__heading">
                Breathing science.<br /><em>Thoughtfully explained.</em>
              </h2>
              <div className="lung-explainer__stage-counter">
                <strong>{String(active + 1).padStart(2, "0")} / 03</strong>
                <span>{current.label}</span>
              </div>
              <div className="lung-explainer__stage-copy" aria-live="polite" aria-atomic="true">
                <h3>{current.title}</h3>
                <p>{current.description}</p>
              </div>
              <p className="lung-explainer__note">
                <Info size={17} aria-hidden="true" />
                Illustrative concept · Not clinical evidence
              </p>
              <div className="lung-explainer__controls">
                <button
                  type="button"
                  onClick={() => goToStep(active - 1)}
                  disabled={active === 0}
                  aria-label="Previous technology stage"
                ><ArrowLeft size={19} aria-hidden="true" /></button>
                <button
                  type="button"
                  onClick={() => goToStep(active + 1)}
                  disabled={active === stages.length - 1}
                  aria-label="Next technology stage"
                ><ArrowRight size={19} aria-hidden="true" /></button>
                <span>Choose a stage or scroll to explore</span>
              </div>
            </div>

            <div className="lung-explainer__visual" data-stage={active}>
              <div className="lung-explainer__visual-head">
                <span>RESPIRATORY SYSTEM / SCHEMATIC</span>
                <span>{current.status}</span>
              </div>
              <svg
                className="lung-explainer__anatomy"
                viewBox="0 0 640 540"
                role="img"
                aria-labelledby="lung-svg-title lung-svg-desc"
                preserveAspectRatio="xMidYMid meet"
              >
                <title id="lung-svg-title">Concept illustration of lungs and respiratory technology</title>
                <desc id="lung-svg-desc">
                  Three selectable stages illustrate mucus in bronchial airways,
                  the design intent of an airway-clearance technology, and an
                  example of sensing feedback. The illustration does not simulate
                  clinical performance or expose a device mechanism.
                </desc>
                <defs>
                  <radialGradient id="lung-bg-glow"><stop offset="0" stopColor="#37c3c9" stopOpacity=".22"/><stop offset="1" stopColor="#37c3c9" stopOpacity="0"/></radialGradient>
                  <linearGradient id="lung-shape-gradient" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#48c1c3" stopOpacity=".2"/><stop offset="1" stopColor="#1f7d92" stopOpacity=".06"/></linearGradient>
                </defs>
                <g className="lung-explainer__gridlines" stroke="#5e9daa" strokeWidth=".7">
                  <path d="M50 100H590 M50 180H590 M50 260H590 M50 340H590 M50 420H590 M110 65V480 M210 65V480 M320 65V480 M430 65V480 M530 65V480" />
                </g>
                <circle cx="320" cy="278" r="230" fill="url(#lung-bg-glow)" />
                <circle cx="320" cy="278" r="183" fill="none" stroke="#3f7b87" strokeOpacity=".25" strokeDasharray="3 11" />
                <g transform="translate(0 4)">
                  <path className="lung-explainer__lung" fill="url(#lung-shape-gradient)" d="M302 155C277 119 249 112 216 123C177 137 156 178 143 236C129 304 120 370 136 417C147 446 181 459 224 453C267 444 296 407 300 362C305 304 303 209 302 155Z"/>
                  <path className="lung-explainer__lung" fill="url(#lung-shape-gradient)" d="M338 155C363 119 391 112 424 123C463 137 484 178 497 236C511 304 520 370 504 417C493 446 459 459 416 453C373 444 344 407 340 362C335 304 337 209 338 155Z"/>
                  <path className="lung-explainer__airway" d="M320 81V174C320 194 311 197 291 211L250 239 M320 174C320 194 329 197 349 211L390 239"/>
                  <path className="lung-explainer__twig" d="M277 222L253 199L221 193M277 222L239 264L201 273M250 239L230 309L192 332M235 283L262 328L263 373M255 317L226 381L202 406M363 222L387 199L419 193M363 222L401 264L439 273M390 239L410 309L448 332M405 283L378 328L377 373M385 317L414 381L438 406"/>
                  <path className="lung-explainer__twig" d="M220 193l-13-23M201 273l-22-14M192 332l-20 5M263 373l-17 31M419 193l13-23M439 273l22-14M448 332l20 5M377 373l17 31"/>
                </g>
                <g className="lung-explainer__mucus">
                  <circle cx="253" cy="243" r="9"/><circle cx="242" cy="253" r="6"/><circle cx="229" cy="267" r="6"/>
                  <circle cx="383" cy="228" r="7"/><circle cx="395" cy="244" r="10"/><circle cx="406" cy="262" r="6"/>
                  <circle cx="232" cy="307" r="6"/><circle cx="410" cy="309" r="6"/>
                </g>
                <g className="lung-explainer__particles">
                  <circle cx="323" cy="134" r="4"/><circle cx="318" cy="162" r="3"/><circle cx="298" cy="202" r="3.5"/>
                  <circle cx="272" cy="224" r="4"/><circle cx="242" cy="254" r="3"/><circle cx="345" cy="205" r="4"/>
                  <circle cx="372" cy="223" r="3"/><circle cx="402" cy="261" r="4"/>
                </g>
                <g className="lung-explainer__rings" fill="none" stroke="#5befdf" strokeWidth="2">
                  <circle cx="320" cy="260" r="100"/><circle cx="320" cy="260" r="130"/>
                </g>
                <g className="lung-explainer__waveform">
                  <rect x="195" y="395" width="250" height="57" rx="12" fill="#092834" stroke="#47858b"/>
                  <path d="M210 424h37l12-16 13 31 17-43 13 33 11-10h31l9-9 12 22 10-13h56" fill="none" stroke="#85f8df" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g className="lung-explainer__feedback">
                  <rect x="405" y="82" width="174" height="60" rx="10" fill="#0d3540" stroke="#4c9396"/>
                  <circle cx="428" cy="109" r="7" fill="#68e8db"/>
                  <text x="444" y="107" fill="#c9f8f3" fontSize="12" letterSpacing="1">FEEDBACK</text>
                  <text x="444" y="125" fill="#9dbec1" fontSize="10" letterSpacing="1">CONCEPT</text>
                </g>
              </svg>
              <div className="lung-explainer__visual-foot">
                <span>{String(active + 1).padStart(2, "0")} / {current.caption}</span>
                <small>Conceptual illustration only. Device mechanism not depicted.</small>
              </div>
            </div>
          </div>

          <nav className="lung-explainer__steps" aria-label="Technology explainer stages">
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                type="button"
                onClick={() => goToStep(index)}
                aria-current={active === index ? "step" : undefined}
              >
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                {stage.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="lung-explainer__chapters" aria-hidden="true">
        {stages.map((stage, index) => (
          <div key={stage.label} data-lung-chapter={index} className="lung-explainer__chapter">
            <span>{String(index + 1).padStart(2, "0")} · {stage.label}</span>
          </div>
        ))}
      </div>
      <div className="company-container lung-explainer__disclaimer">
        This animation is an explanatory design concept—not a clinical simulation,
        efficacy claim, patient data display, or indication of regulatory approval.
      </div>
    </section>
  );
}
