import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Map from "../components/Map";

const Home = () => {
  // Setting our component's initial state
    const [businesses, setBusinesses] = useState([]);
    const [formObject, setFormObject] = useState({});

  // Load all businesses and stores them with setBusinesses
  useEffect(() => {
    loadBusinesses()
  }, [])

  // Loads all businesses and sets them to businesses
  const loadBusinesses = () => {
    API.getBusinesses()
      .then(res => 
        setBusinesses(res.data)
      )
      .catch(err => console.log(err));
  };

    // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBusiness(id) {
    API.deleteBusiness(id)
      .then(res => loadBusinesses())
      .catch(err => console.log(err));
  }

  // Handles updating component state for the input FORM when the user types into the input field for every key stroke
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formObject.businessName) {
      API.saveBusiness({
        businessName: formObject.name,
        // address: formObject.address,
        // phoneNumber: formObject.phoneNumber,
        // website: formObject.website,
        // image: formObject.image
      })
        .then(res => loadBusinesses())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Look Up A Business</h1>
            </Jumbotron>
            <Map />
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Business List</h1>
            </Jumbotron>
            {businesses.length ? (
              <List>
                {businesses.map(business => (
                  <ListItem key={business._id}>
                    <Link to={"/businesses/" + business._id}>
                      <strong>
                        {business.name}
                      </strong>
                      <br/>
                      <strong>
                        {business.address}
                      </strong>
                      <br/>
                      <strong>
                        {business.phoneNumber}
                      </strong>
                      <br/>
                      <strong>
                        {business.website}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBusiness(business._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Home;