/* eslint-disable react/no-unescaped-entities */
import { Button as MuiButton } from "@mui/material";
import { MdOutlineWavingHand } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { BsTelephoneFill } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { BsArrow90DegRight } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { BsCopy } from "react-icons/bs";
import { SiDevrant } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export default function TopSection() {
  return (
    <div className={""}>
      <div className={"font-roboto max-w-[1000px] mx-4 md:mx-10 lg:mx-auto"}>
        <div className={"flex justify-between items-center py-3"}>
          <img
            alt={"ilechuks73"}
            className={"h-[30px] md:h-[50px]"}
            src={
              "https://res.cloudinary.com/geergregrgege/image/upload/v1716754334/assets/images/xsp4qwpdyc0j0s2805vf.png"
            }
          />
          <div className={"flex"}>
            <MuiButton className={"!text-black !font-poppins"} disabled={true}>
              {"Portfolio"}
            </MuiButton>
            <MuiButton
              endIcon={<GoArrowUpRight className={"font-light"} />}
              className={
                "!text-black !font-light !rounded-none !border-l !border-l-black !border-solid !font-poppins"
              }
            >
              {"Blog"}
            </MuiButton>
          </div>
        </div>
        <div className={"flex gap-x-10 w-full"}>
          <div className={"w-[100%] md:w-[60%] pb-10 pt-20"}>
            <h1 className={"text-[30px] font-bold"}>Portfolio</h1>
            <h1 className={"text-[20px] mt-10  font-medium"}>
              I'm Joshua Ilechukwu
            </h1>
            <p className={"text-[16px] text-gray-600 mt-2"}>
              I'm a passionate and dedicated software engineer with 4 years of
              experience in developing innovative solutions and creating
              seamless user experiences. I specialize in web development, devOps
              and cloud.
            </p>
            <p className={"text-[16px] text-gray-600 mt-3"}>
              Throughout my career, I've had the opportunity to work on a
              variety of projects, ranging from Education, Fintech and DeFi. My
              approach combines technical proficiency with a deep understanding
              of user needs, ensuring that every project not only meets but
              exceeds expectations.
            </p>
            <p className={"text-[16px] text-gray-600 mt-3"}>
              I thrive in collaborative environments and enjoy tackling complex
              challenges head-on. Whether it's designing a new feature,
              optimizing performance, or diving into the latest tech trends, I
              bring creativity, analytical thinking, and a relentless drive for
              improvement to everything I do.
            </p>
            <p className={"text-[16px] text-gray-600 mt-3"}>
              Feel free to explore my portfolio. If you'd like to collaborate or
              just have a chat, don't hesitate to reach out!
            </p>
            <div className={"mt-8"}>
              <MuiButton
                variant={"contained"}
                className={"!bg-black !text-white"}
                endIcon={<MdOutlineWavingHand />}
              >
                Say Hello
              </MuiButton>
            </div>
          </div>
          <div className={"w-[100%] md:w-[40%] hidden md:block pt-20"}>
            <div className="flex flex-col gap-4">
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <BsTelephoneFill />
                <span className="font-light">+2348148799269</span>
                <BsCopy className={"font-light"} />
              </div>
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <BsMailbox />
                <span className="font-light">ilechuks73@gmail.com</span>
                <BsCopy className={"font-light"} />
              </div>
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <MdWhatsapp />
                <span className="font-light">Whatsapp</span>
                <GoArrowUpRight className={"font-light"} />
              </div>
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <MdFacebook />
                <span className="font-light">Facebook</span>
                <GoArrowUpRight className={"font-light"} />
              </div>
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <BsTwitterX />
                <span className="font-light">X</span>
                <GoArrowUpRight className={"font-light"} />
              </div>
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <SiDevrant />
                <span className="font-light">Devrant</span>
                <GoArrowUpRight className={"font-light"} />
              </div>
              <div className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between">
                <SiGithub />
                <span className="font-light">Github</span>
                <GoArrowUpRight className={"font-light"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */
