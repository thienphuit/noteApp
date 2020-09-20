import React, { useState, useRef } from 'react'
import {
  View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, Animated, Platform,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { useSelector, useDispatch } from 'react-redux'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { TextInput } from 'react-native-gesture-handler'
import { Fonts, Colors } from '../../assets/styles'
import { addNewToDo, deleteToDoList, editStatus } from '../redux/actions/addAction'
import { ItemComponent } from '../components'
import { send, trash } from '../../assets/images'

const { width } = Dimensions.get('window')
const initLayout = { width }

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const data = useSelector((state) => state.todoList)
  const dispatch = useDispatch()
  const handleDeleteItem = (item) => {
    dispatch(deleteToDoList(item))
  }
  const handleDispath = (id) => {
    dispatch(editStatus(id))
  }

  const ActiveScreen = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.doneScreen}>
          {
            data.map((x) => (x.status !== true ? <View key={x.id}>
              <ItemComponent item={x} handleDeleteItem={handleDeleteItem} handleDispath={handleDispath} />
            </View> : null))
          }
        </View>
      </View>
    )
  }

  const DoneScreen = () => {
    return (
      <View style={styles.doneScreen}>
        {
          data.map((item) => (item.status === true ? <ItemComponent item={item} /> : null))
        }
      </View>
    )
  }
  const AllTodoScreen = () => {
    const [input, setInput] = useState('')
    const aniValue = useRef(new Animated.Value(0)).current
    const handleShowInput = () => {
      if (input === '') {
        Animated.spring(aniValue, {
          toValue: 1,
          tension: 100,
          useNativeDriver: true,
        }).start()
      }
      if (input && input.length > 0) {
        dispatch(addNewToDo(input))
      }
    }
    const tranX = aniValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300 / 375 * width, 0],
    })
    return (
      <View style={styles.allScreen}>
        <SafeAreaView />
        <View
          style={styles.allTodoTopView}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <ItemComponent item={item} handleDispath={handleDispath} handleDeleteItem={handleDeleteItem} />
              )
            }}
            keyExtractor={(item, index) => `List item ${index}`}
            extraData={data}
          />
        </View>

        <View style={styles.allTodoFoter}>
          <Animated.View style={[styles.allTodoInputView, {
            transform: [{
              translateX: tranX,
            }],
          }]}
          >
            <TextInput
              style={styles.allTodoInput}
              placeholder="Todo..."
              placeholderTextColor={Colors.backgroudColor}
              onChangeText={(text) => setInput(text)}
            />
          </Animated.View>
          <TouchableOpacity onPress={handleShowInput}>
            <View style={styles.allTodoButtonSend}>
              <Image
                source={input && input ? send : trash}
                style={styles.allTodoImage}
              />
            </View>
          </TouchableOpacity>
        </View>
        <SafeAreaView />
        {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}

      </View>
    )
  }

  const renderScene = SceneMap({
    first: AllTodoScreen,
    second: DoneScreen,
    third: ActiveScreen,
  })
  // eslint-disable-next-line no-shadow
  const renderTabBar = (props) => (
    <TabBar
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={{ backgroundColor: Colors.backgroudColor }}
      indicatorStyle={{ backgroundColor: Colors.primaryBlue }}
      tabStyle={styles.tab}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabBarLabel, { color: focused ? Colors.primaryBlue : Colors.gray2 }]}>
          {route.title}
        </Text>
      )}
    />
  )
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.title}>
        ToDo
      </Text>
      <TabView
        navigationState={{
          index: currentIndex,
          routes:
            [
              { key: 'first', title: 'All' },
              { key: 'second', title: 'Done' },
              { key: 'third', title: 'UNF' },
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
  viewDoneScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22 / 375 * width,
    marginTop: 10 / 375 * width,
  },
  radio: {
    width: 24 / 375 * width,
    height: 24 / 375 * width,
    borderRadius: 12 / 375 * width,
    borderWidth: 3 / 375 * width,
    marginRight: 10 / 375 * width,
    borderColor: Colors.gray4,
  },
  tabBarLabel: {
    ...Fonts.semiBold,
    fontSize: 18 / 375 * width,
    textTransform: 'uppercase',
  },
  doneScreen: {
    flex: 1,
    marginTop: 24 / 375 * width,
  },
  allTodoImage: {
    width: 24 / 375 * width,
    height: 24 / 375 * width,
  },
  allTodoButtonSend: {
    width: 40 / 375 * width,
    height: 40 / 375 * width,
    borderRadius: 20 / 375 * width,
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allTodoInput: {
    ...Fonts.semiBold,
    fontSize: 14 / 375 * width,
    color: Colors.backgroudColor,
    marginHorizontal: 24 / 375 * width,
  },
  allTodoInputView: {

    width: 250 / 375 * width,
    height: 40 / 375 * width,
    borderRadius: 20 / 375 * width,
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',

  },
  allTodoFoter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 16 / 375 * width,
  },
  allTodoTopView: {
    marginTop: 26 / 375 * width,
    flex: 1,
  },
  allScreen: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroudColor,
    paddingHorizontal: 28 / 375 * width,
  },
  title: {
    fontSize: 40 / 375 * width,
    ...Fonts.bold,
    color: Colors.gray2,
    marginTop: 40 / 375 * width,
    marginBottom: 12 / 375 * width,
  },
  label: {
    color: 'black',

  },
  diamond: {
    width: 16 / 375 * width,
    height: 16 / 375 * width,
    transform: [
      { rotate: '45deg' },
    ],
  },
  contentItem: {
    color: Colors.gray2,
    fontSize: 18 / 375 * width,
    ...Fonts.semiBold,
  },
})
export default HomeScreen
