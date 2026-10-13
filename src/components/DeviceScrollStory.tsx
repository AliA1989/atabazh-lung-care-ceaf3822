import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { NavLink } from "@/components/NavLink";
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
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">Smart Lung Physio™</span>
                <button type="button" onClick={() => setPaused(!paused)} disabled={reduced} aria-label={paused ? "Play device animation" : "Pause device animation"} aria-pressed={paused} className="story-control">{paused || reduced ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{reduced ? "Reduced motion" : paused ? "Play" : "Pause"}</span></button>
              </div>
              <svg viewBox="0 0 560 390" className="story-diagram" role="img" aria-label="Schematic illustration of the handheld device, contact sensing, and connected companion interface">
                <defs><linearGradient id="storyBody" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#3b5267"/><stop offset="1" stopColor="#0e2134"/></linearGradient><linearGradient id="storyCup"><stop stopColor="#ecf7fa"/><stop offset="1" stopColor="#97baca"/></linearGradient></defs>
                <ellipse cx="192" cy="318" rx="116" ry="16" fill="#020b15" opacity=".6" />
                <g className="story-device">
                  <rect x="207" y="69" width="73" height="233" rx="15" fill="url(#storyBody)" stroke="#7793a6" strokeWidth="1.5"/>
                  <path d="M223 86H265M223 280H265" stroke="#7593a6" opacity=".5"/>
                  <rect x="227" y="111" width="34" height="47" rx="6" fill="#0b1b2f" stroke="#506c81"/>
                  <circle cx="244" cy="187" r="5" fill="#73c8e2"/>
                  <path d="M209 222H170" stroke="#b1c6d1" strokeWidth="10"/>
                  <g className="story-contact"><path d="M169 197V247H143L123 257H104V187H123L143 197Z" fill="url(#storyCup)" stroke="#def4fc" strokeWidth="2"/><ellipse cx="104" cy="222" rx="10" ry="35" fill="#d9ecf1" stroke="#def4fc" strokeWidth="2"/></g>
                  <circle className="story-sensor" cx="174" cy="222" r="17" fill="none" stroke="#77d4e7" strokeWidth="2"/>
                  <circle className="story-orientation" cx="244" cy="119" r="34" fill="none" stroke="#77d4e7" strokeDasharray="4 7"/>
                </g>
                <path className="story-link" d="M291 211C321 211 329 161 363 161" stroke="#6fd0df" strokeWidth="2" strokeDasharray="4 7" fill="none"/>
                <circle className="story-packet" r="4" fill="#a2eff9"><animateMotion dur="2.8s" repeatCount="indefinite" path="M291 211C321 211 329 161 363 161"/></circle>
                <g className="story-app"><rect x="376" y="94" width="113" height="209" rx="19" fill="#eaf3f6" stroke="#95b7c8" strokeWidth="2"/><rect x="386" y="108" width="93" height="180" rx="11" fill="#102c41"/><rect x="413" y="116" width="40" height="4" rx="2" fill="#7997a8"/><circle cx="432" cy="159" r="20" fill="#1b4b60"/><path d="M422 159H428L432 152L437 166L441 159" fill="none" stroke="#8ee2eb" strokeWidth="2"/><path d="M400 205H461M400 218H446M400 231H454" stroke="#92b9c8" strokeWidth="4" strokeLinecap="round"/><rect className="story-record" x="400" y="249" width="61" height="20" rx="4" fill="#75cad7"/></g>
                <text x="193" y="352" textAnchor="middle" fill="#92adbd" fontSize="12">Physical device</text><text x="432" y="352" textAnchor="middle" fill="#92adbd" fontSize="12">Companion interface</text>
              </svg>
              <div className="story-stage-caption" aria-live="off"><span className="text-xs text-sky-300">0{active + 1} / 05</span><h3 className="mt-2 text-2xl font-semibold text-white">{steps[active].focus}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{steps[active].detail}</p></div>
              <div className="mt-6 flex gap-2" aria-hidden="true">{steps.map((step, i) => <span key={step.title} className={`story-progress ${i <= active ? "is-lit" : ""}`} />)}</div>
              <p className="mt-5 text-[10px] leading-5 text-slate-500">System illustration · Motion shows the concept, not operating speed.</p>
            </div>
          </div>
          <ol className="story-steps">
            {steps.map((step, i) => <li key={step.title} data-story-step className={`story-step ${active === i ? "is-active" : ""}`} aria-current={active === i ? "step" : undefined}><div className="story-step-number">0{i + 1}</div><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">{step.label}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{step.title}</h3><p className="mt-4 max-w-md text-base leading-8 text-slate-300">{step.text}</p></div></li>)}
          </ol>
        </div>
        <NavLink to="/device" className="company-text-link mt-10 !text-sky-300">Explore the technology <ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
      </div>
    </section>
  );
}
