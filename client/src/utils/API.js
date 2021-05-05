import axios from "axios";

export default {
  // Gets all books
  getBusinesses: function() {
    return axios.get("/api/businesses");
  },
  // Gets the book by it's id
  getBusiness: function(id) {
    return axios.get("/api/businesses" + id);
  },
  // Deletes the book by it's id
  deleteBusiness: function(id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a book to the database
  saveBusiness: function(businessData) {
    return axios.post("/api/businesses", businessData);
  }
};


