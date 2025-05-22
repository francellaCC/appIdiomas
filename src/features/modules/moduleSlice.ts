import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Module } from "../../types/types";

interface ModuleState {
  modules: Module[];
}

const initialState: ModuleState = {
  modules: [],
};

const moduleSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules(state, action: PayloadAction<Module[]>) {
      state.modules = action.payload;
    },
    addModule(state, action: PayloadAction<Module>) {
      state.modules.push(action.payload);
    },
  },
});

export const { setModules, addModule } = moduleSlice.actions;
export default moduleSlice.reducer;
