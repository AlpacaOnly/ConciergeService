import axios from 'axios';

export const me = async (token) => {

    const config = {
        headers: {'Authorization': 'Token ' + token}
    }

    return axios.get('http://127.0.0.1:8000/api/users/me/', config)
        .then(function (response) {
            return {response: response.data};
        })
        .catch(function (error) {
            return error;
        })
}