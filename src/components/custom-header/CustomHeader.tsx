import React from 'react';
import {Images} from '../../assets';
import {styles} from './CustomHeaderStyle';
import {FlashList} from '@shopify/flash-list';
import {homeScreenString} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CategoriesType} from '../../types';

interface CustomHeadertype {
  isHome: boolean;
  onBackPress?: () => void;
  selectedCategory?: string;
  onSearchPress?: () => void;
  onSelectCategory?: (item: CategoriesType) => void;
}

const CustomHeader = ({
  isHome,
  onBackPress,
  onSearchPress,
  onSelectCategory,
  selectedCategory,
}: CustomHeadertype): React.JSX.Element => {
  const category: CategoriesType[] = [
    'All',
    'health',
    'sports',
    'science',
    'business',
    'technology',
    'entertainment',
  ];

  return (
    <View style={styles.container}>
      {isHome ? (
        <>
          <View style={styles.innerView}>
            <Image
              source={Images.logo_ic}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.text}>{homeScreenString.todayNews}</Text>
            <TouchableOpacity onPress={onSearchPress}>
              <Image source={Images.search_ic} style={styles.searchImage} />
            </TouchableOpacity>
          </View>
          <FlashList
            horizontal
            data={category}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: {item: CategoriesType}) => {
              return (
                <TouchableOpacity
                  onPress={() => onSelectCategory && onSelectCategory(item)}
                  style={[
                    styles.horizontalList,
                    {
                      backgroundColor:
                        selectedCategory === item ? Colors.red : Colors.blue9,
                    },
                  ]}>
                  <Text
                    style={{color: Colors.white, fontSize: moderateScale(15)}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </>
      ) : (
        <TouchableOpacity onPress={onBackPress}>
          <Image source={Images.arrow_ic} style={styles.arrowImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
