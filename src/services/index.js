import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://argyle-api-dev.herokuapp.com')
  : (baseURL = 'https://argyle-api-dev.herokuapp.com');

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  login: async (data) => {
    return await service.post('/v1/auth/signin', data);
  }


};

export default MY_SERVICE;
