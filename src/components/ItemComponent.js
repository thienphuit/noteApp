import React from 'react'
import {
  View, TouchableOpacity, Dimensions, Text, StyleSheet, Image,
} from 'react-native'
import { delete_Btn } from '../../assets/images'
import { Colors, Fonts } from '../../assets/styles'

const { width } = Dimensions.get('window')

const ItemComponent = (props) => {
  const { item, handleDispath, handleDeleteItem } = props
  return (

    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22 / 375 * width,
      marginTop: 10 / 375 * width,
    }}
    >
      <TouchableOpacity onPress={() => handleDispath && handleDispath(item.id)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.radio, { backgroundColor: item.status ? Colors.primaryBlue : Colors.backgroudColor, borderColor: item.status ? Colors.primaryBlue : Colors.gray4 }]} />
          <Text style={[styles.contentItem, { textDecorationLine: item.status ? 'line-through' : 'none' }]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
      {item.time && item.time ? <Text style={styles.contentItem}>{item.time}</Text> : <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
        <Image source={delete_Btn} style={{ width: 24 / 375 * width, height: 24 / 375 * width }} resizeMode="contain" />
      </TouchableOpacity>}
      {/* <View style={[styles.diamond, { backgroundColor: item.status ? Colors.primaryBlue : Colors.primaryYellow }]} /> */}
    </View>

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
    color: Colors.gray2,
    marginVertical: 24 / 375 * width,
    marginLeft: 30 / 375 * width,
  },
  label: {
    color: 'black',

  },
  tab: {
    width: 120 / 375 * width,
  },
  diamond: {
    width: 16 / 375 * width,
    height: 16 / 375 * width,
    transform: [
      { rotate: '45deg' },
    ],
  },
  radio: {
    width: 24 / 375 * width,
    height: 24 / 375 * width,
    borderRadius: 12 / 375 * width,
    borderWidth: 3 / 375 * width,
    marginRight: 10 / 375 * width,
    borderColor: Colors.gray4,
  },
  contentItem: {
    color: Colors.gray2,
    fontSize: 18 / 375 * width,
    ...Fonts.semiBold,
  },
})
export default ItemComponent
