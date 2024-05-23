import React from 'react'
// import bgVid from '@/assets/videos/bgvideo1.mp4'
function page() {
  return (
    <div className='h-screen w-full' >
        <video autoPlay  muted  preload='auto'>
            <source src='/bgvideo1.mp4'/>
        </video>
        <video autoPlay muted  preload='auto'>
            <source src='https://videos.pexels.com/video-files/5752729/5752729-uhd_3840_2160_30fps.mp4'/>
        </video>
    </div>
  )
}

export default page