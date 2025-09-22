import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import LanguageDetail from "./pages/LanguageDetail";
import Upload from "./pages/Upload";
import AI from "./pages/AI";
import AIChat from "./pages/AIChat";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Articles from "./pages/Articles";
import TechStack from "./pages/TechStack";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:languageName" element={<LanguageDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tech-stack" element={<TechStack />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
