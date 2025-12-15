import React from 'react'
import athleteImg1 from '../image/athlete1.jpg'
import athleteImg2 from '../image/athlete2.jpg'
import athleteImg3 from '../image/athlete3.jpg'
const FeaturedAth =()=> {
  return (
    <div>
      <div className="p-6 mt-6 text-gray-800">
        <p className="text-3xl font-bold mt-9 p-4 text-center mb-4">FEATURED ATHLETES</p>
        
        <div className='flex gap-40 '>

        <img src={athleteImg1} className='h-[200px] rounded-2xl ml-12 w-80'/>
        <img src={athleteImg2} className='h-[200px] rounded-2xl  w-80'/>
        <img src={athleteImg3} className='h-[200px] rounded-2xl w-80'/>
          </div>

        <p className=' mt-12 font-semibold text-lg items-center justify-center ml-20 w-[88%]'>We feature athletes to highlight dedication, discipline, and inspiring journeys that motivate individuals across all walks of life. Every featured athlete represents a story of resilience—early struggles, breakthrough moments, and the continuous effort required to reach elite performance levels. Through detailed profiles, we showcase their training routines, achievements, personal philosophies, and the setbacks that shaped their success. Our goal is to shed light not only on their victories but also on the hard work behind the scenes: recovery processes, mental conditioning, and lifestyle choices that contribute to long-term excellence.</p>
          
      </div>
    </div>
  )
}
export default  FeaturedAth;