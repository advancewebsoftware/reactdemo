import {
  CustomHeader,
  CustomHeadline,
  CustomLoader,
  CustomeSearchBar,
} from '../../components';
import React from 'react';
import {styles} from './HomeScreenStyles';
import {verticalScale} from '../../theme';
import {useHomeScreen} from './useHomeScreen';
import {FlashList} from '@shopify/flash-list';
import {homeScreenString} from '../../constants';
import {useDebouncedCallback} from 'use-debounce';
import {SafeAreaView, Text, View} from 'react-native';
import {AppStackNavigatorProps, RoutePage} from '../../types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const {
    newData,
    isSearch,
    isLoading,
    onChangeText,
    onSearchPress,
    onCancelPress,
    selectedCategory,
    onSelectCategory,
    searchArticalsData,
    isSearchArticalsLoader,
    setIsSearchArticalsLoader,
  } = useHomeScreen();

  const navigation = useNavigation<NavigationProp<AppStackNavigatorProps>>();
  const onURLPress = (url: string): void => {
    navigation.navigate(RoutePage.WebView, {params: {props: url}});
  };

  const debounced = useDebouncedCallback(value => {
    onChangeText(value);
  }, 2000);

  const ListHeaderComponent: React.FC = () => {
    return (
      <Text
        style={[
          styles.headerText,
          {
            marginBottom: isSearch ? 0 : verticalScale(16),
          },
        ]}>
        {isSearch ? '' : homeScreenString.recommended}
      </Text>
    );
  };
  const ListEmptyComponent: React.FC = () => {
    return (
      <Text style={styles.emptyText}>
        {isSearch ? homeScreenString.searching : homeScreenString.noData}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {isSearch ? (
        <CustomeSearchBar
          onCancelPress={onCancelPress}
          onChangeText={txt => {
            setIsSearchArticalsLoader(true);
            debounced(txt);
          }}
        />
      ) : (
        <CustomHeader
          isHome
          onSearchPress={onSearchPress}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      )}
      <View style={styles.newsContainer}>
        {isLoading || isSearchArticalsLoader ? (
          <CustomLoader />
        ) : (
          <FlashList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ListEmptyComponent}
            ListHeaderComponent={ListHeaderComponent}
            data={isSearch ? searchArticalsData : newData}
            ListFooterComponent={() => <View style={styles.footer} />}
            renderItem={({item, index}) => (
              <CustomHeadline
                item={item}
                index={index}
                onPress={onURLPress}
                isLastIndex={newData?.length - 1}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
