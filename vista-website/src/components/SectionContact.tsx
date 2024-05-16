import React from 'react'

function SectionContact() {
  return (
    <section className="w-full h-full sm:px-32 px-5 py-16  bg-base">
    <div className="bg-accent rounded-lg py-5"> 
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-white">Need to know something more?</h2>
        <p className="text-white font-light">Start your awesome Vista project with us</p>
      </div>
      <div className="my-10 w-full">
        <form action="/" className="flex gap-3 justify-center w-full">
          <input type="email" placeholder="email" className="p-3 border-2 sm:w-2/5 text-white outline-none bg-transparent border-dark rounded-md placeholder:text-white" />
          <button className="bg-dark text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  </section>

  )
}

export default SectionContact