import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  data: any;
}

const initialState: CounterState = {
  value: 0,
  data: [],
};

export const getAmbassadorForRanking: any = createAsyncThunk('fetchAPIfetchAPIfetchAPIfetchAPI', async () => {
  const ambassadorList = await fetch('https://mocki.io/v1/8e18e1fd-4534-4176-beb9-8ee21b2c722e', {
    method: 'GET',
  });
  return ambassadorList.json();
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAmbassadorForRanking.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    });
    builder.addCase(getAmbassadorForRanking.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
