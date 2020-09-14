import * as addTyle from '../types/addType'

const initState = {
  todoList: [
    'Item 1 ',
    'Item 2',
  ],
}
const toDoReducer = (state = initState, action) => {
  const { payload } = action
  switch (action.type) {
    case addTyle.ADD_ITEM:
      return { ...state, todoList: [...state.todoList, payload] }
    case addTyle.DELETE_ITEM:
      return { ...state, todoList: [...state.todoList.filter((x) => x !== payload)] }
    default:
      return state
  }
}
export default toDoReducer
