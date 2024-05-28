import {newsReducers} from './news';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  news: newsReducers,
});

export default rootReducer;
