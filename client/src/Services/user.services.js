import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/user`,
            withCredentials: true
        })

    }

    addTodo = (id) => this.service.post("/addtodo", { id }).then(response => response.data)

    removeTodo = (id) => this.service.post("/removetodo", { id }).then(response => response.data)

    getUser = () => this.service.get("/getuser").then(response => response.data)


}

export default authServices 