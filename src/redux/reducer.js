import { addItem, removeItem, searchItem, filterItem, editItem } from "./types";
import { firterList } from "../components/Filter";

const initialState = [
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
];

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case addItem:
			return [...state, action.payload];
		case removeItem:
			if (global.confirm("Вы действительно хотите удалить?")) {
				return [
					...state.slice(
						0,
						state.findIndex((stat) => stat.id == action.payload)
					),
					...state.slice(
						state.findIndex((stat) => stat.id == action.payload) + 1
					),
				];
			}
		case searchItem:
			return state.filter((todo) =>
				todo.title.toLowerCase().includes(action.payload)
			);

		case filterItem:
			if (action.payload === firterList.POPULAR) {
				return state.sort((a, b) => b.id - a.id);
			} else {
				return state.sort((a, b) => b.like - a.like);
			}

		case editItem:
			return [
				...[
					...state.slice(
						0,
						state.findIndex((item) => item.id == action.payload.id)
					),
					...state.slice(
						state.findIndex((item) => item.id == action.payload.id) + 1
					),
				],
				action.payload,
			];
		default:
			return state;
	}
};

export default mainReducer;
