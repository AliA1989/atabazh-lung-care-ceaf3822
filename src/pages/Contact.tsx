import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, CalendarDays, MessageSquare, ArrowUpRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const FORM_URL = "https://form.jotform.com/262583951966069";
const EMAIL = "support@atabazh-med.com";

const Contact = () => {
  const [params, setParams] = useSearchParams();
  const wantsCall = params.get("intent") === "call";
  const requestType = wantsCall ? "Request a 15-minute call" : "Send a message";
  const formUrl = `${FORM_URL}?q6_radio4=${encodeURIComponent(requestType)}`;

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
            { call: false, icon: MessageSquare, title: "Send a message", text: "Share your question or collaboration idea. Submit directly here, without opening an email app." },
            { call: true, icon: CalendarDays, title: "Request a 15-minute call", text: "Tell us what you would like to discuss and suggest a time. We will agree on a time by email." },
          ].map(({ call, icon: Icon, title, text }) => (
            <button key={title} type="button" aria-pressed={wantsCall === call} onClick={() => setParams(call ? { intent: "call" } : {}, { replace: true, preventScrollReset: true })}
              className={`rounded-2xl border-2 p-6 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${wantsCall === call ? "border-blue-700 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-300"}`}>
              <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <span className="mt-4 block text-xl font-semibold">{title}</span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">{text}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          <section aria-labelledby="contact-form-title" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5 sm:p-7">
              <h2 id="contact-form-title" className="text-2xl font-bold">{requestType}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {wantsCall ? "A short conversation with Ali Abedinpour about your care setting or collaboration idea. Your appointment is confirmed only after we agree on a time by email." : "Your request is recorded when you submit the form. You will see a confirmation after a successful submission."}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">Please do not include identifiable patient or medical information.</p>
            </div>
            <iframe key={formUrl} src={formUrl} title="Atabazh Medical contact and discovery call request form" className="block h-[1250px] w-full border-0 sm:h-[1150px]" />
            <div className="border-t border-slate-200 p-5 text-sm leading-6 text-slate-600">
              <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">Open the form in a new tab <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <p>Form provided by Jotform. Read our <NavLink to="/privacy" className="text-blue-700 underline underline-offset-4">Privacy Policy</NavLink>.</p>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-[#0b1b2f] p-6 text-white">
              <h2 className="text-xl font-semibold">What happens next?</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-200">
                <li>Send your message or call request.</li>
                <li>We review it and follow up by email.</li>
                <li>For a call, we confirm the time and meeting details together.</li>
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
