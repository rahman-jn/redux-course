import configureStore from './store/configureStore';
// import * as bugsActions from './store/bugs';
// import * as projectsActions from './store/projects';
// import { addUser } from './store/users';
import * as actions from './store/api';
import { callBug, resolveBug } from './store/bugs';

const store = configureStore();

store.dispatch(callBug());

setTimeout( () => store.dispatch(resolveBug(2)), 2000 );


//store.dispatch(addBug( { description : "a" } ));
//store.dispatch(callBug());

//store.dispatch(callBug());


//setTimeout(() => store.dispatch(callBug()), 2000 );
