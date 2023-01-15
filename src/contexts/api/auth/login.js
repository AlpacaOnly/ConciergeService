import axios from 'axios';

export const login = async (email, password) => {
    let data, error;
    await axios.post('http://127.0.0.1:8000/auth/token/login', {email, password}, {withCredentials: true})
        .then(res => data = res.data)
        .catch(err => error = err)

    return [data, error];
}