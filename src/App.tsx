import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Clash from "./pages/Clash";
import PrevLeaderboard from "./pages/PrevLeaderboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/syskeys/rain" element={<Index />} />
          <Route path="/syskeys/rustclash" element={<Clash />} />
          <Route path="/prev-leaderboard/:site" element={<PrevLeaderboard />} />
          {/* Redirects for old routes */}
          <Route path="/" element={<Navigate to="/syskeys/rain" replace />} />
          <Route path="/clash" element={<Navigate to="/syskeys/rustclash" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
