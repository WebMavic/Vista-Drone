import React, { ComponentPropsWithRef } from 'react'
interface Props extends ComponentPropsWithRef<'section'> {
  children: React.ReactNode
  className?: string
}

function SectionLayout({children,className,...rest}: Props) {
  return (
    <section {...rest} className = {`w-full h-full sm:px-32 p-5 sm:py-16 ${className} bg-primary`}>
    {children}
    </section>

  )
}

export default SectionLayout