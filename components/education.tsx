import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EDUCATION } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <Reveal stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATION.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="mt-5 flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.degree}
              </h3>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">
              {item.field}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{item.school}</p>
            <p className="mt-4 font-display text-base font-semibold text-foreground">
              {item.score}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
