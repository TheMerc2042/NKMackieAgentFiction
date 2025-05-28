import { Switch, Route } from "wouter";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Books from "@/pages/Books";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
