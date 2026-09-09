'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export function ScreenshotCarousel({
  children,
}: {
  children: React.ReactNode[];
}) {
  const [active, setActive] = useState(0);
  const titles = [
    'A clear next step.',
    'Room for honest conversations.',
    'A rhythm of prayer.',
  ];
  return (
    <div className="screenshot-carousel">
      <div className="carousel-screen">
        {children.map((child, index) => (
          <div key={index} hidden={active !== index}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-copy">
        <span className="eyebrow">A CLOSER LOOK</span>
        <h3>{titles[active]}</h3>
        <p>
          {
            [
              'Open Equipt and pick up your journey with a person in mind and a simple place to begin.',
              'Helpful questions encourage listening, reflection, and a conversation that goes a little deeper.',
              'Gentle reminders help you keep showing up for the people you are walking alongside.',
            ][active]
          }
        </p>
        <p className="form-note">
          Illustrative app previews. Final screens and feature availability will
          be confirmed at release.
        </p>
        <div className="carousel-controls">
          <Button
            className="carousel-arrow"
            variant="outline"
            size="icon"
            aria-label="Previous app preview"
            onClick={() =>
              setActive((active + children.length - 1) % children.length)
            }
          >
            <ArrowLeft />
          </Button>
          <div role="status" aria-live="polite">
            {active + 1} / {children.length}
          </div>
          <Button
            className="carousel-arrow"
            variant="outline"
            size="icon"
            aria-label="Next app preview"
            onClick={() => setActive((active + 1) % children.length)}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
