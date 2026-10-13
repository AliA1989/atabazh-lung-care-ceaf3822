import { ArrowUpRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { BOOKING_URL } from "@/lib/contact";
import productLogo from "@/assets/smart-lung-physio-logo.png";

const EMAIL = "support@atabazh-med.com";
const FORM_URL =
  "https://form.jotform.com/262583951966069?q6_radio4=Send%20a%20message";

const Contact = () => {
  const [params] = useSearchParams();
  const wantsCall = params.get("intent") === "call";
  return (
    <div className="company-page bg-[#f8fafc] pb-16 pt-32 lg:pt-36">
      <div className="company-container">
        <header className="max-w-3xl">
          <p className="company-eyebrow">Contact Atabazh Medical</p>
          <h1 className="mt-5 text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
            Let’s discuss the next step.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Talk with our team about technology evaluation, research
            collaboration, long-term care pilot planning, or commercialization.
          </p>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section
            aria-labelledby="booking-title"
            className={`rounded-2xl bg-[#0b1b2f] p-7 text-white sm:p-9 ${wantsCall ? "ring-2 ring-sky-400 ring-offset-4" : ""}`}
          >
            <CalendarDays className="h-7 w-7 text-sky-300" aria-hidden="true" />
            <h2 id="booking-title" className="mt-5 text-2xl font-semibold">
              Book a discovery call
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Choose a time to speak with Ali Abedinpour, Founder & CEO. Share
              your organization and area of interest when booking.
            </p>
            <div className="mt-7 border-y border-white/15 py-5">
              <p className="text-sm font-semibold text-white">
                A focused first conversation
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Discuss your care setting or development interests.</li>
                <li>Review the current prototype stage and potential fit.</li>
                <li>Identify an appropriate follow-up with our team.</li>
              </ul>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="company-button mt-7 w-full bg-sky-300 text-slate-950 hover:bg-sky-200 sm:w-auto"
            >
              Choose a time{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> on Calendly (opens in a new tab)</span>
            </a>
            <p className="mt-4 text-xs leading-6 text-slate-400">
              Booking opens in Calendly. Complete your reservation there to
              receive confirmation and meeting details. Check the displayed time
              zone.
            </p>
          </section>
          <section
            aria-labelledby="email-title"
            className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <Mail className="h-7 w-7 text-[#164d69]" aria-hidden="true" />
            <h2 id="email-title" className="mt-5 text-2xl font-semibold">
              Contact the team
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Prefer to begin in writing? Email your question, organization, and
              the type of collaboration you have in mind.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="company-text-link mt-6 break-all text-lg"
            >
              {EMAIL}
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              The email link opens your email application. If one is not
              configured, copy the address into your preferred email service.
            </p>
            <div className="mt-7 flex items-center gap-5 border-t border-slate-200 pt-6">
              <img
                src={productLogo}
                width={1000}
                height={800}
                alt="Smart Lung Physio"
                className="h-auto w-24 shrink-0"
              />
              <p className="text-sm leading-6 text-slate-600">
                Atabazh Medical Inc.
                <br />
                Smart Lung Physio™ development team
              </p>
            </div>
            <details className="mt-6 border-t border-slate-200 pt-5">
              <summary className="cursor-pointer text-sm font-semibold text-[#164d69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                Prefer an online contact form?
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our existing contact form is also available on Jotform.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="company-text-link mt-2 text-sm"
              >
                Open the contact form{" "}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </details>
          </section>
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-500">
          Please do not send identifiable patient or medical information. See
          our{" "}
          <NavLink to="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </NavLink>{" "}
          for information about contact and booking services.
        </p>
        <div className="mt-12 grid gap-7 border-t border-slate-200 pt-8 md:grid-cols-3">
          <div>
            <MapPin className="h-5 w-5 text-[#164d69]" aria-hidden="true" />
            <h2 className="mt-3 text-sm font-semibold">Toronto office</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              20 Dundas St W, Suite 921
              <br />
              Toronto, ON M5G 2C2
              <br />
              Meetings by appointment
            </p>
          </div>
          <div>
            <Phone className="h-5 w-5 text-[#164d69]" aria-hidden="true" />
            <h2 className="mt-3 text-sm font-semibold">Telephone</h2>
            <a
              href="tel:+14375576846"
              className="company-text-link mt-1 text-sm"
            >
              +1 (437) 557-6846
            </a>
            <p className="text-xs text-slate-500">
              Monday–Friday, 9 AM–5 PM ET
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Company updates</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Follow our development and company news.
            </p>
            <a
              href="https://www.linkedin.com/company/atabazh-medical-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="company-text-link mt-2 text-sm"
            >
              Atabazh Medical on LinkedIn{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
