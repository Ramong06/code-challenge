import axios from "axios";
const URL = "/api/businesses";

export default {
    search: function () {
        return axios.get("/api/businesses")
    },
    update: function (id) {
        return axios.put(`${URL}/${id}`);
    }
}


