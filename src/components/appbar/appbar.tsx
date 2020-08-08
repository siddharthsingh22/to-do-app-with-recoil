import React from "react";
import { useStyles } from "./styles";
import { useRecoilState } from "recoil";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { themeValue } from "../../atoms/atoms";

export const AppBarComponent = () => {
	const [darkThemeValue, setDarkThemeValue] = useRecoilState(themeValue);
	const classes = useStyles();
	return (
		<AppBar position="fixed">
			<Toolbar className={classes.appBar}>
				<Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
					TO-DO LIST
				</Typography>
				<FormControlLabel
					control={
						<Switch
							color="secondary"
							checked={!darkThemeValue}
							onChange={() => {
								setDarkThemeValue(!darkThemeValue);
							}}
						/>
					}
					label={darkThemeValue ? "Dark Mode Off" : "Dark Mode On"}
				/>
			</Toolbar>
		</AppBar>
	);
};
