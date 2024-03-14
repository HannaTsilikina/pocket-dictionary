import axios from "axios";
const URL = process.env.React_App_Api;
export async function getWordsApi() {
  return await axios.get(`${URL}/words`);
}

export async function changedWordApi(item) {
  return await axios({
    method: "post",
    url: `${URL}/words/${item.id}/update`,
    data: JSON.stringify(item),
  });
}
export async function deleteWordApi(id) {
  return await axios({
    method: "post",
    url: `${URL}/words/${id}/delete`,
  });
}
export async function addedWordApi(item) {
  return await axios({
    method: "post",
    url: `${URL}/words/add`,
    data: JSON.stringify(item),
  });
}
