import { makeStyles } from "@material-ui/styles"

import img from "../../images/d511ce029edd7821931446e4bd7266bd.jpg"
export default makeStyles({

    container: {
        height: "100vh",
        justifyContent: "center",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255,255,255,0.5)",
        backgroundAttachment: "fixed",
        paddingTop: 60,


    },
    todoWrapper: {
        display: "inline",
        margin: "0px 10px",
        padding: 10,
        backgroundColor: "rgba(0,0,0,.1)",
        maxWidth: 300

    },

})