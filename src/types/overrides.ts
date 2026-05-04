import { Image as ImageType, Product } from "@/types";

export type IProduct = Omit<Product, "image"> & {
  image: Omit<ImageType, "link"> & { url: string };
};

export type TImage = (Omit<ImageType, "link"> & { url: string }) | undefined;
