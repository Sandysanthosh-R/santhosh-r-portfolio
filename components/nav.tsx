'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''))

    const handleSpy = () => {
      const scrollPosition = window.scrollY + 140

      // Check if near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }

    handleSpy()
    window.addEventListener('scroll', handleSpy, { passive: true })
    return () => window.removeEventListener('scroll', handleSpy)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          SANTHOSH R <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <li key={link.href} className="relative py-2">
                <a
                  href={link.href}
                  className={cn(
                    'relative inline-block py-1 text-sm font-medium transition-colors hover:text-foreground',
                    isActive ? 'font-semibold text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-primary transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-primary md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="border-t border-border bg-background px-5 pb-8 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'border-l-4 border-primary bg-muted pl-4 font-semibold text-primary'
                        : 'text-foreground hover:bg-muted',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}

