import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: {
        size: '',
        mimeTypes: '',
        order: 'ASC',
    },
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        changeFilter(state, actions) {
            state.filter = actions.payload
        },
    },
})

export default catsSlice.reducer
export const { changeFilter } = catsSlice.actions
