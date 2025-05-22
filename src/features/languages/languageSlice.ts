import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { Language } from "../../types/types";



interface LanguageState {
  languages: Language[];
}

const initialState: LanguageState = {
  languages: [],
};

const languageSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguages(state, action: PayloadAction<Language[]>) {
      state.languages = action.payload;
    },
    addLanguage(state, action: PayloadAction<Language>) {
      state.languages.push(action.payload);
    },
  },
});

export const { setLanguages, addLanguage } = languageSlice.actions;
export default languageSlice.reducer;
