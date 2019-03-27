import axios from "axios";
import decode from "jwt-decode";
import path from 'path'
export default class AuthService {
    constructor() {
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login(username, password) {
        // Get a token from api server
        return axios
            .post("http://localhost:5000/login", {
                username: username,

                password: password
            })
            .then(res => {
                if (res.data.success === true && res.data.token.length > 1) {
                    this.setToken(res.data.token);
                    return Promise.resolve(res);
                } else {
                    return Promise.reject(res);
                }
            });
    }

    loggedIn() {
        // Checks if token is valid
        const token = this.getToken();
        this.isAuthenticated = true;
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                // Checking if token is expire

                return true;
            } else return false;
        } catch (err) {
            localStorage.removeItem("id_token");
            return false;
        }
    }

    setToken(idToken) {
        localStorage.setItem("id_token", idToken);
    }

    getToken() {
        return localStorage.getItem("id_token");
    }

    logout() {
        localStorage.removeItem("id_token");
    }

    getProfile() {
        // Getting info From token
        return decode(this.getToken());
    }
}