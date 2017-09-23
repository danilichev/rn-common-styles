import { StyleSheet } from 'react-native';

const defaultSettings = {
  indent: 5,
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

  return StyleSheet.create({
    fillAll: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
    },

    // margins
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
    withoutMargins: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },

    // paddings
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
