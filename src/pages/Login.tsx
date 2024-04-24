import USFflag from "../assets/USFlag.png"
import { IoChevronDown } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";
import { LuLock } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import SideTheme from "../components/SideTheme";


export default function Login() {
    return <div className="max-h-[1024px] flex ">
        <div className="flex-1 relative bg-white dark:bg-[#292C38]">
            <div className="mt-10 lg:ml-[1.875rem] xl:ml-[4.25rem] max-w-[193px] bg-secondary dark:bg-[#343744] flex items-center justify-center rounded-xl px-4 py-3">
                <div className=" h-[1.125rem] w-6">
                    <img src={USFflag} className="h-full w-full object-cover" alt="" />
                </div>
                <span className="text-base font-bold text-textMain  px-2">English (US)</span>
                <IoChevronDown style={{ width: 24, height: 24, color: "#96A0B5" }} />
            </div>
            <div className=" mt-[3.313em] lg:ml-28 xl:ml-[10.313rem]">
                <div className="h-10 w-[12.313rem] flex items-center gap-4 ">
                    <div className="flex">
                        <div className="rectangle"></div>
                        <div className="leftCircle"></div></div>
                    <span className="text-[1.75rem] leading-6 text-[#062046] dark:text-white font-bold">Insight CO</span>
                </div>
                <div className="lg:max-w-[28.125rem] xl:max-w-[33.75rem] mt-12 flex flex-col gap-8">
                    <div className=" flex flex-col gap-3">
                        <div className=" font-bold text-2xl leading-9 text-[#292C38] dark:text-white">Hi, Welcome Back!</div>
                        <div className="text-sm font-medium text-textsecondary dark:text-textMain">Log In to your account</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="h-58 flex items-center pt-[1.188rem] pb-[1.125rem] rounded-xl border border-borderColor">
                            <FiUser style={{ height: 24, width: 24, marginLeft: 16, marginRight: 12, color: "#96A0B5" }} />
                            <input type="text" required placeholder="Username" className="stylePlaceholder flex-1 mr-[2.688rem] outline-none text-base leading-nomalText font-medium tracking-nomalText  text-textInput dark:text-white bg-white dark:bg-[#292C38] " />
                        </span>
                        <span className="h-58 flex items-center pt-[1.188rem] pb-[1.125rem] rounded-xl border border-borderColor">
                            <LuLock style={{ height: 24, width: 24, marginLeft: 16, marginRight: 12, color: "#96A0B5" }} />
                            <input type="password" required placeholder="Password" className="stylePlaceholder flex-1 outline-none text-base leading-nomalText font-medium tracking-nomalText  text-textInput dark:text-white bg-white dark:bg-[#292C38]" />
                            <LuEyeOff style={{ height: 24, width: 24, color: "#96A0B5", margin: " 0 16px" }} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between custom-checkbox">
                        <div className="flex items-center">
                            <input type="checkbox" className=" h-5 w-5 mr-3" />
                            <span className=" text-textsecondary dark:text-textMain font-medium text-base leading-nomalText">Remember Me</span>
                        </div>
                        <span className=" text-third font-bold text-base">Forgot Password?</span>
                    </div>
                    <button className="h-58  bg-third text-base leading-nomalText tracking-nomalText font-medium rounded-xl text-white ">Log In</button>
                    <div className="divider">
                        <div className="divider-content text-textsecondary dark:text-textMain  font-medium text-sm px-4">Or log in with</div>
                    </div>
                    <button className=" h-58  rounded-xl border border-borderColor dark:border-textMain flex gap-3 justify-center items-center">
                        <FcGoogle style={{ width: 24, height: 24 }} />
                        <span className=" font-medium text-base leading-nomalText tracking-nomalText text-[#292C38] dark:text-white">Log In with Google</span>
                    </button>
                </div>
                <div className=" lg:max-w-[28.125rem] xl:max-w-[33.75rem] pt-[8.313rem] pb-12 flex justify-center">
                    <span className="font-medium text-base leading-normalText tracking-normalText text-textsecondary dark:text-[#94A3B8]">Don't have an account?</span>&nbsp;
                    <span className="text-third font-bold text-base">Sign Up</span>
                </div>

            </div>
        </div>
        <SideTheme />
    </div >;
}
