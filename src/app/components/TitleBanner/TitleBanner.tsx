import React from "react";
import styles from "./TitleBanner.module.css";

const TitleBanner = ({ title }: { title: string }) => {
  return <section className={styles["title-banner"]}>{title}</section>;
};

export default TitleBanner;
