/* eslint-disable react/no-unescaped-entities */
import { Button as MuiButton } from "@mui/material";
import { MdOutlineWavingHand } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

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
        <div className={"flex gap-x-6 w-full"}>
          <div className={"w-[100%] md:w-[60%] pb-10"}>
            <h1 className={"text-[30px] font-bold pt-20"}>Portfolio</h1>
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
          <div className={"w-[100%] md:w-[40%] hidden md:block"}>
            {/*<img*/}
            {/*  alt={"joshua ilechukwu"}*/}
            {/*  className={"w-[100%] h-[100%] object-cover object-center filter"}*/}
            {/*  src={*/}
            {/*    "https://res.cloudinary.com/geergregrgege/image/upload/v1716427815/assets/images/epdfpb3gswfsl1hd2zc3.jpg"*/}
            {/*  }*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */
