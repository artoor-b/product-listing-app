import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import { Product } from "@/types";
import { IProduct } from "@/types/overrides";

const ProductList = ({ products }: { products: IProduct[] | undefined }) => {
  return (
    <section className={styles["product-list"]}>
      {products?.map((product) => (
        <ProductCard product={product} key={product.articleNumber} />
      ))}
    </section>
  );
};

export default ProductList;
