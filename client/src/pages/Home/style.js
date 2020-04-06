import { makeStyles } from "@material-ui/styles"

const centeredStyleObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"

}

export default makeStyles({

    container: {
        height: "100vh",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(../../../../../images/d511ce029edd7821931446e4bd7266bd.jpg)`

    },

    darkerbackground: {
        backgroundColor: "rgba(0,0,0, 0.5)"
    }



})