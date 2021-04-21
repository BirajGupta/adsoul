import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.npoint.io/adf6676a313fa01f787d"
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchAppData = async (data = 1) => {
  try {
    const response = await axios.get(
      `https://api.npoint.io/d734975d2aee62d197ef/${data}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
