import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoListState, Item } from '../common';

// Define the initial state using that type
const initialState: TodoListState = {
  data: [{
    name: '吃饭',
    id: 1,
    done: false
  }, {
    name: '睡觉',
    id: 2,
    done: false
  }]
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateTodoList: (state, { payload }: PayloadAction<Item>) => {
      const index = state.data.findIndex((elem) => elem.id === payload.id);
      state.data[index].name = payload.name;
      state.data[index].done = payload.done;
    },
    deleteTodoList: (state, { payload: id }: PayloadAction<number>) => {
      const index = state.data.findIndex((elem) => elem.id === id);
      console.log(index)
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
    addTodoList: (state, { payload: todoItem }: PayloadAction<string>) => {
      const maxId = state.data[state.data.length - 1]?.id || 0;
      state.data.push({
        name: todoItem,
        id: maxId + 1,
        done: false
      })
    },
    doneTodoList: (state, { payload: done }: PayloadAction<boolean>) => {
     const res = state.data.map(e => ({ ...e, done }))
     state.data = [...res]
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateTodoList, deleteTodoList, addTodoList, doneTodoList } = todoListSlice.actions

export default todoListSlice.reducer