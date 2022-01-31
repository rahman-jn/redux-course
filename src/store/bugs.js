
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegin } from './api';
import moment from 'moment';

//Last id initialiising
let lastId = 0; 

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
            bugs.list.push({
                    id : ++lastId,
                    description : action.payload.description,
                    resolved : false
            })

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
    console.log("HI");
    const { lastFetch } = getState().entities.bugs;
    const diffMinutes = moment().diff(moment(lastFetch), "minutes");
    console.log(diffMinutes);
    if(diffMinutes < 10) return;

    dispatch(
        apiCallBegin({
        url,
        onSuccess : bugsRecieved.type,
        onStart : bugsRequested.type
})
);
}

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