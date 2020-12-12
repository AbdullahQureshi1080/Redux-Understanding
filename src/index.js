import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnreslovedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugRecieved", bugs: [1, 2, 3] });
  console.log(getState());
});
store.dispatch({
  type: "error",
  payload: {
    message: "An error occured.",
  },
});

// store.subscribe(() => {
//   console.log("Store changed!");
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "New Project" }));
// store.dispatch(bugAdded({ description: "Bug 1 " }));
// store.dispatch(bugAdded({ description: "Bug 2 " }));
// store.dispatch(bugAdded({ description: "Bug 3 " }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// const bugs = getBugsByUser(2)(store.getState());
// const x = getUnreslovedBugs(store.getState());
// const y = getUnreslovedBugs(store.getState());

// console.log(x === y);
// console.log(bugs);
