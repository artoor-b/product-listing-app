"use client";
import { useShopping } from "@/context/ShoppingContext";
import styles from "./CartSummary.module.css";

export default function CartSummary() {
  const { cartItems, cartTotal } = useShopping();

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h3 className={styles.emptyTitle}>Your cart is empty</h3>
        <p className={styles.emptySubtitle}>Add some items</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Order Summary</h2>

      <ul className={styles.itemList}>
        {cartItems.map((item) => {
          const originalItemTotal = item.price * item.quantity;
          let discountedItemTotal = originalItemTotal;

          if (item.promotion && item.promotion.percentage) {
            const discountMultiplier = (100 - item.promotion.percentage) / 100;
            discountedItemTotal =
              item.price * discountMultiplier * item.quantity;
          }

          return (
            <li key={item.articleNumber} className={styles.item}>
              <div>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemMeta}>
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>

                {item.promotion && (
                  <span className={styles.promoBadge}>
                    {item.promotion.name} (-{item.promotion.percentage}%)
                  </span>
                )}
              </div>

              <div className={styles.itemPricing}>
                {item.promotion ? (
                  <>
                    <span className={styles.originalPrice}>
                      ${originalItemTotal.toFixed(2)}
                    </span>
                    <span className={styles.discountedPrice}>
                      ${discountedItemTotal.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className={styles.regularPrice}>
                    ${originalItemTotal.toFixed(2)}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.grandTotalContainer}>
        <span className={styles.totalLabel}>Total:</span>
        <span className={styles.totalAmount}>${cartTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
