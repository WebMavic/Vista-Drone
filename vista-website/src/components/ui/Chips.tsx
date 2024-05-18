import { title } from 'process'
import React from 'react'

interface ChipsProps {
    title: string
    className?: string
}
function Chips({title,className}: ChipsProps) {
  return (
        <span className={`text-accent text-lg uppercase tracking-[3px] font-semibold ${className}`}>{title}</span>
  )
}

export default Chips