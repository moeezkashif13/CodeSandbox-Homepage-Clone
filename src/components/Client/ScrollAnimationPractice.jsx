"use client"

import {motion,useTransform,useScroll} from 'framer-motion'
import { useEffect, useRef } from 'react';


export default function ScrollAnimationPractice() {

  
    // offset : ['0 (when bottom of the viewport) 1 (crosses the top of the target)', '1.33 1']

    // An intersection describes a point when the target and container meet. So for example, "start end" means when the start of the target meets the end of the container.

    const containerRef = useRef()
    const targetRef = useRef()
    
    const {scrollYProgress} = useScroll({
      container:containerRef,
      target:targetRef,

      

    })

    const scale  = useTransform(scrollYProgress,[0,0.5,1],[3,2,1])




  return (

    <div ref={containerRef} className='my-48 bg-rose-500 overflow-hidden h-screen'>

<div className='relative commonFlex h-full'>
<motion.div ref={targetRef} style={{scale:scale}} className=' bg-orange-500  mx-auto w-[300px] h-[300px]'></motion.div>
</div>

  

    </div>
  );
}
