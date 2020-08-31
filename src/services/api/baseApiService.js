import axios from 'axios';
import storageService from '../storageService';

const baseRequest = async (request) => {
  try {
    return (await axios(request)).data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        error.response.message ||
        error.response?.data?.error,
    );
  }
};
class baseAPIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getData = async (endpoint, params) => {
    const token = await storageService.get('token');
    const response = await baseRequest({
      method: 'GET',
      url: `${this.baseURL}${endpoint}`,
      headers: {Authorization: `Bearer ${token}`},
      params,
    });

    return response;
  };

  getDataById = async (endpoint, params) => {
    const token = await storageService.get('token');
    const response = await baseRequest({
      method: 'get',
      url: `${this.baseURL}${endpoint}`,
      headers: {Authorization: `Bearer ${token}`},
      params,
    });

    return response;
  };

  postData = async (endpoint, data) => {
    const token = await storageService.get('token');
    const response = await baseRequest({
      method: 'post',
      url: `${this.baseURL}${endpoint}`,
      headers: {Authorization: `Bearer ${token}`},
      data,
    });

    return response;
  };

  putData = async (endpoint, data) => {
    const token = await storageService.get('token');
    const response = await baseRequest({
      method: 'put',
      url: `${this.baseURL}${endpoint}`,
      headers: {Authorization: `Bearer ${token}`},
      data,
    });

    return response;
  };

  patchData = async (endpoint, data) => {
    const token = await storageService.get('token');
    const response = await baseRequest({
      method: 'patch',
      url: `${this.baseURL}${endpoint}`,
      headers: {Authorization: `Bearer ${token}`},
      data,
    });
    return response;
  };

  deleteData = async (endpoint, params) => {
    const token = await storageService.get('token');
    const response = await baseRequest({
      method: 'delete',
      url: `${this.baseURL}/${endpoint}`,
      headers: {Authorization: `Bearer ${token}`},
      params,
    });

    return response;
  };
}

export default baseAPIService;
