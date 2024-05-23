import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Contact() {
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 flex flex-wrap sm:flex-nowrap gap-2 w-full"}>
        <div className={"w-full md:w-[50%] xl:w-[70%]"}>
          <h1 className={"text-[20px] font-medium"}>{"Let's Work Together"}</h1>
          <p className={"text-[15px] text-gray-600 dark:text-white mt-2"}>
            {
              "Trust me, You can never go wrong working with me, I give everything my best."
            }
          </p>
        </div>
        <div className={"w-full md:w-[50%] xl:w-[30%]"}>
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your name"}
          />
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your email address"}
          />
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your message"}
            multiline={true}
            minRows={4}
          />
          <div className={"mt-3 w-full flex gap-x-2"}>
            <MuiButton
              variant={"contained"}
              className={"!bg-black !text-white !w-full !flex-grow"}
              endIcon={<PiPaperPlaneRightFill />}
            >
              Send
            </MuiButton>
            <MuiButton
              className={
                "!border !border-gray-200 !border-solid !bg-white !text-black"
              }
            >
              Clear
            </MuiButton>
          </div>
        </div>
      </div>
    </div>
  );
}
