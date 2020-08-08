import React from "react";
import { useStyles } from "./styles";
import { useSetRecoilState } from "recoil";
import { todoList } from "../../atoms/atoms";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export const InputComponent = () => {
	const classes = useStyles();
	const [taskValue, setTaskValue] = React.useState("");
	const [descriptionValue, setDescriptionValue] = React.useState("");
	const setTodoListArray = useSetRecoilState(todoList);

	const handleSubmit = () => {
		setTodoListArray((todoListArray) => [
			...todoListArray,
			{
				task: taskValue,
				description: descriptionValue,
			},
		]);
		setTaskValue("");
		setDescriptionValue("");
	};
	return (
		<div>
			<Typography variant="h4">Add New Item</Typography>
			<Divider variant="fullWidth" style={{ height: "3px" }} />
			<form className={classes.formClass}>
				<TextField
					value={taskValue}
					label="Task"
					variant="outlined"
					onChange={(e) => {
						setTaskValue(e.target.value);
					}}
				/>
				<TextField
					value={descriptionValue}
					label="Description"
					variant="outlined"
					style={{ marginTop: "2vh" }}
					onChange={(e) => {
						setDescriptionValue(e.target.value);
					}}
				/>
				<div className={classes.submitButton}>
					<Button color="primary" variant="contained" onClick={handleSubmit}>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};
