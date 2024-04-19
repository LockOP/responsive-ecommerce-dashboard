import React from "react";
import styles from "./NewListing.module.css";

interface NewListingProps {
  onClose: () => void;
}

const NewListing: React.FC<NewListingProps> = ({ onClose }) => {
  return (
    <div className={styles.containerNL}>
      <div className={styles.row}>
        <div className={styles.title}>New Listing</div>
      </div>
      <div className={styles.row}>
        <label className={`${styles.labelText} ${styles.detailTitle}`}>
          Details
        </label>
        <label className={styles.uploadField}>
          Upload images
          <input
            type="file"
            multiple
            className={styles.uploadImages}
            name="image"
          />
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.labelText}>Item</label>
        <input type="text" className={styles.inputField} placeholder="Name" />
      </div>
      <div className={styles.row}>
        <label className={styles.labelText}>Description</label>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Lorem ipsum"
        />
      </div>
      <div className={styles.row}>
        <label className={styles.labelText}>Category</label>
        <select className={styles.selectField}>
          <option>Category</option>
          {/* Options here */}
        </select>
      </div>
      <div className={styles.row}>
        <label className={styles.labelText}>Price</label>
        <input type="text" className={styles.inputField} placeholder="Name" />
      </div>
      <div className={styles.row}>
        <label className={styles.labelText}>Shipping</label>
        <select className={styles.selectField}>
          <option>Carrier</option>
          {/* Options here */}
        </select>
      </div>
      <div className={styles.row}>
        <label className={styles.labelText}>Options</label>
        <select className={styles.selectField}>
          <option>Add options</option>
          {/* Options here */}
        </select>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        &#10006;
      </button>
      <button className={styles.saveButton}>Save</button>
    </div>
  );
};

export default NewListing;
