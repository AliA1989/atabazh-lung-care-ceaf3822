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
          <div className="pointer-events-none absolute bottom-0 right-0 z-10 min-w-[13rem] rounded-tl-xl border-l border-t border-white/15 bg-[#0b1b2f] px-4 py-3 text-left text-white shadow-[-12px_-12px_30px_-18px_rgba(15,23,42,0.8)] sm:min-w-[17rem] sm:px-5 sm:py-4">
            <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-sky-300 sm:text-[9px]">Product visualization</span>
            <span className="mt-1 block text-[10px] font-semibold tracking-normal text-white sm:text-xs">
              Based on our functional prototype
            </span>
          </div>
        </div>
        <p className="px-2 pb-1 pt-2 text-[9px] font-medium leading-4 text-slate-500 sm:px-3 sm:text-[10px]">
          Interface values shown in the film are illustrative and do not represent clinical recommendations or validated treatment thresholds.
        </p>
      </div>
    </div>
  );
};

export default ProductFilm;
