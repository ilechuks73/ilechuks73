/* eslint-disable react/no-unescaped-entities */
import { Button as MuiButton } from "@mui/material";
export default function TopSection() {
  return (
    <div className={"font-roboto max-w-[1500px] mx-4 md:mx-10 mt-20 xl:mx-auto"}>
      <h1 className={"text-[30px] font-bold"}>Portfolio</h1>
      <div className={"mt-10 flex w-full"}>
        <div className={"w-[100%] md:w-[50%]"}>
          <h1 className={"text-[20px] font-medium"}>
            Hi, I'm Joshua Ilechukwu
          </h1>
          <p className={"text-[15px] text-gray-600 mt-2"}>
            Hi, I'm [Your Name], a passionate and dedicated software engineer
            with [X] years of experience in developing innovative solutions and
            creating seamless user experiences. I specialize in [your key areas
            of expertise, e.g., web development, mobile applications, AI, etc.],
            and I'm proficient in [list of programming languages and tools you
            excel at].
          </p>
          <p className={"text-[15px] text-gray-600 mt-3"}>
            Throughout my career, I've had the opportunity to work on a variety
            of projects, ranging from [brief mention of notable projects or
            industries you've worked in]. My approach combines technical
            proficiency with a deep understanding of user needs, ensuring that
            every project not only meets but exceeds expectations.
          </p>
          <p className={"text-[15px] text-gray-600 mt-3"}>
            I thrive in collaborative environments and enjoy tackling complex
            challenges head-on. Whether it's designing a new feature, optimizing
            performance, or diving into the latest tech trends, I bring
            creativity, analytical thinking, and a relentless drive for
            improvement to everything I do.
          </p>
          <p className={"text-[15px] text-gray-600 mt-3"}>
            When I'm not coding, you can find me [mention any hobbies or
            interests that reflect your personality and work ethic, e.g.,
            exploring the latest tech innovations, contributing to open-source
            projects, or hiking in the mountains].
          </p>
          <p className={"text-[15px] text-gray-600 mt-3"}>
            Feel free to explore my portfolio to see some of the projects I've
            been working on. If you'd like to collaborate or just have a chat,
            don't hesitate to reach out!
          </p>
          <div className={"mt-8"}>
            <MuiButton
              variant={"contained"}
              className={"!bg-black !text-white"}
            >
              Reach Out
            </MuiButton>
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */