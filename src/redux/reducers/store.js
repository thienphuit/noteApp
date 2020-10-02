import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import createEncryptor from 'redux-persist-transform-encrypt'
import toDoReducer from './reducer'

const encryptor = createEncryptor({
  secretKey: 'scsx bakdk23231',
  onError(error) {
    // Handle the error.
    console.log('============================')
    console.log('my-super-secret-key', error)
    console.log('============================')
  },
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],
}
const persistedReducer = persistReducer(persistConfig, toDoReducer)
const store = createStore(persistedReducer)
persistStore(store)

export default store
