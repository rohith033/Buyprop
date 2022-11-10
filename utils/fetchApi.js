import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '4dd68c270emsh0d2969f235ab772p1ca9fdjsn16247c819faa' ,
    },
  });
    
  return data;
}
