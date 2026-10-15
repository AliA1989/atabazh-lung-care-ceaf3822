import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Info, Pause, Play } from "lucide-react";
import "./LungTechnologyExplainer.css";

const stages = [
  {
    label: "The challenge",
    title: "When mucus becomes difficult to clear.",
    description:
      "Mucus accumulation can make airway clearance challenging for people living with certain respiratory conditions. Understanding the challenge comes first.",
    status: "01 · AIRWAYS",
    visualTitle: "Mucus in the airways",
    visualDetail: "Amber marks illustrate accumulation. Anatomy is schematic.",
  },
  {
    label: "Our design intent",
    title: "Technology being developed to support airway clearance.",
    description:
      "Smart Lung Physio™ is a handheld airway-clearance technology in development. This illustration communicates the design intent—not a demonstration of its mechanism or clinical efficacy.",
    status: "02 · DESIGN CONCEPT",
    visualTitle: "Smart Lung Physio™",
    visualDetail: "Development concept · device mechanism not depicted.",
  },
  {
    label: "Sensing & feedback",
    title: "Exploring a more informed care experience.",
    description:
      "Prototype development includes sensing and connected caregiver feedback. The illustrated signal is a visual concept, not a patient measurement or validated clinical result.",
    status: "03 · FEEDBACK CONCEPT",
    visualTitle: "Sensing → caregiver feedback",
    visualDetail: "Illustrative signal · no patient data or clinical result.",
  },
] as const;

