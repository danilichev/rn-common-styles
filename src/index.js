import { StyleSheet } from 'react-native';
import { multiplyIndents } from './utils';

const defaultSettings = {
  indent: 10,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#e6e6e6',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  whiteColor: '#ffffff',
}

const getStyles = (settings = {}, styles = {}) => {
  const {
    indent,
    borderWidth,
    borderColor,
    primaryTextColor,
    secondaryTextColor,
    whiteColor,
  } = { ...defaultSettings, ...settings };

  const margins = {
    marginTop: {
      marginTop: indent,
    },
    marginRight: {
      marginRight: indent,
    },
    marginLeft: {
      marginRight: indent,
    },
    marginBottom: {
      marginBottom: indent,
    },
    marginHorizontal: {
      marginRight: indent,
      marginLeft: indent,
    },
    marginVertical: {
      marginTop: indent,
      marginBottom: indent,
    },
    margins: {
      marginTop: indent,
      marginRight: indent,
      marginBottom: indent,
      marginLeft: indent,
    },
  };

  const paddings = {
    paddingTop: {
      paddingTop: indent,
    },
    paddingRight: {
      paddingRight: indent,
    },
    paddingBottom: {
      paddingBottom: indent,
    },
    paddingLeft: {
      paddingLeft: indent,
    },
    paddingHorizontal: {
      paddingRight: indent,
      paddingLeft: indent,
    },
    paddingVertical: {
      paddingTop: indent,
      paddingBottom: indent,
    },
    paddings: {
      paddingTop: indent,
      paddingRight: indent,
      paddingBottom: indent,
      paddingLeft: indent,
    },
  };

  return StyleSheet.create({
    fillAll: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
    },

    rowAligned: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    // margins
    ...margins,
    ...multiplyIndents(margins, 'double', 2),
    ...multiplyIndents(margins, 'half', 0.5),

    withoutMargins: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },

    // paddings
    ...paddings,
    ...multiplyIndents(paddings, 'double', 2),
    ...multiplyIndents(paddings, 'half', 0.5),

    withoutPaddings: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    },

    // borders
    borderTop: {
      borderTopWidth: borderWidth,
      borderTopColor: borderColor,
    },
    borderBottom: {
      borderBottomWidth: borderWidth,
      borderBottomColor: borderColor,
    },
    verticalBorder: {
      borderTopWidth: borderWidth,
      borderTopColor: borderColor,
      borderBottomWidth: borderWidth,
      borderBottomColor: borderColor,
    },
    withoutBorders: {
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      shadowOpacity: 0,
    },

    // colors
    whiteBackground: {
      backgroundColor: whiteColor,
    },
    primaryTextColor: {
      color: primaryTextColor,
    },
    secondaryTextColor: {
      color: secondaryTextColor,
    },

    ...styles,
  });
};

export default getStyles;
