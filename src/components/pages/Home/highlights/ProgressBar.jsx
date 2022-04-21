import React from "react";

import styles from "./highlights.module.css";

export default function ProgressBar() {
  return (
    <div className={`${styles.progressBar} mt-1`}>
      <div className="progress"></div>
    </div>
  );
}
