import React from 'react'
import {
  View, TouchableOpacity, Dimensions, Text, StyleSheet,
} from 'react-native'
import { Colors, Fonts } from '../../assets/styles'

const { width } = Dimensions.get('window')

const ItemComponent = (props) => {
  const { item, handleDispath } = props
  return (
    <TouchableOpacity onPress={() => handleDispath && handleDispath(item.id)}>

      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 22 / 375 * width, marginRight: 10 / 375 * width, marginTop: 10 / 375 * width,
      }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.radio, { backgroundColor: item.status ? Colors.primaryBlue : Colors.backgroudColor }]} />
          <Text style={[styles.contentItem, { textDecorationLine: item.status ? 'line-through' : 'none' }]}>
            {item.title}
          </Text>
        </View>

        <View style={[styles.diamond, { backgroundColor: item.status ? Colors.primaryBlue : Colors.primaryYellow }]} />
      </View>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroudColor,
  },
  title: {
    fontSize: 32 / 375 * width,
    ...Fonts.semiBold,
    color: '#000',
    marginVertical: 24,
    marginLeft: 30,
  },
  label: {
    color: 'black',

  },
  indicator: {
    // backgroundColor: 'red',
  },
  tab: {
    width: 120,
    color: 'red',
    // height: 40,
  },
  diamond: {
    width: 16 / 375 * width,
    height: 16 / 375 * width,
    transform: [
      { rotate: '45deg' },
    ],
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
    marginRight: 10,
    borderColor: '#BDBDBD',
  },
  contentItem: {
    color: '#4F4F4F',
    fontSize: 18 / 375 * width,
    ...Fonts.semiBold,
  },
})
export default ItemComponent
