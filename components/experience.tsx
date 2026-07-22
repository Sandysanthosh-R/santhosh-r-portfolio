import { Briefcase } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Internships & involvement"
          description="Hands-on experience gained through internships and student leadership."
        />

        <ol className="relative border-l border-border pl-8 sm:pl-10">
          {EXPERIENCE.map((item, i) => (
            <Reveal
              as="li"
              key={`${item.role}-${item.org}`}
              delay={i * 0.05}
              className="relative pb-10 last:pb-0"
            >
              <span
                className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm sm:-left-[49px]"
                aria-hidden="true"
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {item.org}
                    </p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
