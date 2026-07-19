import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";

// Lazy-loaded per route so each page's JS only downloads when it's actually visited —
// most importantly, Three.js / React Three Fiber (used only by Home's HeroScene) no
// longer ships in the bundle for every other route.
const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const Work = lazy(() => import("@/pages/Work").then((m) => ({ default: m.Work })));
const CaseStudy = lazy(() => import("@/pages/CaseStudy").then((m) => ({ default: m.CaseStudy })));
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import("@/pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("@/pages/Terms").then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));

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
