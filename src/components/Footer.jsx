const footerLinks = [

[
    
'Use Cases',
'Cloud Dev Environments',
' Code Reviews',
' Code in Sandboxes',
' Learn & Experiment',
' Coding Exercises',
' Instant Feedback',


],

[
'Ecosystem',
' Features',
' CodeSandbox for iOS',
' VS Code Extension',
' Sandpack',
' Status',
' Enterprise',
' Pricing',

],

[
'Explore',

' Discover',
' Changelog',
' Documentation',
' Blog',

],

[
    'Company',

' About',
' Support',
' Careers',
' Brand kit',
]


]


export default function Footer(){
    return <div className="bg-neutral-700  responsivePadding lg:px-24  text-white">
        
        <div className="max-w-common  mx-auto">

    <div className="flex flex-col lg:flex-row py-14">


    <div className="lg:w-[34.5%] lg:max-w-[380px]">
    
    <div className="w-6 h-6 text-[#858585] hover:text-white" style={{transition:'all 0.2s'}} >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="c-ePRSge c-ePRSge-ihITOpY-css"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h23.987v24H0V0Zm21.533 2.455v19.09H2.453V2.456h19.08Z" fill="currentColor" className="c-gSiLpy"></path></svg>
    </div>

    </div>



    <div className="flex flex-wrap gap-y-8  justify-between  lg:flex-grow text-[#858585]">


{footerLinks.map((eachOne)=>{
    return <div className="w-1/2  md:w-1/4 lg:w-[calc(25%-25px)] space-y-4 text-xs">
        
        <p className="text-[#A3A3A3] font-medium">{eachOne[0]}</p>

        {eachOne.map((eachLink,index)=>{
            return index>0&&<p className="text-sm md:text-xs">{eachLink}</p>
        })}
        
    </div>
})}


    </div>



    </div>


    <div className="h-[1px] bg-white opacity-[0.05]"></div>


    <div className="pt-8 pb-12 text-[#858585] text-xs">

<div className="flex justify-between leading-6">
    <p>Copyright © 2023 CodeSandbox B.V. All rights reserved.</p>
    <div className="ml-auto flex gap-x-4">

        {[1,2,3,4].map(()=>{
            return     <div className="w-5 h-5 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="c-dnfLDN c-dnfLDN-ihcWbaR-css"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0661 4C12.9629 4 4 13.1732 4 24.537C4 33.5733 9.75229 41.2405 17.7788 43.9787C18.8489 44.1156 19.1165 43.568 19.1165 43.0203V39.4606C13.498 40.6928 12.294 36.7223 12.294 36.7223C11.3576 34.3948 10.0198 33.7102 10.0198 33.7102C8.147 32.478 10.1536 32.478 10.1536 32.478C12.1602 32.6149 13.2304 34.5317 13.2304 34.5317C14.9695 37.6807 17.9125 36.7223 19.1165 36.1747C19.2503 34.8055 19.7854 33.984 20.4542 33.4364C16.0397 32.8887 11.3576 31.1089 11.3576 23.3048C11.3576 21.1142 12.1602 19.1974 13.3642 17.8283C13.0967 17.2806 12.4278 15.2269 13.498 12.3517C13.498 12.3517 15.237 11.8041 18.9827 14.4054C20.588 13.9947 22.3271 13.7209 24.0661 13.7209C25.8052 13.7209 27.5443 13.9947 29.1496 14.4054C33.029 11.8041 34.6343 12.3517 34.6343 12.3517C35.7045 15.2269 35.0356 17.2806 34.7681 17.8283C36.1058 19.1974 36.7747 21.1142 36.7747 23.3048C36.7747 31.2458 32.0926 32.8887 27.6781 33.4364C28.3469 34.121 29.0158 35.3532 29.0158 37.27V42.8834C29.0158 43.4311 29.4171 44.1156 30.3535 43.8418C38.38 41.1035 43.9985 33.4364 43.9985 24.4001C44.1323 13.1732 35.1694 4 24.0661 4Z" fill="currentColor" class="c-kVrRSI"></path></svg>
        
        </div>
        
        })}
    


    </div>
</div>


<div className="flex gap-x-3">

<p>Terms of Use</p>

<div className="w-[1px] bg-white opacity-[0.05]"></div>

<p>Privacy Policy
</p>    

</div>


    </div>

    </div>



    </div>
}