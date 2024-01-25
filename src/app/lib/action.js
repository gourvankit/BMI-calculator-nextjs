"use server";
import { UseSelector } from "react-redux";

import { User } from "./models";

export const addData = async (prevState, formData) => {
  const { height, weight, age } = Object.fromEntries(formData);
  const bmi = useSelector((state) => state.bmiReducer.value.bmi);
  console.log(height, weight, age, bmi);
  try {
    connectToDb();
    const newData = new User({
      height,
      weight,
      age,
      bmi,
    });

    await newData.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
