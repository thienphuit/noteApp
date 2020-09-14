import * as tyle from '../types/addType'

export const addNewToDo = (data) => {
  return {
    type: tyle.ADD_ITEM,
    payload: data,
  }
}
export const deleteToDoList = (data) => {
  return {
    type: tyle.DELETE_ITEM,
    payload: data,
  }
}
