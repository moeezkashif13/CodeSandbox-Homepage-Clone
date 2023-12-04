
import { HeroSectText, Info, LogosSlider } from "./Client/Homepage";





export default function HeroSect() {

  



  //
  return (
    <div className="bg-neutral-700">

    <div className="lg:flex 2xl:h-[86.5vh] ">


      <HeroSectText />

      <div className="flex lg:flex-col lg:max-w-[320px] 1xl:max-w-[405px]  border-t border-b border-neutral-600 lg:border-t-0 lg:border-b-0 lg:border-l ">
        {[1, 2].map(() => {
          return (
            <div
              style={{ transition: "all 0.3s" }}
              className=" hover:bg-neutral-600 p-6 lg:p-12  w-1/2 lg:w-full  first:border-r first:border-r-neutral-600  lg:first:border-0 lg:first:border-b border-neutral-600 space-y-6  sm:space-y-12 lg:space-y-16 1xl:h-full 1xl:space-y-0 1xl:flex 1xl:flex-col 1xl:justify-between "
            >
              <div>
                <p className="text-[#f0f0f0] font-medium text-lg md:text-2xl 1xl:text-[32px] ">
                  Repositories
                </p>

                <p className="text-[#f0f0f0] lg:mt-2 1xl:mt-6 opacity-50 lg:text-2xl 1xl:text-[32px]">
                  Build production-ready projects with your team.
                </p>
              </div>

              <div className="flex justify-between 1xl:justify-start 1xl:gap-x-3  text-lime-600 items-center leading-5 1xl:text-[24px]">
                <p>Import repository</p>

                <p>ic</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>

<div className="  slider hideScrollbar overflow-scroll   ">
<LogosSlider />
</div>



<Info/>


</div>

  );
}
