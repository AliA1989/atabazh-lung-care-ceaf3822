import { useEffect, useRef, useState } from "react";

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
    <div className="relative z-[2] mx-auto w-full max-w-[760px]">
      <div className="pointer-events-none absolute inset-8 rounded-[2.5rem] bg-blue-400/20 blur-3xl" />

      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/90 bg-slate-950 shadow-[0_32px_70px_-28px_rgba(15,23,42,0.52)] ring-1 ring-slate-900/10 sm:rounded-[1.75rem]">
        <video
          ref={videoRef}
          className="h-full w-full cursor-pointer object-cover"
          src="/media/smart-lung-physio-concept-film.mp4"
          poster="/media/smart-lung-physio-concept-poster.webp"
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
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 rounded-lg border border-white/15 bg-slate-950/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur sm:bottom-3 sm:right-3 sm:text-xs">
          Concept Film
        </div>
      </div>

    </div>
  );
};

export default ProductFilm;
