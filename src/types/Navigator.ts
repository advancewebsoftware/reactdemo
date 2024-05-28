export enum RoutePage {
  Home = 'Home',
  WebView = 'WebView',
}

export type AppStackNavigatorProps = {
  [RoutePage.Home]: undefined;
  [RoutePage.WebView]:
    | undefined
    | {
        params: {props: string};
      };
};
