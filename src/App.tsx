import React from "react";
import { useRecoilValue } from "recoil";
import Grid from "@material-ui/core/Grid";
import { themeValue } from "./atoms/atoms";
import Paper from "@material-ui/core/Paper";
import { InputComponent } from "./components/input/input";
import { ThemeProvider } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DrawerComponent } from "./components/drawer/drawer";
import { AppBarComponent } from "./components/appbar/appbar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ListComponent } from "./components/listComponent/listComponent";

const useStyles = makeStyles({
	contentClass: {
		width: "calc(100% - 240px)",
		marginLeft: "240px",
		marginTop: "64px",
		height: "100%",
	},
});

function App() {
	const classes = useStyles();
	const darkThemeValue = useRecoilValue(themeValue);
	const temp = darkThemeValue ? "light" : "dark"; // light means light theme & vice-a-versa

	const darkTheme = createMuiTheme({
		palette: {
			type: temp,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Paper style={{ height: "100%" }}>
				<DrawerComponent />
				<AppBarComponent />
				<Grid container spacing={3} className={classes.contentClass}>
					<Grid item xs={12} sm={6} style={{ height: "100%", width: "100%", maxHeight: "90%", overflow: "auto" }}>
						<ListComponent />
					</Grid>

					<Grid item xs={12} sm={6}>
						<InputComponent />
					</Grid>
				</Grid>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
