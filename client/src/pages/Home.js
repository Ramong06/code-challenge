import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Map from "../components/Map";

const Home = () => {
    const [businesses, setBusinesses] = useState([]);

  // use useEffect here to Load businesses and store them with setBusinesses
  useEffect(() => {
    loadBusinesses()
  }, [])

  // not working.  not setting searched business
  const loadBusinesses = () => {
    API.getBusinesses()
      .then(res => 
        setBusinesses(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBusiness(id) {
    API.deleteBusiness(id)
      .then(res => loadBusinesses())
      .catch(err => console.log(err));
  }
    
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search For A Business Location</h1>
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