import axios from "axios";
const subdomain = "http://localhost:3001/";

export async function login() {
  try {
    window.location.href = `/api/auth/login`;
  } catch (err) {
    console.log(err);
  }
}

//////////////////
// Users Router //
//////////////////

export async function getUserInfo(userId) {
  return axios.post(`${subdomain}users/find`, {
    id: userId,
  });
}

export async function createUser(userId, updatedValues) {
  updatedValues.id = userId;
  return axios.post(`${subdomain}users/create`, updatedValues);
}

export async function updateUser(userId, updatedValues) {
  updatedValues.id = userId;
  return axios.post(`${subdomain}users/update`, updatedValues);
}

//////////////////
// Posts Router //
//////////////////

export async function findPosts(queryIn) {
  return axios.post(`${subdomain}posts/find`, {
    query: queryIn,
  });
}

export async function createPost(titleIn, bodyIn, authorIn) {
  return axios.post(`${subdomain}posts/create`, {
    title: titleIn,
    body: bodyIn,
    author: authorIn,
  });
}
