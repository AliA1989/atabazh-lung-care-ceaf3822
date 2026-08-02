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
      <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-blue-200/45 blur-3xl" />
      <div className="rounded-[1.4rem] border border-slate-200/90 bg-white p-2 shadow-[0_30px_80px_-38px_rgba(15,23,42,0.45)] sm:rounded-[1.8rem] sm:p-2.5">
        <div className="relative aspect-video overflow-hidden rounded-[1rem] bg-[#dedede] sm:rounded-[1.3rem]">
          <video
            ref={videoRef}
            className="h-full w-full cursor-pointer object-cover saturate-[0.94]"
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
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-950/5" />
          <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-lg border border-white/15 bg-slate-950/85 px-3 py-2 text-right text-white shadow-lg backdrop-blur-md sm:bottom-4 sm:right-4">
            <span className="block text-[9px] font-bold uppercase tracking-[0.16em] sm:text-[10px]">Concept Film</span>
            <span className="mt-0.5 block text-[8px] font-medium tracking-normal text-slate-200 sm:text-[9px]">
              Based on our functional prototype
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilm;
