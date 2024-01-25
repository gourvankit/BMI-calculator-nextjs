import React from "react";
import { Chart as ChartJs } from "chart.js/auto";
import styles from "./chart.module.css";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
const Chart = () => {
  const bmi = useSelector((state) => state.bmiReducer.value.bmi);
  return (
    <div className={styles.barGraph}>
      <Bar
        data={{
          labels: ["Your BMI", "Average BMI"],
          datasets: [
            {
              label: "BMI",
              data: [`${bmi}`, 26],
              backgroundColor: ["rgba(43,63,229,0.8)", "rgba(250,192,19,0.8)"],
              borderRadius: 5,
            },
          ],
        }}
      ></Bar>
    </div>
  );
};

export default Chart;
