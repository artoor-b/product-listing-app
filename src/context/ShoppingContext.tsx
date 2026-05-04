"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { IProduct } from "@/types/overrides";

export interface CartItem extends IProduct {
  quantity: number;
}

interface ShoppingContextType {
  cartItems: CartItem[];
  itemsCount: number;
  cartTotal: number;
  isAdding: boolean;
  addItemToCart: (product: IProduct) => Promise<void>;
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(
  undefined,
);

export function ShoppingProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartTotal = cartItems.reduce((total, item) => {
    let activePrice = item.price;

    if (item.promotion && item.promotion.percentage) {
      const discountMultiplier = (100 - item.promotion.percentage) / 100;
      activePrice = item.price * discountMultiplier;
    }

    return total + activePrice * item.quantity;
  }, 0);

  const addItemToCart = async (product: IProduct) => {
    setIsAdding(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.articleNumber === product.articleNumber,
        );

        if (existingItem) {
          return prevItems.map((item) =>
            item.articleNumber === product.articleNumber
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        return [...prevItems, { ...product, quantity: 1 }];
      });
    } catch (error) {
      console.error("Failed to add item to cart", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <ShoppingContext.Provider
      value={{ cartItems, itemsCount, cartTotal, isAdding, addItemToCart }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShopping() {
  const context = useContext(ShoppingContext);
  if (context === undefined) {
    throw new Error("useShopping must be used within a ShoppingProvider");
  }
  return context;
}
