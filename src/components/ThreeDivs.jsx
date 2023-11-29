

const CenterDiv = ({head1,head2,text,additional,secondary})=>{

    return <div className="z-20 text-center commonFlex flex-col  gap-y-6">
    <h1 className={`${secondary?'text-[40px] lg:text-[56px] lg:leading-[52px] leading-10':'text-5xl leading-11 lg:text-[64px] lg:leading-[68px]'} font-medium text-text1 `}>
    {head1} 
    <br />
    {head2}
    </h1>
    
    <p className={`text-text1 lg:text-2xl ${secondary?'w-[75%]':'w-1/2 lg:w-full '} opacity-70 text-[20px]`}>{text}</p>
    
    
    <div className="flex justify-center gap-x-12 text-lime-600 text-lg lg:text-[20px]" style={{transition:'all 0.2s'}}>
    
    <p className="hover:text-lime-400">Learn More <span>ic</span></p>

    {additional&&<p className="hover:text-lime-400">Try now <span>ic</span></p>}
    
    
    </div>
    </div>

}


export default function ThreeDivs(){
    return <div className="space-y-4 md:p-8 bg-black">


<div className="   h-[607px] commonFlex flex-col relative">



<div className="absolute w-full h-full  top-0 left-0 z-10 ">


<img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull-stack-development.9da9918b.jpg&w=3840&q=75" className="imageCommon" alt="" />

</div>



<CenterDiv head1='Cloud Development' head2='Environments' text='Anything that runs on local, runs on CodeSandbox.' additional />


</div>




<div className="flex flex-col gap-4 md:flex-row">


<div className="   h-[517px] md:w-1/2 lg:h-[560px] commonFlex flex-col relative bg-black">


<div className="absolute w-full h-full  top-0 left-0 z-10  opacity-20" >


<img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandboxes.612e2c7b.jpg&w=3840&q=75" className="imageCommon" alt="" />

</div>



<CenterDiv head1='Prototype' head2='Your Ideas' text='Start faster using one of our 100+ templates.' secondary />


</div>


<div className="   h-[517px] md:w-1/2 lg:h-[560px] commonFlex flex-col relative ">


<div className="absolute w-full h-full  top-0 left-0 z-10 ">


<img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull-stack-development.9da9918b.jpg&w=3840&q=75" className="imageCommon" alt="" />

</div>



<CenterDiv head1='Learn &' head2='Experiment' text='Try frameworks and experiment with new tools.' secondary />


</div>


</div>





    </div>
}