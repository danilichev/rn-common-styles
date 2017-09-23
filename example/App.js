import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import s from './app/styles';

const duckImg = require('./app/assets/duck.jpg');

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#D3D3D3',
  },
  image: {
    width: 80,
    height: 120,
  },
})

const App = () => (
  <View style={[s.fillAll, s.centered, styles.root]}>
    <View style={[s.rowAligned, s.doublePaddings, s.whiteBackground, s.rounded]}>
      <Image
        style={[styles.image, s.marginRight]}
        source={duckImg}
      />
      <View style={s.borderBottom}>
        <Text style={s.primaryTextColor}>wishes you luck!</Text>
      </View>
    </View>
  </View>
);

export default App;
