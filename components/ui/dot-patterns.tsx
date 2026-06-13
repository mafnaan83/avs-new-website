"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface DotPatternProps {
  className?: string
  dotSize?: number
  spacing?: number
  dotColor?: string
  offset?: boolean
  animated?: boolean
}

export function DotPattern({
  className,
  dotSize = 1,
  spacing = 20,
  dotColor = "#94a3b8",
  offset = false,
  animated = false,
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const parent = canvas.parentElement
        if (parent) {
          const { width, height } = parent.getBoundingClientRect()
          setDimensions({ width, height })
          canvas.width = width
          canvas.height = height
          drawDots(canvas)
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      drawDots(canvasRef.current)
    }
  }, [dotSize, spacing, dotColor, offset, dimensions, animated])

  const drawDots = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)

    // Set dot color
    ctx.fillStyle = dotColor

    const actualColumns = Math.floor(width / spacing) + 1
    const actualRows = Math.floor(height / spacing) + 1

    for (let i = 0; i < actualRows; i++) {
      for (let j = 0; j < actualColumns; j++) {
        let x = j * spacing
        const y = i * spacing

        // Offset every other row for a hex pattern look
        if (offset && i % 2 === 1) {
          x += spacing / 2
        }

        if (x > width || y > height) continue

        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ opacity: 0.5 }} />
    </div>
  )
}
