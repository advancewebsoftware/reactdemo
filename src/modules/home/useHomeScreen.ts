import { CategoriesType, NewsType } from '../../types';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/Store';
import {getNewsData, getSearchArticles} from '../../api/NewAPI';

export const useHomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newData = useSelector((state: RootState) => state.news.newsData);
  const isLoading = useSelector((state: RootState) => state.news.isLoader);

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>('All');
  const [isSearchArticalsLoader,setIsSearchArticalsLoader] = useState<boolean>(false)
  const [searchArticalsData,setSearchArticalsData] = useState<NewsType[] | []>([])
  
  const onSearchPress = () => {
    setIsSearch(true);
  };
  const onCancelPress = () => {
    setIsSearch(false);
    setSearchArticalsData([])
  };
  const onSelectCategory = (item: CategoriesType) => {
    setSelectedCategory(item);
  };
  const categories = [
    'sports',
    'health',
    'science',
    'business',
    'technology',
    'entertainment',
  ];

  // Handling API call for fetch news headlines
  useEffect(() => {
    if (selectedCategory === 'All') {
      dispatch(
        getNewsData(
          `top-headlines?country=us&language=en&pageSize=10&category=${categories.join(
            ',',
          )}`,
        ),
      );
    } else {
      dispatch(
        getNewsData(
          `top-headlines?country=us&language=en&pageSize=10&category=${selectedCategory}`,
        ),
      );
    }
  }, [selectedCategory]);

  const onChangeText = (text: string) => {
    const request = {
      params: text,
      onSuccess: (res:NewsType[]) => {
        setSearchArticalsData(res)
        setIsSearchArticalsLoader(false)
      },
      onFail:()=>{
        setIsSearchArticalsLoader(false)
      }
    };
    getSearchArticles(request)
  };

  return {
    newData,
    isSearch,
    isLoading,
    onChangeText,
    onCancelPress,
    onSearchPress,
    selectedCategory,
    onSelectCategory,
    searchArticalsData,
    isSearchArticalsLoader,
    setIsSearchArticalsLoader
  };
};
