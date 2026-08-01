import { useEffect, useRef, useState } from "react";
import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";

const ProductFilm = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prefersReducedMotion) {
          void video.play().catch(() => setIsPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMutedState = !video.muted;
    video.muted = nextMutedState;
    setIsMuted(nextMutedState);
  };

  const openFullscreen = () => {
    if (frameRef.current?.requestFullscreen) {
      void frameRef.current.requestFullscreen();
      return;
    }

    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    video?.webkitEnterFullscreen?.();
  };

  return (
    <div className="relative z-[2] mx-auto w-full max-w-[680px]">
      <div className="pointer-events-none absolute inset-8 rounded-[2.5rem] bg-blue-400/20 blur-3xl" />

      <div
        ref={frameRef}
        className="group relative aspect-video overflow-hidden rounded-2xl border border-white/90 bg-slate-950 shadow-[0_32px_70px_-28px_rgba(15,23,42,0.52)] ring-1 ring-slate-900/10 sm:rounded-[1.75rem]"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/media/smart-lung-physio-concept-film.mp4"
          poster="/media/smart-lung-physio-concept-poster.webp"
          preload="metadata"
          playsInline
          muted
          loop
          aria-label="Smart Lung Physio product concept film"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/78 via-slate-950/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute left-3 top-3 rounded-full border border-white/25 bg-slate-950/50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-[11px]">
          Product concept film
        </div>

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between sm:inset-x-5 sm:bottom-5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlayback}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
              aria-label={isPlaying ? "Pause product film" : "Play product film"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={toggleSound}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
              aria-label={isMuted ? "Turn sound on" : "Mute product film"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <span className="ml-1 hidden text-xs font-medium tracking-wide text-white/85 sm:inline">00:10</span>
          </div>

          <button
            type="button"
            onClick={openFullscreen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
            aria-label="View product film fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-3 max-w-xl text-center text-[10px] leading-relaxed text-slate-500 sm:text-xs">
        Concept visualization · Medical device under development · Features shown are illustrative and subject to validation and regulatory review.
      </p>
    </div>
  );
};

export default ProductFilm;
