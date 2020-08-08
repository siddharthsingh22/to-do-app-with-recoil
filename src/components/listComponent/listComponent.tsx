import React from "react";
import { useRecoilValue } from "recoil";
import List from "@material-ui/core/List";
import { useSetRecoilState } from "recoil";
import { todoList } from "../../atoms/atoms";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export const ListComponent = () => {
	const todoListArray = useRecoilValue(todoList);
	const setTodoListArray = useSetRecoilState(todoList);
	const handleDelete = (value: any) => {
		const newArray: any = [];
		todoListArray.forEach((eachObject: any) => {
			if (eachObject.task !== value.task) {
				newArray.push(eachObject);
			}
		});
		setTodoListArray(newArray);
	};
	return (
		<List>
			{todoListArray
				.slice(0)
				.reverse()
				.map((value) => {
					return (
						<ListItem
							role={undefined}
							button
							// onClick={handleToggle(value)}
						>
							<ListItemIcon>
								<Checkbox edge="start" tabIndex={-1} disableRipple />
							</ListItemIcon>
							<ListItemText primary={value.task} secondary={value.description} />

							<ListItemSecondaryAction>
								<IconButton edge="end" aria-label="comments">
									<DeleteIcon
										onClick={() => {
											handleDelete(value);
										}}
									/>
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
		</List>
	);
};
