"use client";
import React, { useState } from "react";
import Image from "next/image";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { IProduct } from "@/types/overrides";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }: { product: IProduct }) => {
  const isDiscount = product.promotion ? true : false;
  const discountPercentage = `${product.promotion?.percentage}% off`;
  const promotionName = product.promotion?.name;

  // 1. Store the intended image URL in state
  const [imgageSrc, setImgageSrc] = useState(product.image.url);

  // 2. Define your fallback image (put this in your /public folder)
  const fallbackImage = "/camera-off.svg";

  const countDiscountPrice = (
    basePrice: number,
    discountPercentage: number,
  ) => {
    return (basePrice - (basePrice * discountPercentage) / 100).toFixed(2);
  };

  const finalPrice = countDiscountPrice(
    product.price,
    product.promotion?.percentage || 0,
  );

  return (
    <div className={styles["product-card"]} key={product.articleNumber}>
      <Image
        className={styles["product-image"]}
        src={imgageSrc || fallbackImage}
        alt={product.image.altText}
        width={70}
        height={70}
        onError={() => {
          setImgageSrc(fallbackImage);
        }}
      />
      <div className={styles["product-info"]}>
        <p>{product.brandName}</p>
        <h1>{product.title}</h1>
        <p className={styles["product-description"]}>{product.description}</p>
      </div>

      <div className={styles["price-container"]}>
        <p className={styles["product-promotion"]}>{promotionName}</p>
        <div className={styles["product-price"]}>
          {isDiscount && (
            <>
              <p className={isDiscount ? styles.discount : styles.price}>
                ${product.price}
              </p>
              <p className={styles["discount-percentage"]}>
                {discountPercentage}
              </p>
            </>
          )}
        </div>
        {<p className={styles["final-price"]}>${finalPrice}</p>}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
