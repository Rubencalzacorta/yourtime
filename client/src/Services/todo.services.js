import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `http://localhost:5000/api/todo`,
            withCredentials: true
        })

    }

    newTodo = (todo) => this.service.post("/newtodo", todo).then(response => response.data)

    // login = ({ username, password }) => this.service.post("/login", { username, password }).then(response => response.data)

    // logout = () => this.service.post('/logout').then(response => response.data)

    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default authServices 