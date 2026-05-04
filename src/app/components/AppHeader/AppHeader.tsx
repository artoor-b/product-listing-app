"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TImage } from "@/types/overrides";
import styles from "./AppHeader.module.css";
import { useShopping } from "@/context/ShoppingContext";
import CartSummary from "../CartSummary/CartSummary";

const AppHeader = ({ data }: { data: TImage }) => {
  const { itemsCount, cartItems, cartTotal } = useShopping();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header className={styles["app-header"]}>
      <Image
        src={data?.url || ""}
        alt={data?.altText || "Recruitment logo image"}
        width={160}
        height={60}
      />
      <div className={styles["shopping-cart-icon-container"]}>
        <Image
          className={styles["shopping-cart-icon"]}
          src="/shopping-cart.svg"
          alt="shopping cart icon"
          width={30}
          height={30}
          color="white"
          onClick={toggleCart}
        />

        {itemsCount > 0 && (
          <span className={styles["shopping-cart-badge"]}>{itemsCount}</span>
        )}
      </div>

      {isCartOpen && (
        <div className={styles.dropdown}>
          <CartSummary />
        </div>
      )}
    </header>
  );
};

export default AppHeader;
