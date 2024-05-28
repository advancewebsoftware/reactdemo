type ColorType =
  | 'red'
  | 'gray'
  | 'blue'
  | 'black'
  | 'blue9'
  | 'white'
  | 'broderColor'
  | 'placeholder'
  | 'headerBackground';

export const Colors: Record<ColorType, string> = {
  red: '#C8202F',
  gray: '#AAAAAA',
  black: '#000000',
  blue: '#2689E4',
  blue9: '#3D3970',
  white: '#FFFFFF',
  broderColor: '#D9D9D9',
  placeholder: '#232323',
  headerBackground: '#141831',
};
