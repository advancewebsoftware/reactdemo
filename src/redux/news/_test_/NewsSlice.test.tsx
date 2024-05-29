import {getNewsData} from '../../../api/NewAPI';
import {newsReducers} from '../NewsSlice';

describe('exampleSlice', () => {
  describe('reducers', () => {
    const initialState = {isLoader: false, newsData: []};

    it('sets fetching true when fetchList is pending', () => {
      const action = {type: getNewsData.pending.type};
      const state = newsReducers(initialState, action);
      expect(state).toEqual({isLoader: true, newsData: []});
    });

    it('sets the id and list when fetchList is fulfilled', () => {
      const action = {
        type: getNewsData.fulfilled.type,
        payload: {
          articles: [
            {
              published_date: '2024-05-23T20:40:00+00:00',
              publisher: {
                name: 'CBS Los Angeles',
                url: 'https://www.cbsnews.com',
              },
              title:
                'Pro-Palestinian protesters descend on UCLA campus - CBS Los Angeles',
              url: 'https://www.cbsnews.com/losangeles/news/ucla-administration-orders-pro-palestinian-protesters-to-disperse-immediately/',
            },
            {
              published_date: '2024-05-24T06:07:15+00:00',
              publisher: {
                name: 'Axios',
                url: 'https://www.axios.com',
              },
              title:
                'Trump says he\'s "sure" Nikki Haley will be on his team "in some form" - Axios',
              url: 'https://www.axios.com/2024/05/24/trump-nikki-haley-our-team-2024-election',
            },
          ],
        },
      };
      const state = newsReducers(initialState, action);
      expect(state).toEqual({
        isLoader: false,
        newsData: [
          {
            published_date: '2024-05-23T20:40:00+00:00',
            publisher: {
              name: 'CBS Los Angeles',
              url: 'https://www.cbsnews.com',
            },
            title:
              'Pro-Palestinian protesters descend on UCLA campus - CBS Los Angeles',
            url: 'https://www.cbsnews.com/losangeles/news/ucla-administration-orders-pro-palestinian-protesters-to-disperse-immediately/',
          },
          {
            published_date: '2024-05-24T06:07:15+00:00',
            publisher: {
              name: 'Axios',
              url: 'https://www.axios.com',
            },
            title:
              'Trump says he\'s "sure" Nikki Haley will be on his team "in some form" - Axios',
            url: 'https://www.axios.com/2024/05/24/trump-nikki-haley-our-team-2024-election',
          },
        ],
      });
    });

    it('sets fetching false when fetchList is rejected', () => {
      const action = {
        type: getNewsData.rejected.type,
        payload: {error: 'some error'},
      };
      const state = newsReducers(initialState, action);
      expect(state).toEqual({isLoader: false, newsData: []});
    });
  });
});
