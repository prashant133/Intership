// paperless.js
require("dotenv").config();
const axios = require("axios");

const API_URL = process.env.PAPERLESS_API_URL;
const TOKEN = process.env.PAPERLESS_TOKEN;

console.log(API_URL);
console.log(TOKEN);

const paperless = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

console.log("here");

const getDocuments = async () => {
  try {
    const response = await paperless.get("/documents/");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching documents:", error.message);
  }
};

const getCorrespondents = async () => {
  try {
    const response = await paperless.get("/correspondents");
    console.log(response);
  } catch (error) {
    console.error("Error fetching correspodent:", error.message);
  }
};

getDocuments();
getCorrespondents();
