import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

export default function Contact() {
  const [form, setForm] = useState({
    name: null,
    emailAddress: null,
    message: null,
  });
  const { executeRecaptcha } = useReCaptcha();
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 flex flex-wrap sm:flex-nowrap gap-2 w-full"}>
        <div className={"w-full md:w-[50%] xl:w-[70%]"}>
          <h1 className={"text-[20px] font-medium"}>{"Let's Work Together"}</h1>
          <p className={"text-[15px] text-gray-600 mt-2"}>
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
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your email address"}
            value={form.emailAddress || ""}
            onChange={(e) => setForm({ ...form, emailAddress: e.target.value })}
          />
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            className={"!w-full !mt-3"}
            placeholder={"Your message"}
            multiline={true}
            minRows={4}
            value={form.message || ""}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className={"mt-3 w-full flex gap-x-2"}>
            <MuiButton
              variant={"contained"}
              className={"!bg-black !text-white !w-full !flex-grow"}
              endIcon={<PiPaperPlaneRightFill />}
              onClick={async (event) => {
                const token = await executeRecaptcha("form_submit");
                fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ...form,
                    token,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => console.log(data))
                  .catch((error) =>
                    console.error("Error fetching items:", error),
                  );
              }}
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
