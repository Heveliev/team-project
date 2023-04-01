import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = { items: [] };

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
