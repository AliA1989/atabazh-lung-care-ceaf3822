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
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/60 bg-[#e2e2e2] shadow-[0_20px_50px_-32px_rgba(15,23,42,0.45)] sm:rounded-[1.75rem] lg:rounded-none lg:border-0 lg:shadow-none lg:[mask-image:linear-gradient(to_right,transparent_0%,black_13%,black_100%)]">
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
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 rounded-xl border border-white/15 bg-slate-950/90 px-3 py-2 text-right text-white shadow-lg backdrop-blur sm:bottom-3 sm:right-3">
          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">Concept Film</span>
          <span className="mt-0.5 block text-[8px] font-medium tracking-normal text-slate-200 sm:text-[9px]">
            Based on our functional prototype
          </span>
        </div>
      </div>

    </div>
  );
};

export default ProductFilm;
