
import { createSlice } from '@reduxjs/toolkit'

//Last id initialiising
let lastId = 0; 

const slice = createSlice({
    name : "bugs",
    initialState : [],
    reducers : {
        bugAdded(bugs, action) {
            bugs.push({
                    id : ++lastId,
                    description : action.payload.description,
                    resolved : false
            })

        },
        bugResolved(bugs, action){
            const bugId = bugs.findIndex( bug => bug.id === action.payload.id );
            bugs[bugId].resolved = true;
        },
    }
});

//console.log(slice);

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;

// export default function reducer(state = [], action){
// if(action.type == BUG_RESOLVED)
//         return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true, description : "Bug1 Resolved"});
    
//     return state;
// }