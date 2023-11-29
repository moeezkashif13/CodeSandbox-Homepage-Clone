const navLinks = [

    'Features',
    'Use Cases',
    'iOS',
    'Discover',
    'Docs',
    'Support',
    'Blog',
    'Enterprise',
    'Pricing',

]


const NavLinksComp = ()=><div className="responsivePadding flex gap-x-6 sm:gap-x-0 sm:justify-between  border-b border-b-fourth bg-neutral-700  text-sm lg:px-8 lg:gap-x-6 lg:text-xs lg:bg-transparent lg:border-0  text-third hideScrollbar overflow-scroll lg:overflow-auto">

{navLinks.map(eachLink=>{
    return <p className="whitespace-nowrap  py-[18px] lg:py-0">{eachLink}</p>
})}



</div>

export default function Navbar(){

    return <div className="bg-neutral-600"> 
        
        <div className="flex max-w-common mx-auto  text-sm py-[18px] lg:py-2  justify-between responsivePadding  ">


        <div className="flex items-center  gap-x-4">

<div className="w-6 h-6 text-white">

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="c-ePRSge c-ePRSge-ihITOpY-css"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h23.987v24H0V0Zm21.533 2.455v19.09H2.453V2.456h19.08Z" fill="currentColor" className="c-gSiLpy"></path></svg>

</div>
<p className="text-secondary text-sm lg:hidden">CodeSandbox</p>


<div className="hidden lg:block">

<NavLinksComp/>

</div>



        </div>






<div className="flex items-center gap-x-6 lg:text-xs">


<p className="text-third">Sign In</p>


<div className="bg-[#EAFF96] px-3 py-1.5 rounded-md">
Try for free
</div>


</div>






    </div>



<div className="lg:hidden">
<NavLinksComp/>
</div>





    </div>


}