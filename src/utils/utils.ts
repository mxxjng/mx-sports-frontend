import axios from 'axios';

export const makeRequest = async (url, method, payLoad?) => {
  try {
    let res;
    payLoad
      ? (res = await axios.request({ url, method, data: { payLoad } }))
      : (res = await axios.request({ url, method }));
    return res;
  } catch (error) {
    return error;
  }
};
