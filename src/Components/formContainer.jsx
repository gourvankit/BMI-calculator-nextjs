import React, { useRef, useState } from "react";
import styles from "./form.module.css";
import Image from "next/image";
import Chart from "./chart";
import { useFormState } from "react-dom";

import { changeBmi } from "@/redux/features/bmi-slice";
import { useDispatch } from "react-redux";
import { addData } from "@/app/lib/action";
const FormContainer = () => {
  const dispatch = useDispatch();
  const [bmi, setBmi] = useState(0);
  const weightRef = useRef();
  const ageRef = useRef();
  const heightRef = useRef();
  const [state, formAction] = useFormState(addData, undefined);
  const submitHandler = (e) => {
    e.preventDefault();
    const bmi =
      weightRef.current.value / Math.pow(heightRef.current.value / 100, 2);
    const num = Math.round(bmi * 100) / 100;
    setBmi((prev) => num);
    dispatch(changeBmi(bmi));
  };
  return (
    <div className={styles.formTop}>
      <div className={styles.formContents}>
        <div className={styles.heading}>
          <span className={styles.text}>Body Mass Index</span>
        </div>
        <div className={styles.formContainer}>
          <form
            onSubmit={submitHandler}
            className={styles.form}
            action={formAction}
          >
            <div className={styles.age}>
              <input
                name="height"
                type="number"
                placeholder="Height"
                min={20}
                max={300}
                ref={heightRef}
              />
              <span>(in cms)</span>
            </div>

            <div className={styles.age}>
              <input
                name="age"
                type="number"
                placeholder="Age"
                min={2}
                max={120}
                ref={ageRef}
              />
              <span>(Between 2yrs to 120yrs)</span>
            </div>
            <div className={styles.age}>
              <input
                name="weight"
                type="number"
                placeholder="Weight"
                ref={weightRef}
              />
              <span>(in Kgs)</span>
            </div>

            <button>Calculate</button>
          </form>

          <span className={styles.bmiText}>Your BMI is: {bmi}</span>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
