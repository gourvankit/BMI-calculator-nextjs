import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  value: {
    bmi: 0,
  },
};
export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    changeBmi: (state, action) => {
      return {
        value: {
          bmi: action.payload,
        },
      };
    },
  },
});
export const { changeBmi } = bmiSlice.actions;
export default bmiSlice.reducer;
