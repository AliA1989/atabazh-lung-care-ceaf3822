import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Info, Pause, Play } from "lucide-react";
import LungTechnologyScenes from "./LungTechnologyScenes";
import "./LungTechnologyExplainer.css";

const stages = [
  {
    label: "The challenge",
    title: "When mucus becomes difficult to clear.",
    description:
      "Mucus accumulation can make airway clearance challenging for people living with certain respiratory conditions. Understanding the challenge comes first.",
    status: "01 · AIRWAYS",
    visualTitle: "Mucus in the airways",
    visualDetail:
      "Mucus is shown along the inner wall; the central airway remains open. Schematic, not to scale.",
  },
  {
    label: "Our design intent",
    title: "Technology being developed to support airway clearance.",
    description:
      "Smart Lung Physio™ is a handheld airway-clearance technology in development. This illustration communicates the design intent—not a demonstration of its mechanism or clinical efficacy.",
    status: "02 · DESIGN CONCEPT",
    visualTitle: "Smart Lung Physio™",
    visualDetail:
      "Device design concept based on the functional prototype. Current prototype uses mains power.",
  },
  {
    label: "Sensing & feedback",
    title: "Exploring a more informed care experience.",
    description:
      "Contact and orientation sensing inform prototype development. The companion interface illustrates how feedback could support caregivers; sample values do not establish clinical performance.",
    status: "03 · FEEDBACK CONCEPT",
    visualTitle: "Sensing → caregiver feedback",
    visualDetail:
      "Interface concept. Values and coloured ranges are illustrative, not clinical targets or results.",
  },
] as const;

export default function LungTechnologyExplainer({
  layout = "scroll",
}: {
  layout?: "scroll" | "compact";
}) {
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

    // The homepage uses natural section height; only /device pins the panel
    // for scroll-driven storytelling.
    if (layout === "compact") {
      setScrollEnabled(false);
      return;
    }

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
  }, [layout]);

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
      data-layout={layout}
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
                  <span>{stages[active].status}</span>
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
                <LungTechnologyScenes active={active} id={id} />
                <figcaption className="lung-explainer__context">
                  <span
                    className="lung-explainer__context-number"
                    aria-hidden="true"
                  >
                    {String(active + 1).padStart(2, "0")}
                  </span>
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
