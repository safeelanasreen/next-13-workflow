import React from "react";

import Style from "./HomeBanner.module.scss";
import Link from "next/link";
import ImageOpacityLoader from "@/components/ImageOpacityLoader";
const HomeBanner = ({ data }) => {
  const { title, desc, url, image } = data;
  return (
    <section className={`${Style.BannerSec}`}>
      <div className={`${Style.BannerImage}`}>
        <ImageOpacityLoader src={image} fill />
      </div>
      <div className="container m-auto">
        <div className={`${Style.BannerText}`}>
          <h1>{title}</h1>
          <p className="text-sm">{desc}</p>
          <Link className="btn btn-primary" href={url}>
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
