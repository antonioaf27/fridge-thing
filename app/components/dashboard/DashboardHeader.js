"use client";

import React from "react";
import DashboardPageHero from "./DashboardPageHero";
import styles from "../../dashboard/dashboard.module.css";

export default function DashboardHeader({ username }) {
  return (
    <DashboardPageHero
      eyebrow="Dashboard"
      title={`Welcome back, ${username}`}
      subtitle="Here's your nutrition, inventory, and recipe overview for today."
    >
      <div className={styles.heroFooterRow}>
        <div className={styles.actionRow}>
          <button className={styles.buttonPrimary}>Add Ingredient</button>
          <button className={styles.buttonSecondary}>View Pantry</button>
        </div>
      </div>
    </DashboardPageHero>
  );
}
