import configureStore from './store/configureStore';
import * as bugsActions from './store/bugs';
import * as projectsActions from './store/projects';

const store = configureStore();

const unsubscribe = store.subscribe( () => {
    console.log("Store changed", store.getState());
})

store.dispatch(projectsActions.projectAdd({ name : "Project1 "}));
store.dispatch(projectsActions.projectAdd({ name : "Project2 "}));

store.dispatch(bugsActions.bugAdded({ description : "BUG1" } ));
// store.dispatch(actions.bugAdded({ description : "BUG" }));
// store.dispatch(actions.bugAdded({ description : "BUG3" }));

//store.dispatch(actions.bugResolved({id : 1 }));

//unsubscribe();

//store.dispatch(actions.bugRemoved(1));


console.log(store.getState());
