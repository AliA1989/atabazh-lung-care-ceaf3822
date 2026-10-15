import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { publicAsset } from "@/lib/publicAsset";
import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

// Optimized approved media is served as separate files.
const media = (name: string) => publicAsset(`media/hero-review/${name}`);

export default function HeroFilm({ open }: { open: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => setMotionAllowed(!reduced.matches && desktop.matches);
    update();
    reduced.addEventListener("change", update);
    desktop.addEventListener("change", update);
    return () => {
      reduced.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!motionAllowed || open || pausedByUser) videoRef.current?.pause();
    else void videoRef.current?.play().catch(() => setPlaying(false));
  }, [motionAllowed, open, pausedByUser]);

  return (
    <>
      <figure className="w-full overflow-hidden rounded-2xl border border-[#d2e4ea] bg-[#071321] shadow-[0_24px_60px_-35px_rgba(16,40,63,0.45)] ring-1 ring-slate-200/80">
        <div className="relative aspect-video">
          {motionAllowed ? (
            <video ref={videoRef} muted loop playsInline preload="metadata"
              poster={media("poster.webp")} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
              className="aspect-video w-full object-contain" aria-label="Silent Smart Lung Physio branding and illustrative airway animation">
              <source src={media("loop.webm")} type="video/webm" />
              <source src={media("loop.mp4")} type="video/mp4" />
            </video>
          ) : (
            <img src={media("poster.webp")} width={960} height={540} alt="Smart Lung Physio branding and illustrative airway artwork" className="aspect-video w-full object-contain" />
          )}
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
          <div>
            <p className="text-sm font-medium text-white">Smart Lung Physio™</p>
            <p className="mt-1 text-xs text-slate-400">Airway-clearance technology</p>
          </div>
          <div className="flex items-center gap-2">
            {motionAllowed && <button type="button" onClick={() => {
              setPausedByUser(playing);
              if (playing) videoRef.current?.pause();
              else void videoRef.current?.play().catch(() => setPlaying(false));
            }} className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300" aria-label={playing ? "Pause silent preview" : "Play silent preview"}>
              {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
            </button>}

          </div>
        </figcaption>
      </figure>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border-white/20 bg-[#071321] p-5 text-white motion-reduce:!animate-none [&>button]:min-h-11 [&>button]:min-w-11">
        <DialogTitle className="pr-12">The Smart Lung Physio story</DialogTitle>
        <DialogDescription className="pr-10 text-slate-300">Discover the story behind Smart Lung Physio. Press Play to watch with sound. Captions are included in the film.</DialogDescription>
        {/* Mounted only while open; no autoplay. Unmounting stops audio on close. */}
        {open && <video controls playsInline preload="metadata" poster={media("poster.webp")} className="aspect-video w-full rounded-lg" aria-label="Complete Smart Lung Physio promotional film, 39 seconds">
          <source src={publicAsset("media/smart-lung-full-story.mp4")} type="video/mp4" />
          Your browser does not support this video.
        </video>}
      </DialogContent>
    </>
  );
}
