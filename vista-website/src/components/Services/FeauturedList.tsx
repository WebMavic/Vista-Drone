
import React from 'react'
import FeauturedServiceCardItem from './FeauturedServiceCardItem';


function FeauturedList() {
   
    

  return (
    <div className="service-cards mt-5 sm:mt-0">
        <div className="flex flex-wrap gap-5 items-center justify-center">
        {services.map((service,index) => (
          <FeauturedServiceCardItem service={service} key={index} />
        ))}

        </div>
      </div>
  )
}

export default FeauturedList;



const services = [
    {
      title : 'Construction',
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'AgriTech',
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'Mining',
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'Oil & Gas',
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
  ]