import React from 'react'

export const TodoContext = React.createContext();

export const TodoContextProvider = (props) => {
    const [todos, setTodos] = React.useState([
    {
        id: 1,
        title: "Test1",
        text: "test 1",
        like: 8
    },
    {
        id: 2,
        title: "Test2",
        text: "test 2",
        like: 5
    }
])
    const addTodo = (item) => {
        setTodos([...todos, item])
    }
    return (
        <TodoContext.Provider
        value={{todos, setTodos, addTodo}}
        >
             {props.children}
        </TodoContext.Provider>
    )
}
