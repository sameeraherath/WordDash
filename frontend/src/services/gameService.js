import axios from "axios";

const apiUrl = "http://localhost:5000/api"; // Backend API base URL

const getWord = async () => {
  try {
    const response = await axios.get(`${apiUrl}/game/word`);
    return response.data; // { word: "APPLE", hint: "It's a fruit." }
  } catch (error) {
    throw new Error("Error fetching word data.");
  }
};

export default { getWord };
