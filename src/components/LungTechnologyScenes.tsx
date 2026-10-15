import { publicAsset } from "@/lib/publicAsset";

/** Three independent compositions share one stable frame; no treatment response is animated. */
export default function LungTechnologyScenes({
  active,
  id,
}: {
  active: number;
  id: string;
}) {
  return (
    <div className="lung-explainer__scenes">
      <div
        className="lung-explainer__scene lung-explainer__challenge"
        aria-hidden={active !== 0}
        data-active={active === 0}
      >
        <p className="lung-explainer__scene-title">
          A closer look inside the airway
        </p>
        <div className="lung-explainer__airway-study">
          <svg
            className="lung-explainer__locator"
            viewBox="90 60 460 420"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id={`${id}-glow`}>
                <stop offset="0" stopColor="#37c3c9" stopOpacity=".22" />
                <stop offset="1" stopColor="#37c3c9" stopOpacity="0" />
              </radialGradient>
              <radialGradient id={`${id}-surface`} cx="42%" cy="36%" r="70%">
                <stop offset="0" stopColor="#50b5b7" stopOpacity=".42" />
                <stop offset=".65" stopColor="#167080" stopOpacity=".25" />
                <stop offset="1" stopColor="#051924" stopOpacity=".85" />
              </radialGradient>
            </defs>
            <g
              className="lung-explainer__gridlines"
              stroke="#5e9daa"
              strokeWidth=".7"
            >
              <path d="M50 100H590 M50 180H590 M50 260H590 M50 340H590 M50 420H590 M110 65V480 M210 65V480 M320 65V480 M430 65V480 M530 65V480" />
            </g>
            <circle cx="320" cy="278" r="230" fill={`url(#${id}-glow)`} />
            <circle
              cx="320"
              cy="278"
              r="183"
              fill="none"
              stroke="#3f7b87"
              strokeOpacity=".25"
              strokeDasharray="3 11"
            />
            <g transform="translate(0 4)">
              <path
                className="lung-explainer__lung"
                fill={`url(#${id}-surface)`}
                d="M302 155C277 119 249 112 216 123C177 137 156 178 143 236C129 304 120 370 136 417C147 446 181 459 224 453C267 444 296 407 300 362C305 304 303 209 302 155Z"
              />
              <path
                className="lung-explainer__lung"
                fill={`url(#${id}-surface)`}
                d="M338 155C363 119 391 112 424 123C463 137 484 178 497 236C511 304 520 370 504 417C493 446 459 459 416 453C373 444 351 410 351 372C351 341 371 326 368 301C365 279 343 276 338 253C335 222 337 185 338 155Z"
              />
              <g className="lung-explainer__detail" fill="none">
                {/* Anterior schematic: patient's right has three lobes; left has two. */}
                <path
                  className="lung-explainer__fissure"
                  d="M155 269Q221 282 289 257M277 265Q235 335 137 378M350 265Q409 323 503 363"
                />
                <path
                  className="lung-explainer__trachea"
                  d="M312 94h16m-16 12h16m-16 12h16m-16 12h16m-16 12h16m-16 12h16"
                />
                <path
                  className="lung-explainer__bronchiole"
                  d="M221 193q-25-7-35 7m20-29-16-7M201 273q-21 14-30 4m21 55q-19-14-28-7m38 81-20 2m44-27-3 29m40-37 14 17M419 193q25-7 35 7m-20-29 16-7M439 273q21 14 30 4m-21 55q19-14 28-7m-38 81 20 2m-44-27 3 29m-40-37-14 17"
                />
              </g>
              <path
                className="lung-explainer__airway"
                d="M320 81V174C320 194 311 197 291 211L250 239 M320 174C320 194 329 197 349 211L390 239"
              />
              <path
                className="lung-explainer__twig"
                d="M277 222Q262 200 221 193M277 222Q246 265 201 273M250 239Q237 306 192 332M235 283Q265 328 263 373M255 317Q238 382 202 406M363 222Q378 200 419 193M363 222Q394 265 439 273M390 239Q403 306 448 332M405 283Q375 328 377 373M385 317Q402 382 438 406"
              />
              <path
                className="lung-explainer__twig"
                d="M220 193l-13-23M201 273l-22-14M192 332l-20 5M263 373l-17 31M419 193l13-23M439 273l22-14M448 332l20 5M377 373l17 31"
              />
            </g>
            <g className="lung-explainer__mucus">
              <path d="M244 239q5-8 12-3t4 11q-4 7-11 4t-5-12ZM234 254q5-6 10-2t1 10q-7 6-11 0t0-8ZM227 300q5-5 10 0t0 10q-6 3-10-2t0-8ZM387 237q6-8 12-2t5 12q-5 5-12 1t-5-11ZM401 258q4-5 9-1t0 10q-7 3-9-3t0-6ZM405 305q5-6 10 0t-1 10q-7 2-9-4t0-6Z" />
            </g>
          </svg>
          <svg
            className="lung-explainer__cross-section"
            viewBox="185 0 365 340"
            role="img"
            aria-labelledby={`${id}-airway-title`}
            aria-describedby={`${id}-airway-desc`}
          >
            <title id={`${id}-airway-title`}>
              Bronchial airway cross-section with mucus along its inner wall
            </title>
            <desc id={`${id}-airway-desc`}>
              An enlarged schematic cross-section. Amber mucus forms an uneven
              lining around a clearly open central airway. This is not a
              measurement of obstruction or a depiction of treatment.
            </desc>
            <defs>
              <radialGradient id={`${id}-wall`} cx="35%" cy="28%" r="78%">
                <stop stopColor="#7fbdb5" />
                <stop offset=".38" stopColor="#315d64" />
                <stop offset=".72" stopColor="#183944" />
                <stop offset="1" stopColor="#0a202e" />
              </radialGradient>
              <radialGradient id={`${id}-lumen`} cx="42%" cy="42%">
                <stop stopColor="#05121d" />
                <stop offset=".75" stopColor="#081d28" />
                <stop offset="1" stopColor="#16313b" />
              </radialGradient>
              <linearGradient id={`${id}-mucus`} x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f0d1a1" />
                <stop offset=".45" stopColor="#c59660" />
                <stop offset="1" stopColor="#80613f" />
              </linearGradient>
              <radialGradient id={`${id}-study-glow`}>
                <stop stopColor="#55bcb8" stopOpacity=".2" />
                <stop offset="1" stopColor="#55bcb8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              className="lung-explainer__ambient"
              cx="350"
              cy="171"
              r="161"
              fill={`url(#${id}-study-glow)`}
            />
            <path
              className="lung-explainer__locator-link"
              d="M140 178H157L202 132H231"
              fill="none"
              stroke="#82b4bc"
              strokeDasharray="3 6"
            />
            <circle
              className="lung-explainer__locator-link"
              cx="140"
              cy="178"
              r="13"
              fill="none"
              stroke="#edc38b"
            />
            <circle
              cx="350"
              cy="171"
              r="133"
              fill={`url(#${id}-wall)`}
              stroke="#719b9f"
              strokeWidth="1.2"
            />
            <circle
              cx="350"
              cy="171"
              r="119"
              fill="none"
              stroke="#8dafaa"
              strokeOpacity=".25"
              strokeWidth="6"
            />
            <circle
              cx="350"
              cy="171"
              r="109"
              fill={`url(#${id}-lumen)`}
              stroke="#c8b18c"
              strokeOpacity=".7"
              strokeWidth="2"
            />
            <g stroke="#9cbbb5" strokeWidth="1.2" opacity=".65">
              {Array.from({ length: 52 }, (_, i) => (
                <path
                  key={i}
                  d="M350 64l2 7"
                  transform={`rotate(${(i * 360) / 52} 350 171)`}
                />
              ))}
            </g>
            <path
              d="M245 145C252 101 292 65 337 63C382 60 418 83 440 111C420 98 410 112 398 108C379 101 380 89 356 92C336 95 333 81 312 93C295 103 295 120 276 122C261 124 258 139 245 145Z"
              fill={`url(#${id}-mucus)`}
              stroke="#ebc38f"
              strokeWidth="1.2"
            />
            <path
              d="M421 245C398 270 367 282 335 278C310 275 289 268 274 249C296 263 302 248 321 250C341 253 344 265 364 259C383 252 401 258 421 245Z"
              fill={`url(#${id}-mucus)`}
              stroke="#c9a778"
            />
            <path
              d="M270 111Q293 75 330 75M337 270Q370 278 396 263"
              fill="none"
              stroke="#ffe2b9"
              strokeOpacity=".5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M349 80L349 28H430M461 191H511V235"
              fill="none"
              stroke="#b8cfd2"
              strokeWidth="1"
            />
            <circle cx="349" cy="80" r="3" fill="#f1ce9e" />
            <circle cx="461" cy="191" r="3" fill="#a5d3cf" />
            <text x="438" y="33" fill="#f1ce9e" fontSize="15">
              Mucus
            </text>
            <text
              x="492"
              y="254"
              fill="#c7dddf"
              fontSize="15"
              textAnchor="middle"
            >
              Wall
            </text>
            <text
              x="350"
              y="172"
              fill="#dcebea"
              fontSize="18"
              textAnchor="middle"
            >
              Open airway
            </text>
            <text
              x="350"
              y="195"
              fill="#a7c6cc"
              fontSize="13"
              textAnchor="middle"
            >
              lumen
            </text>
          </svg>
        </div>
        <div className="lung-explainer__study-key">
          <span>
            <i /> Mucus accumulation
          </span>
          <span>Enlarged schematic · Not to scale</span>
        </div>
      </div>

      <div
        className="lung-explainer__scene lung-explainer__design"
        aria-hidden={active !== 1}
        data-active={active === 1}
      >
        <p className="lung-explainer__scene-title">
          From the challenge to a handheld design
        </p>
        <div className="lung-explainer__design-layout">
          <div className="lung-explainer__product-stage">
            <div className="lung-explainer__product-halo" aria-hidden="true" />
            <img
              className="lung-explainer__product"
              src={publicAsset("media/smart-lung-scroll-render.webp")}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              alt="Smart Lung Physio device design concept with a handheld body and contact head"
            />
            <span className="lung-explainer__product-label">
              Smart Lung Physio™<small>Device design concept</small>
            </span>
          </div>
          <div className="lung-explainer__placement">
            <span className="lung-explainer__micro-label">CHEST CONTACT</span>
            <svg
              viewBox="0 0 250 280"
              role="img"
              aria-labelledby={`${id}-placement-title`}
              aria-describedby={`${id}-placement-desc`}
            >
              <title id={`${id}-placement-title`}>
                Conceptual relationship between the handheld device and the
                chest
              </title>
              <desc id={`${id}-placement-desc`}>
                The approved device render is shown beside an abstract torso,
                with the contact head near the chest. This conceptual placement
                illustration is not an instruction for use or a recommended
                treatment location.
              </desc>
              <defs>
                <linearGradient id={`${id}-torso`}>
                  <stop stopColor="#26505d" />
                  <stop offset=".5" stopColor="#346f75" stopOpacity=".6" />
                  <stop offset="1" stopColor="#102f3d" />
                </linearGradient>
              </defs>
              <path
                d="M119 15L119 42Q111 53 87 58Q63 62 56 93L43 187L62 194L82 123L87 259Q150 275 212 259L217 123L231 194L247 187L239 94Q233 63 208 58Q185 54 177 42L177 15"
                fill={`url(#${id}-torso)`}
                stroke="#73b2b7"
                strokeWidth="1.3"
              />
              <path
                d="M119 42Q149 71 177 42M97 79Q119 69 146 85Q177 68 201 79M149 88V207"
                stroke="#76aeb0"
                strokeOpacity=".4"
                fill="none"
              />
              <ellipse
                cx="105"
                cy="130"
                rx="17"
                ry="24"
                fill="#90e1d5"
                fillOpacity=".1"
                stroke="#90e1d5"
                strokeDasharray="3 5"
              />
              <image
                href={publicAsset("media/smart-lung-scroll-render.webp")}
                x="-7"
                y="94"
                width="123"
                height="164"
              />
              <path d="M121 130H179" stroke="#b4d4d3" strokeDasharray="2 5" />
            </svg>
            <p>
              Placement concept<small>Not instructions for use</small>
            </p>
          </div>
        </div>
      </div>

      <div
        className="lung-explainer__scene lung-explainer__feedback"
        aria-hidden={active !== 2}
        data-active={active === 2}
      >
        <p className="lung-explainer__scene-title">
          A connected view for the caregiver
        </p>
        <div className="lung-explainer__data-path">
          <img
            src={publicAsset("media/smart-lung-scroll-render.webp")}
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            alt=""
          />
          <span>
            Device<small>Contact & orientation</small>
          </span>
          <svg viewBox="0 0 100 20" aria-hidden="true">
            <path d="M0 10H98" stroke="#6babae" strokeDasharray="2 7" />
            <path
              className="lung-explainer__signal"
              d="M0 10H98"
              pathLength="1"
              stroke="#b2ffeb"
              strokeWidth="2"
            />
            <path d="m91 5 7 5-7 5" fill="none" stroke="#b2ffeb" />
          </svg>
          <span>
            Caregiver<small>Interface concept</small>
          </span>
        </div>
        <div className="lung-explainer__interface">
          <div className="lung-explainer__interface-label">
            <span>COMPANION INTERFACE</span>
            <strong>Illustrative values</strong>
          </div>
          <img
            src={publicAsset("media/smart-lung-companion-session.webp")}
            width={1200}
            height={883}
            loading="lazy"
            decoding="async"
            alt="Companion interface concept: example applied force 17.5 N, SpO₂ 96%, session time 04:08 and an example trace. Values and coloured ranges are illustrative, not clinical targets."
          />
        </div>
        <div className="lung-explainer__capabilities">
          <p>
            <strong>Prototype sensing</strong>
            <span>Contact force · Orientation</span>
          </p>
          <p>
            <strong>Planned features</strong>
            <span>SpO₂ / heart rate · Session records</span>
          </p>
        </div>
      </div>
    </div>
  );
}
