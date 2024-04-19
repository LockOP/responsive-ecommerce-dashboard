import React from "react";
import styles from "./ProductRow.module.css";

interface ProductRowProps {
  picture: string;
  item: string;
  category: string;
  channel: string;
  qty: number;
  price: number;
}

const ProductRow: React.FC<ProductRowProps> = ({
  picture,
  item,
  category,
  channel,
  qty,
  price,
}) => {
  return (
    <div className={styles.productRow}>
      <input className={styles.checkbox} type="checkbox" />
      <img src={picture} alt=" " className={styles.picture} />
      <div className={styles.item}>{item}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.channel}>{channel}</div>
      <div className={styles.qty}>{`#${qty}`}</div>
      <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      <select className={styles.options}></select>
    </div>
  );
};

export default ProductRow;
