"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  {
    image: "https://codesandbox.io/_next/static/media/react.b3050237.svg",
    text: "React + Vite",
  },
  {
    image: "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
    text: "Next.js",
  },
  {
    image: "https://codesandbox.io/_next/static/media/vue.7cf1740d.svg",
    text: "Vue + Vite",
  },
  {
    image: "https://codesandbox.io/_next/static/media/angular.544aa66a.svg",
    text: "Angular",
  },
  {
    image: "https://codesandbox.io/_next/static/media/nuxt.2905d295.svg",
    text: "Nuxt",
  },
  {
    image: "https://codesandbox.io/_next/static/media/svelte.51c29d06.svg",
    text: "SvelteKit",
  },
  {
    image: "https://codesandbox.io/_next/static/media/remix.8a00c717.svg",
    text: "Remix",
  },
  {
    image: "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
    text: "Gatsby",
  },
  {
    image: "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
    text: "Astro Blog",
  },
  {
    image: "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
    text: "Next.js Commerce",
  },
  {
    image: "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
    text: "Web Image Crawler",
  },
  {
    image: "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
    text: "React TypeScript",
  },
  {
    image: "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
    text: "TypeScript",
  },
  {
    image: "https://codesandbox.io/_next/static/media/deno.f40886cb.svg",
    text: "Deno",
  },
  {
    image: "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
    text: "Astro Starter",
  },
  {
    image: "https://codesandbox.io/_next/static/media/react.b3050237.svg",
    text: "React + Vite",
  },
  {
    image: "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
    text: "Next.js",
  },
  {
    image: "https://codesandbox.io/_next/static/media/vue.7cf1740d.svg",
    text: "Vue + Vite",
  },
  {
    image: "https://codesandbox.io/_next/static/media/angular.544aa66a.svg",
    text: "Angular",
  },
  {
    image: "https://codesandbox.io/_next/static/media/nuxt.2905d295.svg",
    text: "Nuxt",
  },
  {
    image: "https://codesandbox.io/_next/static/media/svelte.51c29d06.svg",
    text: "SvelteKit",
  },
  {
    image: "https://codesandbox.io/_next/static/media/remix.8a00c717.svg",
    text: "Remix",
  },
  {
    image: "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
    text: "Gatsby",
  },
  {
    image: "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
    text: "Astro Blog",
  },
  {
    image: "https://codesandbox.io/_next/static/media/next.8d6ae969.svg",
    text: "Next.js Commerce",
  },
  {
    image: "https://codesandbox.io/_next/static/media/gatsby.3ae5d684.svg",
    text: "Web Image Crawler",
  },
  {
    image: "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
    text: "React TypeScript",
  },
  {
    image: "https://codesandbox.io/_next/static/media/typescript.e2619b63.svg",
    text: "TypeScript",
  },
  {
    image: "https://codesandbox.io/_next/static/media/deno.f40886cb.svg",
    text: "Deno",
  },
  {
    image: "https://codesandbox.io/_next/static/media/astro.06d32f6d.svg",
    text: "Astro Starter",
  },
];

export const LogosSlider = () => {
  const reduceOpacity = (eachLogo) => {
    const allElements = document.querySelectorAll(".logoElement");

    allElements.forEach((elem, secondIndex) => {
      elem.style.opacity = 0.6;
    });

    Array.from(allElements)
      .filter((eachElem) => {
        return eachElem.querySelector("p").innerText == eachLogo.text;
      })
      .forEach((check) => {
        check.style.opacity = 1;
      });
  };

  const resetOpacity = () => {
    const allElements = document.querySelectorAll(".logoElement");

    allElements.forEach((elem, secondIndex) => {
      elem.style.opacity = 1;
    });
  };

  return (
    <Splide
      hasTrack={false}
      className="h-full text-white flex border-t border-neutral-600 items-center w-full "
      extensions={{ AutoScroll }}
      options={{
        pagination: false,
        arrows: false,
        perPage: 2,

        type: "loop",

        autoScroll: {
          speed: 0.8,
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
      <SplideTrack className=" w-full">
        {logos.map((eachLogo, index) => {
          return (
            <SplideSlide
              onMouseLeave={resetOpacity}
              onMouseEnter={() => reduceOpacity(eachLogo)}
              className="cursor-pointer"
            >
              <div
                style={{ transition: "all 0.2s" }}
                className=" p-6 items-center  flex logoElement text-text1 gap-x-2 "
              >
                <div className="min-w-[32px] min-h-[32px] ">
                  <img src={eachLogo.image} className="imageCommon" alt="" />
                </div>

                <p className="whitespace-nowrap">{eachLogo.text}</p>
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
