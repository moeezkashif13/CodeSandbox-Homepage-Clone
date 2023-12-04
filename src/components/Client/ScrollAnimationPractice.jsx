"use client"

import {motion,useTransform,useScroll} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';


export default function ScrollAnimationPractice() {

  
    // offset : ['0 (when bottom of the viewport) 1 (crosses the top of the target)', '1.33 1']

    // An intersection describes a point when the target and container meet. So for example, "start end" means when the start of the target meets the end of the container.

    const targetRef = useRef(null)
    const containerRef = useRef(null)

    const {scrollYProgress} = useScroll({
      target:targetRef,
      // container : containerRef,
      // offset : ['start start']

    })

    const scale = useTransform(scrollYProgress,[0,0.5,1],[1,2,3])

    const [images,setImages] = useState(['https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffake.d300dd8f.png&w=1200&q=75'])

    // ,'https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0.efaf327a.png&w=1200&q=75','https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.1d834452.png&w=1200&q=75'

    const first = useTransform(scrollYProgress,[0,0.5,1],[1,2,3])
    
    const second = useTransform(scrollYProgress,[0,0.9],[0,4])



    // const third = useTransform(scrollYProgress,[0,0.5,1],[1,1,3])
    
    // const second = useTransform(scrollYProgress,[0.6,1],[20,20])

    return (

      <div> 


<div  className='h-[100vh] bg-orange-500 overflow-hidden relative flex justify-center items-center'>


<motion.div ref={targetRef} style={{scale}} className=" bg-red-500 relative w-[300px] h-[300px]  ">

{images.map(eachImage=>{
  
return <motion.div  className='bg-green-500 w-full h-full  absolute left-0 top-0'>
  <img src={eachImage} className='imageCommon' alt="" />
</motion.div>


})}


 {/* <motion.div style={{zIndex:second}} className='bg-pink-500 w-full h-full absolute left-0 top-0 '>
  <img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0.efaf327a.png&w=1200&q=75" className='imageCommon' alt="" />
</motion.div> */}


{/*<motion.div style={{zIndex:third}} className='bg-pink-500 w-full h-full absolute left-0 top-0 '>
  <img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.1d834452.png&w=1200&q=75" className='imageCommon' alt="" />
</motion.div> */}


</motion.div>


</div>




      </div>

  );
}
