import React from 'react';
import MarketOverView from '@/components/MarketInsight/MarketOverView';
import SectionAbout from '@/components/SectionAbout';
import SectionClient from '@/components/SectionClient';
import SectionContact from '@/components/SectionContact';
import SectionExpertise from '@/components/SectionExpertise';
import SectionFeaturedServices from '@/components/SectionFeaturedServices';
import SectionHero from '@/components/SectionHero';
import SectionProjects from '@/components/SectionProjects';

export default function Home() {
  
  return (
    <>
      <SectionHero/>
      <SectionAbout/>
      <MarketOverView/>
      <SectionFeaturedServices/>
      <SectionExpertise/>
      <SectionProjects/>
      <SectionClient/>
      <SectionContact/>

    </>
  );
}




