import { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/publicAsset";

const ProductFilm = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prefersReducedMotion) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMutedState = !video.muted;
    video.muted = nextMutedState;
    setIsMuted(nextMutedState);

    if (video.paused) {
      void video.play();
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#d9d9d9] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)] sm:rounded-[2rem]">
        <video
          ref={videoRef}
          className="h-full w-full cursor-pointer object-cover"
          src={publicAsset("media/smart-lung-physio-concept-film.mp4")}
          poster={publicAsset("media/smart-lung-physio-concept-poster.webp")}
          preload="metadata"
          autoPlay
          playsInline
          muted={isMuted}
          loop
          role="button"
          tabIndex={0}
          aria-pressed={!isMuted}
          aria-label={isMuted ? "Play background music" : "Mute background music"}
          onClick={toggleMusic}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              toggleMusic();
            }
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between bg-gradient-to-b from-slate-950/55 to-transparent p-4 text-white sm:p-6">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-md sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Product in motion
          </div>
          <span className="rounded-full border border-white/20 bg-slate-950/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-md sm:text-[10px]">
            Sound {isMuted ? "off" : "on"}
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent px-4 pb-4 pt-14 text-white sm:px-6 sm:pb-6">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] sm:text-sm">Smart Lung Physio™</span>
          <span className="mt-1 block text-[9px] font-medium text-slate-200 sm:text-[11px]">
            Product visualization informed by our functional prototype
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilm;
