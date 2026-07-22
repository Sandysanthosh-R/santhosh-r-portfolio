import { Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CERTIFICATIONS } from '@/lib/data'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses & workshops"
          description="Continuous learning through certified courses and hands-on workshops."
        />

        <Reveal stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
