import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
// const bugUpdated = createAction("bugUpdated");
// console.log(bugUpdated.type);

// Action Types .....................

// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// Combing the two functions createAction and createReducer into one
let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // actions => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

// console.log(slice);
// Actions Creators .....................

// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description,
//   },
// });

// export const bugRemoved = (description) => ({
//   type: BUG_REMOVED,
//   payload: {
//     description,
//   },
// });

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id,
//   },
// });

// let lastId = 0;

// Reducers .....................

// export default createReducer([], {
//   // actions - key :  functions-value,
//   // actions : functions (event => event handler)
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     state[index].resolved = true;
//   },
//   //   [bugRemoved.type]: (bugs, action) => {
//   //     const removedBug = bugs.filter((bug) => bug.id !== action.payload.id);
//   //     state[index].resolved = true;
//   //   },
// });

// function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id
//    bug
//           : {
//               ...bug,
//               resolved: true,
//             }
//       );

//     default:
//       return state;
//   }
// }

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;
