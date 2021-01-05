import {addItem, removeItem, searchItem, filterItem, editItem} from './types'

const initialState = [
    {
        id: 1,
        title: "Test1",
        text: "test 1",
        like: 888,
        date: '04/01/2021 16:12'
    },
    {
        id: 2,
        title: "Test2",
        text: "test 2",
        like: 5999,
        date: '04/01/2021 16:12'
    },
    {
        id: 3,
        title: "mobile",
        text: "test 2",
        like: 5,
        date: '04/01/2021 16:12'
    },
    {
        id: 4,
        title: "alex",
        text: "test 2",
        like: 57,
        date: '04/01/2021 16:12'
    },
    ]

const mainReducer = (state=initialState, action) => {
    switch (action.type){
        case addItem:
            return [
                ...state, action.payload
            ]
        case removeItem:
              return action.payload
        case searchItem:
              return action.payload     
        case filterItem:
              return action.payload
        case editItem:
              return action.payload
        default:
            return state    
    }
}


export default mainReducer