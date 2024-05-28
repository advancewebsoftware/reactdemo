import React from 'react';
import {Colors} from '../../theme';
import {Images} from '../../assets';
import {styles} from './CustomeSearchBarStyle';
import {homeScreenString} from '../../constants';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

interface CustomeSearchBarProps {
  onCancelPress: () => void;
  onChangeText?: ((text: string) => void) | undefined;
}

const CustomeSearchBar = ({
  onCancelPress,
  onChangeText,
}: CustomeSearchBarProps) => {
  return (
    <View style={styles.container}>
      <Image source={Images.search_ic} style={styles.image} />
      <TextInput
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        placeholder={homeScreenString.search}
        placeholderTextColor={Colors.placeholder}
      />
      <TouchableOpacity onPress={onCancelPress}>
        <Image source={Images.cancel_ic} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomeSearchBar;
