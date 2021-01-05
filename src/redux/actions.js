// import {addItem} from './types'

export const addItem = (payload) => ({
    type: 'ADD_ITEM',
    payload
})

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export const searchItem = (searchItem) => ({
    type: 'SEARCH_ITEM',
    payload: searchItem
})

export const filterItem = (filterItem) => ({
    type: 'FILTER_ITEM',
    payload: filterItem
})

export const editItem = (editItem) => ({
    type: 'EDIT_ITEM',
    payload: editItem
})