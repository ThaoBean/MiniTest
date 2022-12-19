import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IItemFlightInformationFromAPI } from '../../screens/Home/types';

export interface FlightInfoState {
  data: IItemFlightInformationFromAPI[];
}

const initialState: FlightInfoState = {
  data: [],
};

export const getListFlightInfo: any = createAsyncThunk('getListFlightInfo', async () => {
  const data = await fetch('https://mocki.io/v1/8e18e1fd-4534-4176-beb9-8ee21b2c722e', {
    method: 'GET',
  });
  return data.json();
});

export const flightInfoSlice = createSlice({
  name: 'lisFlightInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListFlightInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getListFlightInfo.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default flightInfoSlice.reducer;
