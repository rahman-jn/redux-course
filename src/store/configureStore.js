import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';

export default function(){
    return configureStore({
        reducer,
        middleware : [logger]
    });
}

// export default function configureStore(){
//     const store  = createStore(reducer,
//         middleware => [logger],
//         devToolsEnhancer( {trace : true } ));
//     return store;
// }

