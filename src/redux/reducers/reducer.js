import * as TodoTypes from '../types/addType'

const initState = {
  todoList: [
    { id: 1, title: 'Make a new App', status: false },
    { id: 2, title: 'Make a new App', status: false },
  ],
}
const toDoReducer = (state = initState, action) => {
  const { payload } = action
  const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return `_${Math.random().toString(36).substr(2, 9)}`
  }
  switch (action.type) {
    case TodoTypes.ADD_ITEM:
      return { ...state, todoList: [...state.todoList, { id: ID, title: payload, status: false }] }
    case TodoTypes.DELETE_ITEM:
      return { ...state, todoList: [...state.todoList.filter((x) => x.id !== payload)] }
    case TodoTypes.EDIT_STATUS: {
      return {
        ...state,
        todoList: [...state.todoList.map((todo) => (todo.id === payload ? { ...todo, status: !todo.status } : todo))],
      }
    }
    default:
      return state
  }
}
export default toDoReducer
