import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'contacts',
  storage,
};

export const todosReducer = persistReducer(persistConfig, todosSlice.reducer);
