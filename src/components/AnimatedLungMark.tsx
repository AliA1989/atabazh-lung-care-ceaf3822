import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { publicAsset } from "@/lib/publicAsset";
import "./AnimatedLungMark.css";

type AnimatedLungMarkProps = { compact?: boolean };

function Wings() {
  const source = publicAsset("media/smart-lung-butterfly-mark.webp");
  return <span className="lung-mark-plane" aria-hidden="true">
    <img className="lung-mark-left" src={source} alt="" width={640} height={386} />
    <img className="lung-mark-centre" src={source} alt="" width={640} height={386} />
    <img className="lung-mark-right" src={source} alt="" width={640} height={386} />
  </span>;
}

export default function AnimatedLungMark({ compact = false }: AnimatedLungMarkProps) {
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
    const endX = rect.left + rect.width / 2 - 90;
    const endY = rect.top + rect.height / 2 - 56;
    const pose = (x: number, y: number, angle: number, scale: number) =>
      `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg) scale(${scale})`;
    const animation = flyer.current.animate([
      { transform: pose(w + 200, h * .58, -24, .7), offset: 0 },
      { transform: pose(w * .64, h * .28, -20, 1.1), offset: .26 },
      { transform: pose(w * .40, h * .13, 12, 1.22), offset: .48 },
      { transform: pose(w * .24, h * .30, 22, 1), offset: .67 },
      { transform: pose(endX + 30, endY - 38, -12, .8), offset: .86 },
      { transform: pose(endX, endY, 0, (rect.width - 16) / 180), offset: 1 },
    ], { duration: 4600, easing: "ease-in-out", fill: "forwards" });
    const finish = () => setFlying(false);
    animation.onfinish = finish;
    // Land immediately if the visitor starts navigating the page.
    window.addEventListener("scroll", finish, { passive: true, once: true });
    window.addEventListener("resize", finish, { once: true });
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    preference.addEventListener("change", finish);
    return () => {
      animation.cancel();
      window.removeEventListener("scroll", finish);
      window.removeEventListener("resize", finish);
      preference.removeEventListener("change", finish);
    };
  }, [flying]);

  return <>
    <span ref={target} className={`lung-mark ${compact ? "lung-mark-compact" : "lung-mark-hero"} ${flying ? "lung-mark-awaiting" : ""}`} role="img" aria-label="Smart Lung Physio lung and butterfly emblem">
      <Wings />
    </span>
    {flying && createPortal(<div ref={flyer} className="lung-butterfly-flight" aria-hidden="true"><Wings /></div>, document.body)}
  </>;
}
