import React from 'react';
import {styles} from './CustomLoaderStyle';
import {ActivityIndicator} from 'react-native';

const CustomLoader = () => {
  return <ActivityIndicator size={'large'} style={styles.loaderStyle} />;
};

export default CustomLoader;
