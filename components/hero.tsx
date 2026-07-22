'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SITE } from '@/lib/data'

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('[data-hero-item]', { opacity: 1, y: 0 })
        gsap.set('[data-hero-image]', { opacity: 1, scale: 1 })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '[data-hero-item]',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
      ).fromTo(
        '[data-hero-image]',
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.7',
      )

      // Floating illustration
      gsap.to('[data-hero-float]', {
        y: -16,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const socials = [
    { icon: GithubIcon, label: 'GitHub', href: SITE.github },
    { icon: LinkedinIcon, label: 'LinkedIn', href: SITE.linkedin },
    { icon: Mail, label: 'Email', href: `mailto:${SITE.email}` },
  ]

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Left column */}
        <div className="lg:col-span-7">
          <p
            data-hero-item
            className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Hello, I&apos;m
          </p>

          <h1
            data-hero-item
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
          >
            Santhosh R
          </h1>

          <p
            data-hero-item
            className="mt-5 font-display text-lg font-medium text-foreground sm:text-xl"
          >
            Full Stack Developer <span className="text-primary">•</span> <span className="text-primary"></span> AI Enthusiast
          </p>

          <p
            data-hero-item
            className="mt-6 max-w-xl leading-relaxed text-muted-foreground"
          >
            I build responsive web applications, backend systems, and
            AI-powered solutions that solve real-world problems. I&apos;m
            passionate about combining clean design with scalable engineering
            while continuously learning modern technologies.
          </p>

          <div data-hero-item className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href={SITE.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div data-hero-item className="mt-8 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5">
          <div data-hero-image className="relative mx-auto max-w-sm lg:max-w-none">
            <div data-hero-float className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-primary/5"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_20px_60px_-20px_rgba(17,17,17,0.15)]">
                <Image
                  src="/santhosh-profile.png"
                  alt="Illustrated portrait of Santhosh R"
                  width={640}
                  height={640}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                <p className="font-display text-xl font-bold text-foreground">
                  CSE
                </p>
                <p className="text-xs text-muted-foreground">2023 – 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
