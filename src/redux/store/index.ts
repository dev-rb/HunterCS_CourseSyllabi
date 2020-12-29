import { configureStore } from "@reduxjs/toolkit";
import { coursesSlice } from "../slices";

export const store = configureStore(coursesSlice);