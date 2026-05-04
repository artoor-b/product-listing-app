"use client";
import React from "react";
import styles from "./AddToCartButton.module.css";
import { useShopping } from "@/context/ShoppingContext";
import { IProduct } from "@/types/overrides";

const AddToCartButton = ({ product }: { product: IProduct }) => {
  const { addItemToCart, isAdding } = useShopping();

  return (
    <button
      className={styles["add-to-cart-button"]}
      onClick={() => addItemToCart(product)}
      disabled={isAdding}
    >
      {isAdding ? "..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
