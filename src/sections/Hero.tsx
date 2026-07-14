import { motion } from "framer-motion";

import { EASE_SMOOTH, fadeInUp, staggerContainer } from "@/animations";
import { Button, Container } from "@/components/ui";
import { HERO_METRICS } from "@/constants";
import { HeroScene } from "@/three/HeroScene";

import { HeroLabels } from "./HeroLabels";

/** Homepage hero: editorial two-column intro with an interactive 3D centerpiece. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      <Container className="relative grid min-h-[88svh] items-center gap-10 pt-20 pb-12 lg:min-h-[90svh] lg:grid-cols-2 lg:gap-12 lg:pt-[80px] lg:pb-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-2 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            AI &amp; Software Engineering
          </motion.span>

          <h1 className="font-display text-[2.76rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-[3.45rem] lg:text-[4.14rem]">
            <motion.span variants={fadeInUp} className="block">
              Engineering
            </motion.span>
            <motion.span variants={fadeInUp} className="block text-primary">
              Intelligent Systems
            </motion.span>
            <motion.span variants={fadeInUp} className="block">
              for Businesses
            </motion.span>
            <motion.span variants={fadeInUp} className="block">
              Worldwide.
            </motion.span>
          </h1>

          <motion.p
            variants={fadeInUp}
            className="mt-2 max-w-md text-base text-muted-foreground sm:text-lg"
          >
            We design, engineer, and scale AI-driven software, automation, and digital products
            for ambitious enterprises across the globe.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-4 flex flex-wrap items-center gap-4">
            <Button href="#contact" size="lg">
              Discuss Your Project
            </Button>
            <Button href="#projects" size="lg" variant="secondary">
              Explore Our Work
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 sm:gap-x-10"
          >
            {HERO_METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-2xl font-semibold sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[540px]"
        >
          <HeroScene />
          <HeroLabels />
        </motion.div>
      </Container>
    </section>
  );
}
