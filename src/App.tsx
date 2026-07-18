import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { About } from "@/pages/About";
import { CaseStudy } from "@/pages/CaseStudy";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Privacy } from "@/pages/Privacy";
import { Terms } from "@/pages/Terms";
import { Work } from "@/pages/Work";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
