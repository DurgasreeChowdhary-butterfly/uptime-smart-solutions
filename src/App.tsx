import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { CaseStudy } from "@/pages/CaseStudy";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Work } from "@/pages/Work";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
