import * as axios from "axios";

export default class Api {
    constructor() {
        this.api_url = process.env.REACT_APP_BASE_URL;
        this.api_key = process.env.REACT_APP_API_KEY;
    }

    init = () => {
        let headers = {
            Accept: "application/json",
        };


        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });

        return this.client;
    };

    getNews = (orderBy = "newest") => {
        return this.init().get(`/search?order-by=${orderBy}&api-key=${this.api_key}`);
    };

    addNewUser = (data) => {
        return this.init().post("/users", data);
    };
}
