import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 270;

export const useStyles = makeStyles({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth - 30,
    },
})