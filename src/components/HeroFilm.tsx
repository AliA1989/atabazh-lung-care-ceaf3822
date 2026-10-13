import { useEffect, useRef } from "react";
import { publicAsset } from "@/lib/publicAsset";

export default function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => {});
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return (
    <figure className="w-full overflow-hidden rounded-xl border border-white/15 bg-[#071321]">
      <video ref={videoRef} controls muted loop playsInline preload="metadata"
        poster={publicAsset("media/smart-lung-hero-poster.webp")}
        className="aspect-video w-full object-contain"
        aria-label="Smart Lung Physio device concept and physical prototype footage">
        <source src={publicAsset("media/smart-lung-hero-film.mp4")} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <figcaption className="px-4 py-3 text-xs leading-5 text-slate-300">
        Smart Lung Physio™ · Design concept & prototype footage. Interface values are illustrative.
      </figcaption>
    </figure>
  );
}
