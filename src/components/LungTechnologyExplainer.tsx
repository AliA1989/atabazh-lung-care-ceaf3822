import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Info, Pause, Play } from "lucide-react";
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

  const trackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const desktop = window.matchMedia("(min-width: 981px) and (min-height: 760px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!desktop.matches || reduced.matches) return;
      const distance = track.offsetHeight - (panelRef.current?.offsetHeight ?? 0);
      if (distance <= 0) return;
      const progress = Math.max(0, Math.min(1, (72 - track.getBoundingClientRect().top) / distance));
      setActive(Math.min(2, Math.floor(progress * 3)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", schedule);
    reduced.addEventListener("change", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !sectionRef.current) return;
    const section = sectionRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      section.dataset.visible = String(entry.isIntersecting);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function goToStep(index: number) {
    const next = Math.max(0, Math.min(stages.length - 1, index));
    setActive(next);
    if (window.matchMedia("(min-width: 981px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)").matches) {
      const track = trackRef.current;
      if (!track) return;
      const distance = track.offsetHeight - (panelRef.current?.offsetHeight ?? 0);
      // Instant positioning keeps manual selection and scroll state in sync.
      window.scrollTo({ top: window.scrollY + track.getBoundingClientRect().top - 72 + distance * ((next + 0.5) / 3), behavior: "instant" });
    }
  }

  return (
    <section
      ref={sectionRef}
      className="lung-explainer"
      data-paused={paused}
      aria-labelledby="lung-explainer-heading"
    >
      <div className="lung-explainer__track" ref={trackRef}>
      <div className="lung-explainer__sticky" ref={panelRef}>
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
              <div id="lung-stage-copy" className="lung-explainer__stage-copy" aria-live="polite" aria-atomic="true">
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
                <span className="lung-explainer__hint">Choose a stage<span> or scroll to explore</span></span>
              </div>
            </div>

            <div className="lung-explainer__visual" data-stage={active}>
              <button type="button" className="lung-explainer__motion" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Resume illustration motion" : "Pause illustration motion"}>
                {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
              </button>
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
                  <radialGradient id="lung-shape-gradient" cx="42%" cy="36%" r="70%"><stop offset="0" stopColor="#50b5b7" stopOpacity=".42"/><stop offset=".65" stopColor="#167080" stopOpacity=".25"/><stop offset="1" stopColor="#051924" stopOpacity=".85"/></radialGradient>
                </defs>
                <g className="lung-explainer__gridlines" stroke="#5e9daa" strokeWidth=".7">
                  <path d="M50 100H590 M50 180H590 M50 260H590 M50 340H590 M50 420H590 M110 65V480 M210 65V480 M320 65V480 M430 65V480 M530 65V480" />
                </g>
                <circle cx="320" cy="278" r="230" fill="url(#lung-bg-glow)" />
                <circle cx="320" cy="278" r="183" fill="none" stroke="#3f7b87" strokeOpacity=".25" strokeDasharray="3 11" />
                <g transform="translate(0 4)">
                  <path className="lung-explainer__lung" fill="url(#lung-shape-gradient)" d="M302 155C277 119 249 112 216 123C177 137 156 178 143 236C129 304 120 370 136 417C147 446 181 459 224 453C267 444 296 407 300 362C305 304 303 209 302 155Z"/>
                  <path className="lung-explainer__lung" fill="url(#lung-shape-gradient)" d="M338 155C363 119 391 112 424 123C463 137 484 178 497 236C511 304 520 370 504 417C493 446 459 459 416 453C373 444 351 410 351 372C351 341 371 326 368 301C365 279 343 276 338 253C335 222 337 185 338 155Z"/>
                  <g className="lung-explainer__detail" fill="none" stroke="#81d4cd" strokeWidth="1">
                    <path d="M148 304Q217 308 296 249M344 249Q424 288 494 291M384 278Q442 321 504 352" />
                    <path d="M320 92h-8m8 12h-8m8 12h-8m8 12h-8m8 12h-8m8 12h-8" strokeWidth="2" />
                    {Array.from({ length: 22 }, (_, i) => {
                      const y = 181 + i * 11;
                      const x = 161 + Math.sin(i * 1.7) * 15;
                      return <path key={i} d={`M${x} ${y}q22 -14 40 3m${440 - x} -3q22 -14 40 3`} opacity=".3" />;
                    })}
                  </g>
                  <path className="lung-explainer__airway" d="M320 81V174C320 194 311 197 291 211L250 239 M320 174C320 194 329 197 349 211L390 239"/>
                  <path className="lung-explainer__twig" d="M277 222L253 199L221 193M277 222L239 264L201 273M250 239L230 309L192 332M235 283L262 328L263 373M255 317L226 381L202 406M363 222L387 199L419 193M363 222L401 264L439 273M390 239L410 309L448 332M405 283L378 328L377 373M385 317L414 381L438 406"/>
                  <path className="lung-explainer__twig" d="M220 193l-13-23M201 273l-22-14M192 332l-20 5M263 373l-17 31M419 193l13-23M439 273l22-14M448 332l20 5M377 373l17 31"/>
                </g>
                <g className="lung-explainer__mucus">
                  <circle cx="253" cy="243" r="9"/><circle cx="242" cy="253" r="6"/><circle cx="229" cy="267" r="6"/>
                  <circle cx="383" cy="228" r="7"/><circle cx="395" cy="244" r="10"/><circle cx="406" cy="262" r="6"/>
                  <circle cx="232" cy="307" r="6"/><circle cx="410" cy="309" r="6"/>
                </g>
                <g className="lung-explainer__concept">
                  <path d="M470 207h72v96h-48" fill="none" stroke="#72d9cf" strokeDasharray="3 6" />
                  <rect x="468" y="203" width="104" height="62" rx="14" fill="#0a303e" stroke="#76dcd1" />
                  <rect x="484" y="219" width="30" height="30" rx="8" fill="#275864" stroke="#8df6e5" />
                  <path d="M522 226h32m-32 10h22" stroke="#a3d7d7" strokeWidth="2" />
                  <text x="466" y="286" fill="#b8dfdf" fontSize="10" letterSpacing="1">DESIGN INTENT</text>
                </g>
                <g className="lung-explainer__waveform">
                  <rect x="195" y="395" width="250" height="57" rx="12" fill="#092834" stroke="#47858b"/>
                  <path d="M210 424C226 424 226 408 242 408S258 440 274 440S290 408 306 408S322 440 338 440S354 408 370 408S386 424 431 424" fill="none" stroke="#85f8df" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g className="lung-explainer__feedback">
                  <rect x="405" y="82" width="174" height="60" rx="10" fill="#0d3540" stroke="#4c9396"/>
                  <circle cx="428" cy="109" r="7" fill="#68e8db"/>
                  <path d="M445 142v28h-38" fill="none" stroke="#73d8cd" strokeDasharray="3 5" />
                  <text x="444" y="107" fill="#c9f8f3" fontSize="12" letterSpacing="1">CAREGIVER</text>
                  <text x="444" y="125" fill="#9dbec1" fontSize="10" letterSpacing="1">CONCEPT ONLY</text>
                </g>
              </svg>
              <div className="lung-explainer__visual-foot">
                <span>{String(active + 1).padStart(2, "0")} / {current.caption}</span>
                <small>Conceptual illustration only. Device mechanism not depicted.</small>
              </div>
            </div>
          </div>

          <nav className="lung-explainer__steps" aria-label="Technology explainer stages" onKeyDown={(event) => {
            const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: 2 };
            if (!(event.key in keys)) return;
            event.preventDefault();
            const next = Math.max(0, Math.min(2, keys[event.key]));
            goToStep(next);
            event.currentTarget.querySelectorAll<HTMLButtonElement>("button")[next]?.focus({ preventScroll: true });
          }}>
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                type="button"
                onClick={() => goToStep(index)}
                aria-controls="lung-stage-copy"
                aria-current={active === index ? "step" : undefined}
              >
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                {stage.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      </div>
      <div className="company-container lung-explainer__disclaimer">
        This animation is an explanatory design concept—not a clinical simulation,
        efficacy claim, patient data display, or indication of regulatory approval.
      </div>
    </section>
  );
}
