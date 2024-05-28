import {NewsType} from '../../types';
import {getNewsData} from '../../api/NewAPI';
import {Draft, PayloadAction, Slice, createSlice} from '@reduxjs/toolkit';

type NewsIntialState = {
  isLoader: boolean;
  newsData: NewsType[];
};

const initialState: NewsIntialState = {
  isLoader: false,
  newsData: [],
};

const newsSlice: Slice<NewsIntialState> = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getNewsData.pending,
      (state: Draft<NewsIntialState>, action) => {
        state.isLoader = true;
      },
    );
    builder.addCase(
      getNewsData.fulfilled,
      (
        state: Draft<NewsIntialState>,
        action: PayloadAction<{articles: NewsType[]}>,
      ) => {
        state.isLoader = false;
        state.newsData = [...action.payload?.articles ?? []];
      },
    );
    builder.addCase(
      getNewsData.rejected,
      (state: Draft<NewsIntialState>, action) => {
        state.isLoader = false;
      },
    );
  },
});

export const newsReducers = newsSlice.reducer;
export const newsActions = newsSlice.actions;
