import {Iusers } from "../interfaces/users";
import config from "./config";
const getAllUser = () => {
    return config.get('/users');
}
const Signin = () => {
    return config.get('/users');
}
const Signup = (user:Iusers) => {
    return config.post('/users', user);
}
export {Signin,Signup,getAllUser}