import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  renderContainer: {
    flexDirection: 'row',
    gap: moderateScale(8),
    marginTop: verticalScale(8),
  },
  publisherName: {
    fontWeight: '600',
    color: Colors.gray,
    fontSize: moderateScale(12),
  },
  dateText: {
    fontWeight: '600',
    color: Colors.gray,
    fontSize: moderateScale(12),
  },
  borderBottomLine: {
    borderBottomWidth: 1,
    marginVertical: moderateScale(16),
    borderBottomColor: Colors.broderColor,
  },
  title: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    color: Colors.headerBackground,
  },
  url: {
    fontWeight: '400',
    color: Colors.blue,
    fontSize: moderateScale(14),
    marginTop: verticalScale(8),
  },
});
