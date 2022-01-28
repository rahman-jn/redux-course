import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import func from './middleware/func'

export default function(){
    return configureStore({
        reducer,
        middleware : [
            ...getDefaultMiddleware(),
            logger('Console')]
    });
}

// export default function configureStore(){
//     const store  = createStore(reducer,
//         middleware => [logger],
//         devToolsEnhancer( {trace : true } ));
//     return store;
// }

