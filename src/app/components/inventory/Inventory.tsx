"use client";

import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import ProductRow from "../productRow/ProductRow";
import NewListing from "../newListing/NewListing";
import styles from "./Inventory.module.css";

export default function Inventory() {
  // State to manage visibility
  const [showNewListing, setShowNewListing] = useState(false);

  // Function to toggle the visibility of NewListing component
  const toggleNewListing = () => {
    setShowNewListing(!showNewListing);
  };

  // Place holders for dropdown
  const categories = ["Option1", "Option2", "Option3"];
  const channels = ["Option1", "Option2", "Option3"];
  const moreActions = ["Option1", "Option2", "Option3"];
  const active = ["Option1", "Option2", "Option3"];

  // Placeholder data for product rows
  const productData = [
    {
      picture: "url",
      item: "Item",
      category: "Category",
      channel: "Channels",
      qty: 0,
      price: 0.0,
    },
    {
      picture: "url",
      item: "Item",
      category: "Category",
      channel: "Channels",
      qty: 0,
      price: 0.0,
    },
    {
      picture: "url",
      item: "Item",
      category: "Category",
      channel: "Channels",
      qty: 0,
      price: 0.0,
    },
    {
      picture: "url",
      item: "Item",
      category: "Category",
      channel: "Channels",
      qty: 0,
      price: 0.0,
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.dropdowns}>
            <Dropdown options={categories} defaultValue="Categories" />
            <Dropdown options={active} defaultValue="Active" />
            <Dropdown options={channels} defaultValue="Channels" />
            <Dropdown options={moreActions} defaultValue="More actions" />
          </div>
          <div className={styles.actionButtons}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            <button
              className={styles.newListingButton}
              onClick={() => setShowNewListing(true)}
            >
              New Listing
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <input className={styles.checkbox} type="checkbox" />
          <div></div>
          <div className={styles.item}>Item</div>
          <div className={styles.category}>Category</div>
          <div className={styles.channels}>Channels</div>
          <div className={styles.quantity}>Qty</div>
          <div className={styles.price}>Price</div>
          <div></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.productRows}>
          {/* Map over product data and render ProductRow components */}
          {productData.map((product, index) => (
            <ProductRow key={index} {...product} />
          ))}
        </div>
      </div>
      {/* Render NewListing component if showNewListing is true */}
      {showNewListing && (
        <div className={styles.overlay}>
          {/* Pass toggleNewListing function as a prop */}
          <NewListing onClose={toggleNewListing} />
        </div>
      )}
    </div>
  );
}
