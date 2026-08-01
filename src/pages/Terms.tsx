import { NavLink } from "@/components/NavLink";

const Terms = () => (
  <div className="min-h-screen px-6 pb-24 pt-32 sm:px-8 lg:px-12">
    <article className="container mx-auto max-w-4xl rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-10 lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Legal</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Website Terms</h1>
      <p className="mt-4 text-sm text-slate-500">Effective August 1, 2026</p>
      <p className="mt-8 text-base leading-relaxed text-slate-600">
        These terms govern use of atabazh.com. By using the website, you agree to these terms. If you do not agree, do not use the website.
      </p>

      <div className="mt-10 space-y-9 text-sm leading-7 text-slate-600 sm:text-base">
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">1. Product-development information only</h2>
          <p>
            Smart Lung Physio™ is a medical device under development. Website descriptions, images, interfaces, specifications, timelines, intended-use concepts, and pilot plans are illustrative, may change, and have not been presented as regulatory clearance or clinical efficacy evidence. Nothing on this website is an offer to sell a medical device.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">2. Not medical advice</h2>
          <p>
            The website does not provide medical advice, diagnosis, treatment, emergency support, or a substitute for professional judgment. Do not use website content to make patient-care decisions. Contact emergency services or a qualified healthcare professional for medical needs.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">3. Permitted use</h2>
          <p>
            You may view and use the website for lawful informational and business-evaluation purposes. You may not interfere with the website, attempt unauthorized access, introduce harmful code, scrape it in a manner that disrupts service, impersonate another person, or use its content unlawfully or misleadingly.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">4. Intellectual property</h2>
          <p>
            Website content, design, text, graphics, product names, trademarks, and product-development materials are owned by or licensed to Atabazh Medical Inc., except for third-party marks identified as belonging to their respective owners. No licence is granted except the limited right to view the website under these terms.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">5. Third-party names and links</h2>
          <p>
            References to programs, institutions, collaborators, or ecosystem organizations describe context and do not imply clinical endorsement, regulatory approval, or responsibility for this website. External links are provided for convenience; we do not control their content or availability.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">6. Accuracy and availability</h2>
          <p>
            We aim to keep information current but do not guarantee that every page is complete, error-free, or continuously available. We may change, suspend, or remove website content without notice. Where the law permits, the website is provided on an "as available" basis without implied warranties.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Atabazh Medical Inc. will not be liable for indirect, incidental, special, or consequential loss arising from use of or reliance on this informational website. Nothing in these terms excludes liability that cannot legally be excluded.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">8. Privacy and communications</h2>
          <p>
            Our <NavLink className="font-semibold text-blue-700 underline underline-offset-4" to="/privacy">Privacy Policy</NavLink> explains how website contact information is handled. Submitting a form does not create a clinical, advisory, partnership, investment, or contractual relationship. Any future engagement requires separate written agreement.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">9. Governing law and changes</h2>
          <p>
            These terms are governed by the laws of Ontario and the applicable federal laws of Canada, without regard to conflict-of-law rules. We may update these terms by posting a revised version and effective date.
          </p>
        </section>
      </div>

      <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
        <h2 className="text-xl font-bold text-slate-900">Questions</h2>
        <p className="mt-2 text-slate-600">
          Atabazh Medical Inc., Ontario, Canada<br />
          <a className="font-semibold text-blue-700 underline underline-offset-4" href="mailto:support@atabazh-med.com">support@atabazh-med.com</a>
        </p>
      </section>
    </article>
  </div>
);

export default Terms;
