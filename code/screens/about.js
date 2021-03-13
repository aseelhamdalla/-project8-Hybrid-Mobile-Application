import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import ImageSlider from 'react-native-image-slider';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Image style={styles.image} source={require("../assets/about.png")} />
    </View>
  );
}


const styles = StyleSheet.create({

  image: {
    alignSelf: "center",
  },

});
