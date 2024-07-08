import axios from "axios";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function addRequestCooperation(email, comment) {
    const endpoint = '/requests';
    const data = {
        email: email,
        comment: comment
    };
    const response = await axios.post(endpoint, data);
    return response.data
}