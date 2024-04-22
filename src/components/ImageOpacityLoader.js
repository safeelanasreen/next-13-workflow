"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageOpacityLoader = (props) => {
  const { src, ...rest } = props;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Image
      {...rest}
      src={src}
      ref={ref}
      className={inView ? "active" : ""}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.2s cubic-bezier(0.3,0.2,0.2,0.8)",
      }}
    />
  );
};

export default ImageOpacityLoader;
