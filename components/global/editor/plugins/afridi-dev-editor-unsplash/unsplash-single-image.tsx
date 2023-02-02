//@ts-ignore
import { useMantineTheme } from "@mantine/core";
import Image from "next/image";
import useNextBlurhash from "../../../../../data/use-next-blurhash/index";
import { AfridiEditorUnsplashSingleImageProps } from "../../../../../types/images/unsplash";

const AfridiEditorUnsplashSingleImage = ({
  placeholder,
  priority,
  fill,
  src,
  width,
  height,
  avatar,
  style,
}: AfridiEditorUnsplashSingleImageProps) => {
  const theme = useMantineTheme();
  const [blurDataUrl] = useNextBlurhash(placeholder ? placeholder : "12345678");
  return (
    <Image
      loading={priority == true ? "eager" : "lazy"}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      alt="image"
      placeholder={placeholder ? "blur" : "empty"}
      blurDataURL={placeholder ? blurDataUrl : undefined}
      priority={priority == true ? true : false}
      quality={75}
      src={src}
      loader={({ src, width: width2, quality }) => {
        return (
          src.split("&")[0] +
          `&fit=crop${height ? `` : ``}${
            width ? `&w=${width}` : ``
          }&q=${quality}${fill == true ? "&max-w=1024&max-h=1024" : ""}${
            avatar == true ? "&ar=1:1" : ""
          }`
        );
      }}
      style={{
        objectFit: "cover",
        borderRadius: avatar ? "50%" : theme.radius.sm,
        ...style,
      }}
    />
  );
};

export default AfridiEditorUnsplashSingleImage;
