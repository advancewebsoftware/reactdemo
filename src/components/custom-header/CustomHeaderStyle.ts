import {
  Colors,
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    backgroundColor: Colors.headerBackground,
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: verticalScale(44),
    width: horizontalScale(44),
  },
  searchImage: {
    height: verticalScale(24),
    width: horizontalScale(24),
  },
  text: {
    fontWeight: '600',
    color: Colors.white,
    fontSize: moderateScale(18),
  },
  arrowImage: {
    tintColor: Colors.white,
    height: verticalScale(24),
    width: horizontalScale(24),
  },
  horizontalList: {
    padding: moderateScale(15),
    marginTop: verticalScale(12),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(20),
    marginHorizontal: horizontalScale(8),
  },
});
