import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SolutionsIndex from "@/pages/solutions/index";
import SmartCuttingPage from "@/pages/solutions/cutting";
import RuggedAMRPage from "@/pages/solutions/amr";
import AIBrainPage from "@/pages/solutions/ai-brain";
import ProductsPage from "@/pages/products";
import ProductDetailPage from "@/pages/products/[id]";
import CasesPage from "@/pages/cases";
import CaseDetailPage from "@/pages/cases/[id]";
import ResourcesPage from "@/pages/resources";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={SolutionsIndex} />
      <Route path="/solutions/cutting" component={SmartCuttingPage} />
      <Route path="/solutions/amr" component={RuggedAMRPage} />
      <Route path="/solutions/ai-brain" component={AIBrainPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:id" component={ProductDetailPage} />
      <Route path="/cases" component={CasesPage} />
      <Route path="/cases/:id" component={CaseDetailPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
