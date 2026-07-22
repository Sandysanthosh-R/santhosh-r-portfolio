'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Delay in seconds */
  delay?: number
  /** Stagger children direct descendants instead of the element itself */
  stagger?: boolean
  as?: 'div' | 'section' | 'ul' | 'li' | 'header' | 'article'
  y?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  as = 'div',
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const targets = stagger ? Array.from(el.children) : el

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.1 : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay, stagger, y])

  const Tag = as as React.ElementType
  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  )
}
