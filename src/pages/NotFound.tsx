import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc] px-6 pt-20 text-slate-950">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm sm:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Page not found</p>
        <h1 className="mt-3 text-6xl font-bold tracking-[-0.06em] text-slate-950">404</h1>
        <p className="mt-4 text-lg text-slate-600">The page you requested is not available.</p>
        <NavLink to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
          Return to Home
          <ArrowRight className="h-4 w-4" />
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
