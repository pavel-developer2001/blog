// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit"

import { combineReducers } from 'redux'
import itemsReducer from './itemsSlice'

// const store = createStore(
//     mainReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
const rootReducer = combineReducers({
    items: itemsReducer
})
const store = configureStore({
       reducer: rootReducer
    })

export default store