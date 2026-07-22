import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Layers,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SKILL_GROUPS } from '@/lib/data'

const ICONS: Record<string, typeof Code2> = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
  'Core Domains': Layers,
  'Soft Skills': Users,
}

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & capabilities"
          description="A snapshot of the languages, frameworks, and tools I use to design and build reliable software."
        />

        <Reveal
          stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_GROUPS.map((group) => {
            const Icon = ICONS[group.title] ?? Code2
            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
