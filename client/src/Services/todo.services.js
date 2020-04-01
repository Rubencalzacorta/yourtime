import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `http://localhost:5000/api/todo`,
            withCredentials: true
        })

    }

    newTodo = (todo) => this.service.post("/newtodo", todo).then(response => response.data)

    changeStatus = (id, status) => this.service.post("/changestatus", { id, status }).then(response => response.data)

    deleteTodo = (id) => this.service.post('/deleteTodo', { id }).then(response => response.data)

    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default authServices 