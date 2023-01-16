import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '5cf5cb97e3mshae37258832a8671p1b447cjsn5b326adbea16',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
}