import { NavLink } from "@/components/NavLink";

const sections = [
  {
    title: "1. Scope",
    body: (
      <p>
        This policy explains how Atabazh Medical Inc. ("Atabazh Medical," "we," "us") handles personal information received through website-enabled email and related business communications. It does not govern information collected in a future clinical study, device pilot, employment process, or regulated healthcare service; those activities would require separate notices and controls.
      </p>
    ),
  },
  {
    title: "2. Information we collect",
    body: (
      <div className="space-y-3">
        <p>When you email us, we may receive your name, business email, telephone number, organization, professional role, inquiry type, message, and correspondence history. The website form prepares an email draft in your own email application and does not submit the form to a third-party form processor.</p>
        <p>Our hosting and security providers may also process basic technical information such as IP address, browser type, device type, requested pages, timestamps, and security logs.</p>
        <p className="font-medium text-slate-800">Do not submit patient names, health-card numbers, medical records, or other identifiable health information through the website form.</p>
      </div>
    ),
  },
  {
    title: "3. Why we use information",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>to respond to your inquiry and arrange requested follow-up;</li>
        <li>to assess potential research, technical, commercial, or pilot-readiness collaboration;</li>
        <li>to maintain business records, protect the website, prevent abuse, and meet legal obligations; and</li>
        <li>to send updates only where you have requested them or applicable law otherwise permits.</li>
      </ul>
    ),
  },
  {
    title: "4. Consent and choices",
    body: (
      <p>
        By choosing to send an email, you consent to our use of the information for the purposes described at the point of contact and in this policy. You may withdraw consent for optional future communications at any time, subject to legal or contractual restrictions, by contacting us.
      </p>
    ),
  },
  {
    title: "5. Service providers and transfers",
    body: (
      <p>
        We use service providers for website hosting, security, and corporate email. Our hosting providers may process technical logs, while your email provider and our corporate email provider process correspondence according to their respective terms and privacy practices. Some providers may operate outside your province or Canada, where local laws may apply. We do not sell personal information or share it for third-party advertising.
      </p>
    ),
  },
  {
    title: "6. Retention and safeguards",
    body: (
      <p>
        We keep contact information only as long as reasonably needed for the inquiry, an ongoing business relationship, legitimate recordkeeping, dispute prevention, or legal requirements. We use administrative and technical safeguards appropriate to the sensitivity of the information, but no internet transmission or storage system can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: "7. Access, correction, and complaints",
    body: (
      <p>
        You may request access to, correction of, or deletion of personal information under our control, subject to applicable exceptions. You may also ask how your information has been used or disclosed, or raise a privacy concern. We may need to verify your identity before responding.
      </p>
    ),
  },
  {
    title: "8. Cookies, links, and changes",
    body: (
      <p>
        This website does not currently use advertising cookies. Essential hosting or interface technologies may be used for security and basic functionality. External websites are governed by their own privacy practices. We may update this policy as our website or practices change; the effective date below identifies the current version.
      </p>
    ),
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-[#f8fafc] px-6 pb-24 pt-32 text-slate-950 sm:px-8 lg:px-12">
    <article className="container mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Legal</p>
      <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Effective August 1, 2026</p>
      <p className="mt-8 text-base leading-relaxed text-slate-600">
        Atabazh Medical is committed to handling website contact information transparently and proportionately. This policy is designed around the privacy principles that apply to Canadian private-sector organizations.
      </p>

      <div className="mt-10 space-y-9 text-sm leading-7 text-slate-600 sm:text-base">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-bold text-slate-900">{section.title}</h2>
            {section.body}
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">Privacy contact</h2>
        <p className="mt-2 text-slate-600">
          Privacy Lead, Atabazh Medical Inc.<br />
          Ontario, Canada<br />
          <a className="font-semibold text-blue-700 underline underline-offset-4" href="mailto:support@atabazh-med.com">support@atabazh-med.com</a>
        </p>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        See also our <NavLink className="font-semibold text-blue-700 underline underline-offset-4" to="/terms">Website Terms</NavLink>.
      </p>
    </article>
  </div>
);

export default PrivacyPolicy;
