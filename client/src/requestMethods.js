import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDFlNDQ1OTQ0NTVkMDA5YzUxYmQxZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE0NTc5MCwiZXhwIjoxNjQxNDA0OTkwfQ.qBL6Iw-3DcMmjax_wK7LBcwdzVmo1-bm1Y4am0roHro";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
