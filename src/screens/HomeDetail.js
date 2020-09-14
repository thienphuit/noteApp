import React from 'react'
import {
  View, Text, StyleSheet, Image, SafeAreaView, Dimensions,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { back } from '../../assets/images'
import { Fonts } from '../../assets/styles/index'

const { width } = Dimensions.get('window')

const HomeDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#000', '#3b5998', '#fff']} style={{ flex: 1 }}>
        <SafeAreaView />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.header}>
            <Image style={{ width: 24 / 375 * width, height: 24 / 375 * width, marginLeft: 20 / 375 * width }} source={back} />
            <Text style={{
              fontSize: 24 / 375 * width, ...Fonts.bold, color: '#fff', textAlign: 'center',
            }}
            >
              Detail Screen
            </Text>
            <View />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 26 / 375 * width,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
export default HomeDetail
