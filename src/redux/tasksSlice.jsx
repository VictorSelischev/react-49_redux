import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending](state) { state.isLoader = true; },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchTasks.rejected](state, action) { 
      state.isLoading = false;
      state.error = action.payload;
    },

    [addTask.pending](state) { 
      state.isLoader = true;
     },
    [addTask.fulfilled](state, action) { 
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteTask.pending](state) { 
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) { 
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteTask.rejected](state, action) { 
      state.isLoading = false;
      state.error = action.payload;
    },

    [toggleCompleted.pending](state) { 
      state.isLoading = true;
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload.id);
      state.items.splice(index, 1, action.payload);
     },
    [toggleCompleted.rejected](state, action) { 
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   fetchingInProgress(state) { 
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //    },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = tasksSlice.actions;

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },

//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
