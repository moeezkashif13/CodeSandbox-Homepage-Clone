
"use client"

import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


import '@splidejs/react-splide/css';


const str = 'Instantdevenvironments'
const splitted = str.split('')


const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration : 3,
        // staggerChildren: 0.03
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1,
    
        // color : '#d6fb41',
    
    }
  }
  

    

export const HeroSectText = ()=>{
    return <div className="  px-8 py-8">

    {/* text-[#d6fb41] */}
    <motion.div className="flex text-5xl py-6  font-medium flex-wrap "     variants={container}
    initial="hidden"
    animate="show"
 >
    
        {splitted.map(eachCharacter=>{
          
            return eachCharacter!==' '?<motion.p  variants={item} className=" text-transparent strokeClass">{eachCharacter}</motion.p>:<p></p>
        })}
    
        </motion.div>
    
    <div>
    
    
    
    </div>
    
    
    <motion.p initial={{opacity:0}} animate={{opacity:1,}} transition={{delay:2,duration:2}} className="text-[#f0f0f0] text-[21px] ">CodeSandbox keeps you in flow by giving you cloud development environments that resume in 1 second.</motion.p>
    
    
    </div>
}


const logos = [
  {
      "image": "https://codesandbox.io/_next/static/media/react.b3050237.svg",
      "text": "React + Vite"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
      "text": "Next.js"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/vue.7cf1740d.svg",
      "text": "Vue + Vite"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/angular.544aa66a.svg",
      "text": "Angular"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/nuxt.2905d295.svg",
      "text": "Nuxt"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/svelte.51c29d06.svg",
      "text": "SvelteKit"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/remix.8a00c717.svg",
      "text": "Remix"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
      "text": "Gatsby"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
      "text": "Astro Blog"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
      "text": "Next.js Commerce"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
      "text": "Web Image Crawler"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
      "text": "React TypeScript"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
      "text": "TypeScript"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/deno.f40886cb.svg",
      "text": "Deno"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
      "text": "Astro Starter"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/react.b3050237.svg",
      "text": "React + Vite"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
      "text": "Next.js"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/vue.7cf1740d.svg",
      "text": "Vue + Vite"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/angular.544aa66a.svg",
      "text": "Angular"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/nuxt.2905d295.svg",
      "text": "Nuxt"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/svelte.51c29d06.svg",
      "text": "SvelteKit"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/remix.8a00c717.svg",
      "text": "Remix"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
      "text": "Gatsby"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
      "text": "Astro Blog"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
      "text": "Next.js Commerce"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
      "text": "Web Image Crawler"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
      "text": "React TypeScript"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
      "text": "TypeScript"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/deno.f40886cb.svg",
      "text": "Deno"
  },
  {
      "image": "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
      "text": "Astro Starter"
  }
]




export const LogosSlider = ()=>{

  const reduceOpacity = (eachLogo)=>{

    const allElements = document.querySelectorAll('.logoElement');

    allElements.forEach((elem,secondIndex)=>{
      elem.style.opacity = 0.6
    })


    Array.from(allElements).filter(eachElem=>{
        return eachElem.querySelector('p').innerText == eachLogo.text
    }).forEach(check=>{
        check.style.opacity = 1
    })

  }

  const resetOpacity = ()=>{

    const allElements = document.querySelectorAll('.logoElement');

    allElements.forEach((elem,secondIndex)=>{
      elem.style.opacity = 1
    })

  }
  
  
  return <Splide  hasTrack={false} className='h-full text-white flex items-center w-full ' extensions={{AutoScroll}}  options={{

    pagination:false,
    arrows:false,
    perPage:2,

    type:'loop',

    autoScroll:{
      speed:0.8,
    },


    breakpoints:{
      
      768 : {
        // gap: 300,
        perPage:4
      },

      1024:{

        perPage:8
      }

    },

    mediaQuery:'min'



  }}>
 
 <SplideTrack className=' w-full'>

 {logos.map((eachLogo,index)=>{
      return <SplideSlide  onMouseLeave={resetOpacity} onMouseEnter={()=>reduceOpacity(eachLogo)}><div style={{transition:'all 0.2s'}} className=' p-6 items-center  flex logoElement text-text1 gap-x-2 ' >
  
  <div className='min-w-[32px] min-h-[32px] '>
      <img src={eachLogo.image} className='imageCommon' alt="" />
  </div>
  
  <p className='whitespace-nowrap'>{eachLogo.text}</p>
  
  
      </div></SplideSlide>
  })}


 </SplideTrack>
  
  </Splide>
}


const SingleReview = ({details})=>{
    
    return <div className='p-12 self-center bg-lime-800 space-y-4  max-h-[300px] rounded-[10px] mx-auto '>

        <p className='font-medium leading-7 text-[20px] -tracking-[0.0125em]'>{details?.text}</p>

        <div className='flex gap-x-4 items-center '>

    <div className='min-w-[48px] min-h-[48px] w-12 h-12 bg-pink-500 rounded-full '>
        <img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjonnie.debf7c8e.jpg&w=96&q=75" className='imageCommon rounded-full' alt="" />
    </div>

    <div>
        <p>Jonnie Hallman</p>
        <p className='opacity-75 leading-5'>Designer Developer, Stripe</p>
    </div>


        </div>




    </div>
}


const reviewsArray =  [

    [
        {text:'CodeSandbox continues to amaze me every day.',image:'',name:'',position:'',},

        {text:'The most interesting part of Codesandbox is just how perfectly it makes coding in the cloud just work.',image:'',name:'',position:'',},
        
        {text:'Its dramatically improved my experience of sharing ideas.',image:'',name:'',position:'',},
        
        {text:'It feels much more like my local environment.',image:'',name:'',position:'',},
    ],


    [
        {text:"It's a great experience and I miss some of its features when developing in VS Code.",image:'',name:'',position:'',},
        
        
        {text:'No but seriously, CodeSandbox iOS is amazing.',image:'',name:'',position:'',},
        
        
        {text:'The new CodeSandbox is the first online editor I can see myself using to build a full project.',image:'',name:'',position:'',},
        
        
        {text:"It's such a huge productivity boost.",image:'',name:'',position:'',},
    ]



]



export const Reviews = ()=>{


    return <div className="py-4  text-[#0E0E0E] space-y-3">


    {reviewsArray.map((reviewsRow)=>{

return <Splide extensions={{AutoScroll}} options={{autoScroll:{speed:1},perPage:1,pagination:false,pauseOnHover:false,arrows:false,type:'loop',gap:'1rem',fixedWidth:300,}} hasTrack={false} className='h-full'>
    <SplideTrack className='h-full w-full '>

{reviewsRow.map(eachReview=>{
    return <SplideSlide className='self-center  ' >    <SingleReview details={eachReview} /></SplideSlide>
})}



    </SplideTrack>
</Splide>

    })}





    </div>


}