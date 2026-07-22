import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PROJECTS } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Work I'm proud of"
        description="Selected projects that blend clean interfaces with dependable engineering."
      />

      <Reveal stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold leading-snug text-foreground text-balance">
                {project.title}
              </h3>
              <ArrowUpRight
                className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <a
                href={project.demo}
                aria-label={`Live demo of ${project.title} (placeholder link)`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
              <span className="text-border" aria-hidden="true">
                |
              </span>
              <a
                href={project.repo}
                aria-label={`GitHub repository of ${project.title} (placeholder link)`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  )
}
