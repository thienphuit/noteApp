import * as ToDoTypes from '../types/addType'

export const addNewToDo = (data) => {
  return {
    type: ToDoTypes.ADD_ITEM,
    payload: data,
  }
}
export const deleteToDoList = (id) => {
  return {
    type: ToDoTypes.DELETE_ITEM,
    payload: id,
  }
}
export const editStatus = (id) => {
  return {
    type: ToDoTypes.EDIT_STATUS,
    payload: id,
  }
}
