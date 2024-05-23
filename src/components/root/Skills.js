import { Button as MuiButton, TextField as MuiTextField } from "@mui/material";
export default function Skills() {
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 w-full"}>
        <h1 className={"text-[20px] font-medium"}>{"Skills"}</h1>
      </div>
      <div className={"mt-4 w-full grid grid-cols-3 lg:grid-cols-4 gap-2"}>
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
            <div key={index}>
              <MuiButton
                color="primary"
                className={
                  "!w-full !border !border-solid !border-gray-300 !text-black"
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
