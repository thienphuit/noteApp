import React, { useState } from 'react'
import {
  View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { Fonts, Colors } from '../../assets/styles'
import { addNewToDo, deleteToDoList, editStatus } from '../redux/actions/addAction'
import { ItemComponent } from '../components'

const { width } = Dimensions.get('window')
const initLayout = { width }

const ActiveScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>All todo done</Text>
    </View>
  )
}
const HomeScreen = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { navigation } = props
  const data = useSelector((state) => state.todoList)

  const DoneScreen = () => {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        {
          data.map((x) => (x.status === true ? <View style={{ marginHorizontal: 30 }}>
            <ItemComponent item={x} />
          </View> : null))
        }
      </View>
    )
  }
  const AllTodoScreen = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    // const handleOnChange = (event) => {
    //   setInput(event)
    // }
    const handleDispath = (id) => {
      dispatch(editStatus(id))
    }
    const handleDeleteItem = (item) => {
      dispatch(deleteToDoList(item))
    }
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            paddingHorizontal: 26 / 375 * width,
            marginTop: 26 / 375 * width,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (

                // <TouchableOpacity onPress={handleDispath}>

                //   <View style={{
                //     flexDirection: 'row', justifyContent: 'space-between', marginBottom: 22 / 375 * width, marginRight: 10 / 375 * width, marginTop: 10 / 375 * width,
                //   }}
                //   >
                //     <View style={{ flexDirection: 'row' }}>
                //       <View style={[styles.radio, { backgroundColor: item.status ? Colors.primaryBlue : Colors.backgroudColor }]} />
                //       <Text style={[styles.contentItem, { textDecorationLine: item.status ? 'line-through' : 'none' }]}>
                //         {item.title}
                //       </Text>
                //     </View>

                //     <View style={[styles.diamond, { backgroundColor: item.status ? Colors.primaryBlue : Colors.primaryYellow }]} />
                //   </View>

                // </TouchableOpacity>
                <ItemComponent item={item} handleDispath={handleDispath} />
              )
            }}
            keyExtractor={(item, index) => `List item ${index}`}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 25 / 375 * width,
            right: 25 / 375 * width,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
            <LinearGradient
              colors={['#14F1D9', '#3672F8']}
              style={{
                width: 60 / 375 * width,
                height: 60 / 375 * width,
                borderRadius: 30 / 375 * width,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 40 / 375 * width, color: Colors.backgroudColor }}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderScene = SceneMap({
    first: AllTodoScreen,
    second: DoneScreen,
    third: ActiveScreen,
  })
  const renderTabBar = (props) => (
    <TabBar
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      indicatorStyle={{ backgroundColor: 'blue', color: 'blue' }}
      style={{ backgroundColor: Colors.backgroudColor, color: 'red' }}
      // indicatorStyle={{ color: 'red' }}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      indicatorContainerStyle={{ color: 'red' }}
    />
  )
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.title}>
        App
      </Text>
      <TabView
        navigationState={{
          index: currentIndex,
          routes:
            [
              { key: 'first', title: 'All' },
              { key: 'second', title: 'Done' },
              { key: 'third', title: 'Archive' },
            ],
        }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setCurrentIndex}
        initialLayout={initLayout}
      />
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
export default HomeScreen
