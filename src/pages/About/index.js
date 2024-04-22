import WidgetBlocks from "@/components/WidgetBlock";
import React from "react";
import { aboutPageData } from "@/static/about";

const AboutPage = () => {
  return (
    <>
      <WidgetBlocks widgets={aboutPageData.widgets} />
    </>
  );
};

export default AboutPage;
