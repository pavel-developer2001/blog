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
    },
    {
        id: 3,
        title: "mobile",
        text: "test 2",
        like: 5
    },
    {
        id: 4,
        title: "alex",
        text: "test 2",
        like: 5
    },
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

    const searchTodo = (text) => {
        if (text.length > 0){
            const results = todos.filter(todo => todo.title.toLowerCase().includes(text));
            setTodos(results);  
        }
        return;        
    }

    return (
        <TodoContext.Provider
        value={{todos, setTodos, addTodo, onRemoveTodo, searchTodo}}
        >
             {props.children}
        </TodoContext.Provider>
    )
}
