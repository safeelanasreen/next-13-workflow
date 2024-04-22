import React from "react";
import { pageData } from "@/static/homePage";
import WidgetBlocks from "@/components/WidgetBlock";

const HomePage = () => {
  return (
    <>
      <WidgetBlocks widgets={pageData?.widgets} />
    </>
  );
};

export default HomePage;
