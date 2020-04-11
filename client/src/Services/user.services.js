import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `​https://apptodoing.herokuapp.com/api/user`,  //process.env.REACT_APP_URL for development
            withCredentials: true
        })

    }

    addTodo = (id) => this.service.post("/addtodo", { id }).then(response => response.data)

    removeTodo = (id) => this.service.post("/removetodo", { id }).then(response => response.data)

    getUser = () => this.service.get("/getuser").then(response => response.data)


}

export default authServices 