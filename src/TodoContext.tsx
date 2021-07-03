import React, { SetStateAction } from "react";

export type todoType = {
  id: number;
  title: string;
  text: string;
  like: number;
  date: string;
};
type contextType = {
  todos: Array<{}>;
  setTodos: React.Dispatch<SetStateAction<todoType[]>>;
  addTodo: (item: todoType) => void;
  onRemoveTodo: (index: number) => void;
  searchTodo: (text: string) => void;
  filterTodo: (filter: string) => void;
  editTodo: (editItem: todoType) => void;
};

export const TodoContext = React.createContext<any>(null);

export const TodoContextProvider = (props: any) => {
  const [todos, setTodos] = React.useState<Array<todoType>>([
    {
      id: 1,
      title: "Test1",
      text: "test 1",
      like: 888,
      date: "04/01/2021 16:12",
    },
    {
      id: 2,
      title: "Test2",
      text: "test 2",
      like: 5999,
      date: "04/01/2021 16:12",
    },
    {
      id: 3,
      title: "mobile",
      text: "test 2",
      like: 5,
      date: "04/01/2021 16:12",
    },
    {
      id: 4,
      title: "alex",
      text: "test 2",
      like: 57,
      date: "04/01/2021 16:12",
    },
  ]);

  const addTodo = (item: any) => {
    setTodos([...todos, item]);
  };

  const onRemoveTodo = (index: number) => {
    const idx = todos.findIndex((item) => item.id === index);
    const items = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    setTodos(items);
  };

  const searchTodo = (text: string) => {
    if (text.length > 0) {
      const results = todos.filter((todo) =>
        todo.title.toLowerCase().includes(text)
      );
      setTodos(results);
    } else {
      return todos;
    }
  };

  const filterTodo = (filter: string) => {
    if (filter === "По последним обновлениям") {
      const sortedData = todos.sort((a, b) => b.id - a.id);
      setTodos(sortedData);
    }
    if (filter === "По популярности") {
      const sortedPopular = todos.sort((a, b) => b.like - a.like);
      setTodos(sortedPopular);
    }
  };

  const editTodo = (editItem: any) => {
    const findItem = todos.findIndex((item) => item.id === editItem.id);
    const items = [...todos.slice(0, findItem), ...todos.slice(findItem + 1)];
    setTodos([...items, editItem]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        onRemoveTodo,
        searchTodo,
        filterTodo,
        editTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
