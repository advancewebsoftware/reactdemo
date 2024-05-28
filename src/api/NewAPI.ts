import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { GetSearchArticles } from '../types';

const newsInstance = axios.create({
  baseURL: 'https://news-api14.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '6204bcde17msh272108b70d9314dp1f4c31jsn55a88d42b8d2',
    'X-RapidAPI-Host': 'news-api14.p.rapidapi.com',
  },
});

export const getNewsData = createAsyncThunk(
  'getNewsData',
  async (endPoint: string) => {
    try {
      const response = await newsInstance.get(endPoint);
      return response.data;
    } catch (error) {}
  },
);
export const getSearchArticles = async(payload:GetSearchArticles) => {
  const response = await newsInstance.get(
    `search?q=${payload.params}&country=us&language=en&pageSize=10&publisher=cnn.com,bbc.com`,
  );
  if (response.data) {
    payload.onSuccess && payload.onSuccess(response.data.articles)
  }
}
