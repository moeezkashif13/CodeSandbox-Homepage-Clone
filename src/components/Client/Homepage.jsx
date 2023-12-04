"use client";

import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import localFont from 'next/font/local'

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const twkeveret = localFont({ src: '../../../public/fonts/twkeveret-medium.otf' })


import "@splidejs/react-splide/css";

const str = "Instant dev environments";
const splitted = str.split("");

const container = {
  hidden: { opacity:1 },
  show: {
    opacity: 1,
    transition: {
      // delay:1,
      duration: 5,
      // staggerChildren: 0.03
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay:1,
    duration:5,
    color : '#d6fb41',
  },
};

export const HeroSectText = () => {
  return (
    <div className="lg:max-w-[900px]  lg:mx-auto lg:flex lg:items-center">
    <div className="  px-8 py-8   ">

      {/* text-[#d6fb41] */}
      <motion.div
        className={`flex lg:max-w-[630px] -tracking-[0.06em]  text-5xl md:text-[64px] py-6 lg:pt-[152px] lg:text-[115px] lg:leading-[110px]  font-semibold flex-wrap `}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* {splitted.map((eachCharacter) => {
          return eachCharacter !== " " ? (
            <motion.p variants={item} className=" text-transparent strokeClass">
              {eachCharacter}
            </motion.p>
          ) : (
            <p></p>
          );
        })} */}

<motion.p variants={item} className=" text-transparent strokeClass">I</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">n</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">s</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">t</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">a</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">n</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">t</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">&nbsp;</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">d</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">e</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">v</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">&nbsp;</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">e</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">v</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">i</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">r</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">o</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">n</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">m</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">e</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">n</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">t</motion.p>
<motion.p variants={item} className=" text-transparent strokeClass">s</motion.p>

      </motion.div>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-[#f0f0f0]  md:mb-16 text-[21px] lg:text-[32px] lg:leading-10 "
      >
        CodeSandbox keeps you in flow by giving you cloud development
        environments that resume in 1 second.
      </motion.p>
    </div>
    </div>
  );
};

const logos = [
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrosoft.73a237e1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintel.8f37f35e.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnvidia.cd0e3efe.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatlassian.6951c1d4.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuber.c72e37e8.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.b63b30d6.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.9554db3d.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadobe.eb5d0979.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshopify.a92c5be1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrosoft.73a237e1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintel.8f37f35e.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnvidia.cd0e3efe.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatlassian.6951c1d4.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuber.c72e37e8.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.b63b30d6.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.9554db3d.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadobe.eb5d0979.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshopify.a92c5be1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrosoft.73a237e1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintel.8f37f35e.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnvidia.cd0e3efe.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatlassian.6951c1d4.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuber.c72e37e8.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.b63b30d6.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.9554db3d.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadobe.eb5d0979.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshopify.a92c5be1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrosoft.73a237e1.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintel.8f37f35e.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnvidia.cd0e3efe.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatlassian.6951c1d4.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuber.c72e37e8.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.b63b30d6.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.9554db3d.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadobe.eb5d0979.png&w=640&q=75",
  "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshopify.a92c5be1.png&w=640&q=75"
]

export const LogosSlider = () => {
  const reduceOpacity = (eachLogo) => {
    const allElements = document.querySelectorAll(".logoElement");

    allElements.forEach((elem, secondIndex) => {
      elem.style.opacity = 0.3;
      
      elem.style.scale = 1;
      elem.style.zIndex = 10;
    });

    Array.from(allElements)
      .filter((eachElem) => {
        return eachElem.querySelector("p").innerText == eachLogo.text;
      })
      .forEach((check) => {
        check.style.opacity = 1;
        check.style.scale = 1.3;
        check.style.zIndex = 20;
      });
  };

  const resetOpacity = () => {
    const allElements = document.querySelectorAll(".logoElement");

    allElements.forEach((elem, secondIndex) => {
      elem.style.opacity = 1;
      elem.style.scale = 1;
        elem.style.zIndex = 10
    });
  };

  return (
    <Splide
      hasTrack={false}
      className=" text-white flex   border-t border-neutral-600 items-center w-full "
      extensions={{ AutoScroll }}
      options={{
        pagination: false,
        arrows: false,
        perPage: 2,


        fixedWidth:214,
        

        type: "loop",

        autoScroll: {
          speed: 0.6,
        },

        breakpoints: {
          768: {
            // gap: 300,
            perPage: 4,
          },

          1024: {
            perPage: 8,
          },
        },

        mediaQuery: "min",
      }}
    >
      <SplideTrack className="py-5 w-full bg-[#ffffff]">
        {logos.map((eachLogo, index) => {
          return (
            <SplideSlide
              // onMouseLeave={resetOpacity}
              // onMouseEnter={() => reduceOpacity(eachLogo)}
              className="cursor-pointer h-[104px] "
            >

              <div
                style={{ transition: "all 0.2s" }}
                className=" items-center w-full h-[100px] flex logoElement text-text1 gap-x-2 "
              >
                  <img src={eachLogo} className="imageCommon " alt="" />
               
               
                {/* <p className="whitespace-nowrap">{eachLogo.text}</p> */}
              </div>
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
};

const SingleReview = ({ details }) => {
  return (
    <div className="p-12 self-center bg-lime-800 space-y-4  max-h-[300px] md:max-h-[332px] rounded-[10px] mx-auto ">
      <p className="font-medium leading-7 text-[20px] md:text-[28px] md:leading-10 -tracking-[0.0125em]">
        {details?.text}
      </p>

      <div className="flex gap-x-4 items-center ">
        <div className="min-w-[48px] min-h-[48px] w-12 h-12 bg-pink-500 rounded-full ">
          <img
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjonnie.debf7c8e.jpg&w=96&q=75"
            className="imageCommon rounded-full"
            alt=""
          />
        </div>

        <div>
          <p>Jonnie Hallman</p>
          <p className="opacity-75 leading-5">Designer Developer, Stripe</p>
        </div>
      </div>
    </div>
  );
};

const reviewsArray = [
  [
    {
      text: "CodeSandbox continues to amaze me every day.",
      image: "",
      name: "",
      position: "",
    },

    {
      text: "The most interesting part of Codesandbox is just how perfectly it makes coding in the cloud just work.",
      image: "",
      name: "",
      position: "",
    },

    {
      text: "Its dramatically improved my experience of sharing ideas.",
      image: "",
      name: "",
      position: "",
    },

    {
      text: "It feels much more like my local environment.",
      image: "",
      name: "",
      position: "",
    },
  ],

  [
    {
      text: "It's a great experience and I miss some of its features when developing in VS Code.",
      image: "",
      name: "",
      position: "",
    },

    {
      text: "No but seriously, CodeSandbox iOS is amazing.",
      image: "",
      name: "",
      position: "",
    },

    {
      text: "The new CodeSandbox is the first online editor I can see myself using to build a full project.",
      image: "",
      name: "",
      position: "",
    },

    {
      text: "It's such a huge productivity boost.",
      image: "",
      name: "",
      position: "",
    },
  ],
];

export const Reviews = () => {
  return (
    <div className="py-4  text-[#0E0E0E] space-y-3">
      {reviewsArray.map((reviewsRow) => {
        return (
          <Splide
            extensions={{ AutoScroll }}
            options={{
              autoScroll: { speed: 1, pauseOnHover: false },
              perPage: 1,
              pagination: false,
              pauseOnHover: false,
              arrows: false,
              type: "loop",
              mediaQuery: "min",

              breakpoints: {
                768: {
                  perPage: 2,
                  fixedWidth: 500,
                  // gap: "0rem",
                },
              },

              gap: "1rem",
              fixedWidth: 300,
            }}
            hasTrack={false}
            className="h-full"
          >
            <SplideTrack className="h-full w-full ">
              {reviewsRow.map((eachReview) => {
                return (
                  <SplideSlide className="self-center  ">
                    {" "}
                    <SingleReview details={eachReview} />
                  </SplideSlide>
                );
              })}
            </SplideTrack>
          </Splide>
        );
      })}
    </div>
  );
};

const info = [

  {from:0,heading:4,firsttext:'million+',text:'users',},
  {from:0,heading:10000 ,firsttext:' +',text:'repositories connected',},
  {from:0,heading:20000 ,firsttext:' +',text:'organizations',},
  {from:0.1,heading:1,firsttext:'billion+',text:'lines of code written',},

]

function IncreaseNumbers({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 4,
      onUpdate(value) {
        
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);


  return <span ref={nodeRef} />;
}


export const Info = ()=>{

  

  return <div className="px-4 text-text1 pb-20">


  <div className="flex flex-col max-w-[1600px] mx-auto gap-y-8 sm:flex-row flex-wrap sm:gap-y-16 lg:justify-between">

{info.map((eachOne)=>{
  return <div className="first:border-0 lg:first:border-t-4 sm:w-1/2 lg:w-[calc(25%-25px)] border-t-4 border-[#252525] mt-6 lg:mt-12  pt-6 px-4 font-medium">

    <p className="text-5xl xl:text-[56px] 1xl:text-[64px] flex"><IncreaseNumbers from={eachOne.from} to={eachOne.heading} /> <span>{eachOne.firsttext}</span> </p>

<p className="text-[22px] font-normal mt-2">{eachOne.text}</p>



  </div>
})}


</div>

</div>
}