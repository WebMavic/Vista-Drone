import React from 'react'
import SectionLayout from './ui/SectionLayout'

function SectionContact() {
  return (
    <SectionLayout>
    <div className="bg-secondary rounded-lg py-5"> 
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-white">Need to know something more?</h2>
        <p className="text-darksubheading font-light sm:w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda possimus saepe voluptas ullam? Dolor voluptatibus </p>
      </div>
      <div className="my-10 w-full">
        <form action="/" className="flex gap-3 justify-center w-full">
          <input type="email" placeholder="email" className="px-4 border sm:w-2/5 text-white outline-none bg-transparent border-zinc-500 rounded-full placeholder:text-white" />
          <button className="bg-accent text-white px-4 py-2 rounded-full">Submit</button>
        </form>
      </div>
    </div>
  </SectionLayout>

  )
}

export default SectionContact