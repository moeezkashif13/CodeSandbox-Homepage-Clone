import { HeroSectText, LogosSlider } from "./Client/Homepage";

export default function HeroSect() {
  //
  return (
    <div className="bg-neutral-700">
      <HeroSectText />

      <div className="flex border-t border-b border-neutral-600 ">
        {[1, 2].map(() => {
          return (
            <div
              style={{ transition: "all 0.3s" }}
              className="hover:bg-neutral-600 p-6  w-1/2 first:border-r first:border-r-neutral-600  space-y-6  sm:space-y-12"
            >
              <div>
                <p className="text-[#f0f0f0] font-medium text-lg ">
                  Repositories
                </p>

                <p className="text-[#f0f0f0]">
                  Build production-ready projects with your team.
                </p>
              </div>

              <div className="flex justify-between text-lime-600 items-center leading-5">
                <p>Import repository</p>

                <p>ic</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider */}

      <div className="  slider hideScrollbar overflow-scroll  h-[90px] ">
        <LogosSlider />
      </div>

      {/* Slider */}
    </div>
  );
}
