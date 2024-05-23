import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
export default function Skills() {
  return (
    <div
      className={"font-roboto max-w-[1500px] mx-4 md:mx-10 mt-20 xl:mx-auto"}
    >
      <div className={"mt-10 w-full"}>
        <h1 className={"text-[20px] font-medium"}>{"Skills"}</h1>
      </div>
      <div className={"mt-4 w-full grid grid-cols-3 gap-2"}>
        {[
          "Javascript",
          "Node.js",
          "Github",
          "RabbitMQ",
          "AWS",
          "Linux",
          "ReactJS",
          "VueJS",
          "NextJS",
          "NuxtJS",
        ].map((item, index) => {
          return (
            <div>
              <MuiButton
                key={index}
                color="primary"
                className={
                  "!w-full !border !border-solid !border-black !text-black"
                }
              >
                {item}
              </MuiButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
