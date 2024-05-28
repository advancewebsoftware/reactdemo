import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    height: verticalScale(45),
    marginTop : verticalScale(20),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(99),
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    paddingHorizontal: horizontalScale(16),
  },
  image: {
    tintColor: Colors.black,
    height: verticalScale(20),
    width: horizontalScale(20),
  },
  inputStyle: {
    flex: 1,
    fontWeight: '400',
    height: verticalScale(45),
    fontSize: moderateScale(14),
  },
});
