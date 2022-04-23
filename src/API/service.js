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

    getNews = (orderBy = "newest", pageSize = 5) => {
        return this.init().get(`/search?section=news&order-by=${orderBy}&page-size=${pageSize}&api-key=${this.api_key}`);
    };

    getSportsNews = (orderBy = "newest", pageSize = 5) => {
        return this.init().get(`/sport??order-by=${orderBy}&page-size=${pageSize}&api-key=${this.api_key}`);
    };

    getDetailNews = (detail) => {
        return this.init().get(`${this.api_url}/${detail}?api-key=${this.api_key}`)
    }

    getSearch = (query) => {
        return this.init().get(`/search?q=${encodeURIComponent(query)}&api-key=${this.api_key}`)
    }
}
