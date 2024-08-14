import axios from "axios";

export const getItem = async (id: number) => {
  try {
    const res = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      {}
    );
    return res.data;
  } catch (error) {
    console.log("data fetch error: ", error);
  }
};

export const fetchIds = async () => {
  try {
    const res = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