export default function LungTechnologyExplainer() {
  const id = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [followScroll, setFollowScroll] = useState(true);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;
    const desktop = window.matchMedia("(min-width: 981px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const measure = () => {
      const top = parseFloat(getComputedStyle(section).scrollMarginTop);
      section.style.setProperty(
        "--lung-panel-height",
        `${panel.offsetHeight}px`,
      );
      // Content size, text zoom and the actual viewport decide whether pinning is safe.
      setScrollEnabled(
        desktop.matches &&
          !reduced.matches &&
          panel.offsetHeight + top + 16 <= window.innerHeight,
      );
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(panel);
    window.addEventListener("resize", measure);
    desktop.addEventListener("change", measure);
    reduced.addEventListener("change", measure);
    measure();
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      desktop.removeEventListener("change", measure);
      reduced.removeEventListener("change", measure);
    };
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    let intersecting = false;
    const updateVisibility = () => setVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
      updateVisibility();
    });
    // Observe the panel, not the tall track, and suspend motion in background tabs.
    observer.observe(panel);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!scrollEnabled || !followScroll || !visible) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const panel = panelRef.current;
      const section = sectionRef.current;
      if (!track || !panel || !section) return;
      const distance = track.offsetHeight - panel.offsetHeight;
      if (distance <= 0) return;
      const top = parseFloat(getComputedStyle(section).scrollMarginTop);
      const progress = Math.max(
        0,
        Math.min(1, (top - track.getBoundingClientRect().top) / distance),
      );
      section.style.setProperty("--lung-progress", progress.toFixed(4));
      setActive(
        Math.min(stages.length - 1, Math.floor(progress * stages.length)),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [scrollEnabled, followScroll, visible]);

  function goToStep(index: number) {
    const next = Math.max(0, Math.min(stages.length - 1, index));
    setFollowScroll(false);
    setActive(next);
    setAnnouncement(
      `Stage ${next + 1} of ${stages.length}. ${stages[next].title}`,
    );
  }

  return (
    <section
      ref={sectionRef}
      className="lung-explainer"
      data-paused={paused}
      data-visible={visible}
      data-scroll={scrollEnabled}
      data-follow={scrollEnabled && followScroll}
      aria-labelledby={`${id}-heading`}
    >
      <div className="lung-explainer__track" ref={trackRef}>
        <div className="lung-explainer__sticky" ref={panelRef}>
          <div className="company-container">
            <div className="lung-explainer__topline">
              <span className="lung-explainer__brand">
                ATABAZH MEDICAL <span> / SMART LUNG PHYSIO™</span>
              </span>
              <span className="lung-explainer__badge">
                <span aria-hidden="true" /> INTERACTIVE CONCEPT
              </span>
            </div>

            <div className="lung-explainer__grid">
              <div className="lung-explainer__intro">
                <p className="lung-explainer__eyebrow">
                  EXPLORE THE TECHNOLOGY
                </p>
                <h2 id={`${id}-heading`} className="lung-explainer__heading">
                  Breathing science.
                  <br />
                  <em>Thoughtfully explained.</em>
                </h2>
              </div>
              <div className="lung-explainer__navigation">
                <div
                  className="lung-explainer__steps"
                  role="tablist"
                  aria-label="Technology explainer stages"
                  onFocus={() => setFollowScroll(false)}
                >
                  {stages.map((stage, index) => (
                    <button
                      key={stage.label}
                      id={`${id}-tab-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={active === index}
                      aria-controls={`${id}-panel-${index}`}
                      tabIndex={active === index ? 0 : -1}
                      onClick={() => goToStep(index)}
                      onKeyDown={(event) => {
                        const keys: Record<string, number> = {
                          ArrowRight: index + 1,
                          ArrowLeft: index - 1,
                          Home: 0,
                          End: stages.length - 1,
                        };
                        if (!(event.key in keys)) return;
                        event.preventDefault();
                        const next =
                          (keys[event.key] + stages.length) % stages.length;
                        goToStep(next);
                        document
                          .getElementById(`${id}-tab-${next}`)
                          ?.focus({ preventScroll: true });
                      }}
                    >
                      <strong aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </strong>
                      {stage.label}
                    </button>
                  ))}
                </div>
                <div className="lung-explainer__explore-mode">
                  <span>
                    {scrollEnabled && followScroll
                      ? "Scroll to explore, or choose a stage"
                      : "Choose a stage to explore"}
                  </span>
                  <button
                    type="button"
                    hidden={!scrollEnabled}
                    aria-pressed={followScroll}
                    onClick={() => {
                      setFollowScroll((value) => !value);
                      setAnnouncement(
                        followScroll
                          ? "Manual stage controls enabled."
                          : "Scroll progression resumed.",
                      );
                    }}
                  >
                    Follow scroll <ArrowRight size={13} aria-hidden="true" />
                  </button>
                </div>
              </div>
              <figure className="lung-explainer__visual" data-stage={active}>
                <div className="lung-explainer__visual-head">
                  <span>
                    ANTERIOR VIEW{" "}
                    <span className="lung-explainer__view-detail">
                      / SCHEMATIC
                    </span>
                  </span>
                  <button
                    type="button"
                    className="lung-explainer__motion"
                    onClick={() => setPaused((value) => !value)}
                    aria-label={
                      paused
                        ? "Resume illustration motion"
                        : "Pause illustration motion"
                    }
                  >
                    {paused ? (
                      <Play size={13} aria-hidden="true" />
                    ) : (
                      <Pause size={13} aria-hidden="true" />
                    )}
                    <span>{paused ? "Resume" : "Pause"}</span>
                  </button>
                </div>
                <div className="lung-explainer__anatomy-wrap">
                  <svg
                    className="lung-explainer__anatomy"
                    viewBox="90 60 460 420"
                    role="img"
                    aria-labelledby={`${id}-svg-title`}
                    aria-describedby={`${id}-svg-desc`}
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <title id={`${id}-svg-title`}>
                      Schematic anterior view of lungs and bronchial airways
                    </title>
                    <desc id={`${id}-svg-desc`}>
                      Amber patches represent mucus accumulation. The patient's
                      right lung appears on the left of this front-facing
                      schematic. Not to scale. No treatment mechanism or
                      response is depicted.
                    </desc>
                    <defs>
                      <radialGradient id={`${id}-glow`}>
                        <stop
                          offset="0"
                          stopColor="#37c3c9"
                          stopOpacity=".22"
                        />
                        <stop offset="1" stopColor="#37c3c9" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient
                        id={`${id}-surface`}
                        cx="42%"
                        cy="36%"
                        r="70%"
                      >
                        <stop
                          offset="0"
                          stopColor="#50b5b7"
                          stopOpacity=".42"
                        />
                        <stop
                          offset=".65"
                          stopColor="#167080"
                          stopOpacity=".25"
                        />
                        <stop
                          offset="1"
                          stopColor="#051924"
                          stopOpacity=".85"
                        />
                      </radialGradient>
                    </defs>
                    <g
                      className="lung-explainer__gridlines"
                      stroke="#5e9daa"
                      strokeWidth=".7"
                    >
                      <path d="M50 100H590 M50 180H590 M50 260H590 M50 340H590 M50 420H590 M110 65V480 M210 65V480 M320 65V480 M430 65V480 M530 65V480" />
                    </g>
                    <circle
                      cx="320"
                      cy="278"
                      r="230"
                      fill={`url(#${id}-glow)`}
                      className="lung-explainer__ambient"
                    />
                    <circle
                      cx="320"
                      cy="278"
                      r="183"
                      fill="none"
                      stroke="#3f7b87"
                      strokeOpacity=".25"
                      strokeDasharray="3 11"
                    />
                    <g transform="translate(0 4)">
                      <path
                        className="lung-explainer__lung"
                        fill={`url(#${id}-surface)`}
                        d="M302 155C277 119 249 112 216 123C177 137 156 178 143 236C129 304 120 370 136 417C147 446 181 459 224 453C267 444 296 407 300 362C305 304 303 209 302 155Z"
                      />
                      <path
                        className="lung-explainer__lung"
                        fill={`url(#${id}-surface)`}
                        d="M338 155C363 119 391 112 424 123C463 137 484 178 497 236C511 304 520 370 504 417C493 446 459 459 416 453C373 444 351 410 351 372C351 341 371 326 368 301C365 279 343 276 338 253C335 222 337 185 338 155Z"
                      />
                      <g className="lung-explainer__detail" fill="none">
                        {/* Anterior schematic: patient's right has three lobes; left has two. */}
                        <path
                          className="lung-explainer__fissure"
                          d="M155 269Q221 282 289 257M277 265Q235 335 137 378M350 265Q409 323 503 363"
                        />
                        <path
                          className="lung-explainer__trachea"
                          d="M312 94h16m-16 12h16m-16 12h16m-16 12h16m-16 12h16m-16 12h16"
                        />
                        <path
                          className="lung-explainer__bronchiole"
                          d="M221 193q-25-7-35 7m20-29-16-7M201 273q-21 14-30 4m21 55q-19-14-28-7m38 81-20 2m44-27-3 29m40-37 14 17M419 193q25-7 35 7m-20-29 16-7M439 273q21 14 30 4m-21 55q19-14 28-7m-38 81 20 2m-44-27 3 29m-40-37-14 17"
                        />
                      </g>
                      <path
                        className="lung-explainer__airway"
                        d="M320 81V174C320 194 311 197 291 211L250 239 M320 174C320 194 329 197 349 211L390 239"
                      />
                      <path
                        className="lung-explainer__twig"
                        d="M277 222Q262 200 221 193M277 222Q246 265 201 273M250 239Q237 306 192 332M235 283Q265 328 263 373M255 317Q238 382 202 406M363 222Q378 200 419 193M363 222Q394 265 439 273M390 239Q403 306 448 332M405 283Q375 328 377 373M385 317Q402 382 438 406"
                      />
                      <path
                        className="lung-explainer__twig"
                        d="M220 193l-13-23M201 273l-22-14M192 332l-20 5M263 373l-17 31M419 193l13-23M439 273l22-14M448 332l20 5M377 373l17 31"
                      />
                    </g>
                    <g className="lung-explainer__mucus">
                      <path d="M244 239q5-8 12-3t4 11q-4 7-11 4t-5-12ZM234 254q5-6 10-2t1 10q-7 6-11 0t0-8ZM227 300q5-5 10 0t0 10q-6 3-10-2t0-8ZM387 237q6-8 12-2t5 12q-5 5-12 1t-5-11ZM401 258q4-5 9-1t0 10q-7 3-9-3t0-6ZM405 305q5-6 10 0t-1 10q-7 2-9-4t0-6Z" />
                    </g>
                  </svg>
                </div>
                <div className="lung-explainer__legend" aria-hidden="true">
                  <span>
                    <i /> Mucus accumulation
                  </span>
                  <span>Not to scale</span>
                </div>
                <figcaption className="lung-explainer__context">
                  <div
                    className="lung-explainer__context-icon"
                    aria-hidden="true"
                  >
                    {active === 0 ? (
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M20 7v16L9 39m19-32v16l11 16M17 28l7 5 7-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path d="M16 29q5-4 7 2t-4 5q-6-1-3-7" fill="#edb98a" />
                      </svg>
                    ) : active === 1 ? (
                      <svg viewBox="0 0 48 48">
                        <rect
                          x="12"
                          y="8"
                          width="24"
                          height="31"
                          rx="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="18"
                          y="14"
                          width="12"
                          height="10"
                          rx="3"
                          fill="currentColor"
                          opacity=".25"
                        />
                        <path
                          d="M20 30h8m-8 4h5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 48 48">
                        <path
                          d="M3 26c7 0 5-12 12-12s7 22 14 22 7-12 16-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity=".35"
                        />
                        <path
                          className="lung-explainer__signal"
                          pathLength="1"
                          d="M3 26c7 0 5-12 12-12s7 22 14 22 7-12 16-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="lung-explainer__context-copy">
                    {stages.map((stage, index) => (
                      <div key={stage.label} hidden={active !== index}>
                        <span className="lung-explainer__context-kicker">
                          {stage.status}
                        </span>
                        <strong>{stage.visualTitle}</strong>
                        <p>{stage.visualDetail}</p>
                      </div>
                    ))}
                  </div>
                </figcaption>
              </figure>
              <div
                className="lung-explainer__narrative"
                onFocus={() => setFollowScroll(false)}
              >
                {stages.map((stage, index) => (
                  <div
                    key={stage.label}
                    id={`${id}-panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`${id}-tab-${index}`}
                    className="lung-explainer__stage-copy"
                    hidden={active !== index}
                    tabIndex={0}
                  >
                    <div
                      className="lung-explainer__stage-counter"
                      aria-hidden="true"
                    >
                      <strong>{String(index + 1).padStart(2, "0")} / 03</strong>
                      <span>{stage.label}</span>
                    </div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                ))}
              </div>
              <p className="lung-explainer__note">
                <Info size={17} aria-hidden="true" />
                Illustrative concept · Not clinical evidence
              </p>
              <div className="lung-explainer__controls">
                <button
                  type="button"
                  onClick={() => {
                    if (active > 0) goToStep(active - 1);
                  }}
                  aria-disabled={active === 0}
                  aria-label="Previous technology stage"
                >
                  <ArrowLeft size={19} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (active < stages.length - 1) goToStep(active + 1);
                  }}
                  aria-disabled={active === stages.length - 1}
                  aria-label="Next technology stage"
                >
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
                <span className="lung-explainer__hint">
                  {String(active + 1).padStart(2, "0")} / 03
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="lung-explainer__announcement"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </p>
      <div className="company-container lung-explainer__disclaimer">
        This animation is an explanatory design concept—not a clinical
        simulation, efficacy claim, patient data display, or indication of
        regulatory approval.
      </div>
    </section>
  );
}
