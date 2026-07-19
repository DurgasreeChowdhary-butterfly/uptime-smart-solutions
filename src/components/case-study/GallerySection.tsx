import { Image as ImageIcon } from "lucide-react";

import { Reveal, Section, SectionHeading } from "@/components/ui";
import type { GallerySectionProps } from "@/types";
import { cn } from "@/lib/utils";

/** Grid of product screenshots/renders, each with an optional caption. */
export function GallerySection({
  eyebrow = "GALLERY",
  heading = "Product Gallery",
  description,
  images,
  className,
}: GallerySectionProps) {
  return (
    <Section id="gallery" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {images.map((image, i) => (
          <Reveal key={image.src || image.alt} delay={i * 0.06}>
            <figure>
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full rounded-2xl border border-border object-cover"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-border bg-muted/40">
                  <ImageIcon className="h-8 w-8 text-muted-foreground" aria-hidden />
                </div>
              )}
              {image.caption && (
                <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
