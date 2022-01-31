import axios from 'axios';
import * as actions from '../api';
import { bugsRequested } from '../bugs';


const api = store => next => async action  => {


    if(action.type !== actions.apiCallBegin.type ) return next(action);

    store.dispatch(bugsRequested());

    next(action);

    const {url, data, method, onSuccess, onError } = action.payload;
    
    try{
        const response = await axios.request({
            url,
            method,
            data
        });
        //General
        store.dispatch(actions.apiCallSuccess(response.data));
        //Specific
        if(onSuccess) store.dispatch({ type : onSuccess, payload : response.data } );
    }catch(error){
        //General
        store.dispatch(actions.apiCallFailed(error));
        //Specific
        if(onError) store.dispatch({ type : onError, payload : error } );
    }

}

export default api;