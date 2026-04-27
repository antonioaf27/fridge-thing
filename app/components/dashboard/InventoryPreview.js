"use client";

import React from "react";
import DashboardSection from "./DashboardSection";
import styles from "../../dashboard/dashboard.module.css";

export default function InventoryPreview({ items }) {
  return (
    <DashboardSection title="Your Pantry" action={<span className={styles.linkText}>See all</span>}>
      <div className={styles.inventoryList}>
        {items.map((item) => (
          <div key={item} className={styles.inventoryItem}>
            <span className={styles.inventoryBullet} />
            <span className={styles.inventoryText}>{item}</span>
          </div>
        ))}
      </div>

      <button className={`${styles.buttonPrimary} ${styles.buttonFullWidth}`}>
        Update Inventory
      </button>
    </DashboardSection>
  );
}
