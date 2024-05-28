import React from 'react';
import moment from 'moment';
import {NewsType} from '../../types';
import {Text, View} from 'react-native';
import {styles} from './CustomHeadlineStyle';

interface CustomHeadlinetype {
  index: number;
  item: NewsType;
  isLastIndex: number;
  onPress: (props: string) => void;
}

const CustomHeadline = ({
  item,
  index,
  onPress,
  isLastIndex,
}: CustomHeadlinetype) => {
  const date = moment(item?.published_date).format('DD/MM/YYYY');

  return (
    <View>
      <Text style={styles.title}>{item?.title}</Text>
      <Text onPress={() => onPress(item?.url)} style={styles.url}>
        {item?.url}
      </Text>
      <View style={styles.renderContainer}>
        <Text style={styles.publisherName}>{item?.publisher?.name}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      {isLastIndex !== index && <View style={styles.borderBottomLine} />}
    </View>
  );
};

export default CustomHeadline;
