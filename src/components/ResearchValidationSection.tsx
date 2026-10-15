import {
  ClipboardList,
  Users,
  ShieldCheck,
  Wrench,
  Handshake,
  BriefcaseBusiness,
} from "lucide-react";

const pathways = [
  {
    short: "McG",
    name: "McGill student placement",
    brandName: "McGill",
    brandSub: "Student Placement",
    brandTone: "text-red-700",
    category: "Pilot Readiness & Evidence",
    icon: ClipboardList,
    badgeTone: "bg-red-50 text-red-700",
    description:
      "Evidence-package preparation focused on intended use, workflow definition, stakeholder context, and pilot-readiness planning.",
    deliverables: [
      "Intended Use Definition",
      "Workflow Mapping",
      "Stakeholder Analysis",
      "QA & Regulatory Gap Review",
      "Pilot Readiness Planning",
    ],
  },
  {
    short: "ASU",
    name: "Arizona State University",
    brandName: "ASU",
    brandSub: "Arizona State University",
    brandTone: "text-[#8c1d40]",
    category: "Usability & Human Factors",
    icon: Users,
    badgeTone: "bg-rose-50 text-rose-700",
    description:
      "Human-factors workstreams exploring caregiver workflow, usability, ergonomic fit, and practical use in care settings.",
    deliverables: [
      "Caregiver Workflow Analysis",
      "Human Factors Research",
      "Usability Testing",
      "Ergonomic Assessment",
    ],
  },
  {
    short: "NEU",
    name: "Northeastern University Toronto",
    brandName: "Northeastern",
    brandSub: "University Toronto",
    brandTone: "text-red-700",
    category: "Regulatory Pathway & Quality Planning",
    icon: ShieldCheck,
    badgeTone: "bg-red-50 text-red-700",
    description:
      "Regulatory pathway planning focused on assessment, documentation structure, quality-system needs, and future submission requirements.",
    deliverables: [
      "Regulatory Strategy",
      "Documentation Framework",
      "Health Canada Pathway Planning",
      "Quality Planning",
    ],
  },
  {
    short: "TMU",
    name: "Toronto Metropolitan University",
    brandName: "Toronto Metropolitan",
    brandSub: "University",
    brandTone: "text-[#006bb6]",
    category: "Device & Tech Refinement",
    icon: Wrench,
    badgeTone: "bg-blue-50 text-blue-700",
    description:
      "Engineering-focused development work supporting prototype refinement, technical review, and iterative device improvement.",
    deliverables: [
      "Mechanical Design",
      "Prototyping",
      "Engineering Testing",
      "Iterative Refinement",
    ],
  },
  {
    short: "VM",
    name: "VentureMatch",
    brandName: "VentureMatch",
    brandSub: "Placements",
    brandTone: "text-slate-950",
    category: "Workflow & User Need Insights",
    icon: Handshake,
    badgeTone: "bg-amber-50 text-amber-700",
    description:
      "Discovery activities capturing care-team needs, workflow constraints, clinical context, and early market assumptions.",
    deliverables: [
      "Workflow Analysis",
      "100+ Stakeholder Interviews",
      "User Need Review",
      "Care-Team Feedback",
    ],
  },
  {
    short: "McM",
    name: "McMaster University (L2M)",
    brandName: "McMaster",
    brandSub: "Lab2Market Validate",
    brandTone: "text-[#6f6145]",
    category: "Customer Discovery & Venture Validation",
    icon: BriefcaseBusiness,
    badgeTone: "bg-yellow-50 text-yellow-700",
    description:
      "Market-validation activities focused on customer discovery, value proposition fit, commercialization insight, and early adoption pathways.",
    deliverables: [
      "Customer Discovery",
      "Value Proposition Validation",
      "Market Validation",
      "Commercialization Insights",
    ],
  },
];

const ResearchValidationSection = () => (
  <section className="company-section bg-white">
    <div className="company-container">
      <p className="company-eyebrow">Development contributions</p>
      <h2 className="company-heading mt-4">
        Specialist input across the program
      </h2>
      <p className="mt-5 max-w-3xl text-slate-600">
        Academic projects, placements, and commercialization programs contribute
        to specific development activities. Atabazh coordinates these inputs
        within its product-development work.
      </p>
      <div className="mt-8 grid gap-x-10 md:grid-cols-2">
        {pathways.map((item) => (
          <article key={item.name} className="border-t border-slate-200 py-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#164d69]">
              {item.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-4 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
        These connections describe development and program activities, not
        institutional endorsement, clinical validation, or regulatory approval
        of Smart Lung Physio™.
      </p>
    </div>
  </section>
);
export default ResearchValidationSection;
