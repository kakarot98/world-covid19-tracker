import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  //we can first fetch then create an object where we can store response.data.confirmed etc
  //but the shortcut is to destructure the api while fetching and return only the needed parts of the api
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url); //destructuring in the same line

    //const modifiedData = { confirmed, recovered, deaths, lasUpdate }
    //above line is not needed since we will anyway return modifiedData but we could just return the whole raw data itself

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log("error occured" + error);
  }
};

export const fetchDailyData = async () => {};
