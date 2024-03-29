import { useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { EditingImageProps } from "../../types/generics";

const EdtingImage = ({
  fill = false,
  loading = "lazy",
  src,
  width,
  height,
  style,
  avatar,
  placeholder,
  priority,
  widthWise,
  sizes
}: EditingImageProps) => {
  const theme = useMantineTheme();
  return (
    <Image
      sizes={sizes ?? undefined}
      loading={priority == true ? "eager" : "lazy"}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      alt="image"
      placeholder={placeholder ? "blur" : "empty"}
      blurDataURL={placeholder ? placeholder : undefined}
      priority={priority == true ? true : false}
      quality={75}
      src={src}
      loader={({ src, width: width2, quality }) => {
        if (src.includes("unsplash")) {
          return (
            src.split("&")[0] +
            `&fit=${`crop`}${height ? (widthWise ? `` : `&h=${height}`) : ``}${
              width ? (widthWise ? `&w=${width}` : ``) : ``
            }&q=${avatar ? 100 : quality}${
              fill == true ? "&max-w=1024&max-h=1024" : ""
            }${avatar == true ? "&ar=1:1" : ""}`
          );
        }

        if (src.includes("imagekit")) {
        }
        return src;
      }}
      style={{
        objectFit: "cover",
        borderRadius: avatar ? "50%" : theme.radius.sm,
        ...style,
      }}
    />
  );
};

export default EdtingImage;
