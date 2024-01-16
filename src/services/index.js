import axios from 'axios';


export const BASE_URI = 'https://api.stackexchange.com/2.3/';


export const getData = async (url) => {
  const apiUri = `${BASE_URI}${url}`;
  try {
    const response = await axios.get(apiUri);
    const statusCode = response.status;
    const responseJson = await response.data;
    return {...responseJson, statusCode};
  } catch (error) {
    return {
        statusCode: 500,
        message: "Some unexpected error occured!"
    };
  }
};

