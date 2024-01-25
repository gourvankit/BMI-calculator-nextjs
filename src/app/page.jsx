"use client";
import React from "react";
import styles from "./home.module.css";
import FormContainer from "@/Components/formContainer";
import Chart from "@/Components/chart";
const Page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageContainer}>
          <div className={styles.form}>
            <FormContainer />
          </div>
          <div className={styles.image}>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
