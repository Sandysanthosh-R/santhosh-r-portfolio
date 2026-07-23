import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STATS = [
  { value: '3+', label: 'Internships' },
  { value: '3', label: 'Featured Projects' },
  { value: '10+', label: 'Technologies' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-24 md:px-8">
      <SectionHeading eyebrow="About" title="A bit about my journey" />

      <Reveal className="space-y-8">
        <div className="rounded-2xl border border-border bg-card/60 p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <p className="text-xl font-medium text-foreground leading-relaxed text-pretty">
            I&apos;m a Computer Science Engineering student who enjoys turning
            ideas into practical software solutions. My journey into development
            started with web technologies and gradually expanded into full-stack
            development, databases, and AI-powered applications.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-muted-foreground text-pretty">
              I enjoy building projects that combine clean user experiences with
              reliable backend systems, whether it&apos;s a women safety platform,
              a ticket booking website, or an AI voice assistant. Every project
              teaches me something new, and I constantly look for opportunities to
              improve my technical skills through internships, training, and
              personal projects.
            </p>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              Right now, I&apos;m focused on becoming a well-rounded Full Stack
              Developer while exploring AI and automation technologies.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/50"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-bold text-foreground">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}

