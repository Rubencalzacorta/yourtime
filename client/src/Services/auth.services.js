import axios from "axios"

class authServices {
    constructor() {
        this.REACT_APP_URL = process.env.REACT_APP_URL
        this.service = axios.create({
            baseURL: "https://apptodoing.herokuapp.com/api/auth",  //process.env.REACT_APP_URL
            withCredentials: true
        })

    }


    signup = ({ username, password }) => this.service.post("/signup", { username, password }).then(response => response.data)

    login = ({ username, password }) => this.service.post("/login", { username, password }).then(response => response.data)

    logout = () => this.service.post('/logout').then(response => response.data)

    loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default authServices 