import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import type { RootState } from '../store'

// enum ShapeEnum {
//     'circle',
//     'line',
//     'triangle',
//     'square',
//     'pentagon',
// }

export interface ItemState {
    id: string
    iterations: number
    rotations: number
    shape: string
    color: string
    levels: number
}

interface ItemsState {
    value: ItemState[]
    selected: ItemState | undefined
}

const initialState: ItemsState = {
    value: [],
    selected: undefined,
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        get: (state, action: PayloadAction<string | undefined>) => {
            if (action.payload) {
                const item = [...state.value].find((item: ItemState) => item.id === action.payload)
                if (item) {
                    state.selected = item
                }
            }
            
        },
        set: (state, action: PayloadAction<ItemState[]>) => {
            if (!state.value || state.value.length === 0) {
                state.value = action.payload
            }
        },
        add: (state, action: PayloadAction<ItemState>) => {
            if (!state.value.indexOf(action.payload)) {
                state.value.push(action.payload)
            }
        },
        edit: (state, action: PayloadAction<ItemState[]>) => {
            // payload[0] is the original Item, payload[1] is the edited version
            if (state.value.indexOf(action.payload[0])) {
                state.value.splice(state.value.indexOf(action.payload[0]), 1)
                state.value.push(action.payload[1])
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            // can't name the reducer 'delete'
            if (state.value[action.payload]) {
                state.value.splice(action.payload, 1)
            }
        },
        clear: (state) => {
            state.value = []
        },
    },
})

export const { get, set, add, edit, remove, clear } = itemsSlice.actions

export const itemsList = (state: RootState) => state.items.value
export const itemsSelected = (state: RootState) => state.items.selected
export default itemsSlice.reducer
