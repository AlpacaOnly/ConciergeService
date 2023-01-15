import axios from 'axios';

export const logout = async (token) => {
    let data, error;

    const config = {
        headers: {'Authorization': 'Token ' + token}
    }

    await axios.get('http://127.0.0.1:8000/auth/token/logout', config)
        .then(res => data = res.data)
        .catch(err => error = err)

    return [data, error];
}