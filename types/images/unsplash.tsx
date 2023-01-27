import { CSSProperties } from "react";

export interface AfridiEditorUnsplashSingleImageProps {
  placeholder: string;
  priority?: boolean;
  fill?: boolean;
  src: string;
  width: number;
  height: number;
  avatar?: boolean;
  style?: CSSProperties;
}

export interface AfridiDevEditorUnsplashGridImageProps {
  width: number;
  height: number;
  src: string;
  placeholder: string;
}
