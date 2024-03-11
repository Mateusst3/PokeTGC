const BASE_URL = 'https://api.pokemontcg.io/v2';
const API_KEY = 'c5be1e2f-c7eb-4bbc-af0a-7c5a9a5021ec';

const fetchData = async (method: string, path: string): Promise<any> => {
  const myHeaders = new Headers({ 'X-Api-Key': API_KEY });
  var myInit: any = {
    method: method,
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  };
  const dataBeforeJson = await fetch(`${BASE_URL}/${path}`, myInit);
  try {
    let r = await dataBeforeJson.json();
    return r;
  } catch (error) {}
};

export const get = async (path: string) => {
  return await fetchData('GET', path);
};

export const post = (path: string) => {
  return fetchData('POST', path);
};
