export default function Footer(){
    return <div className="bg-neutral-700 px-mobile py-14 text-white">
        

    <div className="flex flex-col lg:flex-row">


    <div className="lg:w-[347px]">icon</div>



    <div className="flex flex-wrap gap-y-8 justify-between  lg:flex-grow">


{[1,2,3,4].map(()=>{
    return <div className="w-1/2 md:w-1/4">
        <p>Use Cases</p>
        <p>Code Reviews</p>
        <p>Code Reviews</p>
        <p>Code Reviews</p>
        <p>Code Reviews</p>
        <p>Code Reviews</p>
    </div>
})}


    </div>



    </div>


    <div className="h-1 bg-orange-500"></div>


    <div>

<div className="flex justify-between">
    <p>Copyright © 2023 CodeSandbox B.V. All rights reserved.</p>
    <div className="ml-auto">
    icons
    </div>
</div>


<div className="flex gap-x-3">

<p>Terms of Use</p>

<div>border</div>

<p>Privacy Policy
</p>    

</div>


    </div>




    </div>
}