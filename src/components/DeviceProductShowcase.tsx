import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { publicAsset } from "@/lib/publicAsset";

const DeviceProductShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="container relative mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                Product in motion
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-[2.75rem]">
                A closer look at Smart Lung Physio™
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              A product visualization informed by our functional prototype, highlighting the intended handheld form,
              patient-contact interface, and feedback display.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-blue-100/60 blur-3xl" />
            <div className="relative aspect-video overflow-hidden rounded-2xl border-[8px] border-white bg-[#dedede] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] ring-1 ring-slate-200 sm:rounded-[1.75rem]">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src={publicAsset("media/smart-lung-physio-product-showcase.mp4")}
                poster={publicAsset("media/smart-lung-physio-product-showcase-poster.webp")}
                preload="metadata"
                autoPlay
                playsInline
                muted
                loop
                aria-label="Smart Lung Physio product visualization based on the functional prototype"
              />
              <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                Product visualization
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-slate-700">Based on our functional prototype</p>
            <p className="max-w-2xl sm:text-right">
              Interface details and displayed specifications are illustrative and may evolve during development.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DeviceProductShowcase;
