import Head from "next/head";

import {
  TopSection,
  Contact,
  Skills,
  WorkExperience,
  ViewSwitch,
  Projects,
} from "@/components/root";

export default function Root() {
  return (
    <>
      <Head>
        <title>Ilechukwu Joshua</title>
        <meta name="description" content="Software Engineer" />
        {/*<script*/}
        {/*  src="https://apis.google.com/js/platform.js"*/}
        {/*  async*/}
        {/*  defer*/}
        {/*></script>*/}
      </Head>

      <TopSection />
      <Skills />
      <WorkExperience />
      {/* <Projects /> */}
      <Contact />
      <div className={"h-[300px] w-full bg-none"}></div>
      {/* <ViewSwitch /> */}
    </>
  );
}
