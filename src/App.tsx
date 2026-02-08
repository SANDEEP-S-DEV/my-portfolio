import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BlogsPage from "@/pages/blogs";
import BlogDetailPage from "@/pages/blog-detail";
import NotFound from "@/pages/not-found";
import { useHashLocation } from "wouter/use-hash-location"; 


function Router() {
  const [location, navigate] = useHashLocation(); 
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/blogs/:id" component={BlogDetailPage} />
      <Route component={Home} />
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
