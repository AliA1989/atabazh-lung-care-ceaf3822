import { useId } from "react";
import { publicAsset } from "@/lib/publicAsset";
import "./AnimatedLungMark.css";

type AnimatedLungMarkProps = { compact?: boolean };

export default function AnimatedLungMark({ compact = false }: AnimatedLungMarkProps) {
  const filterId = useId().replace(/:/g, "");
  return <>
    <svg width="0" height="0" className="lung-ink-filter" aria-hidden="true">
      <defs><filter id={filterId} colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.52  0 0 0 0 0.65  -1 0 0 0 1" />
      </filter></defs>
    </svg>
    <img
      className={`lung-mark ${compact ? "lung-mark-compact" : "lung-mark-hero"}`}
      src={publicAsset("media/smart-lung-butterfly-mark.webp")}
      alt="Smart Lung Physio lung and butterfly emblem"
      width={640}
      height={386}
      style={{ filter: `url(#${filterId})` }}
    />
  </>;
}
