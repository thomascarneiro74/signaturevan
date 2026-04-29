import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Location from "./pages/Location";
import Realisations from "./pages/Realisations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { MentionsLegales, Confidentialite } from "./pages/Legal";
import FormuleConfort from "./pages/FormuleConfort";
import FormuleLiberte from "./pages/FormuleLiberte";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/formule-confort" element={<FormuleConfort />} />
            <Route path="/formule-liberte" element={<FormuleLiberte />} />
            <Route path="/location-van-annecy" element={<Location />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
