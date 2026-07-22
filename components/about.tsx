import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STATS = [
  { value: '3+', label: 'Internships' },
  { value: '3', label: 'Featured Projects' },
  { value: '10+', label: 'Technologies' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading eyebrow="About" title="A bit about my journey" />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Image left */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src="/santhosh-profile.png"
                alt="Portrait of Santhosh R, Computer Science Engineering student"
                width={560}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Content right */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="text-lg leading-relaxed text-foreground text-pretty">
            I&apos;m a Computer Science Engineering student who enjoys turning
            ideas into practical software solutions. My journey into development
            started with web technologies and gradually expanded into full-stack
            development, databases, and AI-powered applications.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
            I enjoy building projects that combine clean user experiences with
            reliable backend systems, whether it&apos;s a women safety platform,
            a ticket booking website, or an AI voice assistant. Every project
            teaches me something new, and I constantly look for opportunities to
            improve my technical skills through internships, training, and
            personal projects.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
            Right now, I&apos;m focused on becoming a well-rounded Full Stack
            Developer while exploring AI and automation technologies.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-sm"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-foreground">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
