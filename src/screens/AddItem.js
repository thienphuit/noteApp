import React, { useState } from 'react'
import {
  View, StyleSheet, TextInput, Text, SafeAreaView, Dimensions, TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch } from 'react-redux'
import { Fonts, Colors } from '../../assets/styles'
import { addNewToDo } from '../redux/actions/addAction'

const { width } = Dimensions.get('window')

const AddItem = (props) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const handleOnChange = (event) => {
    setInput(event)
  }
  const handleSubmitText = () => {
    dispatch(addNewToDo(input))
    navigation.goBack()
  }
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={{
        ...Fonts.semiBold, fontSize: 30, textAlign: 'center', marginVertical: 20,
      }}
      >
        Submit content
      </Text>
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
        <TextInput style={{ marginLeft: 18 }} placeholder="ToDo..." onChangeText={handleOnChange} />
      </View>
      <View style={{
        marginTop: 40,

      }}
      >
        <TouchableOpacity onPress={handleSubmitText}>
          <LinearGradient
            colors={['#0bf7c3', '#56CCF2']}
            style={{
              width: width - 40,
              marginHorizontal: 30,
              paddingHorizontal: 30,
              height: 50 / 375 * width,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Text style={{ ...Fonts.semiBold, color: Colors.backgroudColor, fontSize: 20 }}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
export default AddItem
