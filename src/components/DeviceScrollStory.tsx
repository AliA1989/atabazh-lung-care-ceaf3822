import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { publicAsset } from "@/lib/publicAsset";
import "./DeviceScrollStory.css";

const steps = [
  { title: "Position", label: "Caregiver-led setup", text: "A handheld form brings the contact head to a selected chest region. Handling and placement are part of our usability work.", focus: "Physical device", detail: "A handheld approach to localized percussion." },
  { title: "Deliver", label: "Mechanical delivery", text: "The actuator drives the contact head. Mechanical output is evaluated separately from the force applied by the caregiver.", focus: "Mechanical delivery", detail: "A physical mechanism at the centre of the system." },
  { title: "Sense", label: "Measurement architecture", text: "Contact-force and orientation channels provide information about how the prototype is positioned and loaded.", focus: "Contact & orientation", detail: "Dedicated sensing adds visibility to delivery." },
  { title: "Guide", label: "Connected feedback", text: "Bluetooth connects the sensor architecture to the companion interface, bringing feedback to the caregiver’s view.", focus: "Caregiver feedback", detail: "Sensor information reaches a connected interface." },
  { title: "Document", label: "Development direction", text: "Persistent session records are a planned extension of the platform. The goal is to support review beyond the session itself.", focus: "Session records", detail: "Structured documentation is the next development layer." },
];

export default function DeviceScrollStory() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = Array.from(section.current?.querySelectorAll<HTMLElement>("[data-story-step]") ?? []);
      if (!cards.length) return;
      const target = window.innerHeight * 0.55;
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const current = Math.abs(rect.top + rect.height / 2 - target);
        if (current < distance) { distance = current; nearest = i; }
      });
      setActive(nearest);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      preference.removeEventListener("change", updatePreference);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={section} className={`device-story company-section ${paused || reduced ? "story-still" : ""}`} aria-labelledby="device-story-title">
      <div className="company-container">
        <div className="mb-12 max-w-3xl">
          <p className="company-eyebrow !text-sky-300">The Smart Lung Physio system</p>
          <h2 id="device-story-title" className="company-heading mt-4 text-white">Physical delivery.<br />Connected understanding.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">Follow the path from the physical device to sensing, caregiver feedback, and our documentation roadmap.</p>
        </div>
        <div className="story-layout">
          <div className="story-visual">
            <div className="story-panel" data-phase={active}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Smart Lung Physio™</span>
                <button type="button" onClick={() => setPaused(!paused)} disabled={reduced} aria-label={paused ? "Play device animation" : "Pause device animation"} aria-pressed={paused} className="story-control">{paused || reduced ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{reduced ? "Reduced motion" : paused ? "Play" : "Pause"}</span></button>
              </div>
              <div className="story-canvas">
              <svg viewBox="0 0 560 390" className="story-diagram" role="img" aria-label="Smart Lung Physio device design with highlighted contact sensing and connected companion interface">
                <rect x="24" y="14" width="330" height="316" rx="20" fill="#edf3f6" />
                <image href={publicAsset("media/smart-lung-scroll-render.webp")} x="36" y="20" width="310" height="302" preserveAspectRatio="xMidYMid meet" />
                <g className="story-contact"><ellipse cx="268" cy="106" rx="33" ry="46" fill="none" stroke="#1c88af" strokeWidth="2" /></g>
                <circle className="story-sensor" cx="231" cy="100" r="20" fill="none" stroke="#1682aa" strokeWidth="2" />
                <circle className="story-orientation" cx="181" cy="94" r="32" fill="none" stroke="#1682aa" strokeDasharray="4 7" />
                <path className="story-link" d="M285 110C327 110 325 161 365 161" stroke="#6fd0df" strokeWidth="2" strokeDasharray="4 7" fill="none"/>
                <circle className="story-packet" r="4" fill="#a2eff9"><animateMotion dur="2.8s" repeatCount="indefinite" path="M285 110C327 110 325 161 365 161"/></circle>
                <g className="story-app"><rect x="366" y="111" width="175" height="139" rx="13" fill="#f4f8fb" stroke="#93b4c4"/><image href={publicAsset("media/smart-lung-companion-session.webp")} x="371" y="117" width="165" height="124" preserveAspectRatio="xMidYMid meet" /></g>
                <text x="193" y="352" textAnchor="middle" fill="#92adbd" fontSize="12">Physical device</text><text x="432" y="352" textAnchor="middle" fill="#92adbd" fontSize="12">Companion interface</text>
              </svg>
              <figure className="story-interface" aria-hidden={active < 3}>
                <img src={publicAsset("media/smart-lung-companion-session.webp")} width={1200} height={884} loading="lazy" alt="Companion interface concept showing a sample session: 17.5 N applied force, 96% SpO₂, and 04:08 elapsed" />
                <figcaption>Sample session · Example values</figcaption>
              </figure>
              </div>
              <div className="story-stage-caption" aria-live="off"><span className="text-xs text-sky-300">0{active + 1} / 05</span><h3 className="mt-2 text-2xl font-semibold text-white">{steps[active].focus}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{steps[active].detail}</p></div>
              <div className="mt-6 flex gap-2" aria-hidden="true">{steps.map((step, i) => <span key={step.title} className={`story-progress ${i <= active ? "is-lit" : ""}`} />)}</div>
              <p className="mt-5 text-xs leading-5 text-slate-500">Device design concept · Highlights follow the system story.</p>
            </div>
          </div>
          <ol className="story-steps">
            {steps.map((step, i) => <li key={step.title} data-story-step className={`story-step ${active === i ? "is-active" : ""}`} aria-current={active === i ? "step" : undefined}><div className="story-step-number">0{i + 1}</div><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">{step.label}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{step.title}</h3><p className="mt-4 max-w-md text-base leading-8 text-slate-300">{step.text}</p></div></li>)}
          </ol>
          <figure className="story-mobile-interface">
            <img src={publicAsset("media/smart-lung-companion-session.webp")} width={1200} height={884} loading="lazy" alt="Companion interface concept with example force, SpO₂, and session-timer values" />
            <figcaption>Companion interface · Sample session with example values</figcaption>
          </figure>
        </div>
        <NavLink to="/device" className="company-text-link mt-10 !text-sky-300">Explore the technology <ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
      </div>
    </section>
  );
}
