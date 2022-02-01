import configureStore from './store/configureStore';
// import * as bugsActions from './store/bugs';
// import * as projectsActions from './store/projects';
// import { addUser } from './store/users';
import * as actions from './store/api';
import { addBug } from './store/bugs';

const store = configureStore();


store.dispatch(addBug( { description : "a" } ));
//store.dispatch(callBug());

//store.dispatch(callBug());


//setTimeout(() => store.dispatch(callBug()), 2000 );
