import axios from 'axios';

export const me = async (token) => {
    let data, error;

    const config = {
        headers: {'Authorization': 'Token ' + token}
    }

    await axios.get('http://127.0.0.1:8000/api/users/me/', config)
        .then(res => data = res.data)
        .catch(err => error = err)

    return [data, error];
}