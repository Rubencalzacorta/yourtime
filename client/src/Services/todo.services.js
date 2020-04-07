import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/todo`,
            withCredentials: true
        })

    }

    newTodo = (todo) => this.service.post("/newtodo", todo).then(response => response.data)

    changeStatus = (id, status) => this.service.post("/changestatus", { id, status }).then(response => response.data)

    deleteTodo = (id) => this.service.post('/deleteTodo', { id }).then(response => response.data)

    setBeginning = (id, date) => this.service.post("/setbeginning", { id, date }).then(response => response.data)

    setEnd = (id, date) => this.service.post("/setend", { id, date }).then(response => response.data)


    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default authServices 