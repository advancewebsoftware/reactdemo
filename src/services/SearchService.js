export default SearchService = {
  getHeadlines: async ({category = '', country = 'us', language = 'en'}) => {
    const url = `https://news-api14.p.rapidapi.com/top-headlines?country=${country}&language=${language}&pageSize=10&category=${category}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6204bcde17msh272108b70d9314dp1f4c31jsn55a88d42b8d2',
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const jsonResult = JSON.parse(result);

      if (jsonResult.status === 'ok') {
        return jsonResult.articles;
      }
    } catch (error) {
      console.error(error);
    }
  },
  searchArticles: async ({
    query = '',
    country = 'us',
    language = 'en',
    publishers = ['cnn.com', 'bbc.com'],
  }) => {
    const url = `https://news-api14.p.rapidapi.com/search?q=${query}&country=${country}&language=${language}&pageSize=10&publisher=${publishers.join(
      ',',
    )}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6204bcde17msh272108b70d9314dp1f4c31jsn55a88d42b8d2',
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const jsonResult = JSON.parse(result);

      if (jsonResult.status === 'ok') {
        return jsonResult.articles;
      }
    } catch (error) {
      console.error(error);
    }
  },
};

/* 
Possible countries:
MY, GB, CN, TW, AU, BW, ET, KR, GH, IE, KE, LV, NA, IN, BD, TH, NZ, NG, PK, PH, SG, ZA, TZ, UG, ZW, ID, CZ, DE, AT, CH, AR, EG, CL, CO, CU,
US, MX, PE, VE, LB, CA, FR, MA, SN, IT, LT, HK, JP, HU, BE, NL, NO, PL, BR, PT, RO, SK, SI, SE, VN, TR, GR, BG, RU, RS, UA, IL, AE, SA

Possible languages:
en, zh-Hans, zh-Hant, id, cs, uk, he, ar, de, es-419, ja, ko, fr, it, lv, lt, ml, th, hu, nl, no, pl, pt-419, pt-150, ro, sk, sl, sv, 
vi, tr, el, bg, ru, sr, mr, hi, bn, ta, te

Possible categories:
business, science, sports, entertainment, health, technology
*/
