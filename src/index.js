import configureStore from './store/configureStore';
import * as bugsActions from './store/bugs';
import * as projectsActions from './store/projects';
import { addUser } from './store/users';

const store = configureStore();

const unsubscribe = store.subscribe( () => {
    console.log("Store changed", store.getState());
})

store.dispatch(projectsActions.projectAdd({ name : "Project1 "}));
store.dispatch(projectsActions.projectAdd({ name : "Project2 "}));

store.dispatch(bugsActions.bugAdded({ description : "BUG1" } ));

//Add new user to user slice
store.dispatch(addUser({ name : "Rhman" }));

store.dispatch(bugsActions.bugAdded({ description : "BUG4" } ));
store.dispatch(bugsActions.bugAdded({ description : "BUG5" } ));
store.dispatch(bugsActions.bugAdded({ description : "BUG6" } ));

store.dispatch(bugsActions.bugAssignedToUser({ bugId : 3, userId : 1 }));



//console.log(bugsActions.unResolvedBugs(store.getState()))
console.log(bugsActions.personBugs(1)(store.getState()));

// store.dispatch(actions.bugAdded({ description : "BUG" }));
// store.dispatch(actions.bugAdded({ description : "BUG3" }));

//store.dispatch(actions.bugResolved({id : 1 }));

//unsubscribe();

//store.dispatch(actions.bugRemoved(1));


//console.log(store.getState());
