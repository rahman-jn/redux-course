
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegin } from './api';
import moment from 'moment';

const slice = createSlice({
    name : "bugs",
    initialState : {
        list : [],
        loading : false,
        lastFetch :  null
    },
    reducers : {
        bugsRequested(bugs, action){
            bugs.loading = true;
        },
        bugsRecieved (bugs, action){
            bugs.list = action.payload;
            bugs.loading = false;
            bugs.lastFetch = Date.now();
        },
        bugAdded(bugs, action) {
            bugs.list.push(action.payload)

        },
        bugResolved(bugs, action){
            const bugId = bugs.list.findIndex( bug => bug.id === action.payload.id );
            bugs.list[bugId].resolved = true;
        },
        bugAssignedToUser( bugs, action){
            const { bugId, userId } = action.payload;
            const index = bugs.list.findIndex( bug => bug.id === bugId );
            console.log(bugId);
            bugs.list[index].userId = userId;
            },
    }
});



export const { bugAdded, bugResolved, bugAssignedToUser, bugsRecieved, bugsRequested } = slice.actions;
export default slice.reducer;

const url = 'http://localhost:9001/api/bugs';

export const callBug = () => (dispatch, getState) =>{
    const { lastFetch } = getState().entities.bugs;
    const diffMinutes = moment().diff(moment(lastFetch), "minutes");
    if(diffMinutes < 10) return;

    dispatch(
        apiCallBegin({
        url,
        onSuccess : bugsRecieved.type,
})
);
};

export const addBug = bug => apiCallBegin({
    url,
    method : "post",
    data : bug,
    onSuccess : bugAdded.type,
})

export const unResolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved )
)

export const personBugs = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId )
)



// export default function reducer(state = [], action){
// if(action.type == BUG_RESOLVED)
//         return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true, description : "Bug1 Resolved"});
    
//     return state;
// }