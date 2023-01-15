import axios from 'axios';

export const sendData = async (email, password) => {
  await axios.post('', { email, password }, { withCredentials: true })
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}