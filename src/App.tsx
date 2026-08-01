import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageLayout from "./components/PageLayout";
import RouteSeo from "./components/RouteSeo";
import Home from "./pages/Home";

const Device = lazy(() => import("./pages/Device"));
const ClinicalEvidence = lazy(() => import("./pages/ClinicalEvidence"));
const LongTermCare = lazy(() => import("./pages/LongTermCare"));
const About = lazy(() => import("./pages/About"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBase === "/" ? undefined : routerBase}>
        <RouteSeo />
        <PageLayout>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Suspense fallback={<div className="min-h-[60vh]" aria-live="polite" aria-label="Loading page" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/device" element={<Device />} />
                  <Route path="/clinical-evidence" element={<ClinicalEvidence />} />
                  <Route path="/long-term-care" element={<LongTermCare />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </PageLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
