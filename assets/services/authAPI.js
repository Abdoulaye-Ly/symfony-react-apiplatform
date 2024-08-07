import axios from "axios";

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
    return axios
        .post("http://127.0.0.1:8000/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            //Stockage du token dans le localStorage
            window.localStorage.setItem("authToken", token);
            axios.defaults.headers["Authorization"] = "Bearer" + token;
        })
}

export default {
    authenticate,  
    logout
};