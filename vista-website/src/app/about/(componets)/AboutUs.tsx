import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
import Chips from '@/components/ui/Chips'

function AboutUs() {
  return (
    <SectionLayout>
    <div className="flex justify-center flex-wrap sm:flex-nowrap">
      <div className="flex flex-col justify-between gap-5">
        <div className="space-y-4">
          <Chips title="our story" />
          <h2 className="text-4xl font-bold text-heading capitalize ">
            how it started
          </h2>
          <p className="text-subheading font-light sm:w-1/2 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            numquam velit repellat quas? Ex fugiat, voluptate itaque et
            nihil omnis perferendis dolor dolorum beatae molestiae culpa,
            autem a doloribus maiores repellat temporibus possimus, velit
            voluptatum quam laboriosam ad praesentium quo! Dolorem,
            explicabo, aut mollitia quibusdam repellendus harum asperiores
            odit voluptate qui fugiat libero magni nesciunt.ellendus harum
            asperiores odit voluptate qui fugiat libero{" "}
          </p>
        </div>
        <div className="image-containrr">
          <img
            src="https://placehold.co/450x300"
            alt="logo"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-around">
        <div className="vison relative">
          <div className="h-64 w-64 hidden sm:block rounded-full bg-accent absolute z-[5] -left-10 -top-10"></div>
          <div className="z-10 relative">
            <h3 className="sm:text-white font-semibold text-xl">Mission</h3>
            <p className="font-light sm:text-black w-4/5">
              Deliver unmatched UAV services, surpassing client expectations
              through innovation, collaboration, and a devotion to
              excellence.
            </p>
          </div>
        </div>
        <div className="misson relative">
          <div className="h-64 w-64 hidden sm:block  rounded-full bg-accent absolute z-[5] -left-10 -top-10"></div>
          <div className="z-10 relative">
            <h3 className="sm:text-white font-semibold text-xl">Vision</h3>
            <p className="font-light text-black w-4/5">
              Pioneer the seamless integration of cutting-edge Unmanned
              Aerial Vehicle (UAV) technology, transforming industries and
              shaping a future where precision, efficiency, and
              sustainability harmonize.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
  )
}

export default AboutUs