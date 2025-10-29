'use client'

import React from 'react'
import { cn } from '@/app/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glass?: boolean
  hover?: boolean
}

export default function Card({ children, className, glass = true, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        glass && 'glass-strong glass-shimmer',
        hover && 'hover:scale-[1.02] hover:shadow-2xl cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
