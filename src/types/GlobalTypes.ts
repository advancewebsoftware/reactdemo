export interface NewsType {
  published_date: string;
  publisher: {
    name: string;
    url: string;
  };
  title: string;
  url: string;
}

export interface GetSearchArticles {
  params: string;
  onSuccess?: (res: NewsType[]) => void;
  onFail?: () => void;
}

export type CategoriesType =
  | 'All'
  | 'sports'
  | 'health'
  | 'science'
  | 'business'
  | 'technology'
  | 'entertainment';
