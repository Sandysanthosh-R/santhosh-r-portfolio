import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { NAV_LINKS, SITE } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { icon: GithubIcon, label: 'GitHub', href: SITE.github },
    { icon: LinkedinIcon, label: 'LinkedIn', href: SITE.linkedin },
    { icon: Mail, label: 'Email', href: `mailto:${SITE.email}` },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-xl font-bold tracking-tight text-foreground"
            >
              Santhosh R<span className="text-primary">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full Stack Developer building responsive web applications, backend
              systems, and AI-powered solutions.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} Santhosh R. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & GSAP.
          </p>
        </div>
      </div>
    </footer>
  )
}
