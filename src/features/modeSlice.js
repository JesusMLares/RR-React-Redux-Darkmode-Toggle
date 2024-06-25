import { createSlice } from "@reduxjs/toolkit";

const mode1 = {
  color1: "#293132",
  color2: "#474044",
  color3: "#4F5165",
  color4: "#547AA5",
  color5: "#50D8D7",
  photo: "https://www.placecage.com/200/300",
};

const mode2 = {
  color1: "#6E44FF",
  color2: "#B892FF",
  color3: "#FFC2E2",
  color4: "#FF90B3",
  color5: "#EF7A85",
  photo: "https://placekitten.com/200/300",
};

const initialState = { ...mode2};

export const dataSlice = createSlice({
  name: "mode",
  // Ensure darkMode is part of the initial state
  initialState: { ...initialState, darkMode: false},
  reducers: {
    toggleMode: (state) => {
      if (state.darkMode) {
        // Switch to mode2 and set darkMode to false
        return { ...mode2, darkMode: false};
      } else {
        // Switch to mode1 and set darkMode to true
        return { ...mode1, darkMode: true};
      }
    },
  },
});

export const { toggleMode } = dataSlice.actions;

export default dataSlice.reducer;
