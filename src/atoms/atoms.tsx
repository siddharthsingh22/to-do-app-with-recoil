import { atom } from "recoil";

export const themeValue = atom({
	key: "themeValue",
	default: true, // true means light theme
});

export const todoList = atom({
	key: "todoList",
	default: [
		{
			task: "first task",
			description: "first task description",
		},
		{
			task: "second task",
			description: "second task description",
		},
	],
});
