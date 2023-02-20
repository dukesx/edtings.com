//@ts-ignore
import { useState } from "react";
import EdtingImage from "../../../image";
import Image from "next/image";
import { AfridiDevEditorUnsplashGridImageProps } from "../../../../../types/images/unsplash";
import { useMantineTheme } from "@mantine/core";
import useNextBlurhash from "../../../../../data/use-next-blurhash/index";

const AfridiDevEditorUnsplashGridImage = ({
  width,
  height,
  src,
  placeholder,
}: AfridiDevEditorUnsplashGridImageProps) => {
  const theme = useMantineTheme();
  const [blurDataUrl] = useNextBlurhash(placeholder ? placeholder : "12345678");

  return (
    <Image
      width={width}
      height={height}
      alt="image"
      placeholder={"blur"}
      blurDataURL={blurDataUrl}
      quality={75}
      src={src.replaceAll(
        "https://images.unsplash.com",
        "https://unsplash-cache.edtings.com"
      )}
      loader={({ src, width: width2, quality }) => {
        return (
          src.split("&")[0] +
          `&fit=crop${height ? `` : ``}${
            width ? `&w=${width2}` : ``
          }&q=${quality}`
        );
      }}
      style={{
        objectFit: "unset",
        borderRadius: theme.radius.sm,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default AfridiDevEditorUnsplashGridImage;
