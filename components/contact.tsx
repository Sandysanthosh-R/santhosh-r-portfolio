'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/data'

type Status = 'idle' | 'submitting' | 'success'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // TODO: Connect to a backend / email service (e.g. a Server Action,
    // Resend, or a form endpoint). This is a front-end placeholder.
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
    e.currentTarget.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  const details = [
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: MapPin, label: 'Location', value: SITE.location, href: undefined },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have an opportunity or just want to say hello? Send a message and I'll get back to you."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Contact details */}
        <Reveal className="lg:col-span-5">
          <div className="flex flex-col gap-4">
            {details.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about your project or opportunity..."
                className="resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70 sm:w-auto"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </>
              )}
            </button>

            <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
              {status === 'success'
                ? "Thanks! This is a demo form — connect a backend to receive messages."
                : ''}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
