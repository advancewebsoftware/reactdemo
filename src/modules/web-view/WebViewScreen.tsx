import React from 'react';
import {styles} from './WebViewScreenStyle';
import WebView from 'react-native-webview';
import {CustomHeader} from '../../components';
import {SafeAreaView, View} from 'react-native';
import {AppStackNavigatorProps, RoutePage} from '../../types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

const WebViewScreen: React.FC = () => {
  const {params} =
    useRoute<RouteProp<AppStackNavigatorProps, RoutePage.WebView>>();
  const renderPreview = params?.params?.props || '';
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <CustomHeader isHome={false} onBackPress={() => navigation.goBack()}/>
      <WebView source={{uri: renderPreview}} style={styles.container} testID="web-view"/>
    </View>
  );
};

export default WebViewScreen;
