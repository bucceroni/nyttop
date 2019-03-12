import axios from "axios";

const URL = "https://api.nytimes.com/svc/topstories/v2";

export default class getNews {
  static async getNews(category) {
    return await axios
      .get(
        `${URL}${
          category === "/" ? `/home.json` : `${category}.json`
        }?api-key=${process.env.REACT_APP_TOKEN_NYTTOP}`
      )
      .then(res => res.data.results)
      .catch(() => []);
  }
}
