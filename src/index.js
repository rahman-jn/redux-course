import configureStore from './store/configureStore';
// import * as bugsActions from './store/bugs';
// import * as projectsActions from './store/projects';
// import { addUser } from './store/users';
import * as actions from './store/api';

const store = configureStore();

store.dispatch(actions.apiCallBegin(
    {
        baseUrl :'http://localhost:9005/api',
        url :'http://localhost:9001/api/bugs',
        onSuccess : "bugsRecieved",
        onError : actions.apiCallFailed.type
    }
));
