import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;
export const useStyles = makeStyles((theme: any) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        borderRight: "0"
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

}))