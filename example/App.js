import React from 'react';
import { Text, View } from 'react-native';
import getStyles from 'rn-common-styles';

const styles = getStyles(null, {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.fillAll}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View>
);

export default App;
