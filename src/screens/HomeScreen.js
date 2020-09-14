import React, { useState } from 'react'
import {
  View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Dimensions, TextInput, Image,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import { Fonts } from '../../assets/styles/index'
import { addNewToDo, deleteToDoList } from '../redux/actions/addAction'
import { trash } from '../../assets/images'

const { width } = Dimensions.get('window')
const HomeScreen = (props) => {
  const { navigation } = props
  const data = useSelector((state) => state.todoList)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleOnChange = (event) => {
    setInput(event)
  }
  const handleDispath = () => {
    dispatch(addNewToDo(input))
  }
  const handleDeleteItem = (item) => {
    dispatch(deleteToDoList(item))
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#000', '#3b5998', '#fff']} style={{ flex: 1 }}>
        <SafeAreaView />
        <Text style={styles.title}>
          App
        </Text>
        <View style={{ marginHorizontal: 17 / 375 * width, marginTop: 26 / 375 * width }}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                  <LinearGradient
                    colors={['#B01EFF', '#E1467C']}
                    style={{
                      height: 50 / 375 * width,
                      alignItems: 'center',
                      borderWidth: StyleSheet.hairlineWidth,
                      borderRadius: 25 / 375 * width,
                      marginBottom: 20 / 375 * width,
                      justifyContent: 'space-between',
                      paddingHorizontal: 18,
                      flexDirection: 'row',
                      borderColor: '#F5E1E1',
                    }}
                  >
                    <Text style={{
                      color: '#fff',
                      fontSize: 18 / 375 * width,
                      ...Fonts.regular,
                      // marginLeft: 18 / 375 * width,
                    }}
                    >
                      {item}
                    </Text>
                    <TouchableOpacity onPress={() => handleDeleteItem(item)}>
                      <Image source={trash} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                  </LinearGradient>

                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => `List item ${index}`}
          />
        </View>
        <View style={{ position: 'absolute', bottom: 0, width }}>
          <LinearGradient
            colors={['#B01EFF', '#E1467C']}
            style={{
              marginBottom: 20 / 375 * width,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

              }}
              >
                <TouchableOpacity onPress={handleDispath}>
                  <LinearGradient
                    colors={['#14F1D9', '#3672F8']}
                    style={{
                      width: 40 / 375 * width, height: 40 / 375 * width, borderRadius: 20 / 375 * width, justifyContent: 'center', alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontSize: 30 / 375 * width, color: '#fff' }}>+</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

            </View>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: linear - gradient(115.87deg, #B01EFF 0 %, #E1467C 100 %),
  },
  title: {
    fontSize: 32 / 375 * width,
    ...Fonts.bold,
    color: '#fff',
    textAlign: 'center',
    marginTop: 38 / 375 * width,
  },
})
export default HomeScreen
