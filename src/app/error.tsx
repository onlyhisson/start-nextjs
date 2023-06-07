"use client";

import { Metadata } from "next";
import styles from "@/styles/Home.module.scss";

export const metadata: Metadata = {
  title: "Error",
  description: "error page",
};

export default async function Error() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>Error page</div>
        </div>
      </main>
    </>
  );
}
