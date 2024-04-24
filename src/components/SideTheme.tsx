import Char from "../assets/illustration.png"
import CharDark from "../assets/illustrationDarkMode.png"
import Blur from "../assets/EllipseBlur.png"
import BlurDark from "../assets/EllipseBlurDark.png"



export default function SideTheme() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    return <div className=" relative lg:w-[500px] xl:w-[640px] bg-secondary dark:bg-[#343744]  pl-[55px] pt-[86px]">
        <div className="w-full max-h-[582px]">
            {isDarkMode ? (
                <img className="h-full w-full object-cover" src={CharDark} alt="" />
            ) : (
                <img className="h-full w-full object-cover" src={Char} alt="" />
            )}
        </div>
        <div className="flex flex-col items-center justify-center mt-[4.5rem] mr-[56px]">
            <div className="max-w-[287px] flex flex-wrap font-bold text-2xl leading-[36px] text-center text-[#292C38] dark:text-white ">Perfect Place to Analyze Your Social Media</div>
            <div className=" max-w-[359px] mt-4  flex flex-wrap text-center font-medium text-base leading-nomalText tracking-nomalText text-textsecondary dark:text-textMain">Find out your engagement analysis, statistics and social media schedule.</div>
        </div>
        <div className=" absolute top-[346px] right-[150px] h-[176px] w-[173px] z-10">
            {isDarkMode ? (
                <img src={BlurDark} className="h-full w-full object-contain" alt="" />
            ) : (
                <img src={Blur} className="h-full w-full object-contain" alt="" />
            )}
        </div>
    </div>;
}
