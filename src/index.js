import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

const unsubscribe = store.subscribe( () => {
    console.log("Store changed", store.getState());
})

store.dispatch(actions.bugAdded({ description : "BUG1" } ));
store.dispatch(actions.bugAdded({ description : "BUG" }));
store.dispatch(actions.bugAdded({ description : "BUG3" }));

store.dispatch(actions.bugResolved({id : 1 }));

//unsubscribe();

//store.dispatch(actions.bugRemoved(1));


console.log(store.getState());
