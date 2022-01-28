import configureStore from './store/configureStore';
import * as bugsActions from './store/bugs';
import * as projectsActions from './store/projects';
import { addUser } from './store/users';

const store = configureStore();
store.dispatch(() => {
    store.dispatch({ type : 'BugsReceived', bugs : [1,2,3,4]})
});