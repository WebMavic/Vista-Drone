import React from 'react'
import DoughnutChart from './DoughnutChart';
import MarketInNumbers from './MarketInNumbers';
import Button from '../ui/Button';



function MarketOverView() {
  return (
    <section className="w-full bg-primary2  sm:p-16 p-5">
    <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row gap-4 sm:gap-0">
          <div>
          <MarketInNumbers/>
          {/* <Button href='/market' title='Learn more' icon className="hover:bg-accent border border-accent text-accent hover:text-white space-y-4"/> */}
          </div>
        <div><DoughnutChart/></div>
     


    </div>
   
   </section>
  )
}

export default MarketOverView;


