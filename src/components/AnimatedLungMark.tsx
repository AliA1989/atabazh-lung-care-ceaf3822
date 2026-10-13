import { publicAsset } from "@/lib/publicAsset";
import "./AnimatedLungMark.css";

type AnimatedLungMarkProps = { compact?: boolean };

export default function AnimatedLungMark({ compact = false }: AnimatedLungMarkProps) {
  const source = publicAsset("media/smart-lung-butterfly-mark.webp");
  return (
    <span className={`lung-mark ${compact ? "lung-mark-compact" : "lung-mark-hero"}`} role="img" aria-label="Smart Lung Physio lung and butterfly emblem">
      <span className="lung-mark-plane" aria-hidden="true">
        <img className="lung-mark-left" src={source} alt="" width={640} height={386} />
        <img className="lung-mark-centre" src={source} alt="" width={640} height={386} />
        <img className="lung-mark-right" src={source} alt="" width={640} height={386} />
      </span>
    </span>
  );
}
