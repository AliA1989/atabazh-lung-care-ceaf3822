import { useEffect, useRef, useState } from "react";
import productLogo from "@/assets/smart-lung-physio-logo.png";
import { BOOKING_URL } from "@/lib/contact";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, CalendarDays, MessageSquare, ArrowUpRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const FORM_URL = "https://form.jotform.com/262583951966069";
const EMAIL = "support@atabazh-med.com";

const Contact = () => {
  const formFrame = useRef<HTMLIFrameElement>(null);
  const [formHeight, setFormHeight] = useState(1250);
  useEffect(() => {
    const resizeForm = (event: MessageEvent) => {
      if (event.source !== formFrame.current?.contentWindow ||
          !["https://form.jotform.com", "https://submit.jotform.com"].includes(event.origin) ||
          typeof event.data !== "string") return;
      const [action, value] = event.data.split(":");
      const height = Number(value);
      if (action === "setHeight" && Number.isFinite(height) && height > 0 && height < 20000) {
        setFormHeight(Math.ceil(height) + 24);
      }
    };
    window.addEventListener("message", resizeForm);
    return () => window.removeEventListener("message", resizeForm);
  }, []);
  const [params, setParams] = useSearchParams();
  const wantsCall = params.get("intent") === "call";
  const requestType = wantsCall ? "Book a discovery call" : "Send a message";
  const formUrl = `${FORM_URL}?q6_radio4=Send%20a%20message`;

  return (
    <div className="min-h-screen bg-[#f8fafc] px-5 pb-20 pt-28 text-slate-950 sm:px-8 lg:px-12 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Contact Atabazh Medical</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Let’s start a conversation.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Explore Smart Lung Physio, discuss a staff demonstration, or talk about research and collaboration.</p>
        </header>

        <div className="mt-9 grid gap-4 sm:grid-cols-2" aria-label="Choose how to connect">
          {[
            { call: false, icon: MessageSquare, title: "Send a message", text: "Share your question or collaboration idea. We’ll follow up by email." },
            { call: true, icon: CalendarDays, title: "Book a discovery call", text: "Choose an available time on Calendly for a conversation with Ali Abedinpour." },
          ].map(({ call, icon: Icon, title, text }) => (
            <button key={title} type="button" aria-pressed={wantsCall === call} onClick={() => setParams(call ? { intent: "call" } : {}, { replace: true, preventScrollReset: true })}
              className={`rounded-2xl border-2 p-6 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${wantsCall === call ? "border-blue-700 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-300"}`}>
              <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <span className="mt-4 block text-xl font-semibold">{title}</span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">{text}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start">
          <section aria-labelledby="contact-form-title" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5 sm:p-7">
              <h2 id="contact-form-title" className="text-2xl font-bold">{requestType}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {wantsCall ? "Choose a time on our Calendly booking page. Complete the booking there to receive your confirmation and meeting details." : "We’ll follow up by email. To schedule a conversation, select Book a discovery call above."}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">Please do not include identifiable patient or medical information.</p>
            </div>
            {wantsCall ? (
              <div className="space-y-5 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8">
                <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
                  <img src={productLogo} alt="Smart Lung Physio" width={1000} height={800} className="h-auto w-36 shrink-0 mix-blend-multiply" />
                  <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Discovery call</p><h3 className="mt-2 text-xl font-semibold tracking-tight">Let’s explore the fit.</h3><p className="mt-2 text-sm text-slate-600">With Ali Abedinpour · Atabazh Medical</p></div>
                </div>
                <p className="text-base leading-7 text-slate-600">Discuss workflow fit, a staff demonstration, or research and collaboration opportunities.</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-center sm:w-auto bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">Choose a time on Calendly <ArrowUpRight className="h-5 w-5" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                <p className="text-sm leading-6 text-slate-500">Check the time zone shown on the booking page. If no suitable time is available, use Send a message to contact us.</p>
              </div>
            ) : <iframe ref={formFrame} id="JotFormIFrame-262583951966069" src={formUrl} title="Atabazh Medical contact form" style={{ height: formHeight }} className="block w-full border-0" />}
            <div className="border-t border-slate-200 p-5 text-sm leading-6 text-slate-600">
              {!wantsCall && <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">Open the form in a new tab <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
              <p>{wantsCall ? "Booking provided by Calendly." : "Form provided by Jotform."} Read our <NavLink to="/privacy" className="text-blue-700 underline underline-offset-4">Privacy Policy</NavLink>.</p>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-[#0b1b2f] p-6 text-white">
              <h2 className="text-xl font-semibold">What happens next?</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-200">
                {wantsCall ? <>
                  <li>Open Calendly and choose an available time.</li>
                  <li>Enter your details and complete the booking.</li>
                  <li>Check your confirmation for the meeting details.</li>
                </> : <>
                  <li>Submit your message using the form.</li>
                  <li>Look for the submission confirmation.</li>
                  <li>We review your inquiry and follow up by email.</li>
                </>}
              </ol>
            </div>
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold">Prefer to contact us directly?</h2>
              <div><Mail className="mb-2 h-5 w-5 text-blue-700" aria-hidden="true" /><a href={`mailto:${EMAIL}`} className="break-all text-sm font-semibold text-blue-700 underline underline-offset-4">{EMAIL}</a></div>
              <div><Phone className="mb-2 h-5 w-5 text-blue-700" aria-hidden="true" /><a href="tel:+14375576846" className="text-sm font-semibold text-blue-700 underline underline-offset-4">+1 (437) 557-6846</a><p className="mt-1 text-xs text-slate-500">Monday–Friday, 9 AM–5 PM ET</p></div>
              <div><MapPin className="mb-2 h-5 w-5 text-blue-700" aria-hidden="true" /><p className="text-sm leading-6 text-slate-600">20 Dundas St W, Suite 921<br />Toronto, ON M5G 2C2<br />Meetings by appointment</p></div>
              <a href="https://www.linkedin.com/company/atabazh-medical-inc" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 underline underline-offset-4">Atabazh Medical on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
