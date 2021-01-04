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
    const onRemoveTodo = (index) => {
        const idx = todos.findIndex((item) => item.id == index);
        const items = [
        ...todos.slice(0, idx),
        ...todos.slice(idx + 1)
      ]
        setTodos(items)
      };

    return (
        <TodoContext.Provider
        value={{todos, setTodos, addTodo, onRemoveTodo}}
        >
             {props.children}
        </TodoContext.Provider>
    )
}
