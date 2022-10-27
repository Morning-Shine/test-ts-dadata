import { createSlice } from "@reduxjs/toolkit";


export type TUserInputGlobal = {
  valueAddressSearch: string;
};

const initialState: TUserInputGlobal = {
  valueAddressSearch: "",
};

export const userInputGlobalSlice = createSlice({
  name: "userInputGlobal",
  initialState,
  reducers: {
    setUserInputGlobal: (state, action) => {
      state.valueAddressSearch = action.payload;
    },
  },
});

export const { setUserInputGlobal } = userInputGlobalSlice.actions;
export default userInputGlobalSlice.reducer;
