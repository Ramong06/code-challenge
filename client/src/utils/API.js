import axios from "axios";

export default {
  // Gets all books
  getBusinesses: function() {
    return axios.get("/api/businesses");
  },
  // Gets the book with the given id
  getBusiness: function(id) {
    return axios.get("/api/businesses" + id);
  },
  // Deletes the book with the given id
  deleteBusiness: function(id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a book to the database
  saveBusiness: function(businessData) {
    return axios.post("/api/businesses", businessData);
  }
};


