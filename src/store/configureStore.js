import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import notify from './middleware/notify';
import api from './middleware/api';

export default function(){
    return configureStore({
        reducer,
        middleware : [
            ...getDefaultMiddleware(),
            logger('Console'),
            notify,
            api
            ]
            
    });
}

// export default function configureStore(){
//     const store  = createStore(reducer,
//         middleware => [logger],
//         devToolsEnhancer( {trace : true } ));
//     return store;
// }

