import { createSlice } from "@reduxjs/toolkit";

const converterViewReducer = createSlice({
    name: 'view',
    initialState: {
        view: false
    },
    reducers: {
        toggleView: (state, action ) => {
            state.view = action.payload
        }
    },
  });

  export const {toggleView} = converterViewReducer.actions

  export default converterViewReducer.reducer