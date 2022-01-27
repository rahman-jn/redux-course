import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
    name : 'Projects',
    initialState : [],
    reducers : {
        projectAdd(projects, action){
        projects.push({
            id : ++lastId,
            name : action.payload.name
        })
        }
    }
});

export const { projectAdd } = slice.actions;
export default slice.reducer;