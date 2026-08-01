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
    <section
      aria-labelledby="product-film-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[hsl(204,45%,97%)] to-[hsl(202,42%,96%)] px-5 py-14 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/15 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-11">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            Product concept film
          </span>
          <h2
            id="product-film-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            See Smart Lung Physio™ in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A visual introduction to sensor-guided airway-clearance support designed around supervised care workflows.
          </p>
        </div>

        <div
          ref={frameRef}
          className="group relative aspect-video overflow-hidden rounded-2xl border border-white/80 bg-slate-950 shadow-[0_34px_80px_-34px_rgba(15,23,42,0.45)] ring-1 ring-slate-900/5 sm:rounded-[2rem]"
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
            Concept visualization
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between sm:inset-x-6 sm:bottom-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlayback}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isPlaying ? "Pause product film" : "Play product film"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={toggleSound}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isMuted ? "Turn sound on" : "Mute product film"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <span className="ml-1 hidden text-xs font-medium tracking-wide text-white/85 sm:inline">00:10</span>
            </div>

            <button
              type="button"
              onClick={openFullscreen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="View product film fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
          Product concept visualization. Smart Lung Physio™ is a medical device under development. Features and interface shown are illustrative and subject to validation and regulatory review.
        </p>
      </div>
    </section>
  );
};

export default ProductFilm;
