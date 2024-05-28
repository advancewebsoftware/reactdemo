import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerBackground,
  },
  newsContainer: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: Colors.white,
    borderTopLeftRadius: moderateScale(36),
    borderTopRightRadius: moderateScale(36),
  },
  headerText: {
    fontWeight: '600',
    fontSize: moderateScale(18),
    color: Colors.headerBackground,
  },
  emptyText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: moderateScale(18),
    marginTop: verticalScale(100),
    color: Colors.headerBackground,
  },

  footer: {
    height: verticalScale(20),
  },
});
