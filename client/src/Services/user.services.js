import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `http://localhost:5000/api/user`,
            withCredentials: true
        })

    }

    addTodo = (id) => this.service.post("/addtodo", { id }).then(response => response.data)

    removeTodo = (id) => this.service.post("/removetodo", { id }).then(response => response.data)


    getUser = () => this.service.get("/getuser").then(response => response.data)

    // login = ({ username, password }) => this.service.post("/login", { username, password }).then(response => response.data)

    // logout = () => this.service.post('/logout').then(response => response.data)

    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default authServices 