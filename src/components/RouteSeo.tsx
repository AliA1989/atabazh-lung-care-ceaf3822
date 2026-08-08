import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.atabazh.com";
const DEFAULT_IMAGE = `${SITE_URL}/media/atabazh-social-card.webp`;

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Atabazh Medical | Smart Lung Physio™",
    description:
      "Smart Lung Physio™ is a physical airway-clearance medical device under development, combining localized mechanical chest percussion with sensing, guidance, and session documentation.",
  },
  "/device": {
    title: "Smart Lung Physio™ Device | Atabazh Medical",
    description:
      "Explore the Smart Lung Physio™ physical device, localized mechanical chest percussion, sensing architecture, caregiver guidance, and documentation concepts.",
  },
  "/clinical-evidence": {
    title: "Evidence & Development | Atabazh Medical",
    description:
      "Review Atabazh Medical's stakeholder discovery, prototype learning, validation workstreams, and pilot-readiness planning.",
  },
  "/long-term-care": {
    title: "Smart Lung Physio™ for Long-Term Care | Atabazh Medical",
    description:
      "See what an LTC pilot of Smart Lung Physio™ could evaluate, including workflow fit, usability, documentation, and technical performance.",
  },
  "/about": {
    title: "About Atabazh Medical",
    description:
      "Meet the Atabazh Medical team developing a sensor-guided physical airway-clearance device for supervised care settings.",
  },
  "/news": {
    title: "News & Resources | Atabazh Medical",
    description: "Company updates, development milestones, and resources from Atabazh Medical.",
  },
  "/contact": {
    title: "Contact Atabazh Medical",
    description:
      "Contact Atabazh Medical about clinical workflow research, technical review, long-term care fit, or pilot-readiness collaboration.",
  },
  "/privacy": {
    title: "Privacy Policy | Atabazh Medical",
    description: "How Atabazh Medical collects, uses, protects, and provides access to website contact information.",
  },
  "/terms": {
    title: "Website Terms | Atabazh Medical",
    description: "Terms governing use of the Atabazh Medical website and its product-development information.",
  },
};

const upsertMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname];
    const title = metadata?.title ?? "Page Not Found | Atabazh Medical";
    const description = metadata?.description ?? "The requested page could not be found.";
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", metadata ? "index, follow" : "noindex, nofollow");
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "Atabazh Medical");
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "atabazh-organization-schema";
    const existingSchema = document.getElementById(schemaId);
    if (pathname === "/") {
      const schema = existingSchema ?? document.createElement("script");
      schema.id = schemaId;
      schema.setAttribute("type", "application/ld+json");
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Atabazh Medical Inc.",
        alternateName: "Atabazh Med",
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        sameAs: ["https://www.linkedin.com/company/atabazh-medical-inc"],
      });
      if (!existingSchema) document.head.appendChild(schema);
    } else {
      existingSchema?.remove();
    }
  }, [pathname]);

  return null;
};

export default RouteSeo;
