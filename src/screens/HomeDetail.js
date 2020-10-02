import React from 'react'
import {
  View, StyleSheet, Image, SafeAreaView, Dimensions, Text, TextInput,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
// import * as scale from 'd3-scale'
// import dateFns from 'date-fns'

import { back } from '../../assets/images'
import { Fonts } from '../../assets/styles/index'
import { LineChart } from '../components'

const { width } = Dimensions.get('window')

const HomeDetail = ({ navigation }) => {
  const data = [28, 31, 28, 27, 26, 25]

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
        <View style={{ marginHorizontal: 20 }}>
          <LineChart data={data} />
        </View>
        <View style={{
          height: 40 / 375 * width,
          borderRadius: 20 / 375 * width,
          backgroundColor: '#fff',
          width: 289 / 375 * width,
          marginLeft: 17 / 375 * width,
          marginVertical: 8 / 375 * width,
          justifyContent: 'center',
          marginRight: 12 / 375 * width,

        }}
        >
          <TextInput style={{ marginLeft: 18 }} placeholder="ToDo..." />
        </View>
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
