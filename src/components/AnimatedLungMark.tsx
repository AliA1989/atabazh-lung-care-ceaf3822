import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { publicAsset } from "@/lib/publicAsset";
import "./AnimatedLungMark.css";

type AnimatedLungMarkProps = { compact?: boolean };

function Wings({ filterId }: { filterId: string }) {
  const source = publicAsset("media/smart-lung-butterfly-mark.webp");
  return <span className="lung-mark-plane" aria-hidden="true" style={{ filter: `url(#${filterId})` }}>
    <img className="lung-mark-left" src={source} alt="" width={640} height={386} />
    <img className="lung-mark-centre" src={source} alt="" width={640} height={386} />
    <img className="lung-mark-right" src={source} alt="" width={640} height={386} />
  </span>;
}

export default function AnimatedLungMark({ compact = false }: AnimatedLungMarkProps) {
  const filterId = useId().replace(/:/g, "");
  const target = useRef<HTMLSpanElement>(null);
  const flyer = useRef<HTMLDivElement>(null);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    if (compact || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setFlying(true);
  }, [compact]);

  useEffect(() => {
    if (!flying || !target.current || !flyer.current) return;
    const rect = target.current.getBoundingClientRect();
    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = w < 640 ? 190 : 260;
    flyer.current.style.width = `${size}px`;
    flyer.current.style.height = `${size * 386 / 640}px`;
    const end = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    const start = { x: w + size / 2, y: h * .52 };
    const c1 = { x: w * .48, y: h * .02 };
    const c2 = { x: Math.max(110, end.x + w * .22), y: Math.min(h * .7, end.y + 210) };
    const frames: Keyframe[] = [];
    // Sample one continuous cubic curve: no direction jumps between waypoints.
    for (let i = 0; i <= 240; i++) {
      const t = i / 240;
      const u = 1 - t;
      const x = u ** 3 * start.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t ** 3 * end.x;
      const y = u ** 3 * start.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t ** 3 * end.y;
      const envelope = Math.sin(Math.PI * t);
      const bank = -18 * Math.sin(2 * Math.PI * t);
      const flutter = 5 * Math.sin(t * Math.PI * 12) * envelope;
      const landing = Math.max(0, (t - .65) / .35);
      const smooth = landing * landing * (3 - 2 * landing);
      const scale = 1 - smooth * (1 - (rect.width - 16) / size);
      frames.push({ transform: `translate3d(${x - size / 2}px, ${y - size * 386 / 1280 + flutter}px, 0) rotate(${bank}deg) scale(${scale})`, offset: t });
    }
    const animation = flyer.current.animate(frames, { duration: 5600, easing: "cubic-bezier(.12,.35,.25,1)", fill: "forwards" });
    const finish = () => setFlying(false);
    animation.onfinish = finish;

    window.addEventListener("resize", finish, { once: true });
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    preference.addEventListener("change", finish);
    return () => {
      animation.cancel();

      window.removeEventListener("resize", finish);
      preference.removeEventListener("change", finish);
    };
  }, [flying]);

  return <>
    <svg width="0" height="0" className="lung-ink-filter" aria-hidden="true"><defs><filter id={filterId} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.52  0 0 0 0 0.65  -1 0 0 0 1" /></filter></defs></svg>
    <span ref={target} className={`lung-mark ${compact ? "lung-mark-compact" : "lung-mark-hero"} ${flying ? "lung-mark-awaiting" : ""}`} role="img" aria-label="Smart Lung Physio lung and butterfly emblem">
      <Wings filterId={filterId} />
    </span>
    {flying && createPortal(<div ref={flyer} className="lung-butterfly-flight" aria-hidden="true"><Wings filterId={filterId} /></div>, document.body)}
  </>;
}
